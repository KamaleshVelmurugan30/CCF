"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type Props = {
  frameCount: number;          // e.g. 23
  framePath: (i: number) => string; // function that returns /frames/frame-001.jpg ...
  className?: string;
  scrub?: number;              // how smooth the scroll feels (bigger = smoother)
};

export default function ScrollFrameBg({
  frameCount,
  framePath,
  className,
  scrub = 10,
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const wrapRef = useRef<HTMLDivElement | null>(null);

  const images = useRef<HTMLImageElement[]>([]);
  const targetFrame = useRef(0);
  const currentFrame = useRef(0);
  const rafRef = useRef<number | null>(null);

  const [loaded, setLoaded] = useState(false);

  const dpr = useMemo(() => (typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1), []);

  // draw image to canvas (cover)
  const draw = (img: HTMLImageElement) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const cssW = canvas.clientWidth;
    const cssH = canvas.clientHeight;

    canvas.width = Math.floor(cssW * dpr);
    canvas.height = Math.floor(cssH * dpr);

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, cssW, cssH);

    const iw = img.naturalWidth;
    const ih = img.naturalHeight;
    if (!iw || !ih) return;

    // cover
    const scale = Math.max(cssW / iw, cssH / ih);
    const nw = iw * scale;
    const nh = ih * scale;
    const dx = (cssW - nw) / 2;
    const dy = (cssH - nh) / 2;

    ctx.drawImage(img, dx, dy, nw, nh);
  };

  // smooth animation loop
  const tick = () => {
    // ease currentFrame toward targetFrame
    currentFrame.current += (targetFrame.current - currentFrame.current) / scrub;

    const idx = Math.round(currentFrame.current);
    const img = images.current[idx];
    if (img) draw(img);

    rafRef.current = requestAnimationFrame(tick);
  };

  useEffect(() => {
    // preload frames
    let done = 0;
    const arr: HTMLImageElement[] = new Array(frameCount);

    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = framePath(i);
      img.onload = () => {
        done++;
        if (done === frameCount) {
          images.current = arr;
          setLoaded(true);
        }
      };
      arr[i] = img;
    }

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [frameCount]);

  useEffect(() => {
    if (!loaded) return;

    // draw first frame
    const first = images.current[0];
    if (first) draw(first);

    // start loop
    rafRef.current = requestAnimationFrame(tick);

    const onResize = () => {
      const idx = Math.round(currentFrame.current);
      const img = images.current[idx];
      if (img) draw(img);
    };

    const onScroll = () => {
      const wrap = wrapRef.current;
      if (!wrap) return;

      const rect = wrap.getBoundingClientRect();
      const vh = window.innerHeight;

      // progress while section is on screen
      const total = rect.height - vh;
      const scrolled = Math.min(Math.max(-rect.top, 0), total);
      const progress = total > 0 ? scrolled / total : 0;

      const frame = progress * (frameCount - 1);
      targetFrame.current = frame;
    };

    window.addEventListener("resize", onResize);
    window.addEventListener("scroll", onScroll, { passive: true });

    // initial scroll calc
    onScroll();

    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loaded, frameCount]);

  return (
    <div ref={wrapRef} className={className}>
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      <div className="absolute inset-0 bg-black/60" />
    </div>
  );
}