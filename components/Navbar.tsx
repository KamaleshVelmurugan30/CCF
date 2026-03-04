// "use client";

// import Link from "next/link";
// import { useState } from "react";
// import { Menu, X } from "lucide-react";

// export default function Navbar() {
//     const [isOpen, setIsOpen] = useState(false);

//     return (
//         <nav className="sticky top-0 z-50 bg-primary text-textLight shadow-lg">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                 <div className="flex items-center justify-between h-20">
//                     <Link href="/" className="font-serif text-2xl tracking-wider text-accent font-bold">
//                         The Chocolate Cake Factory
//                     </Link>

//                     {/* Desktop Menu */}
//                     <div className="hidden md:flex space-x-8">
//                         <Link href="/" className="hover:text-accent transition duration-300">Home</Link>
//                         <Link href="/cakes" className="hover:text-accent transition duration-300">Cakes</Link>
//                         <Link href="/about" className="hover:text-accent transition duration-300">About</Link>
//                         <Link href="/locations" className="hover:text-accent transition duration-300">Locations</Link>
//                         <Link href="/contact" className="hover:text-accent transition duration-300">Contact</Link>
//                     </div>

//                     {/* Mobile menu button */}
//                     <div className="md:hidden flex items-center">
//                         <button
//                             onClick={() => setIsOpen(!isOpen)}
//                             className="text-textLight hover:text-accent focus:outline-none"
//                         >
//                             {isOpen ? <X size={28} /> : <Menu size={28} />}
//                         </button>
//                     </div>
//                 </div>
//             </div>

//             {/* Mobile Menu */}
//             {isOpen && (
//                 <div className="md:hidden bg-primary/95 backdrop-blur-md absolute w-full">
//                     <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center">
//                         <Link href="/" onClick={() => setIsOpen(false)} className="block px-3 py-2 hover:text-accent text-lg">Home</Link>
//                         <Link href="/cakes" onClick={() => setIsOpen(false)} className="block px-3 py-2 hover:text-accent text-lg">Cakes</Link>
//                         <Link href="/about" onClick={() => setIsOpen(false)} className="block px-3 py-2 hover:text-accent text-lg">About</Link>
//                         <Link href="/locations" onClick={() => setIsOpen(false)} className="block px-3 py-2 hover:text-accent text-lg">Locations</Link>
//                         <Link href="/contact" onClick={() => setIsOpen(false)} className="block px-3 py-2 hover:text-accent text-lg">Contact</Link>
//                     </div>
//                 </div>
//             )}
//         </nav>
//     );
// }



// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import { usePathname } from "next/navigation";
// import { useEffect, useState } from "react";
// import { Menu, X } from "lucide-react";

// const navLinks = [
//   { href: "/", label: "Home" },
//   { href: "/cakes", label: "Cakes" },
//   { href: "/about", label: "About" },
//   { href: "/locations", label: "Locations" },
//   { href: "/contact", label: "Contact" },
// ];

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const pathname = usePathname();

//   // Close mobile menu when route changes
//   useEffect(() => {
//     setIsOpen(false);
//   }, [pathname]);

//   // Prevent background scroll when mobile menu is open
//   useEffect(() => {
//     if (!isOpen) return;
//     document.body.style.overflow = "hidden";
//     return () => {
//       document.body.style.overflow = "";
//     };
//   }, [isOpen]);

//   const isActive = (href: string) => {
//     if (href === "/") return pathname === "/";
//     return pathname?.startsWith(href);
//   };

//   return (
//     <header className="sticky top-0 z-50 bg-primary text-textLight shadow-lg">
//       <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-20">
//           {/* Brand */}
//           <Link href="/" className="flex items-center gap-3">
//             <Image
//               src="/logo.png"
//               alt="The Chocolate Cake Factory"
//               width={44}
//               height={44}
//               className="rounded-full object-cover"
//               priority
//             />
//             <span className="font-serif text-xl sm:text-2xl tracking-wider text-accent font-bold">
//               The Chocolate Cake Factory
//             </span>
//           </Link>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex items-center space-x-8">
//             {navLinks.map((item) => (
//               <Link
//                 key={item.href}
//                 href={item.href}
//                 className={[
//                   "transition duration-300",
//                   isActive(item.href) ? "text-accent" : "hover:text-accent",
//                 ].join(" ")}
//               >
//                 {item.label}
//               </Link>
//             ))}
//           </div>

