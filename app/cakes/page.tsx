// "use client";

// import { useState } from "react";
// import { motion } from "framer-motion";
// import { products, generateWhatsAppLink } from "@/data/products";
// import { Search } from "lucide-react";

// export default function Cakes() {
//     const [searchTerm, setSearchTerm] = useState("");
//     const [activeCategory, setActiveCategory] = useState("All");

//     const categories = ["All", ...Array.from(new Set(products.map(p => p.category)))];

//     const filteredProducts = products.filter(product => {
//         const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
//         const matchesCategory = activeCategory === "All" || product.category === activeCategory;
//         return matchesSearch && matchesCategory;
//     });

//     return (
//         <div className="min-h-screen bg-background py-16 px-4 sm:px-6 lg:px-8">
//             <div className="max-w-7xl mx-auto">
//                 <div className="text-center mb-16">
//                     <motion.h1
//                         initial={{ opacity: 0, y: -20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         className="text-5xl font-serif text-primary mb-6"
//                     >
//                         Our Masterpieces
//                     </motion.h1>
//                     <div className="w-24 h-1 bg-accent mx-auto mb-10"></div>

//                     {/* Search and Filter */}
//                     <div className="flex flex-col md:flex-row justify-between items-center gap-6 max-w-4xl mx-auto">
//                         <div className="relative w-full md:w-96">
//                             <input
//                                 type="text"
//                                 placeholder="Search cakes..."
//                                 value={searchTerm}
//                                 onChange={(e) => setSearchTerm(e.target.value)}
//                                 className="w-full pl-12 pr-4 py-3 rounded-full border border-secondary/40 focus:outline-none focus:ring-2 focus:ring-accent bg-white shadow-sm"
//                             />
//                             <Search className="absolute left-4 top-3.5 text-gray-400" size={20} />
//                         </div>

//                         <div className="flex flex-wrap gap-2 justify-center">
//                             {categories.map(category => (
//                                 <button
//                                     key={category}
//                                     onClick={() => setActiveCategory(category)}
//                                     className={`px-5 py-2 rounded-full font-medium transition-colors ${activeCategory === category ? 'bg-primary text-accent' : 'bg-white text-primary hover:bg-secondary/50 border border-secondary/30'}`}
//                                 >
//                                     {category}
//                                 </button>
//                             ))}
//                         </div>
//                     </div>
//                 </div>

//                 {/* Product Grid */}
//                 {filteredProducts.length === 0 ? (
//                     <div className="text-center py-20 text-gray-500 text-xl font-serif">
//                         No cakes found matching your search.
//                     </div>
//                 ) : (
//                     <motion.div
//                         layout
//                         className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
//                     >
//                         {filteredProducts.map((product, idx) => (
//                             <motion.div
//                                 layout
//                                 initial={{ opacity: 0, scale: 0.9 }}
//                                 animate={{ opacity: 1, scale: 1 }}
//                                 transition={{ duration: 0.3 }}
//                                 key={product.id}
//                                 className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group"
//                             >
//                                 <div className="h-72 overflow-hidden relative">
//                                     <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
//                                     <div className="absolute top-4 right-4 bg-accent text-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
//                                         {product.category}
//                                     </div>
//                                 </div>
//                                 <div className="p-6">
//                                     <div className="flex justify-between items-start mb-2">
//                                         <h3 className="font-serif text-2xl text-primary font-bold pr-2 leading-tight">{product.name}</h3>
//                                     </div>
//                                     <div className="flex flex-wrap gap-1 mb-4">
//                                         {product.tags.map(tag => (
//                                             <span key={tag} className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded border border-gray-200">
//                                                 {tag}
//                                             </span>
//                                         ))}
//                                     </div>
//                                     <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-100">
//                                         <span className="text-2xl font-bold text-primary">₹{product.price}</span>
//                                         <a
//                                             href={generateWhatsAppLink(product.name)}
//                                             target="_blank"
//                                             rel="noreferrer"
//                                             className="bg-primary hover:bg-primary/90 text-accent px-5 py-2 rounded-lg font-semibold transition shadow-md"
//                                         >
//                                             Order
//                                         </a>
//                                     </div>
//                                 </div>
//                             </motion.div>
//                         ))}
//                     </motion.div>
//                 )}
//             </div>
//         </div>
//     );
// }

// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import { useMemo, useState } from "react";
// import { motion } from "framer-motion";
// import { products, generateWhatsAppLink } from "@/data/products";
// import { Search } from "lucide-react";

// export default function Cakes() {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [activeCategory, setActiveCategory] = useState("All");

//   const categories = useMemo(() => {
//     const all = Array.from(new Set(products.map((p) => p.category)));
//     return ["All", ...all];
//   }, []);

//   const filteredProducts = useMemo(() => {
//     const q = searchTerm.trim().toLowerCase();

//     return products.filter((product) => {
//       const matchesCategory =
//         activeCategory === "All" || product.category === activeCategory;

//       if (!q) return matchesCategory;

//       const matchesName = product.name.toLowerCase().includes(q);
//       const matchesTags = product.tags?.some((tag) =>
//         tag.toLowerCase().includes(q)
//       );
//       const matchesCategoryText = product.category.toLowerCase().includes(q);

//       return matchesCategory && (matchesName || !!matchesTags || matchesCategoryText);
//     });
//   }, [searchTerm, activeCategory]);

//   return (
//     <div className="min-h-screen bg-background py-16 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-16">
//           <motion.h1
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="text-5xl font-serif text-primary mb-6"
//           >
//             Our Masterpieces
//           </motion.h1>

//           <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>

//           {/* ✅ Themes CTA */}
//           <div className="flex justify-center mb-10">
//             <Link
//               href="/themes"
//               className="inline-flex items-center justify-center px-5 py-2 rounded-full bg-primary text-accent font-medium shadow-sm hover:bg-primary/90 transition"
//             >
//               Browse Theme Cakes
//             </Link>
//           </div>

//           {/* Search and Filter */}
//           <div className="flex flex-col md:flex-row justify-between items-center gap-6 max-w-4xl mx-auto">
//             <div className="relative w-full md:w-96">
//               <input
//                 type="text"
//                 placeholder="Search cakes..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="w-full pl-12 pr-4 py-3 rounded-full border border-secondary/40 focus:outline-none focus:ring-2 focus:ring-accent bg-white shadow-sm"
//               />
//               <Search className="absolute left-4 top-3.5 text-gray-400" size={20} />
//             </div>

//             <div className="flex flex-wrap gap-2 justify-center">
//               {categories.map((category) => (
//                 <button
//                   key={category}
//                   onClick={() => setActiveCategory(category)}
//                   className={`px-5 py-2 rounded-full font-medium transition-colors ${
//                     activeCategory === category
//                       ? "bg-primary text-accent"
//                       : "bg-white text-primary hover:bg-secondary/50 border border-secondary/30"
//                   }`}
//                 >
//                   {category}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Product Grid */}
//         {filteredProducts.length === 0 ? (
//           <div className="text-center py-20 text-gray-500 text-xl font-serif">
//             No cakes found matching your search.
//           </div>
//         ) : (
//           <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
//             {filteredProducts.map((product) => (
//               <motion.div
//                 layout
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.3 }}
//                 key={product.id}
//                 className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group"
//               >
//                 <div className="h-72 overflow-hidden relative">
//                   <Image
//                     src={product.image}
//                     alt={product.name}
//                     fill
//                     sizes="(max-width: 1024px) 100vw, 33vw"
//                     className="object-cover group-hover:scale-110 transition-transform duration-700"
//                   />
//                   <div className="absolute top-4 right-4 bg-accent text-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
//                     {product.category}
//                   </div>
//                 </div>

//                 <div className="p-6">
//                   <h3 className="font-serif text-2xl text-primary font-bold pr-2 leading-tight">
//                     {product.name}
//                   </h3>

//                   <div className="flex flex-wrap gap-1 mt-3">
//                     {product.tags.map((tag) => (
//                       <span
//                         key={tag}
//                         className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded border border-gray-200"
//                       >
//                         {tag}
//                       </span>
//                     ))}
//                   </div>

