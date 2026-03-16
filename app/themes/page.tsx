// "use client";

// import { useEffect, useMemo, useState } from "react";
// import { motion } from "framer-motion";
// import { Search } from "lucide-react";
// import Image from "next/image";
// import { themeGallery } from "@/data/themeGallery";
// import { generateWhatsAppLink } from "@/data/products";

// const PAGE_SIZE = 18;

// export default function ThemeGalleryPage() {
//   const [search, setSearch] = useState("");
//   const [activeTheme, setActiveTheme] = useState<string>("All");
//   const [page, setPage] = useState(1);

//   const themes = useMemo(() => {
//     const all = Array.from(new Set(themeGallery.map((x) => x.theme)));
//     // Optional: sort themes alphabetically
//     all.sort((a, b) => a.localeCompare(b));
//     return ["All", ...all];
//   }, []);

//   const filtered = useMemo(() => {
//     const q = search.trim().toLowerCase();

//     return themeGallery.filter((item) => {
//       const theme = item.theme?.toLowerCase() ?? "";
//       const title = item.title?.toLowerCase() ?? "";

//       const matchesTheme = activeTheme === "All" || item.theme === activeTheme;

//       if (!q) return matchesTheme;

//       const matchesTitle = title.includes(q);
//       const matchesThemeText = theme.includes(q);
//       const matchesTags = item.tags?.some((t) => t.toLowerCase().includes(q));

//       return matchesTheme && (matchesTitle || matchesThemeText || !!matchesTags);
//     });
//   }, [search, activeTheme]);

//   const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));

//   const paged = useMemo(() => {
//     const start = (page - 1) * PAGE_SIZE;
//     return filtered.slice(start, start + PAGE_SIZE);
//   }, [filtered, page]);

//   // Reset page when search/theme changes (useEffect is correct here)
//   useEffect(() => {
//     setPage(1);
//   }, [search, activeTheme]);

//   // Clamp page if filtered count changes
//   useEffect(() => {
//     setPage((p) => Math.min(p, totalPages));
//   }, [totalPages]);

//   return (
//     <div className="min-h-screen bg-background py-16 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-10">
//           <motion.h1
//             initial={{ opacity: 0, y: -14 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="text-5xl font-serif text-primary mb-4"
//           >
//             Custom Theme Gallery
//           </motion.h1>

//           <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>

//           <div className="flex flex-col md:flex-row justify-between items-center gap-6 max-w-5xl mx-auto">
//             {/* Search */}
//             <div className="relative w-full md:w-[420px]">
//               <input
//                 value={search}
//                 onChange={(e) => setSearch(e.target.value)}
//                 placeholder="Search themes like spiderman, unicorn..."
//                 className="w-full pl-12 pr-4 py-3 rounded-full border border-secondary/40 focus:outline-none focus:ring-2 focus:ring-accent bg-white shadow-sm"
//               />
//               <Search
//                 className="absolute left-4 top-3.5 text-gray-400"
//                 size={20}
//               />
//             </div>

//             {/* Theme Chips */}
//             <div className="flex flex-wrap gap-2 justify-center">
//               {themes.map((t) => (
//                 <button
//                   key={t}
//                   onClick={() => setActiveTheme(t)}
//                   className={`px-5 py-2 rounded-full font-medium transition-colors ${
//                     activeTheme === t
//                       ? "bg-primary text-accent"
//                       : "bg-white text-primary hover:bg-secondary/50 border border-secondary/30"
//                   }`}
//                 >
//                   {t === "All" ? "All Themes" : t}
//                 </button>
//               ))}
//             </div>
//           </div>

//           <p className="mt-5 text-sm text-gray-500">
//             Showing{" "}
//             <span className="font-semibold">{filtered.length}</span> designs
//           </p>
//         </div>

//         {/* Grid */}
//         {paged.length === 0 ? (
//           <div className="text-center py-20 text-gray-500 text-xl font-serif">
//             No theme cakes found.
//           </div>
//         ) : (
//           <motion.div
//             layout
//             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
//           >
//             {paged.map((item) => (
//               <motion.div
//                 layout
//                 key={item.id}
//                 initial={{ opacity: 0, scale: 0.95 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.25 }}
//                 className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group"
//               >
//                 <div className="h-72 overflow-hidden relative">
//                   <Image
//                     src={item.image}
//                     alt={item.title}
//                     fill
//                     sizes="(max-width: 1024px) 100vw, 33vw"
//                     className="object-cover group-hover:scale-110 transition-transform duration-700"
//                   />
//                   <div className="absolute top-4 right-4 bg-accent text-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
//                     {item.theme}
//                   </div>
//                 </div>

