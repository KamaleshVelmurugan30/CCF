// "use client";

// export default function HeroVideoBg() {
//   return (
//     <div className="absolute inset-0 overflow-hidden">
//       <video
//         className="w-full h-full object-cover scale-105"
//         src="/hero.mp4"
//         autoPlay
//         loop
//         muted
//         playsInline
//         preload="auto"
//       />
//       {/* dark overlay to make text readable */}
//       <div className="absolute inset-0 bg-black/60" />
//     </div>
//   );
// }
// "use client";

// export default function HeroVideoBg() {
//   return (
//     <div className="absolute inset-0 -z-0 overflow-hidden">
//       <video
//         className="w-full h-full object-cover scale-105"
//         src="/hero.mp4"
//         autoPlay
//         loop
//         muted
//         playsInline
//       />
//       <div className="absolute inset-0 bg-black/60" />
//     </div>
//   );
// }
// "use client";

// type Props = {
//   src?: string;
//   poster?: string;
//   /** move focus point so important part of video stays visible */
//   videoClassName?: string;
//   overlayClassName?: string;
// };

// export default function HeroVideoBg({
//   src = "/hero.mp4",
//   poster = "/hero.jpg",
//   videoClassName = "object-cover object-[center_20%]",
//   overlayClassName = "bg-black/60",
// }: Props) {
//   return (
//     <div className="absolute inset-0 -z-10 overflow-hidden">
//       <video
//         className={`h-full w-full ${videoClassName}`}
//         src={src}
//         autoPlay
//         loop
//         muted
//         playsInline
//         preload="metadata"
//         poster={poster}
//       />
//       {/* overlay */}
//       <div className={`absolute inset-0 ${overlayClassName}`} />
//       {/* premium vignette for readability */}
//       <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/70" />
//     </div>
//   );
// }
"use client";

import { useEffect, useRef } from "react";

type Props = {
  src?: string;
  poster?: string;
  /** move focus point so important part of video stays visible */
  videoClassName?: string;
  overlayClassName?: string;
};

export default function HeroVideoBg({
  src = "/hero.mp4",
  poster = "/hero.jpg",
  videoClassName = "object-cover object-[center_20%]",
  overlayClassName = "bg-black/60",
}: Props) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Force autoplay (helps on some mobile browsers)
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    v.muted = true;
    v.playsInline = true;

    const attemptPlay = async () => {
      try {
        await v.play();
      } catch {
        // Autoplay may still be blocked by browser policy; overlay will still show
      }
    };

    attemptPlay();
  }, []);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
      <video
        ref={videoRef}
        className={`h-full w-full ${videoClassName}`}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        controls={false}
        disablePictureInPicture
        poster={poster}
      >
        <source src={src} type="video/mp4" />
      </video>

      {/* overlay */}
      <div className={`absolute inset-0 ${overlayClassName}`} />
      {/* premium vignette for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/70" />
    </div>
  );
}