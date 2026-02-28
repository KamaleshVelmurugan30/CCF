// "use client";

// import { motion } from "framer-motion";
// import Link from "next/link";
// import { products } from "@/data/products";
// import FrameAnimation from "@/components/FrameAnimation";
// import HeroVideoBg from "@/components/HeroVideoBg";
// export default function Home() {
//     return (
//         <div className="flex flex-col w-full overflow-hidden">
//             {/* Hero Section */}
//             <section className="relative h-[90vh] flex items-center justify-center bg-primary">
//                 <div className="absolute inset-0 overflow-hidden">
//                     {/* <div className="absolute inset-0 bg-black/60 z-10"></div>
//                     {/* using a placeholder rich chocolate image */}
//                     <img
//                         src="https://images.unsplash.com/photo-1548842427-90979fa4d9d1?q=80&w=2000&auto=format&fit=crop"
//                         alt="Chocolate background"
//                         className="w-full h-full object-cover scale-105"
//                     />
//                 </div> */}
//                 <section className="relative h-[90vh] flex items-center justify-center bg-primary">
//   <HeroVideoBg />

//   <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
//     {/* your existing heading/buttons */}
//   </div>
// </section>

//                 <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
//                     <motion.h1
//                         initial={{ opacity: 0, y: 30 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.8 }}
//                         className="text-5xl md:text-7xl font-serif font-bold text-accent mb-6 tracking-tight drop-shadow-lg"
//                     >
//                         The Chocolate Cake Factory
//                     </motion.h1>
//                     <motion.p
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.8, delay: 0.2 }}
//                         className="text-xl md:text-3xl text-textLight font-light mb-10 drop-shadow-md"
//                     >
//                         The Best in the City
//                     </motion.p>
//                     <motion.div
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.8, delay: 0.4 }}
//                         className="flex flex-col sm:flex-row items-center justify-center gap-4"
//                     >
//                         <Link href="/cakes" className="bg-accent text-primary px-8 py-4 rounded-full font-semibold text-lg hover:bg-white transition duration-300 w-full sm:w-auto text-center">
//                             View Cakes
//                         </Link>
//                         <a href="https://wa.me/919941186416" target="_blank" rel="noreferrer" className="bg-transparent border-2 border-accent text-accent px-8 py-4 rounded-full font-semibold text-lg hover:bg-accent hover:text-primary transition duration-300 w-full sm:w-auto text-center">
//                             Order on WhatsApp
//                         </a>
//                     </motion.div>
//                 </div>
//             </section>

//             {/* Featured Cakes Section */}
//             <section className="py-20 bg-background px-4 sm:px-6 lg:px-8">
//                 <div className="max-w-7xl mx-auto">
//                     <div className="text-center mb-16">
//                         <h2 className="text-4xl font-serif text-primary mb-4">Our Signature Masterpieces</h2>
//                         <div className="w-24 h-1 bg-accent mx-auto"></div>
//                     </div>

//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
//                         {products.slice(0, 3).map((product, idx) => (
//                             <motion.div
//                                 key={product.id}
//                                 initial={{ opacity: 0, y: 30 }}
//                                 whileInView={{ opacity: 1, y: 0 }}
//                                 viewport={{ once: true }}
//                                 transition={{ duration: 0.5, delay: idx * 0.1 }}
//                                 whileHover={{ y: -10 }}
//                                 className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group"
//                             >
//                                 <div className="h-72 overflow-hidden relative">
//                                     <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
//                                     <div className="absolute top-4 right-4 bg-accent text-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
//                                         {product.tags[0]}
//                                     </div>
//                                 </div>
//                                 <div className="p-6">
//                                     <p className="text-sm text-primary/60 mb-2 uppercase tracking-wider font-semibold">{product.category}</p>
//                                     <h3 className="font-serif text-2xl text-primary mb-2 line-clamp-1">{product.name}</h3>
//                                     <div className="flex justify-between items-center mt-4">
//                                         <span className="text-xl font-bold text-primary">₹{product.price}</span>
//                                         <a href={`https://wa.me/919941186416?text=${encodeURIComponent('Hi, I want to order ' + product.name)}`} target="_blank" rel="noreferrer" className="text-accent underline font-semibold hover:text-primary transition-colors">Order Now</a>
//                                     </div>
//                                 </div>
//                             </motion.div>
//                         ))}
//                     </div>
//                     <div className="text-center mt-12">
//                         <Link href="/cakes" className="inline-block border-b-2 border-primary text-primary font-bold hover:text-accent hover:border-accent pb-1 transition-colors">
//                             Explore All Cakes &rarr;
//                         </Link>
//                     </div>
//                 </div>
//             </section>

