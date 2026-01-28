"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface ImageLightboxProps {
    images: string[];
}

export default function ImageLightbox({ images }: ImageLightboxProps) {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {images.map((src, index) => (
                    <button
                        key={index}
                        onClick={() => setSelectedImage(src)}
                        className="relative aspect-square rounded-xl overflow-hidden border border-gray-100 shadow-sm group cursor-pointer"
                    >
                        <img
                            src={src}
                            alt={`Item photo ${index + 1}`}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                            <span className="text-white text-xs font-medium">View Full</span>
                        </div>
                    </button>
                ))}
            </div>

            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                        className="fixed inset-0 bg-black/90 z-[200] flex items-center justify-center p-4 cursor-zoom-out"
                    >
                        <button
                            onClick={() => setSelectedImage(null)}
                            className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-[201]"
                            aria-label="Close lightbox"
                        >
                            <X className="h-6 w-6 text-white" />
                        </button>

                        <motion.img
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            src={selectedImage}
                            alt="Full size preview"
                            className="max-w-full max-h-[90vh] object-contain cursor-default"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