//                   <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-100">
//                     <span className="text-2xl font-bold text-primary">
//                       ₹{product.price}
//                     </span>

//                     <a
//                       href={generateWhatsAppLink(product.name)}
//                       target="_blank"
//                       rel="noreferrer"
//                       className="bg-primary hover:bg-primary/90 text-accent px-5 py-2 rounded-lg font-semibold transition shadow-md"
//                     >
//                       Order
//                     </a>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         )}
//       </div>
//     </div>
//   );
// }

// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import { useEffect, useMemo, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// // import { products, generateWhatsAppLink } from "@/data/products";
// import { cakeGallery, generateCakeWhatsAppLink } from "@/data/cakeGallery";
// import { Search, X } from "lucide-react";

// type SelectedCake = {
//   name: string;
//   image: string;
//   category: string;
//   price: number;
// };

// export default function Cakes() {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [activeCategory, setActiveCategory] = useState("All");

//   // ✅ modal state
//   const [selected, setSelected] = useState<SelectedCake | null>(null);

//   const categories = useMemo(() => {
//     const all = Array.from(new Set(products.map((p) => p.category))).filter(Boolean);
//     return ["All", ...all];
//   }, []);

//   const filteredProducts = useMemo(() => {
//     const q = searchTerm.trim().toLowerCase();

//     return products.filter((product) => {
//       const matchesCategory =
//         activeCategory === "All" || product.category === activeCategory;

//       if (!q) return matchesCategory;

//       const name = product.name.toLowerCase();
//       const categoryText = product.category.toLowerCase();
//       const matchesName = name.includes(q);
//       const matchesTags = product.tags?.some((tag) => tag.toLowerCase().includes(q));
//       const matchesCategoryText = categoryText.includes(q);

//       return matchesCategory && (matchesName || !!matchesTags || matchesCategoryText);
//     });
//   }, [searchTerm, activeCategory]);

//   // ✅ close modal on ESC
//   useEffect(() => {
//     const onKeyDown = (e: KeyboardEvent) => {
//       if (e.key === "Escape") setSelected(null);
//     };
//     window.addEventListener("keydown", onKeyDown);
//     return () => window.removeEventListener("keydown", onKeyDown);
//   }, []);

//   return (
//     <div className="min-h-screen bg-background py-16 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-16">
//           <motion.h1
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="text-5xl font-serif text-primary mb-6"
//           >
//             Our Masterpieces
//           </motion.h1>

//           <div className="w-24 h-1 bg-accent mx-auto mb-6" />

//           {/* ✅ Themes CTA */}
//           <div className="flex justify-center mb-10">
//             <Link
//               href="/themes"
//               className="inline-flex items-center justify-center px-5 py-2 rounded-full bg-primary text-accent font-medium shadow-sm hover:bg-primary/90 transition"
//             >
//               Browse Theme Cakes
//             </Link>
//           </div>

//           {/* Search and Filter */}
//           <div className="flex flex-col md:flex-row justify-between items-center gap-6 max-w-4xl mx-auto">
//             <div className="relative w-full md:w-96">
//               <input
//                 type="text"
//                 placeholder="Search cakes..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="w-full pl-12 pr-4 py-3 rounded-full border border-secondary/40 focus:outline-none focus:ring-2 focus:ring-accent bg-white shadow-sm"
//               />
//               <Search className="absolute left-4 top-3.5 text-gray-400" size={20} />
//             </div>

