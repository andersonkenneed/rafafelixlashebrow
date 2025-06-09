
"use client";

import {
  Dialog,
  DialogContent,
  DialogClose,
} from '@/components/ui/dialog';
import Image from 'next/image';
import { X } from 'lucide-react';

interface ImagePreviewModalProps {
  imageUrl: string | null;
  isOpen: boolean;
  onClose: () => void;
  altText?: string;
}

export function ImagePreviewModal({ imageUrl, isOpen, onClose, altText = "Image Preview" }: ImagePreviewModalProps) {
  if (!imageUrl) return null;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[90vw] md:max-w-[80vw] lg:max-w-[70vw] xl:max-w-[60vw] p-0 overflow-hidden border-0 bg-transparent shadow-none">
        <div className="relative w-full h-auto max-h-[90vh] flex items-center justify-center">
          <Image
            src={imageUrl}
            alt={altText}
            width={1200} 
            height={800} 
            className="object-contain w-full h-full max-h-[85vh] rounded-md"
            quality={95}
          />
           <DialogClose asChild>
             <button
              className="absolute right-2 top-2 rounded-full p-1.5 bg-black/60 text-white hover:bg-black/80 transition-colors z-50 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
              onClick={onClose}
              aria-label="Close image preview"
            >
              <X className="h-5 w-5" />
            </button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
}
