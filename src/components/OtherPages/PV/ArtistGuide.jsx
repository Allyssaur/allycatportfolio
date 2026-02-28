import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import './ArtistGuide.scss';
import {useNavigate} from "react-router-dom"

gsap.registerPlugin(ScrollTrigger);

const pageData = [
  { front: "https://github.com/Allyssaur/allycatportfolio/blob/main/src/components/OtherPages/PV/Images/AMPArtistGuideFront.png?raw=true", back: "https://github.com/Allyssaur/allycatportfolio/blob/main/src/components/OtherPages/PV/Images/ArtistGuidePages2.png?raw=true", isCover: true,},
  { front: "https://github.com/Allyssaur/allycatportfolio/blob/main/src/components/OtherPages/PV/Images/ArtistGuidePages3.png?raw=true", back: "https://github.com/Allyssaur/allycatportfolio/blob/main/src/components/OtherPages/PV/Images/ArtistGuidePages4.png?raw=true" },
  { front: "https://github.com/Allyssaur/allycatportfolio/blob/main/src/components/OtherPages/PV/Images/ArtistGuidePages5.png?raw=true", back: "https://github.com/Allyssaur/allycatportfolio/blob/main/src/components/OtherPages/PV/Images/ArtistGuidePages6.png?raw=true" },
  { front: "https://github.com/Allyssaur/allycatportfolio/blob/main/src/components/OtherPages/PV/Images/ArtistGuidePages7.png?raw=true", back: "https://github.com/Allyssaur/allycatportfolio/blob/main/src/components/OtherPages/PV/Images/ArtistGuidePages8.png?raw=true" },
  { front: "https://github.com/Allyssaur/allycatportfolio/blob/main/src/components/OtherPages/PV/Images/ArtistGuidePages9.png?raw=true", back: "https://github.com/Allyssaur/allycatportfolio/blob/main/src/components/OtherPages/PV/Images/ArtistGuidePages10.png?raw=true" },
  { front: "https://github.com/Allyssaur/allycatportfolio/blob/main/src/components/OtherPages/PV/Images/ArtistGuidePages11.png?raw=true", back: "https://github.com/Allyssaur/allycatportfolio/blob/main/src/components/OtherPages/PV/Images/ArtistGuidePages12.png?raw=true" },
  { front: "https://github.com/Allyssaur/allycatportfolio/blob/main/src/components/OtherPages/PV/Images/ArtistGuidePages13.png?raw=true", back: "https://github.com/Allyssaur/allycatportfolio/blob/main/src/components/OtherPages/PV/Images/ArtistGuidePages14.png?raw=true" },
  { front: "https://github.com/Allyssaur/allycatportfolio/blob/main/src/components/OtherPages/PV/Images/ArtistGuidePages15.png?raw=true", back: "https://github.com/Allyssaur/allycatportfolio/blob/main/src/components/OtherPages/PV/Images/ArtistGuidePages16.png?raw=true" },
  { front: "https://github.com/Allyssaur/allycatportfolio/blob/main/src/components/OtherPages/PV/Images/ArtistGuidePages17.png?raw=true", back: "https://github.com/Allyssaur/allycatportfolio/blob/main/src/components/OtherPages/PV/Images/ArtistGuidePages18.png?raw=true" },
  { front: "https://github.com/Allyssaur/allycatportfolio/blob/main/src/components/OtherPages/PV/Images/ArtistGuidePages19.png?raw=true", back: "https://github.com/Allyssaur/allycatportfolio/blob/main/src/components/OtherPages/PV/Images/ArtistGuidePages20.png?raw=true" },
  { front: "https://github.com/Allyssaur/allycatportfolio/blob/main/src/components/OtherPages/PV/Images/ArtistGuidePages21.png?raw=true", back: "https://github.com/Allyssaur/allycatportfolio/blob/main/src/components/OtherPages/PV/Images/ArtistGuidePages22.png?raw=true" },
  { front: "https://github.com/Allyssaur/allycatportfolio/blob/main/src/components/OtherPages/PV/Images/ArtistGuidePages23.png?raw=true", back: "https://github.com/Allyssaur/allycatportfolio/blob/main/src/components/OtherPages/PV/Images/ArtistGuidePages24.png?raw=true" },
  { front: "https://github.com/Allyssaur/allycatportfolio/blob/main/src/components/OtherPages/PV/Images/ArtistGuidePages25.png?raw=true", back: "null" },
]

export default function Guide() {
  const bookcontainRef = useRef(null);
  const pagesRef = useRef([]);
  const bookBaseRef = useRef(null);
  
   const navigate = useNavigate();
    const handleBackClick = () => {
    console.log('Button clicked, navigating now...'); 
    navigate('/allycatportfolio/productionvisuals'); 
    }

  useGSAP(() => {
    const pages = pagesRef.current;
    const totalPages = pages.length;
    const bookBase = bookBaseRef.current;

    const trigger = ScrollTrigger.create({
      trigger: bookcontainRef.current,
      start: "top top",
      end: () => `+=${window.innerHeight * (totalPages - 1)}`,
      scrub: 0.1,
      pin: true,
      onUpdate: (self) => {
        const progress = self.progress;
        const currentIndex = Math.min(
          totalPages,
          Math.max(0, Math.round(progress * totalPages))
        );

        // Flip pages
        pages.forEach((bookpage, i) => {
          if (i < currentIndex) {
            
            bookpage.style.transform = "rotateY(-180deg)";
            bookpage.style.zIndex = i + 1;
          } else {
            bookpage.style.transform = "rotateY(0deg)";
            bookpage.style.zIndex = totalPages - i;
          }
        });

        const flipInThreshold = 0.5 / totalPages;
        const flipOutThreshold = (totalPages - 1) / totalPages;

        if (
          self.progress >= flipInThreshold &&
          self.progress <= flipOutThreshold
        ) {
          gsap.to(bookBase, {
            opacity: 1,
            duration: 0.15,
            ease: "power2.out",
            overwrite: true,
          });
        } else {
          gsap.to(bookBase, {
            opacity: 0,
            duration: 0.15,
            ease: "power2.in",
            overwrite: true,
          });
        }
      },
    });

    return () => trigger.kill();
  }, []);

  // Helper to register page refs
  const addToPagesRef = (el) => {
    if (el && !pagesRef.current.includes(el)) {
      pagesRef.current.push(el);
    }
  };

  return (

    <>
    <div className="backbtn" onClick={handleBackClick}>
            ←
        </div>
    <div className="book-container" ref={bookcontainRef}>

        <div className="isworking">
          <p>Please turn your device to landscape mode</p>
      </div>

      <div className="book-base" ref={bookBaseRef}></div>

      <div className="book">
        {pageData.map((bookpage, index) => (
          <div className="bookpage" ref={addToPagesRef} key={index}>
            <div className={`side front ${bookpage.isCover ? "cover" : ""}`}>
              <img src={`${bookpage.front}`}/>
            </div>

            {bookpage.back && (
              <div className="side back">
                <img src={`${bookpage.back}`}/>
              </div>
            )}
          </div>
        ))}
        <div className="cover side back">Back Cover</div>
      </div>
    </div>
    </>
  );
}