//             <div className="flex flex-wrap gap-2 justify-center">
//               {categories.map((category) => (
//                 <button
//                   key={category}
//                   onClick={() => setActiveCategory(category)}
//                   className={`px-5 py-2 rounded-full font-medium transition-colors ${
//                     activeCategory === category
//                       ? "bg-primary text-accent"
//                       : "bg-white text-primary hover:bg-secondary/50 border border-secondary/30"
//                   }`}
//                 >
//                   {category}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Product Grid */}
//         {filteredProducts.length === 0 ? (
//           <div className="text-center py-20 text-gray-500 text-xl font-serif">
//             No cakes found matching your search.
//           </div>
//         ) : (
//           <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
//             {filteredProducts.map((product) => (
//               <motion.button
//                 type="button"
//                 layout
//                 initial={{ opacity: 0, scale: 0.95 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.25 }}
//                 key={product.id}
//                 onClick={() =>
//                   setSelected({
//                     name: product.name,
//                     image: product.image,
//                     category: product.category,
//                     price: product.price,
//                   })
//                 }
//                 className="text-left bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group w-full"
//               >
//                 <div className="h-72 overflow-hidden relative">
//                   <Image
//                     src={product.image}
//                     alt={product.name}
//                     fill
//                     sizes="(max-width: 1024px) 100vw, 33vw"
//                     className="object-cover group-hover:scale-110 transition-transform duration-700"
//                   />
//                   <div className="absolute top-4 right-4 bg-accent text-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
//                     {product.category}
//                   </div>
//                 </div>

//                 <div className="p-6">
//                   <h3 className="font-serif text-2xl text-primary font-bold pr-2 leading-tight">
//                     {product.name}
//                   </h3>

//                   <div className="flex flex-wrap gap-1 mt-3">
//                     {product.tags?.map((tag) => (
//                       <span
//                         key={tag}
//                         className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded border border-gray-200"
//                       >
//                         {tag}
//                       </span>
//                     ))}
//                   </div>

//                   <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-100">
//                     <span className="text-2xl font-bold text-primary">₹{product.price}</span>

//                     <a
//                       href={generateWhatsAppLink(product.name)}
//                       target="_blank"
//                       rel="noreferrer"
//                       onClick={(e) => e.stopPropagation()} // ✅ don't open modal
//                       className="bg-primary hover:bg-primary/90 text-accent px-5 py-2 rounded-lg font-semibold transition shadow-md"
//                     >
//                       Order
//                     </a>
//                   </div>
//                 </div>
//               </motion.button>
//             ))}
//           </motion.div>
//         )}
//       </div>

//       {/* ✅ Full Image Modal */}
//       <AnimatePresence>
//         {selected && (
//           <motion.div
//             className="fixed inset-0 z-[60] flex items-center justify-center p-4"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//           >
//             {/* Backdrop */}
//             <button
//               className="absolute inset-0 bg-black/60"
//               aria-label="Close preview"
//               onClick={() => setSelected(null)}
//             />

//             {/* Modal box */}
//             <motion.div
//               initial={{ scale: 0.96, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.98, opacity: 0 }}
//               transition={{ duration: 0.15 }}
//               className="relative z-[61] w-full max-w-4xl bg-white rounded-2xl overflow-hidden shadow-2xl"
//             >
//               <div className="flex items-center justify-between px-5 py-4 border-b">
//                 <div>
//                   <p className="text-xs uppercase tracking-wider text-gray-500">
//                     {selected.category}
//                   </p>
//                   <h3 className="font-serif text-xl text-primary font-bold">
//                     {selected.name}
//                   </h3>
//                   <p className="text-sm text-gray-500 mt-1">₹{selected.price}</p>
//                 </div>

//                 <button
//                   onClick={() => setSelected(null)}
//                   className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border hover:bg-gray-50"
//                 >
//                   <X size={18} />
//                   Close
//                 </button>
//               </div>

//               <div className="relative w-full aspect-[4/3] bg-gray-50">
//                 <Image
//                   src={selected.image}
//                   alt={selected.name}
//                   fill
//                   sizes="(max-width: 768px) 100vw, 80vw"
//                   className="object-contain"
//                 />
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }




// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import { useEffect, useMemo, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { cakeGallery, generateCakeWhatsAppLink } from "@/data/cakeGallery";
// import { Search, X } from "lucide-react";

// type SelectedCake = {
//   name: string;
//   image: string;
//   category: string;
// };

// export default function Cakes() {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [activeCategory, setActiveCategory] = useState("All");
//   const [selected, setSelected] = useState<SelectedCake | null>(null);