//             {/* Why Choose Us */}
//             <section className="py-20 bg-primary text-textLight px-4 sm:px-6 lg:px-8">
//                 <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//                     <motion.div
//                         initial={{ opacity: 0, x: -50 }}
//                         whileInView={{ opacity: 1, x: 0 }}
//                         viewport={{ once: true }}
//                         transition={{ duration: 0.8 }}
//                     >
//                         <h2 className="text-4xl font-serif text-accent mb-6">The Art of Fine Baking</h2>
//                         <p className="text-lg text-secondary/80 leading-relaxed mb-6">
//                             At The Chocolate Cake Factory, every creation is a labor of love. We source only the finest cocoa and premium ingredients to craft desserts that look spectacular and taste divine.
//                         </p>
//                         <ul className="space-y-4">
//                             {["Premium Imported Chocolate", "100% Eggless Options Available", "Same Day Delivery in Chennai", "Custom Designer Cakes"].map((item, i) => (
//                                 <li key={i} className="flex items-center gap-3">
//                                     <div className="w-2 h-2 rounded-full bg-accent"></div>
//                                     <span className="text-lg">{item}</span>
//                                 </li>
//                             ))}
//                         </ul>
//                     </motion.div>
//                     <motion.div
//                         initial={{ opacity: 0, x: 50 }}
//                         whileInView={{ opacity: 1, x: 0 }}
//                         viewport={{ once: true }}
//                         transition={{ duration: 0.8 }}
//                         className="grid grid-cols-2 gap-4"
//                     >
//                         <img src="https://images.unsplash.com/photo-1542826438-bd32f43d626f?q=80&w=600&auto=format&fit=crop" className="rounded-xl shadow-lg mt-8" alt="Cake detail 1" />
//                         <img src="https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?q=80&w=600&auto=format&fit=crop" className="rounded-xl shadow-lg" alt="Cake detail 2" />
//                     </motion.div>
//                 </div>
//             </section>

//             {/* Branch Highlights */}
//             <section className="py-20 bg-background px-4">
//                 <div className="max-w-5xl mx-auto text-center">
//                     <h2 className="text-4xl font-serif text-primary mb-12">Visit Our Locations</h2>
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                         <div className="bg-white p-8 rounded-2xl shadow-lg border border-secondary/30 relative overflow-hidden group">
//                             <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-accent to-yellow-600"></div>
//                             <h3 className="text-2xl font-serif text-primary mb-2">Ambattur Branch</h3>
//                             <p className="text-gray-600 mb-6 font-medium">Banu Nagar, Chennai</p>
//                             <div className="space-y-3">
//                                 <a href="tel:09941186416" className="block w-full py-3 bg-primary/5 text-primary rounded-xl font-semibold hover:bg-primary hover:text-white transition">Call Us: 09941186416</a>
//                                 <Link href="/locations" className="block w-full py-3 bg-accent text-primary rounded-xl font-semibold hover:bg-yellow-500 transition">Get Directions</Link>
//                             </div>
//                         </div>
//                         <div className="bg-white p-8 rounded-2xl shadow-lg border border-secondary/30 relative overflow-hidden group">
//                             <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-accent to-yellow-600"></div>
//                             <h3 className="text-2xl font-serif text-primary mb-2">Kallikuppam Branch</h3>
//                             <p className="text-gray-600 mb-6 font-medium">Redhills Main Rd, Chennai</p>
//                             <div className="space-y-3">
//                                 <a href="tel:09941186416" className="block w-full py-3 bg-primary/5 text-primary rounded-xl font-semibold hover:bg-primary hover:text-white transition">Call Us: 09941186416</a>
//                                 <Link href="/locations" className="block w-full py-3 bg-accent text-primary rounded-xl font-semibold hover:bg-yellow-500 transition">Get Directions</Link>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </div>
//     );
// }
// // "use client";

// // import { motion } from "framer-motion";
// // import Link from "next/link";
// // import { products } from "@/data/products";
// // import ScrollFrameAnimation from "@/components/ScrollFrameAnimation";

