"use client";

import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";

export type GalleryPhoto = {
  src: string;
  label: string;
  accent: string;
};

export function PhotoGallery({ photos }: { photos: readonly GalleryPhoto[] }) {
  const [active, setActive] = useState<GalleryPhoto | null>(null);

  const close = useCallback(() => setActive(null), []);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, close]);

  useEffect(() => {
    if (!active) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [active]);

  return (
    <>
      <div className="photo-grid">
        {photos.map((photo) => (
          <button
            key={photo.src}
            type="button"
            className="group photo-card block w-full cursor-pointer border-0 p-0 text-left outline-none ring-brand-400/0 transition focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            onClick={() => setActive(photo)}
            aria-haspopup="dialog"
            aria-label={`Open larger view: ${photo.label}, ${photo.accent}`}
          >
            <img src={photo.src} alt={`${photo.label} photography`} />
            <div className="photo-card-caption">
              <span className="photo-card-caption-title">{photo.label}</span>
              <span className="photo-card-caption-subtitle">{photo.accent}</span>
            </div>
          </button>
        ))}
      </div>

      {active
        ? createPortal(
            <div
              className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/92 p-4 backdrop-blur-md sm:p-8"
              role="dialog"
              aria-modal="true"
              aria-labelledby="photo-lightbox-title"
              onClick={close}
            >
              <div className="relative z-[1] flex max-h-[min(92vh,900px)] w-full max-w-5xl flex-col items-center gap-3 pointer-events-none">
                <div className="relative min-h-0 w-full flex-1 pointer-events-none">
                  <img
                    src={active.src}
                    alt={`${active.label} photography — full size`}
                    className="mx-auto max-h-[min(78vh,820px)] w-auto max-w-full rounded-2xl border border-slate-800/80 object-contain shadow-[0_24px_80px_rgba(2,6,23,0.85)] pointer-events-auto"
                    onClick={(e) => e.stopPropagation()}
                  />
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      close();
                    }}
                    className="absolute -right-1 -top-1 flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-900/95 text-lg leading-none text-slate-200 shadow-lg transition hover:border-slate-600 hover:bg-slate-800 hover:text-white pointer-events-auto sm:-right-2 sm:-top-2"
                    aria-label="Close"
                  >
                    ×
                  </button>
                </div>
                <div className="text-center">
                  <p
                    id="photo-lightbox-title"
                    className="text-sm font-semibold text-slate-100"
                  >
                    {active.label}
                  </p>
                  <p className="mt-0.5 text-xs text-slate-400">{active.accent}</p>
                  <p className="mt-2 text-[11px] text-slate-500">
                    Press Esc or click outside the photo to close
                  </p>
                </div>
              </div>
            </div>,
            document.body
          )
        : null}
    </>
  );
}