//                 <div className="p-6">
//                   <h3 className="font-serif text-2xl text-primary font-bold pr-2 leading-tight">
//                     {item.title}
//                   </h3>

//                   {!!item.tags?.length && (
//                     <div className="flex flex-wrap gap-1 mt-3">
//                       {item.tags.slice(0, 4).map((tag) => (
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
//                     <span className="text-sm text-gray-500">Want this theme?</span>

//                     <a
//                       href={generateWhatsAppLink(item.title)}
//                       target="_blank"
//                       rel="noreferrer"
//                       className="bg-primary hover:bg-primary/90 text-accent px-5 py-2 rounded-lg font-semibold transition shadow-md"
//                     >
//                       Enquire
//                     </a>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         )}

//         {/* Pagination */}
//         <div className="flex items-center justify-center gap-3 mt-12">
//           <button
//             disabled={page <= 1}
//             onClick={() => setPage((p) => Math.max(1, p - 1))}
//             className="px-4 py-2 rounded-lg border bg-white disabled:opacity-40"
//           >
//             Prev
//           </button>

//           <span className="text-sm text-gray-600">
//             Page <span className="font-semibold">{page}</span> / {totalPages}
//           </span>

//           <button
//             disabled={page >= totalPages}
//             onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
//             className="px-4 py-2 rounded-lg border bg-white disabled:opacity-40"
//           >
//             Next
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }



// "use client";

// import { useEffect, useMemo, useState } from "react";
// import { motion } from "framer-motion";
// import { Search } from "lucide-react";
// import Image from "next/image";
// import { themeGallery } from "@/data/themeGallery";
// import { generateWhatsAppLink } from "@/data/products";

// const PAGE_SIZE = 18;

// export default function ThemeGalleryPage() {
//   const [search, setSearch] = useState("");
//   const [activeTheme, setActiveTheme] = useState<string>("All");
//   const [page, setPage] = useState(1);

//   const themes = useMemo(() => {
//     const all = Array.from(new Set(themeGallery.map((x) => x.theme))).filter(Boolean);
//     all.sort((a, b) => a.localeCompare(b));
//     return ["All", ...all];
//   }, []);

//   const filtered = useMemo(() => {
//     const q = search.trim().toLowerCase();

//     return themeGallery.filter((item) => {
//       const theme = (item.theme ?? "").toLowerCase();
//       const title = (item.title ?? "").toLowerCase();

//       const matchesTheme = activeTheme === "All" || item.theme === activeTheme;

//       if (!q) return matchesTheme;

//       const matchesTitle = title.includes(q);
//       const matchesThemeText = theme.includes(q);
//       const matchesTags = item.tags?.some((t) => t.toLowerCase().includes(q));

//       return matchesTheme && (matchesTitle || matchesThemeText || !!matchesTags);
//     });
//   }, [search, activeTheme]);

//   const totalPages = useMemo(() => {
//     return Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
//   }, [filtered.length]);

//   const paged = useMemo(() => {
//     const start = (page - 1) * PAGE_SIZE;
//     return filtered.slice(start, start + PAGE_SIZE);
//   }, [filtered, page]);

//   // Reset to page 1 when filters change
//   useEffect(() => {
//     setPage(1);
//   }, [search, activeTheme]);

//   // Clamp page when total pages shrink (e.g., after filtering)
//   useEffect(() => {
//     setPage((p) => Math.min(p, totalPages));
//   }, [totalPages]);

//   return (
//     <div className="min-h-screen bg-background py-16 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-10">
//           <motion.h1
//             initial={{ opacity: 0, y: -14 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="text-5xl font-serif text-primary mb-4"
//           >
//             Custom Theme Gallery
//           </motion.h1>

//           <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>