// // export default function Home() {
// //   return (
// //     <div className="flex flex-col w-full overflow-hidden">
// //       {/* Hero Section */}
// //       <section className="relative h-[90vh] flex items-center justify-center bg-primary overflow-hidden">
// //         {/* IMPORTANT: scroll track wrapper */}
// //         <div className="absolute inset-0">
// //           <ScrollFrameAnimation
// //             totalFrames={23}
// //             folder="/frames"
// //             filePrefix="ezgif-frame-"
// //             extension="jpg"
// //             startIndex={1}
// //             scrollLengthVh={140} // increase if you want slower animation
// //             overlayClassName="bg-black/55"
// //           />
// //         </div>

// //         <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
// //           <motion.h1
// //             initial={{ opacity: 0, y: 30 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.8 }}
// //             className="text-5xl md:text-7xl font-serif font-bold text-accent mb-6 tracking-tight drop-shadow-lg"
// //           >
// //             The Chocolate Cake Factory
// //           </motion.h1>

// //           <motion.p
// //             initial={{ opacity: 0, y: 20 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.8, delay: 0.2 }}
// //             className="text-xl md:text-3xl text-textLight font-light mb-10 drop-shadow-md"
// //           >
// //             The Best in the City
// //           </motion.p>

// //           <motion.div
// //             initial={{ opacity: 0, y: 20 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.8, delay: 0.4 }}
// //             className="flex flex-col sm:flex-row items-center justify-center gap-4"
// //           >
// //             <Link
// //               href="/cakes"
// //               className="bg-accent text-primary px-8 py-4 rounded-full font-semibold text-lg hover:bg-white transition duration-300 w-full sm:w-auto text-center"
// //             >
// //               View Cakes
// //             </Link>

// //             <a
// //               href="https://wa.me/919941186416"
// //               target="_blank"
// //               rel="noreferrer"
// //               className="bg-transparent border-2 border-accent text-accent px-8 py-4 rounded-full font-semibold text-lg hover:bg-accent hover:text-primary transition duration-300 w-full sm:w-auto text-center"
// //             >
// //               Order on WhatsApp
// //             </a>
// //           </motion.div>
// //         </div>
// //       </section>

// //       {/* Featured Cakes Section */}
// //       <section className="py-20 bg-background px-4 sm:px-6 lg:px-8">
// //         <div className="max-w-7xl mx-auto">
// //           <div className="text-center mb-16">
// //             <h2 className="text-4xl font-serif text-primary mb-4">
// //               Our Signature Masterpieces
// //             </h2>
// //             <div className="w-24 h-1 bg-accent mx-auto"></div>
// //           </div>

// //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
// //             {products.slice(0, 3).map((product, idx) => (
// //               <motion.div
// //                 key={product.id}
// //                 initial={{ opacity: 0, y: 30 }}
// //                 whileInView={{ opacity: 1, y: 0 }}
// //                 viewport={{ once: true }}
// //                 transition={{ duration: 0.5, delay: idx * 0.1 }}
// //                 whileHover={{ y: -10 }}
// //                 className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group"
// //               >
// //                 <div className="h-72 overflow-hidden relative">
// //                   <img
// //                     src={product.image}
// //                     alt={product.name}
// //                     className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
// //                   />
// //                   <div className="absolute top-4 right-4 bg-accent text-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
// //                     {product.tags[0]}
// //                   </div>
// //                 </div>
// //                 <div className="p-6">
// //                   <p className="text-sm text-primary/60 mb-2 uppercase tracking-wider font-semibold">
// //                     {product.category}
// //                   </p>
// //                   <h3 className="font-serif text-2xl text-primary mb-2 line-clamp-1">
// //                     {product.name}
// //                   </h3>
// //                   <div className="flex justify-between items-center mt-4">
// //                     <span className="text-xl font-bold text-primary">
// //                       ₹{product.price}
// //                     </span>
// //                     <a
// //                       href={`https://wa.me/919941186416?text=${encodeURIComponent(
// //                         "Hi, I want to order " + product.name
// //                       )}`}
// //                       target="_blank"
// //                       rel="noreferrer"
// //                       className="text-accent underline font-semibold hover:text-primary transition-colors"
// //                     >
// //                       Order Now
// //                     </a>
// //                   </div>
// //                 </div>
// //               </motion.div>
// //             ))}
// //           </div>