//   const categories = useMemo(() => {
//     const all = Array.from(new Set(cakeGallery.map((p) => p.category))).filter(Boolean);
//     return ["All", ...all];
//   }, []);

//   const filteredCakes = useMemo(() => {
//     const q = searchTerm.trim().toLowerCase();

//     return cakeGallery.filter((cake) => {
//       const matchesCategory = activeCategory === "All" || cake.category === activeCategory;

//       if (!q) return matchesCategory;

//       const name = (cake.name ?? "").toLowerCase();
//       const categoryText = (cake.category ?? "").toLowerCase();
//       const matchesName = name.includes(q);
//       const matchesTags = cake.tags?.some((tag) => tag.toLowerCase().includes(q));
//       const matchesCategoryText = categoryText.includes(q);

//       return matchesCategory && (matchesName || !!matchesTags || matchesCategoryText);
//     });
//   }, [searchTerm, activeCategory]);

//   // close modal on ESC
//   useEffect(() => {
//     const onKeyDown = (e: KeyboardEvent) => {
//       if (e.key === "Escape") setSelected(null);
//     };
//     window.addEventListener("keydown", onKeyDown);
//     return () => window.removeEventListener("keydown", onKeyDown);
//   }, []);

//   return (
//     <div className="min-h-screen bg-background py-16 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-16">
//           <motion.h1
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="text-5xl font-serif text-primary mb-6"
//           >
//             Our Masterpieces
//           </motion.h1>

//           <div className="w-24 h-1 bg-accent mx-auto mb-6" />

//           {/* Themes CTA */}
//           <div className="flex justify-center mb-10">
//             <Link
//               href="/themes"
//               className="inline-flex items-center justify-center px-5 py-2 rounded-full bg-primary text-accent font-medium shadow-sm hover:bg-primary/90 transition"
//             >
//               Browse Theme Cakes
//             </Link>
//           </div>

//           {/* Search and Filter */}
//           <div className="flex flex-col md:flex-row justify-between items-center gap-6 max-w-4xl mx-auto">
//             <div className="relative w-full md:w-96">
//               <input
//                 type="text"
//                 placeholder="Search cakes..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="w-full pl-12 pr-4 py-3 rounded-full border border-secondary/40 focus:outline-none focus:ring-2 focus:ring-accent bg-white shadow-sm"
//               />
//               <Search className="absolute left-4 top-3.5 text-gray-400" size={20} />
//             </div>

//             <div className="flex flex-wrap gap-2 justify-center">
//               {categories.map((category) => (
//                 <button
//                   key={category}
//                   onClick={() => setActiveCategory(category)}
//                   className={`px-5 py-2 rounded-full font-medium transition-colors ${
//                     activeCategory === category
//                       ? "bg-primary text-accent"
//                       : "bg-white text-primary hover:bg-secondary/50 border border-secondary/30"
//                   }`}
//                 >
//                   {category}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Grid */}
//         {filteredCakes.length === 0 ? (
//           <div className="text-center py-20 text-gray-500 text-xl font-serif">
//             No cakes found matching your search.
//           </div>
//         ) : (
//           <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
//             {filteredCakes.map((cake) => (
//               <motion.button
//                 key={cake.id}
//                 type="button"
//                 layout
//                 initial={{ opacity: 0, scale: 0.95 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.25 }}
//                 onClick={() =>
//                   setSelected({
//                     name: cake.name,
//                     image: cake.image,
//                     category: cake.category,
//                   })
//                 }
//                 className="text-left bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group w-full"
//               >
//                 <div className="h-72 overflow-hidden relative">
//                   <Image
//                     src={cake.image}
//                     alt={cake.name}
//                     fill
//                     sizes="(max-width: 1024px) 100vw, 33vw"
//                     className="object-cover group-hover:scale-110 transition-transform duration-700"
//                   />
//                   <div className="absolute top-4 right-4 bg-accent text-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
//                     {cake.category}
//                   </div>
//                 </div>