//           {/* Mobile menu button */}
//           <div className="md:hidden flex items-center">
//             <button
//               type="button"
//               onClick={() => setIsOpen((v) => !v)}
//               aria-label={isOpen ? "Close menu" : "Open menu"}
//               aria-expanded={isOpen}
//               className="text-textLight hover:text-accent focus:outline-none"
//             >
//               {isOpen ? <X size={28} /> : <Menu size={28} />}
//             </button>
//           </div>
//         </div>
//       </nav>

//       {/* Mobile Menu Overlay */}
//       {isOpen && (
//         <div className="md:hidden fixed inset-0 z-50">
//           {/* Backdrop */}
//           <button
//             aria-label="Close menu backdrop"
//             className="absolute inset-0 bg-black/50"
//             onClick={() => setIsOpen(false)}
//           />

//           {/* Panel */}
//           <div className="absolute top-0 left-0 right-0 bg-primary/95 backdrop-blur-md border-b border-white/10 shadow-xl">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
//               <div className="flex items-center justify-between">
//                 <Link href="/" className="flex items-center gap-3">
//                   <Image
//                     src="/logo.png"
//                     alt="The Chocolate Cake Factory"
//                     width={40}
//                     height={40}
//                     className="rounded-full object-cover"
//                     priority
//                   />
//                   <span className="font-serif text-lg tracking-wider text-accent font-bold">
//                     The Chocolate Cake Factory
//                   </span>
//                 </Link>

//                 <button
//                   type="button"
//                   onClick={() => setIsOpen(false)}
//                   aria-label="Close menu"
//                   className="text-textLight hover:text-accent focus:outline-none"
//                 >
//                   <X size={28} />
//                 </button>
//               </div>

//               <div className="mt-4 space-y-2 text-center">
//                 {navLinks.map((item) => (
//                   <Link
//                     key={item.href}
//                     href={item.href}
//                     className={[
//                       "block px-3 py-2 text-lg rounded-lg transition",
//                       isActive(item.href)
//                         ? "text-accent bg-white/5"
//                         : "hover:text-accent hover:bg-white/5",
//                     ].join(" ")}
//                   >
//                     {item.label}
//                   </Link>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// }

"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/cakes", label: "Cakes" },
  { href: "/themes", label: "Themes" }, // ✅ added
  { href: "/about", label: "About" },
  { href: "/locations", label: "Locations" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname?.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 bg-primary text-textLight shadow-lg">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="The Chocolate Cake Factory"
              width={44}
              height={44}
              className="rounded-full object-cover"
              priority
            />
            <span className="font-serif text-xl sm:text-2xl tracking-wider text-accent font-bold">
              The Chocolate Cake Factory
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={[
                  "transition duration-300",
                  isActive(item.href) ? "text-accent" : "hover:text-accent",
                ].join(" ")}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              onClick={() => setIsOpen((v) => !v)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              className="text-textLight hover:text-accent focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-50">
          {/* Backdrop */}
          <button
            aria-label="Close menu backdrop"
            className="absolute inset-0 bg-black/50"
            onClick={() => setIsOpen(false)}
          />

          {/* Panel */}
          <div className="absolute top-0 left-0 right-0 bg-primary/95 backdrop-blur-md border-b border-white/10 shadow-xl">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
              <div className="flex items-center justify-between">
                <Link href="/" className="flex items-center gap-3">
                  <Image
                    src="/logo.png"
                    alt="The Chocolate Cake Factory"
                    width={40}
                    height={40}
                    className="rounded-full object-cover"
                    priority
                  />
                  <span className="font-serif text-lg tracking-wider text-accent font-bold">
                    The Chocolate Cake Factory
                  </span>
                </Link>

                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close menu"
                  className="text-textLight hover:text-accent focus:outline-none"
                >
                  <X size={28} />
                </button>
              </div>

              <div className="mt-4 space-y-2 text-center">
                {navLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={[
                      "block px-3 py-2 text-lg rounded-lg transition",
                      isActive(item.href)
                        ? "text-accent bg-white/5"
                        : "hover:text-accent hover:bg-white/5",
                    ].join(" ")}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}