"use client";

import { motion } from "framer-motion";

type Branch = "Ambattur" | "Kallikuppam";

export default function WhatsAppBranchModal({
  open,
  onClose,
  onSelect,
}: {
  open: boolean;
  onClose: () => void;
  onSelect: (branch: Branch) => void;
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60]">
      <button
        className="absolute inset-0 bg-black/60"
        aria-label="Close"
        onClick={onClose}
      />
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.2 }}
        className="absolute left-1/2 top-1/2 w-[92%] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-primary text-textLight border border-white/10 shadow-2xl p-6"
      >
        <h3 className="font-serif text-2xl text-accent">Choose your branch</h3>
        <p className="text-secondary/80 mt-2">
          Select your preferred pickup/delivery branch.
        </p>

        <div className="mt-6 grid gap-3">
          <button
            onClick={() => onSelect("Ambattur")}
            className="w-full rounded-xl bg-accent text-primary font-bold py-3 hover:brightness-95 transition"
          >
            Ambattur (Banu Nagar)
          </button>

          <button
            onClick={() => onSelect("Kallikuppam")}
            className="w-full rounded-xl border-2 border-accent text-accent font-bold py-3 hover:bg-accent hover:text-primary transition"
          >
            Kallikuppam (Redhills Main Rd)
          </button>
        </div>

        <button
          onClick={onClose}
          className="mt-5 w-full text-center text-secondary/80 hover:text-white transition"
        >
          Cancel
        </button>
      </motion.div>
    </div>
  );
}