//                 <div className="p-6">
//                   <h3 className="font-serif text-2xl text-primary font-bold pr-2 leading-tight">
//                     {cake.name}
//                   </h3>

//                   {!!cake.tags?.length && (
//                     <div className="flex flex-wrap gap-1 mt-3">
//                       {cake.tags.slice(0, 4).map((tag) => (
//                         <span
//                           key={tag}
//                           className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded border border-gray-200"
//                         >
//                           {tag}
//                         </span>
//                       ))}
//                     </div>
//                   )}

//                   <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-100">
//                     <span className="text-sm text-gray-500">Want this cake?</span>

//                     <a
//                       href={generateCakeWhatsAppLink(cake.name)}
//                       target="_blank"
//                       rel="noreferrer"
//                       onClick={(e) => e.stopPropagation()}
//                       className="bg-primary hover:bg-primary/90 text-accent px-5 py-2 rounded-lg font-semibold transition shadow-md"
//                     >
//                       Enquire
//                     </a>
//                   </div>
//                 </div>
//               </motion.button>
//             ))}
//           </motion.div>
//         )}
//       </div>

//       {/* Full Image Modal */}
//       <AnimatePresence>
//         {selected && (
//           <motion.div
//             className="fixed inset-0 z-[60] flex items-center justify-center p-4"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//           >
//             <button
//               className="absolute inset-0 bg-black/60"
//               aria-label="Close preview"
//               onClick={() => setSelected(null)}
//             />

//             <motion.div
//               initial={{ scale: 0.96, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.98, opacity: 0 }}
//               transition={{ duration: 0.15 }}
//               className="relative z-[61] w-full max-w-4xl bg-white rounded-2xl overflow-hidden shadow-2xl"
//             >
//               <div className="flex items-center justify-between px-5 py-4 border-b">
//                 <div>
//                   <p className="text-xs uppercase tracking-wider text-gray-500">
//                     {selected.category}
//                   </p>
//                   <h3 className="font-serif text-xl text-primary font-bold">
//                     {selected.name}
//                   </h3>
//                 </div>

//                 <button
//                   onClick={() => setSelected(null)}
//                   className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border hover:bg-gray-50"
//                 >
//                   <X size={18} />
//                   Close
//                 </button>
//               </div>

//               <div className="relative w-full aspect-[4/3] bg-gray-50">
//                 <Image
//                   src={selected.image}
//                   alt={selected.name}
//                   fill
//                   sizes="(max-width: 768px) 100vw, 80vw"
//                   className="object-contain"
//                 />
//               </div>

//               <div className="p-4 border-t flex justify-end">
//                 <a
//                   href={generateCakeWhatsAppLink(selected.name)}
//                   target="_blank"
//                   rel="noreferrer"
//                   className="bg-primary hover:bg-primary/90 text-accent px-5 py-2 rounded-lg font-semibold transition shadow-md"
//                 >
//                   Enquire on WhatsApp
//                 </a>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }


"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cakeGallery, generateCakeWhatsAppLink } from "@/data/cakeGallery";
import { Search, X } from "lucide-react";

type SelectedCake = {
  name: string;
  image: string;
  category: string;
};