//           <div className="flex flex-col md:flex-row justify-between items-center gap-6 max-w-5xl mx-auto">
//             {/* Search */}
//             <div className="relative w-full md:w-[420px]">
//               <input
//                 value={search}
//                 onChange={(e) => setSearch(e.target.value)}
//                 placeholder="Search themes like spiderman, unicorn..."
//                 className="w-full pl-12 pr-4 py-3 rounded-full border border-secondary/40 focus:outline-none focus:ring-2 focus:ring-accent bg-white shadow-sm"
//               />
//               <Search className="absolute left-4 top-3.5 text-gray-400" size={20} />
//             </div>

//             {/* Theme Chips */}
//             <div className="flex flex-wrap gap-2 justify-center">
//               {themes.map((t) => (
//                 <button
//                   key={t}
//                   onClick={() => setActiveTheme(t)}
//                   className={`px-5 py-2 rounded-full font-medium transition-colors ${
//                     activeTheme === t
//                       ? "bg-primary text-accent"
//                       : "bg-white text-primary hover:bg-secondary/50 border border-secondary/30"
//                   }`}
//                 >
//                   {t === "All" ? "All Themes" : t}
//                 </button>
//               ))}
//             </div>
//           </div>

//           <p className="mt-5 text-sm text-gray-500">
//             Showing <span className="font-semibold">{filtered.length}</span> designs
//           </p>
//         </div>

//         {/* Grid */}
//         {paged.length === 0 ? (
//           <div className="text-center py-20 text-gray-500 text-xl font-serif">
//             No theme cakes found.
//           </div>
//         ) : (
//           <motion.div
//             layout
//             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
//           >
//             {paged.map((item) => (
//               <motion.div
//                 layout
//                 key={item.id}
//                 initial={{ opacity: 0, scale: 0.95 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.25 }}
//                 className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group"
//               >
//                 <div className="h-72 overflow-hidden relative">
//                   <Image
//                     src={item.image}
//                     alt={item.title}
//                     fill
//                     sizes="(max-width: 1024px) 100vw, 33vw"
//                     className="object-cover group-hover:scale-110 transition-transform duration-700"
//                   />
//                   <div className="absolute top-4 right-4 bg-accent text-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
//                     {item.theme}
//                   </div>
//                 </div>

//                 <div className="p-6">
//                   <h3 className="font-serif text-2xl text-primary font-bold pr-2 leading-tight">
//                     {item.title}
//                   </h3>

//                   {!!item.tags?.length && (
//                     <div className="flex flex-wrap gap-1 mt-3">
//                       {item.tags.slice(0, 4).map((tag) => (
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
//                     <span className="text-sm text-gray-500">Want this theme?</span>

//                     <a
//                       href={generateWhatsAppLink(item.title)}
//                       target="_blank"
//                       rel="noreferrer"
//                       className="bg-primary hover:bg-primary/90 text-accent px-5 py-2 rounded-lg font-semibold transition shadow-md"
//                     >
//                       Enquire
//                     </a>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         )}

//         {/* Pagination */}
//         <div className="flex items-center justify-center gap-3 mt-12">
//           <button
//             disabled={page <= 1}
//             onClick={() => setPage((p) => Math.max(1, p - 1))}
//             className="px-4 py-2 rounded-lg border bg-white disabled:opacity-40"
//           >
//             Prev
//           </button>

//           <span className="text-sm text-gray-600">
//             Page <span className="font-semibold">{page}</span> / {totalPages}
//           </span>

//           <button
//             disabled={page >= totalPages}
//             onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
//             className="px-4 py-2 rounded-lg border bg-white disabled:opacity-40"
//           >
//             Next
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }


// "use client";

// import { useEffect, useMemo, useState } from "react";
// import { motion } from "framer-motion";
// import { Search } from "lucide-react";
// import Image from "next/image";
// import { themeGallery } from "@/data/themeGallery";
// import { generateWhatsAppLink } from "@/data/products";

// const PAGE_SIZE = 18;

// export default function ThemeGalleryPage() {
//   const [search, setSearch] = useState("");
//   const [activeTheme, setActiveTheme] = useState<string>("All");
//   const [page, setPage] = useState(1);

//   // ✅ themes should be memo'd with correct dependency
//   const themes = useMemo(() => {
//     const all = Array.from(new Set(themeGallery.map((x) => x.theme)))
//       .filter(Boolean)
//       .sort((a, b) => a.localeCompare(b));

//     return ["All", ...all];
//   }, [themeGallery]);

//   const filtered = useMemo(() => {
//     const q = search.trim().toLowerCase();

