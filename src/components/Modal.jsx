// import { useEffect } from "react";
// import "./modal.scss"

// export default function Modal({ show, onClose, children }) {

//   useEffect(() => {
//   document.body.style.overflow = isOpen ? "hidden" : "auto";
// }, [isOpen]);

//   if (!show) return null;

//   return (
//     <div
//       className="modal-overlay"
//       onClick={onClose}
//       >
//       <div
//         className="modal-content"
//         onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
//         style={{
          
//         }}
//       >
//         {/* Close Button */}
//         <button className="xbutton"
//           onClick={onClose}
//         >
//           ✕
//         </button>
//         {children}
//       </div>
//     </div>
//   );
// }
