"use client";

import { ReactNode, useEffect } from "react";

type ModalProps = {
  isOpen: boolean;
  onCloseAction: () => void;
  title?: string;
  children: ReactNode;
};

export function Modal({ isOpen, onCloseAction, title, children }: ModalProps) {
  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onCloseAction();
      }
    }

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [onCloseAction]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onCloseAction}
      ></div>

      {/* Modal */}
      <div className="relative z-10 w-full max-w-lg rounded-2xl border border-gray-800 bg-gray-900 p-6 shadow-2xl animate-in fade-in zoom-in-95">
        {title && (
          <h2 className="mb-4 text-xl font-semibold text-white"> {title} </h2>
        )}
        {children}
      </div>
    </div>
  );
}
