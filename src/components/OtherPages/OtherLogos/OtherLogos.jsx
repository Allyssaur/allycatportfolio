import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "./OtherLogos.scss";
import { useNavigate } from 'react-router-dom';
import ACS from "./Images/ACS.png";
import DD from "./Images/DecibelDaddies.png";
import KT from "./Images/KimonosTailColor.png";


gsap.registerPlugin(ScrollTrigger);

const logos = [
  { id: 1, title: "Kimono's Tail", date: '2026',
    text1: "Kimono’s Tail is a concept brand centered on sustainability, craftsmanship, and refined beauty. Positioned as slightly luxurious; the brand called for a logo that was simple, clean, and elegant.",
    text2: "The logo is inspired by Mizuhiki, the traditional Japanese art of decorative knot tying. While Mizuhiki has many ceremonial meanings, careful research was conducted to ensure the chosen knot references were appropriate and intentional. Because Kimono’s Tail reimagines secondhand kimonos into luxury, hand-sewn pet collars, Mizuhiki felt like the most meaningful and culturally respectful symbol compared to that of a conventional recycling icon. The brand aims to be both playful and purposeful, blending education on sustainability with an appreciation for Japanese culture, while celebrating thoughtful reuse and timeless design.",
    image: KT},
  { id: 2, title: "Decibel Daddies", date: '2025', 
    text1: "Decibel Daddies is a Northwest Arkansas–based quartet made up of—yes, you guessed it—dads. The group takes well-known classics and current chart-toppers and transforms them into clever parodies, with lyrics packed full of humor only dads can truly appreciate.",
    text2: "The client wanted the logo to capture the playful spirit of the group while still nodding to the traditional feel of a classic vocal quartet. This balance is reflected in the use of beer glasses and a barber pole—symbols of camaraderie, nostalgia, and lighthearted fun—blended with a timeless aesthetic.",
    image: DD},
  { id: 3, title: "Ally Cat Studios", date: '2024',
    text1:"Ally Cat Studios is a personal brand built around creativity, approachability, and imagination. It represents its creator not only as a designer, but as a collaborative ally in the creative process. Over time, it became clear that many people struggle with taking the first step on a project. Ally Cat Studios was created to help bridge that gap by making the idea of getting started feel less intimidating.", 
    text2:"The logo features a custom character named Ally, who serves as the brand’s mascot. This character reinforces the brand’s friendly, welcoming tone and reflects its core mission: to encourage creativity, reduce creative anxiety, and make the beginning of any project feel more accessible and inviting.", 
    image: ACS 
  },
]

export default function otherLogos() {

  ScrollTrigger.clearScrollMemory("manual");
window.scrollTo(0, 0);

const navigate = useNavigate();
    const handleHOMEClick = () => {
    console.log('Button clicked, navigating now...'); 
    navigate('/'); 
    }

  const timelineRef = useRef(null);
  //const logosRef=useRef(null);
  const photosRef = useRef([]);
  const detailsRef = useRef([]);

  useGSAP(() => {
    const photos = photosRef.current;
    const details = detailsRef.current;

    gsap.set(photos, {
      opacity: 0,
      scale: 0.5,
    });

    gsap.set(details, {
      opacity: 0,
      y: 50,
    });

    // show first pair immediately
    gsap.set([photos[0], details[0]], {
      opacity: 1,
      scale: 1,
      y: 0,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".ol__timeline",
        start: "top top",
        end: `+=${photos.length * 100}%`,
        scrub: true,
        pin: ".right",
        // markers: true,
      },
    });

    photos.forEach((photo, i) => {
      if (i === 0) return;

      // PHOTO IN
      tl.to(photo, {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        ease: "power2.out",
      });

      // TEXT IN
      tl.to(
        details[i],
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
        },
        "<"
      );

      // PHOTO OUT (previous)
      tl.to(
        photos[i - 1],
        {
          opacity: 0,
          scale: 0.5,
          duration: 0.2,
          ease: "power2.in",
        },
        "<"
      );

      // TEXT OUT (previous)
      tl.to(
        details[i - 1],
        {
          opacity: 0,
          y: -40,
          duration: 0.5,
          ease: "power2.in",
        },
        "<"
      );
    });
  },
  { scope: timelineRef }
);


  return (
    <>

    <div className="backbtn" onClick={handleHOMEClick}>
            ←
        </div>

      <div className="ol__timeline" ref={timelineRef}>
        <div className="left">
          <div className="detailsWrapper">
            {logos.map((logo, i) => (
            <div ref={(el) => (detailsRef.current[i] = el)}
                className={`details ${logo.id}`}>
              <img className='logoimg' src={logo.image}/>
              <div className='headline'>
                {`${logo.title}`}
                </div>
                <div className="date">
                  {`${logo.date}`}
                </div>
              <p className="ol__text">
                {`${logo.text1}`}
              </p>
              <br/>
              <p className="ol__text">
                {`${logo.text2}`}
              </p>
              <div className="spacer"/>
            </div>
          ))}
          </div>
        </div>

        <div className="right">
          <div className="photos">

          {logos.map((logo, i) => (
            <div className='photo' ref={(el) => (photosRef.current[i] = el)}>
                  <img className="imgbox" src={logo.image}/>
            </div>
          ))}
          
        </div>
      </div>
    </div>
    </>
    )
}
