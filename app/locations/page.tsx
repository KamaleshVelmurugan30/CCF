// "use client";

// import { motion } from "framer-motion";
// import { stores } from "@/data/stores";
// import { MapPin, Phone, Clock } from "lucide-react";

// export default function Locations() {
//     return (
//         <div className="min-h-screen bg-background py-20 px-4 sm:px-6 lg:px-8">
//             <div className="max-w-7xl mx-auto">
//                 <div className="text-center mb-16">
//                     <motion.h1
//                         initial={{ opacity: 0, y: -20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         className="text-5xl font-serif text-primary"
//                     >
//                         Find Us
//                     </motion.h1>
//                     <div className="w-24 h-1 bg-accent mx-auto mt-6"></div>
//                     <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
//                         Drop by our stores in Chennai to experience the aroma of freshly baked luxury and premium desserts.
//                     </p>
//                 </div>

//                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//                     {stores.map((store, idx) => (
//                         <motion.div
//                             key={store.id}
//                             initial={{ opacity: 0, y: 30 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             transition={{ delay: idx * 0.2 }}
//                             className="bg-white rounded-3xl overflow-hidden shadow-xl border border-secondary/20 flex flex-col"
//                         >
//                             <div className="h-64 sm:h-80 w-full relative">
//                                 <iframe
//                                     src={store.mapUrl}
//                                     width="100%"
//                                     height="100%"
//                                     style={{ border: 0 }}
//                                     allowFullScreen={true}
//                                     loading="lazy"
//                                     referrerPolicy="no-referrer-when-downgrade"
//                                     title={`Map for ${store.name}`}
//                                     className="absolute inset-0 grayscale hover:grayscale-0 transition-all duration-700"
//                                 ></iframe>
//                             </div>

//                             <div className="p-8 sm:p-10 flex flex-col flex-grow bg-primary text-textLight relative">
//                                 <div className="absolute top-0 right-10 -translate-y-1/2 bg-accent text-primary w-16 h-16 rounded-full flex items-center justify-center shadow-lg border-4 border-white">
//                                     <MapPin size={28} />
//                                 </div>

//                                 <h2 className="text-3xl font-serif text-accent mb-6">{store.name}</h2>

//                                 <div className="space-y-4 mb-8 flex-grow text-secondary/90">
//                                     <div className="flex items-start gap-4">
//                                         <MapPin className="top-1 relative text-accent" size={20} />
//                                         <p className="text-lg">{store.address}</p>
//                                     </div>
//                                     <div className="flex items-center gap-4">
//                                         <Phone className="text-accent" size={20} />
//                                         <p className="text-lg">{store.phone}</p>
//                                     </div>
//                                     <div className="flex items-center gap-4">
//                                         <Clock className="text-accent" size={20} />
//                                         <p className="text-lg">{store.hours}</p>
//                                     </div>
//                                 </div>

//                                 <div className="flex flex-col sm:flex-row gap-4 mt-auto">
//                                     <a href={`tel:${store.phone}`} className="flex-1 bg-white text-primary text-center py-3 rounded-xl font-bold hover:bg-secondary transition shadow-md">
//                                         Call Now
//                                     </a>
//                                     <a href={`https://wa.me/${store.whatsapp}`} target="_blank" rel="noreferrer" className="flex-1 bg-accent border-2 border-accent text-primary text-center py-3 rounded-xl font-bold hover:bg-transparent hover:text-accent transition shadow-md">
//                                         WhatsApp
//                                     </a>
//                                 </div>
//                             </div>
//                         </motion.div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// }
"use client";

import { motion } from "framer-motion";
import { stores } from "@/data/stores";
import { MapPin, Phone, Clock } from "lucide-react";

const makeEmbedUrl = (query: string) =>
  `https://www.google.com/maps?output=embed&q=${encodeURIComponent(query)}`;

const makeDirectionsUrl = (query: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;

export default function Locations() {
  return (
    <div className="min-h-screen bg-background py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-serif text-primary"
          >
            Find Us
          </motion.h1>
          <div className="w-24 h-1 bg-accent mx-auto mt-6"></div>
          <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
            Drop by our stores in Chennai to experience the aroma of freshly baked luxury and premium desserts.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {stores.map((store, idx) => (
            <motion.div
              key={store.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              className="bg-white rounded-3xl overflow-hidden shadow-xl border border-secondary/20 flex flex-col"
            >
              <div className="h-64 sm:h-80 w-full relative">
                <iframe
                  src={makeEmbedUrl(store.mapQuery ?? store.address)}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Map for ${store.name}`}
                  className="absolute inset-0 grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>

              <div className="p-8 sm:p-10 flex flex-col flex-grow bg-primary text-textLight relative">
                <div className="absolute top-0 right-10 -translate-y-1/2 bg-accent text-primary w-16 h-16 rounded-full flex items-center justify-center shadow-lg border-4 border-white">
                  <MapPin size={28} />
                </div>

                <h2 className="text-3xl font-serif text-accent mb-6">{store.name}</h2>

                <div className="space-y-4 mb-8 flex-grow text-secondary/90">
                  <div className="flex items-start gap-4">
                    <MapPin className="top-1 relative text-accent" size={20} />
                    <p className="text-lg">{store.address}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <Phone className="text-accent" size={20} />
                    <p className="text-lg">{store.phone}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <Clock className="text-accent" size={20} />
                    <p className="text-lg">{store.hours}</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                  <a
                    href={`tel:${store.phone.replace(/\s/g, "")}`}
                    className="flex-1 bg-white text-primary text-center py-3 rounded-xl font-bold hover:bg-secondary transition shadow-md"
                  >
                    Call Now
                  </a>

                  <a
                    href={`https://wa.me/${store.whatsapp}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 bg-accent border-2 border-accent text-primary text-center py-3 rounded-xl font-bold hover:bg-transparent hover:text-accent transition shadow-md"
                  >
                    WhatsApp
                  </a>

                  <a
                    href={makeDirectionsUrl(store.mapQuery ?? store.address)}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 bg-transparent border-2 border-white/30 text-white text-center py-3 rounded-xl font-bold hover:border-accent hover:text-accent transition shadow-md"
                  >
                    Get Directions
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}