// //           <div className="text-center mt-12">
// //             <Link
// //               href="/cakes"
// //               className="inline-block border-b-2 border-primary text-primary font-bold hover:text-accent hover:border-accent pb-1 transition-colors"
// //             >
// //               Explore All Cakes &rarr;
// //             </Link>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Why Choose Us */}
// //       <section className="py-20 bg-primary text-textLight px-4 sm:px-6 lg:px-8">
// //         <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
// //           <motion.div
// //             initial={{ opacity: 0, x: -50 }}
// //             whileInView={{ opacity: 1, x: 0 }}
// //             viewport={{ once: true }}
// //             transition={{ duration: 0.8 }}
// //           >
// //             <h2 className="text-4xl font-serif text-accent mb-6">
// //               The Art of Fine Baking
// //             </h2>
// //             <p className="text-lg text-secondary/80 leading-relaxed mb-6">
// //               At The Chocolate Cake Factory, every creation is a labor of love.
// //               We source only the finest cocoa and premium ingredients to craft
// //               desserts that look spectacular and taste divine.
// //             </p>
// //             <ul className="space-y-4">
// //               {[
// //                 "Premium Imported Chocolate",
// //                 "100% Eggless Options Available",
// //                 "Same Day Delivery in Chennai",
// //                 "Custom Designer Cakes",
// //               ].map((item, i) => (
// //                 <li key={i} className="flex items-center gap-3">
// //                   <div className="w-2 h-2 rounded-full bg-accent"></div>
// //                   <span className="text-lg">{item}</span>
// //                 </li>
// //               ))}
// //             </ul>
// //           </motion.div>

// //           <motion.div
// //             initial={{ opacity: 0, x: 50 }}
// //             whileInView={{ opacity: 1, x: 0 }}
// //             viewport={{ once: true }}
// //             transition={{ duration: 0.8 }}
// //             className="grid grid-cols-2 gap-4"
// //           >
// //             <img
// //               src="https://images.unsplash.com/photo-1542826438-bd32f43d626f?q=80&w=600&auto=format&fit=crop"
// //               className="rounded-xl shadow-lg mt-8"
// //               alt="Cake detail 1"
// //             />
// //             <img
// //               src="https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?q=80&w=600&auto=format&fit=crop"
// //               className="rounded-xl shadow-lg"
// //               alt="Cake detail 2"
// //             />
// //           </motion.div>
// //         </div>
// //       </section>

// //       {/* Branch Highlights */}
// //       <section className="py-20 bg-background px-4">
// //         <div className="max-w-5xl mx-auto text-center">
// //           <h2 className="text-4xl font-serif text-primary mb-12">
// //             Visit Our Locations
// //           </h2>
// //           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
// //             <div className="bg-white p-8 rounded-2xl shadow-lg border border-secondary/30 relative overflow-hidden group">
// //               <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-accent to-yellow-600"></div>
// //               <h3 className="text-2xl font-serif text-primary mb-2">
// //                 Ambattur Branch
// //               </h3>
// //               <p className="text-gray-600 mb-6 font-medium">
// //                 Banu Nagar, Chennai
// //               </p>
// //               <div className="space-y-3">
// //                 <a
// //                   href="tel:09941186416"
// //                   className="block w-full py-3 bg-primary/5 text-primary rounded-xl font-semibold hover:bg-primary hover:text-white transition"
// //                 >
// //                   Call Us: 09941186416
// //                 </a>
// //                 <Link
// //                   href="/locations"
// //                   className="block w-full py-3 bg-accent text-primary rounded-xl font-semibold hover:bg-yellow-500 transition"
// //                 >
// //                   Get Directions
// //                 </Link>
// //               </div>
// //             </div>

// //             <div className="bg-white p-8 rounded-2xl shadow-lg border border-secondary/30 relative overflow-hidden group">
// //               <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-accent to-yellow-600"></div>
// //               <h3 className="text-2xl font-serif text-primary mb-2">
// //                 Kallikuppam Branch
// //               </h3>
// //               <p className="text-gray-600 mb-6 font-medium">
// //                 Redhills Main Rd, Chennai
// //               </p>
// //               <div className="space-y-3">
// //                 <a
// //                   href="tel:09941186416"
// //                   className="block w-full py-3 bg-primary/5 text-primary rounded-xl font-semibold hover:bg-primary hover:text-white transition"
// //                 >
// //                   Call Us: 09941186416
// //                 </a>
// //                 <Link
// //                   href="/locations"
// //                   className="block w-full py-3 bg-accent text-primary rounded-xl font-semibold hover:bg-yellow-500 transition"
// //                 >
// //                   Get Directions
// //                 </Link>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>
// //     </div>
// //   );
// // }
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { products } from "@/data/products";
import HeroVideoBg from "@/components/HeroVideoBg";