//     return themeGallery.filter((item) => {
//       const theme = (item.theme ?? "").toLowerCase();
//       const title = (item.title ?? "").toLowerCase();

//       const matchesTheme = activeTheme === "All" || item.theme === activeTheme;

//       if (!q) return matchesTheme;

//       const matchesTitle = title.includes(q);
//       const matchesThemeText = theme.includes(q);
//       const matchesTags = item.tags?.some((t) => t.toLowerCase().includes(q));

//       return matchesTheme && (matchesTitle || matchesThemeText || !!matchesTags);
//     });
//   }, [search, activeTheme]);

//   const totalPages = useMemo(() => {
//     return Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
//   }, [filtered.length]);

//   const paged = useMemo(() => {
//     const start = (page - 1) * PAGE_SIZE;
//     return filtered.slice(start, start + PAGE_SIZE);
//   }, [filtered, page]);

//   // ✅ Reset to page 1 when filters change
//   useEffect(() => {
//     setPage(1);
//   }, [search, activeTheme]);

//   // ✅ Clamp page when total pages shrink
//   useEffect(() => {
//     setPage((p) => Math.min(p, totalPages));
//   }, [totalPages]);

//   return (
//     <div className="min-h-screen bg-background py-16 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-10">
//           <motion.h1
//             initial={{ opacity: 0, y: -14 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="text-5xl font-serif text-primary mb-4"
//           >
//             Custom Theme Gallery
//           </motion.h1>

//           <div className="w-24 h-1 bg-accent mx-auto mb-8" />

//           <div className="flex flex-col md:flex-row justify-between items-center gap-6 max-w-5xl mx-auto">
//             {/* Search */}
//             <div className="relative w-full md:w-[420px]">
//               <input
//                 value={search}
//                 onChange={(e) => setSearch(e.target.value)}
//                 placeholder="Search themes like spiderman, unicorn..."
//                 className="w-full pl-12 pr-4 py-3 rounded-full border border-secondary/40 focus:outline-none focus:ring-2 focus:ring-accent bg-white shadow-sm"
//               />
//               <Search className="absolute left-4 top-3.5 text-gray-400" size={20} />
//             </div>

//             {/* Theme Chips */}
//             <div className="flex flex-wrap gap-2 justify-center">
//               {themes.map((t) => (
//                 <button
//                   key={t}
//                   onClick={() => setActiveTheme(t)}
//                   className={`px-5 py-2 rounded-full font-medium transition-colors ${
//                     activeTheme === t
//                       ? "bg-primary text-accent"
//                       : "bg-white text-primary hover:bg-secondary/50 border border-secondary/30"
//                   }`}
//                 >
//                   {t === "All" ? "All Themes" : t}
//                 </button>
//               ))}
//             </div>
//           </div>

//           <p className="mt-5 text-sm text-gray-500">
//             Showing <span className="font-semibold">{filtered.length}</span> designs
//           </p>
//         </div>

//         {/* Grid */}
//         {paged.length === 0 ? (
//           <div className="text-center py-20 text-gray-500 text-xl font-serif">
//             No theme cakes found.
//           </div>
//         ) : (
//           <motion.div
//             layout
//             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
//           >
//             {paged.map((item) => (
//               <motion.div
//                 layout
//                 key={item.id}
//                 initial={{ opacity: 0, scale: 0.95 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.25 }}
//                 className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group"
//               >
//                 <div className="h-72 overflow-hidden relative">
//                   <Image
//                     src={item.image}
//                     alt={item.title}
//                     fill
//                     sizes="(max-width: 1024px) 100vw, 33vw"
//                     className="object-cover group-hover:scale-110 transition-transform duration-700"
//                   />
//                   <div className="absolute top-4 right-4 bg-accent text-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
//                     {item.theme}
//                   </div>
//                 </div>

//                 <div className="p-6">
//                   <h3 className="font-serif text-2xl text-primary font-bold pr-2 leading-tight">
//                     {item.title}
//                   </h3>

//                   {!!item.tags?.length && (
//                     <div className="flex flex-wrap gap-1 mt-3">
//                       {item.tags.slice(0, 4).map((tag) => (
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
//                     <span className="text-sm text-gray-500">Want this theme?</span>

