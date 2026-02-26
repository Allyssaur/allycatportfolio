import { useEffect, useRef } from "react";
import "./Illustrations.scss";
import { useNavigate } from 'react-router-dom';

import IMG1 from "./Images/crystlla.png";
import IMG2 from "./Images/prismbend.png";
import IMG3 from "./Images/Purrplar.png";
import IMG4 from "./Images/Theklas.png";
import IMG5 from "./Images/zozis.png";

export default function Illustrations() {
  const images = [IMG1, IMG2, IMG3, IMG4, IMG5, IMG1, IMG2, IMG3, IMG4];
  const containerRef = useRef(null);

    const navigate = useNavigate();
    const handleHOMEClick = () => {
    console.log('Button clicked, navigating now...'); 
    navigate('/allycatportfolio'); 
    }

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleClick = (e) => {
      const imgC = e.target.closest(".img-c");
      if (!imgC) return;

      if (imgC.classList.contains("isactive")) {
        imgC.classList.remove("positioned", "isactive");
        imgC.classList.add("postactive");
        setTimeout(() => imgC.remove(), 500);
        return;
      }

      const rect = imgC.getBoundingClientRect();

      container.querySelectorAll(".img-c.isactive").forEach(el => el.remove());

      const copy = imgC.cloneNode(true);
      copy.style.width = `${rect.width}px`;
      copy.style.height = `${rect.height}px`;
      copy.style.left = `${rect.left + window.scrollX - 8}px`;
      copy.style.top = `${rect.top + window.scrollY - 8}px`;

      imgC.after(copy);

      requestAnimationFrame(() => {
        copy.classList.add("isactive", "positioned");
      });
    };

    container.addEventListener("click", handleClick);
    return () => container.removeEventListener("click", handleClick);
  }, []);

  return (
    <div className="grid-wrap">
      <div className="backbtn" onClick={handleHOMEClick}>
            ←
        </div>
    <div className="image-grid" ref={containerRef}>
      {images.map((src, i) => (
        <div
          key={i}
          className="img-c"
          style={{ backgroundImage: `url(${src})` }}
        >
          <div className="img-w">
            <img src={src} alt="" />
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}
