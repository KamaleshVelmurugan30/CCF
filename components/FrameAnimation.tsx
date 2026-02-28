"use client";

import { useEffect, useState } from "react";

type Props = {
  totalFrames?: number;   // how many jpgs you have
  fps?: number;           // speed
  folder?: string;        // folder inside /public
  filePrefix?: string;    // ezgif-frame-
};

export default function FrameAnimation({
  totalFrames = 23,
  fps = 24,
  folder = "/frames",
  filePrefix = "ezgif-frame-",
}: Props) {
  const [frame, setFrame] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setFrame((prev) => (prev % totalFrames) + 1);
    }, 1000 / fps);

    return () => clearInterval(interval);
  }, [fps, totalFrames]);

  const frameName = String(frame).padStart(3, "0"); // 001, 002...
  const src = `${folder}/${filePrefix}${frameName}.jpg`;

  return (
    <div className="w-full flex justify-center items-center">
      <img
        src={src}
        alt={`Frame ${frame}`}
        className="w-full max-w-3xl rounded-2xl shadow-2xl"
        draggable={false}
      />
    </div>
  );
}