//                     <a
//                       href={generateWhatsAppLink(item.title)}
//                       target="_blank"
//                       rel="noreferrer"
//                       className="bg-primary hover:bg-primary/90 text-accent px-5 py-2 rounded-lg font-semibold transition shadow-md"
//                     >
//                       Enquire
//                     </a>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         )}

//         {/* Pagination */}
//         <div className="flex items-center justify-center gap-3 mt-12">
//           <button
//             disabled={page <= 1}
//             onClick={() => setPage((p) => Math.max(1, p - 1))}
//             className="px-4 py-2 rounded-lg border bg-white disabled:opacity-40"
//           >
//             Prev
//           </button>

//           <span className="text-sm text-gray-600">
//             Page <span className="font-semibold">{page}</span> / {totalPages}
//           </span>

//           <button
//             disabled={page >= totalPages}
//             onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
//             className="px-4 py-2 rounded-lg border bg-white disabled:opacity-40"
//           >
//             Next
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }


// "use client";

// import { useEffect, useMemo, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Search, X } from "lucide-react";
// import Image from "next/image";
// import { themeGallery } from "@/data/themeGallery";
// import { generateWhatsAppLink } from "@/data/products";

// const PAGE_SIZE = 18;

// type SelectedItem = {
//   title: string;
//   image: string;
//   theme: string;
// };

// export default function ThemeGalleryPage() {
//   const [search, setSearch] = useState("");
//   const [activeTheme, setActiveTheme] = useState<string>("All");
//   const [page, setPage] = useState(1);

//   // ✅ modal state
//   const [selected, setSelected] = useState<SelectedItem | null>(null);

//   const themes = useMemo(() => {
//     const all = Array.from(new Set(themeGallery.map((x) => x.theme)))
//       .filter(Boolean)
//       .sort((a, b) => a.localeCompare(b));
//     return ["All", ...all];
//   }, []);

//   const filtered = useMemo(() => {
//     const q = search.trim().toLowerCase();

//     return themeGallery.filter((item) => {
//       const theme = (item.theme ?? "").toLowerCase();
//       const title = (item.title ?? "").toLowerCase();

//       const matchesTheme = activeTheme === "All" || item.theme === activeTheme;
//       if (!q) return matchesTheme;

//       const matchesTitle = title.includes(q);
//       const matchesThemeText = theme.includes(q);
//       const matchesTags = item.tags?.some((t) => t.toLowerCase().includes(q));

//       return matchesTheme && (matchesTitle || matchesThemeText || !!matchesTags);
//     });
//   }, [search, activeTheme]);

//   const totalPages = useMemo(() => {
//     return Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
//   }, [filtered.length]);

//   const paged = useMemo(() => {
//     const start = (page - 1) * PAGE_SIZE;
//     return filtered.slice(start, start + PAGE_SIZE);
//   }, [filtered, page]);

//   useEffect(() => {
//     setPage(1);
//   }, [search, activeTheme]);

//   useEffect(() => {
//     setPage((p) => Math.min(p, totalPages));
//   }, [totalPages]);

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
//         <div className="text-center mb-10">
//           <motion.h1
//             initial={{ opacity: 0, y: -14 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="text-5xl font-serif text-primary mb-4"
//           >
//             Custom Theme Gallery
//           </motion.h1>

//           <div className="w-24 h-1 bg-accent mx-auto mb-8" />

//           <div className="flex flex-col md:flex-row justify-between items-center gap-6 max-w-5xl mx-auto">
//             {/* Search */}
//             <div className="relative w-full md:w-[420px]">
//               <input
//                 value={search}
//                 onChange={(e) => setSearch(e.target.value)}
//                 placeholder="Search themes like spiderman, unicorn..."
//                 className="w-full pl-12 pr-4 py-3 rounded-full border border-secondary/40 focus:outline-none focus:ring-2 focus:ring-accent bg-white shadow-sm"
//               />
//               <Search className="absolute left-4 top-3.5 text-gray-400" size={20} />
//             </div>

//             {/* Theme Chips */}
//             <div className="flex flex-wrap gap-2 justify-center">
//               {themes.map((t) => (
//                 <button
//                   key={t}
//                   onClick={() => setActiveTheme(t)}
//                   className={`px-5 py-2 rounded-full font-medium transition-colors ${
//                     activeTheme === t
//                       ? "bg-primary text-accent"
//                       : "bg-white text-primary hover:bg-secondary/50 border border-secondary/30"
//                   }`}
//                 >
//                   {t === "All" ? "All Themes" : t}
//                 </button>
//               ))}
//             </div>
//           </div>

