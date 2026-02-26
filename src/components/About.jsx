import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './Home.scss';
import desk from "../assets/desk.png"
import catPeek from "../assets/cat.png"
import catJump from "../assets/catjump.png"
import tail from "../assets/tail.png"
import laptop  from "../assets/laptop.png"
import plant from "../assets/plant.png";
import pencup from "../assets/pencup.png";
import { useNavigate } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

export default function About() {

const navigate = useNavigate();
    const handleAboutClick = () => {
    console.log('Button clicked, navigating now...'); 
    navigate('/aboutme'); 
    }


  const aboutRef = useRef(null);
  const parallaxRef = useRef(null);
  const catPeekRef = useRef(null);
  const tailRef=useRef(null);
  const pencupRef=useRef(null);
  const plantRef=useRef(null);
  const heroTitle=useRef(null);
  const subHeroTitle=useRef(null);
  const catJumpRef=useRef(null);
  const copy = useRef(null);
  const btn = useRef(null);

useGSAP(() => {
  const mm = gsap.matchMedia()

  mm.add(
    {
      desktop: "(min-width: 1024px)",
      tablet: "(min-width: 768px) and (max-width: 1023px)",
      mobile: "(max-width: 767px)",
    },
    (context) => {
      const { desktop, tablet, mobile } = context.conditions

      const tl = gsap.timeline({
        //defaults: { duration: 1 },
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top top",
          end: desktop ? "+=" + (window.innerHeight * 2) : "+=100%" + window.innerHeight * 2,
          scrub: 1,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          
        },
      })
      /* -------------------------
         DESKTOP ONLY
      ------------------------- */
      if (desktop) {
        tl.set(catPeekRef.current, { y: 0 }, 0)
        tl.set(copy.current, { opacity: 1 }, 0)
        tl.to(heroTitle.current, { y: "4%", opacity: 1 }, 1)
        tl.to(catPeekRef.current, { y: "-40%" }, 1)
        tl.to(catPeekRef.current, { y: 0 }, 3.5)
        tl.to(subHeroTitle.current, { y: "4%", opacity: 1 }, 5)
        tl.to(catPeekRef.current, { y: "-90%" }, 5)
        tl.to(btn.current, { y: "20%", opacity: 1 }, 7)
        tl.to(catPeekRef.current, { y: 0 }, 8)
        tl.to(tailRef.current, { x: "-90%" }, 9)
        tl.fromTo(catJumpRef.current, { y: 0, opacity: 1 },{ x: 200, y: -500, scale: 1.5, rotation: 30, opacity: 0 },12)
        tl.to(plantRef.current, { y: -150, x: -100, scale: 1.5, rotation: -240, opacity: 0 }, 12.5)
        tl.to(pencupRef.current, { y: -20, x: 50, scale: 1.2, rotation: 240, opacity: 0 }, 12.5)
      }

      /* -------------------------
         TABLET (SIMPLIFIED)
      ------------------------- */
      if (tablet) {
        tl.set(catPeekRef.current, { y: 0 }, 0)
        tl.set(copy.current, { opacity: 1 }, 0)
        tl.to(heroTitle.current, { y: "-4%", opacity: 1 }, 1)
        tl.to(catPeekRef.current, { y: -50 }, 1)
        tl.to(catPeekRef.current, { y: 0 }, 3.5)
        tl.to(subHeroTitle.current, { y: "4%", opacity: 1 }, 5)
        tl.to(catPeekRef.current, { y: "-100%" }, 5)
        tl.to(btn.current, { y: "20%", opacity: 1 }, 7)
        tl.to(catPeekRef.current, { y: 1 }, 7)
        tl.to(tailRef.current, { x: "-90%" }, 8)
        tl.to(catJumpRef.current,{ y: -300, scale: 1.3, opacity: 0 },10)
        tl.fromTo(catJumpRef.current, { y: 0, opacity: 1 },{ x: 350, y: 500, scale: 1.5, rotation: 30, opacity: 1 },12)
        tl.to(plantRef.current, { y: -150, x: -100, scale: 1.5, rotation: -240, opacity: 0 }, 12.5)
        tl.to(pencupRef.current, { y: -20, x: 50, scale: 1.2, rotation: 240, opacity: 0 }, 12.5)
      }

      /* -------------------------
         MOBILE (MINIMAL)
      ------------------------- */
      if (mobile) {
        tl.set(catPeekRef.current, { y: 0 }, 0)
        tl.set(copy.current, { opacity: 1 }, 0)
        tl.to(heroTitle.current, { y: "4%", opacity: 1 }, 1)
        tl.to(catPeekRef.current, { y: "-30%" }, 1)
        tl.to(catPeekRef.current, { y: 0 }, 3.5)
        tl.to(catPeekRef.current, { y: "-85%" }, 4)
        tl.to(subHeroTitle.current, { y: "4%", opacity: 1 }, 5)
        tl.to(btn.current, { y: "20%", opacity: 1 }, 7)
        tl.to(catJumpRef.current, { opacity: 0 }, 7)
      }
    }
  )

  return () => mm.revert()
}, [])

  
  return (
    <>
    <div className='about' ref={aboutRef}>
    <div className='parallax-outer'>
      <div ref={parallaxRef} className='parallax'>
               <img className='desk' src={desk} />
               <img className='laptop' src={laptop} />
               <img ref={plantRef} className='plant' src={plant} />
               <img ref={pencupRef} className='pencup' src={pencup} />
               <img ref={tailRef} className='tail' src={tail} />
               <img ref={catPeekRef} className='catPeek' src={catPeek} />
               <img ref={catJumpRef} className='catJumpin' src={catJump} />
                <div className='copy'>
                  <div ref={heroTitle} className='herotitle'>Hello There.</div>
                  <div ref={subHeroTitle} className='subherotitle'> I'm Ally.  Your artistic ally. </div>
                  <span ref={btn} className='aboutbtn' onClick={handleAboutClick}>About Me</span>
                </div>
      </div>
    </div>
    </div>
    </>
  )}