export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center bg-primary overflow-hidden">
        {/* Video Background */}
        <HeroVideoBg />

        {/* Hero Content */}
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-serif font-bold text-accent mb-6 tracking-tight drop-shadow-lg"
          >
            The Chocolate Cake Factory
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-3xl text-textLight font-light mb-10 drop-shadow-md"
          >
            The Best in the City
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/cakes"
              className="bg-accent text-primary px-8 py-4 rounded-full font-semibold text-lg hover:bg-white transition duration-300 w-full sm:w-auto text-center"
            >
              View Cakes
            </Link>

            <a
              href="https://wa.me/919941186416"
              target="_blank"
              rel="noreferrer"
              className="bg-transparent border-2 border-accent text-accent px-8 py-4 rounded-full font-semibold text-lg hover:bg-accent hover:text-primary transition duration-300 w-full sm:w-auto text-center"
            >
              Order on WhatsApp
            </a>
          </motion.div>
        </div>
      </section>

      {/* Featured Cakes Section */}
      <section className="py-20 bg-background px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-primary mb-4">
              Our Signature Masterpieces
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {products.slice(0, 3).map((product, idx) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="h-72 overflow-hidden relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 bg-accent text-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {product.tags[0]}
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-sm text-primary/60 mb-2 uppercase tracking-wider font-semibold">
                    {product.category}
                  </p>
                  <h3 className="font-serif text-2xl text-primary mb-2 line-clamp-1">
                    {product.name}
                  </h3>

                  <div className="flex justify-between items-center mt-4">
                    <span className="text-xl font-bold text-primary">
                      ₹{product.price}
                    </span>
                    <a
                      href={`https://wa.me/919941186416?text=${encodeURIComponent(
                        "Hi, I want to order " + product.name
                      )}`}
                      target="_blank"
                      rel="noreferrer"
                      className="text-accent underline font-semibold hover:text-primary transition-colors"
                    >
                      Order Now
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/cakes"
              className="inline-block border-b-2 border-primary text-primary font-bold hover:text-accent hover:border-accent pb-1 transition-colors"
            >
              Explore All Cakes &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-primary text-textLight px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-serif text-accent mb-6">
              The Art of Fine Baking
            </h2>
            <p className="text-lg text-secondary/80 leading-relaxed mb-6">
              At The Chocolate Cake Factory, every creation is a labor of love.
              We source only the finest cocoa and premium ingredients to craft
              desserts that look spectacular and taste divine.
            </p>

            <ul className="space-y-4">
              {[
                "Premium Imported Chocolate",
                "100% Eggless Options Available",
                "Same Day Delivery in Chennai",
                "Custom Designer Cakes",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <span className="text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-4"
          >
            <img
              src="https://images.unsplash.com/photo-1542826438-bd32f43d626f?q=80&w=600&auto=format&fit=crop"
              className="rounded-xl shadow-lg mt-8"
              alt="Cake detail 1"
            />
            <img
              src="https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?q=80&w=600&auto=format&fit=crop"
              className="rounded-xl shadow-lg"
              alt="Cake detail 2"
            />
          </motion.div>
        </div>
      </section>

      {/* Branch Highlights */}
      <section className="py-20 bg-background px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-serif text-primary mb-12">
            Visit Our Locations
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-secondary/30 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-accent to-yellow-600" />
              <h3 className="text-2xl font-serif text-primary mb-2">
                Ambattur Branch
              </h3>
              <p className="text-gray-600 mb-6 font-medium">Banu Nagar, Chennai</p>
              <div className="space-y-3">
                <a
                  href="tel:09941186416"
                  className="block w-full py-3 bg-primary/5 text-primary rounded-xl font-semibold hover:bg-primary hover:text-white transition"
                >
                  Call Us: 09941186416
                </a>
                <Link
                  href="/locations"
                  className="block w-full py-3 bg-accent text-primary rounded-xl font-semibold hover:bg-yellow-500 transition"
                >
                  Get Directions
                </Link>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-secondary/30 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-accent to-yellow-600" />
              <h3 className="text-2xl font-serif text-primary mb-2">
                Kallikuppam Branch
              </h3>
              <p className="text-gray-600 mb-6 font-medium">
                Redhills Main Rd, Chennai
              </p>
              <div className="space-y-3">
                <a
                  href="tel:09941186416"
                  className="block w-full py-3 bg-primary/5 text-primary rounded-xl font-semibold hover:bg-primary hover:text-white transition"
                >
                  Call Us: 09941186416
                </a>
                <Link
                  href="/locations"
                  className="block w-full py-3 bg-accent text-primary rounded-xl font-semibold hover:bg-yellow-500 transition"
                >
                  Get Directions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}