//           <p className="mt-5 text-sm text-gray-500">
//             Showing <span className="font-semibold">{filtered.length}</span> designs
//           </p>
//         </div>

//         {/* Grid */}
//         {paged.length === 0 ? (
//           <div className="text-center py-20 text-gray-500 text-xl font-serif">
//             No theme cakes found.
//           </div>
//         ) : (
//           <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
//             {paged.map((item) => (
//               <motion.button
//                 type="button"
//                 layout
//                 key={item.id}
//                 initial={{ opacity: 0, scale: 0.95 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.25 }}
//                 onClick={() =>
//                   setSelected({ title: item.title, image: item.image, theme: item.theme })
//                 }
//                 className="text-left bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group w-full"
//               >
//                 <div className="h-72 overflow-hidden relative">
//                   <Image
//                     src={item.image}
//                     alt={item.title}
//                     fill
//                     sizes="(max-width: 1024px) 100vw, 33vw"
//                     className="object-cover group-hover:scale-110 transition-transform duration-700"
//                   />
//                   <div className="absolute top-4 right-4 bg-accent text-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
//                     {item.theme}
//                   </div>
//                 </div>

//                 <div className="p-6">
//                   <h3 className="font-serif text-2xl text-primary font-bold pr-2 leading-tight">
//                     {item.title}
//                   </h3>

//                   {!!item.tags?.length && (
//                     <div className="flex flex-wrap gap-1 mt-3">
//                       {item.tags.slice(0, 4).map((tag) => (
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
//                     <span className="text-sm text-gray-500">Want this theme?</span>

//                     <a
//                       href={generateWhatsAppLink(item.title)}
//                       target="_blank"
//                       rel="noreferrer"
//                       onClick={(e) => e.stopPropagation()} // ✅ don't open modal
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

//         {/* Pagination */}
//         <div className="flex items-center justify-center gap-3 mt-12">
//           <button
//             disabled={page <= 1}
//             onClick={() => setPage((p) => Math.max(1, p - 1))}
//             className="px-4 py-2 rounded-lg border bg-white disabled:opacity-40"
//           >
//             Prev
//           </button>

//           <span className="text-sm text-gray-600">
//             Page <span className="font-semibold">{page}</span> / {totalPages}
//           </span>

//           <button
//             disabled={page >= totalPages}
//             onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
//             className="px-4 py-2 rounded-lg border bg-white disabled:opacity-40"
//           >
//             Next
//           </button>
//         </div>
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
//             {/* backdrop */}
//             <button
//               className="absolute inset-0 bg-black/60"
//               aria-label="Close preview"
//               onClick={() => setSelected(null)}
//             />

//             {/* modal box */}
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
//                     {selected.theme}
//                   </p>
//                   <h3 className="font-serif text-xl text-primary font-bold">
//                     {selected.title}
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
//                   alt={selected.title}
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

"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X } from "lucide-react";
import Image from "next/image";
import { themeGallery, generateThemeWhatsAppLink } from "@/data/themeGallery";

const PAGE_SIZE = 18;

type SelectedItem = {
  title: string;
  image: string;
  theme: string;
};

