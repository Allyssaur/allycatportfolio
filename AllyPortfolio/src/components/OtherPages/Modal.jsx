import { useEffect } from "react";
import "./Modal.scss"

export default function Modal({ show, onClose, children }) {
  // Close on ESC key
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "Escape") onClose();
    }
    if (show) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";  // Prevent background scroll
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [show, onClose]);

  if (!show) return null;

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
      >
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
        style={{
          
        }}
      >
        {/* Close Button */}
        <button className="xbutton"
          onClick={onClose}
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  );
}
