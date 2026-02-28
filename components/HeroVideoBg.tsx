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
"use client";

export default function HeroVideoBg() {
  return (
    <div className="absolute inset-0 -z-0 overflow-hidden">
      <video
        className="w-full h-full object-cover scale-105"
        src="/hero.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute inset-0 bg-black/60" />
    </div>
  );
}