export default function ThemeGalleryPage() {
  const [search, setSearch] = useState("");
  const [activeTheme, setActiveTheme] = useState<string>("All");
  const [page, setPage] = useState(1);

  // modal
  const [selected, setSelected] = useState<SelectedItem | null>(null);

  const themes = useMemo(() => {
    const all = Array.from(new Set(themeGallery.map((x) => x.theme)))
      .filter(Boolean)
      .sort((a, b) => a.localeCompare(b));
    return ["All", ...all];
  }, []);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();

    return themeGallery.filter((item) => {
      const theme = (item.theme ?? "").toLowerCase();
      const title = (item.title ?? "").toLowerCase();

      const matchesTheme = activeTheme === "All" || item.theme === activeTheme;
      if (!q) return matchesTheme;

      const matchesTitle = title.includes(q);
      const matchesThemeText = theme.includes(q);
      const matchesTags = item.tags?.some((t) => t.toLowerCase().includes(q));

      return matchesTheme && (matchesTitle || matchesThemeText || !!matchesTags);
    });
  }, [search, activeTheme]);

  const totalPages = useMemo(() => Math.max(1, Math.ceil(filtered.length / PAGE_SIZE)), [filtered.length]);

  const paged = useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return filtered.slice(start, start + PAGE_SIZE);
  }, [filtered, page]);

  useEffect(() => {
    setPage(1);
  }, [search, activeTheme]);

  useEffect(() => {
    setPage((p) => Math.min(p, totalPages));
  }, [totalPages]);

  // close modal on ESC
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-background py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <motion.h1
            initial={{ opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-serif text-primary mb-4"
          >
            Custom Theme Gallery
          </motion.h1>

          <div className="w-24 h-1 bg-accent mx-auto mb-8" />

          <div className="flex flex-col md:flex-row justify-between items-center gap-6 max-w-5xl mx-auto">
            {/* Search */}
            <div className="relative w-full md:w-[420px]">
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search themes like spiderman, unicorn..."
                className="w-full pl-12 pr-4 py-3 rounded-full border border-secondary/40 focus:outline-none focus:ring-2 focus:ring-accent bg-white shadow-sm"
              />
              <Search className="absolute left-4 top-3.5 text-gray-400" size={20} />
            </div>

            {/* Theme Chips */}
            <div className="flex flex-wrap gap-2 justify-center">
              {themes.map((t) => (
                <button
                  key={t}
                  onClick={() => setActiveTheme(t)}
                  className={`px-5 py-2 rounded-full font-medium transition-colors ${
                    activeTheme === t
                      ? "bg-primary text-accent"
                      : "bg-white text-primary hover:bg-secondary/50 border border-secondary/30"
                  }`}
                >
                  {t === "All" ? "All Themes" : t}
                </button>
              ))}
            </div>
          </div>

          <p className="mt-5 text-sm text-gray-500">
            Showing <span className="font-semibold">{filtered.length}</span> designs
          </p>
        </div>

        {/* Grid */}
        {paged.length === 0 ? (
          <div className="text-center py-20 text-gray-500 text-xl font-serif">
            No theme cakes found.
          </div>
        ) : (
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {paged.map((item) => (
              <motion.button
                type="button"
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.25 }}
                onClick={() =>
                  setSelected({ title: item.title, image: item.image, theme: item.theme })
                }
                className="text-left bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group w-full"
              >
                <div className="h-72 overflow-hidden relative">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 bg-accent text-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {item.theme}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-serif text-2xl text-primary font-bold pr-2 leading-tight">
                    {item.title}
                  </h3>

                  {!!item.tags?.length && (
                    <div className="flex flex-wrap gap-1 mt-3">
                      {item.tags.slice(0, 4).map((tag) => (
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
                    <span className="text-sm text-gray-500">Want this theme?</span>

                    <a
                      href={generateThemeWhatsAppLink(item.title)}
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

        {/* Pagination */}
        <div className="flex items-center justify-center gap-3 mt-12">
          <button
            disabled={page <= 1}
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            className="px-4 py-2 rounded-lg border bg-white disabled:opacity-40"
          >
            Prev
          </button>

          <span className="text-sm text-gray-600">
            Page <span className="font-semibold">{page}</span> / {totalPages}
          </span>

          <button
            disabled={page >= totalPages}
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            className="px-4 py-2 rounded-lg border bg-white disabled:opacity-40"
          >
            Next
          </button>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
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
              className="relative z-[61] w-full max-w-3xl bg-white rounded-2xl overflow-hidden shadow-2xl"
            >
              <div className="flex items-center justify-between px-5 py-4 border-b">
                <div>
                  <p className="text-xs uppercase tracking-wider text-gray-500">
                    {selected.theme}
                  </p>
                  <h3 className="font-serif text-xl text-primary font-bold">
                    {selected.title}
                  </h3>
                </div>

                <button
                  onClick={() => setSelected(null)}
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border hover:bg-gray-50"
                >
                  <X size={18} />
                  Close
                </button>
              </div>

              <div className="relative w-full max-h-[70vh] bg-gray-50">
                <div className="relative w-full h-[70vh]">
                  <Image
                    src={selected.image}
                    alt={selected.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 80vw"
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="p-4 border-t flex justify-end">
                <a
                  href={generateThemeWhatsAppLink(selected.title)}
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