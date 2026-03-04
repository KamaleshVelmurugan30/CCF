// import Link from "next/link";
// import { Facebook, Instagram, Twitter } from "lucide-react";

// export default function Footer() {
//     return (
//         <footer className="bg-primary text-textLight py-12 border-t border-accent/20">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                 <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//                     <div className="col-span-1 md:col-span-2">
//                         <h3 className="font-serif text-2xl text-accent mb-4">The Chocolate Cake Factory</h3>
//                         <p className="text-secondary/80 max-w-sm">
//                             Crafting premium chocolate experiences and the finest cakes in Chennai since 2010.
//                             The Best in the City.
//                         </p>
//                         <div className="flex space-x-4 mt-6">
//                             <a href="#" className="text-secondary hover:text-accent transition"><Instagram /></a>
//                             <a href="#" className="text-secondary hover:text-accent transition"><Facebook /></a>
//                             <a href="#" className="text-secondary hover:text-accent transition"><Twitter /></a>
//                         </div>
//                     </div>

//                     <div>
//                         <h4 className="font-serif text-xl mb-4 text-white">Quick Links</h4>
//                         <ul className="space-y-2">
//                             <li><Link href="/" className="hover:text-accent transition">Home</Link></li>
//                             <li><Link href="/cakes" className="hover:text-accent transition">Our Cakes</Link></li>
//                             <li><Link href="/about" className="hover:text-accent transition">Our Story</Link></li>
//                             <li><Link href="/locations" className="hover:text-accent transition">Find Us</Link></li>
//                         </ul>
//                     </div>

//                     <div>
//                         <h4 className="font-serif text-xl mb-4 text-white">Contact</h4>
//                         <ul className="space-y-2 text-secondary/80">
//                             <li>Call: +91 99411 86416</li>
//                             <li>Email: hello@chocolatecakefactory.com</li>
//                             <li>Ambattur & Kallikuppam</li>
//                         </ul>
//                     </div>
//                 </div>

//                 <div className="mt-12 pt-8 border-t border-secondary/10 text-center text-sm text-secondary/60">
//                     <p>&copy; {new Date().getFullYear()} The Chocolate Cake Factory. All rights reserved.</p>
//                 </div>
//             </div>
//         </footer>
//     );
// }
import Link from "next/link";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-textLight py-12 border-t border-accent/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-serif text-2xl text-accent mb-4">
              The Chocolate Cake Factory
            </h3>
            <p className="text-secondary/80 max-w-sm">
              Crafting premium chocolate experiences and the finest cakes in Chennai since 2010.
              The Best in the City.
            </p>

            <div className="flex space-x-4 mt-6">
              <a
                href="https://www.instagram.com/thechocolatecakefactory_?igsh=MW1sYTd5aHAwbjVvcw=="
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="text-secondary hover:text-accent transition"
              >
                <Instagram />
              </a>

              <a
                href="https://youtube.com/@thechocolatecakefactory?si=gE3F4Pbxmz8Zmhny"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="text-secondary hover:text-accent transition"
              >
                <Youtube />
              </a>

              {/* Keep these only if you actually have accounts */}
              <a
                href="#"
                aria-label="Facebook"
                className="text-secondary hover:text-accent transition"
              >
                <Facebook />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="text-secondary hover:text-accent transition"
              >
                <Twitter />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-xl mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-accent transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/cakes" className="hover:text-accent transition">
                  Our Cakes
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-accent transition">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/locations" className="hover:text-accent transition">
                  Find Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-xl mb-4 text-white">Contact</h4>
            <ul className="space-y-2 text-secondary/80">
              <li>Call: +91 98849 18114</li>
              <li>Email: hello@chocolatecakefactory.com</li>
              <li>Ambattur & Kallikuppam</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-secondary/10 text-center text-sm text-secondary/60">
          <p>
            &copy; {new Date().getFullYear()} The Chocolate Cake Factory. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}