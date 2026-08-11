import { useEffect, useRef, useState } from "react";
import type { GalleryImage } from "@/data/gallery";

/** Premium lightbox: keyboard on desktop, swipe on mobile, counter, smooth fades. */
export function Lightbox({
  images,
  index,
  onClose,
  onNavigate,
}: {
  images: GalleryImage[];
  index: number | null;
  onClose: () => void;
  onNavigate: (i: number) => void;
}) {
  const touchX = useRef<number | null>(null);
  const [loaded, setLoaded] = useState(false);
  const open = index !== null;

  useEffect(() => setLoaded(false), [index]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNavigate((index! + 1) % images.length);
      if (e.key === "ArrowLeft") onNavigate((index! - 1 + images.length) % images.length);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, index, images.length, onClose, onNavigate]);

  if (!open) return null;
  const image = images[index];
  if (!image) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image viewer"
      className="fixed inset-0 z-[95] flex flex-col bg-ink/96 text-background animate-[page-in_400ms_ease-out]"
      onTouchStart={(e) => {
        touchX.current = e.touches[0]?.clientX ?? null;
      }}
      onTouchEnd={(e) => {
        const start = touchX.current;
        const end = e.changedTouches[0]?.clientX ?? null;
        if (start === null || end === null) return;
        const dx = end - start;
        if (Math.abs(dx) > 50) {
          onNavigate(dx < 0 ? (index + 1) % images.length : (index - 1 + images.length) % images.length);
        }
      }}
    >
      <div className="flex items-center justify-between px-5 py-5 sm:px-10">
        <span className="eyebrow opacity-70">
          {index + 1} / {images.length}
        </span>
        <button type="button" onClick={onClose} className="eyebrow border-b border-current pb-1">
          Close
        </button>
      </div>

      <div className="relative flex flex-1 items-center justify-center px-4 pb-6 sm:px-16">
        <img
          key={image.src}
          src={image.src}
          alt={image.alt}
          onLoad={() => setLoaded(true)}
          className={`max-h-full max-w-full object-contain transition-opacity duration-500 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>

      <div className="flex items-center justify-between gap-6 px-5 pb-7 sm:px-10">
        <p className="max-w-[60ch] text-xs font-light opacity-70">{image.alt}</p>
        <div className="flex shrink-0 gap-7">
          <button
            type="button"
            aria-label="Previous image"
            onClick={() => onNavigate((index - 1 + images.length) % images.length)}
            className="eyebrow opacity-80 transition-opacity hover:opacity-100"
          >
            Prev
          </button>
          <button
            type="button"
            aria-label="Next image"
            onClick={() => onNavigate((index + 1) % images.length)}
            className="eyebrow opacity-80 transition-opacity hover:opacity-100"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