export default function Cakes() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [selected, setSelected] = useState<SelectedCake | null>(null);

  const categories = useMemo(() => {
    const all = Array.from(new Set(cakeGallery.map((p) => p.category))).filter(Boolean);
    return ["All", ...all];
  }, []);

  const filteredCakes = useMemo(() => {
    const q = searchTerm.trim().toLowerCase();

    return cakeGallery.filter((cake) => {
      const matchesCategory = activeCategory === "All" || cake.category === activeCategory;

      if (!q) return matchesCategory;

      const name = (cake.name ?? "").toLowerCase();
      const categoryText = (cake.category ?? "").toLowerCase();
      const matchesName = name.includes(q);
      const matchesTags = cake.tags?.some((tag) => tag.toLowerCase().includes(q));
      const matchesCategoryText = categoryText.includes(q);

      return matchesCategory && (matchesName || !!matchesTags || matchesCategoryText);
    });
  }, [searchTerm, activeCategory]);

  // close modal on ESC
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  // prevent background scroll when modal open
  useEffect(() => {
    if (!selected) {
      document.body.style.overflow = "";
      return;
    }
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [selected]);

  return (
    <div className="min-h-screen bg-background py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-serif text-primary mb-6"
          >
            Our Masterpieces
          </motion.h1>

          <div className="w-24 h-1 bg-accent mx-auto mb-6" />

          {/* Themes CTA */}
          <div className="flex justify-center mb-10">
            <Link
              href="/themes"
              className="inline-flex items-center justify-center px-5 py-2 rounded-full bg-primary text-accent font-medium shadow-sm hover:bg-primary/90 transition"
            >
              Browse Theme Cakes
            </Link>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 max-w-4xl mx-auto">
            <div className="relative w-full md:w-96">
              <input
                type="text"
                placeholder="Search cakes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-full border border-secondary/40 focus:outline-none focus:ring-2 focus:ring-accent bg-white shadow-sm"
              />
              <Search className="absolute left-4 top-3.5 text-gray-400" size={20} />
            </div>

            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-5 py-2 rounded-full font-medium transition-colors ${
                    activeCategory === category
                      ? "bg-primary text-accent"
                      : "bg-white text-primary hover:bg-secondary/50 border border-secondary/30"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Grid */}
        {filteredCakes.length === 0 ? (
          <div className="text-center py-20 text-gray-500 text-xl font-serif">
            No cakes found matching your search.
          </div>
        ) : (
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredCakes.map((cake) => (
              <motion.button
                key={cake.id}
                type="button"
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.25 }}
                onClick={() =>
                  setSelected({
                    name: cake.name,
                    image: cake.image,
                    category: cake.category,
                  })
                }
                className="text-left bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group w-full"
              >
                <div className="h-72 overflow-hidden relative">
                  <Image
                    src={cake.image}
                    alt={cake.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 bg-accent text-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {cake.category}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-serif text-2xl text-primary font-bold pr-2 leading-tight">
                    {cake.name}
                  </h3>

                  {!!cake.tags?.length && (
                    <div className="flex flex-wrap gap-1 mt-3">
                      {cake.tags.slice(0, 4).map((tag) => (
                        <span
                          key={tag}
                          className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded border border-gray-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-100">
                    <span className="text-sm text-gray-500">Want this cake?</span>

                    <a
                      href={generateCakeWhatsAppLink(cake.name)}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="bg-primary hover:bg-primary/90 text-accent px-5 py-2 rounded-lg font-semibold transition shadow-md"
                    >
                      Enquire
                    </a>
                  </div>
                </div>
              </motion.button>
            ))}
          </motion.div>
        )}
      </div>

      {/* Full Image Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <button
              className="absolute inset-0 bg-black/60"
              aria-label="Close preview"
              onClick={() => setSelected(null)}
            />

            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.98, opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="relative z-[61] w-full max-w-4xl bg-white rounded-2xl overflow-hidden shadow-2xl"
            >
              <div className="flex items-center justify-between px-5 py-4 border-b">
                <div>
                  <p className="text-xs uppercase tracking-wider text-gray-500">{selected.category}</p>
                  <h3 className="font-serif text-xl text-primary font-bold">{selected.name}</h3>
                </div>

                <button
                  onClick={() => setSelected(null)}
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border hover:bg-gray-50"
                >
                  <X size={18} />
                  Close
                </button>
              </div>

              {/* ✅ FIXED: modal image height controlled */}
              <div className="relative w-full bg-gray-50">
                <div className="relative w-full max-h-[80vh] h-[70vh] sm:h-[75vh]">
                  <Image
                    src={selected.image}
                    alt={selected.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 80vw"
                    className="object-contain"
                    priority
                  />
                </div>
              </div>

              <div className="p-4 border-t flex justify-end">
                <a
                  href={generateCakeWhatsAppLink(selected.name)}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-primary hover:bg-primary/90 text-accent px-5 py-2 rounded-lg font-semibold transition shadow-md"
                >
                  Enquire on WhatsApp
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}