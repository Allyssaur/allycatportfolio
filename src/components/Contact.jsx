import './Home.scss';
import gsap from 'gsap'
import { useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from "@gsap/react"
import catFall from "../assets/kittysidejump.png"
import pencil from "../assets/pencil.png"
import pen from "../assets/pen.png"
import sissors from "../assets/sissors.png"
import IMG1 from '../assets/Icons/emailicon.png'
import IMG2 from '../assets/Icons/locationicon.png'
import IMG3 from '../assets/Icons/phoneicon.png'
import happyKitty from '../assets/happykitty.png'

gsap.registerPlugin(ScrollTrigger);


export default function Contact() {

    const contactRef = useRef(null);
    const bannerRef = useRef(null);
    const catFallRef=useRef(null);
    const penRef=useRef(null);
    const pencilRef=useRef(null);
    const sissorsRef=useRef(null);
    const happyKittyRef=useRef(null);

    useGSAP( () => {

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
      scrollTrigger: {
        trigger: contactRef.current,
        start: 'center center',
        end: "+=" + (window.innerHeight * 2),
        scrub: 1,
        anticipatePin: true,
        pin: "#contactwrapper",
        //invalidateOnRefresh: true,
        //markers: true,
        // onUpdate: (self) => {
        //   setBackground(Math.ceil(self.progress * 100 + 20))
        //   console.log(Math.ceil(self.progress * 100))
        // },
      },
    })

     if (desktop) {
        tl.fromTo(penRef.current,{ x:"190%", y: "0", opacity:0}, { x: "180%", y: '1200%', opacity: 1, scale: 0.6, rotate: 190, ease: "elastic.out(1, 0.2)", duration: 2.5}, 1);
        tl.fromTo(bannerRef.current, { x: '-30%', y: '90%', opacity: 0, scale: 0.1, rotation: '-90',}, { x: '-30%', y: '90%', duration: 2.5, opacity: 1, scale: 1, rotation: '8' }, 1.5); 
        tl.fromTo(sissorsRef.current,{ x: "-15%", y: "100%", opacity:0, rotate: 180 }, {x: "-15%", opacity: 1, scale: 0.5, ease: "bounce.out", y:"680%", duration: 2.5}, 2);
        tl.fromTo(pencilRef.current,{ x: "220%", y: '900%', opacity:0 }, { x: "170%", y: '2100%', opacity: 1, scale: 0.6, rotate: 180, ease: "bounce.out", duration: 2.5}, 2);
 
        tl.fromTo(happyKittyRef.current, { x: "15%", y: "90%", opacity:0}, {x: "15%", y: "90%", opacity: 1}, 4);
      }

      /* -------------------------
         TABLET (SIMPLIFIED)
      ------------------------- */
      if (tablet) {
        // tl.fromTo(catFallRef.current, {opacity: 0, y: "-120%"}, {opacity: 0, y: "-120%"}, 0);
        tl.fromTo(happyKittyRef.current, { x: "15%", y: "50%", opacity:0, scale: 0.6}, {x: "15%", y: "50%", opacity: 1, scale: 0.6}, 0);
         tl.fromTo(bannerRef.current, { y: "0%", rotation: '-50', opacity: 0}, {x: "0", y: "0%", rotation: '8', opacity: 1}, .5);
        tl.fromTo(sissorsRef.current,{ y: "50%", opacity:0, scale: 0.3}, { y: '450%', rotate: 0, scale: 0.3, opacity: 1,}, 0.2);
        tl.fromTo(pencilRef.current,{ x: "140%", opacity:0, scale: 0.3, rotate:220 }, { x: "140%", rotate: 0, opacity: 1, y: '1250%'}, 0.2);
        tl.fromTo(penRef.current,{ x: "175%", y: '75%', opacity:0, scale: 0.3, rotate:20}, { x:"175%", y: '750%', rotate: 0, opacity: 1 }, 0.6);       
      }

      /* -------------------------
         MOBILE (MINIMAL)
      ------------------------- */
      if (mobile) {
         tl.fromTo(happyKittyRef.current, { x: "10%", y: "50%", opacity:0, scale: 0.6}, {x: "10%", y: "50%", opacity: 1, scale: 0.6}, 0);
         tl.fromTo(bannerRef.current, {x: "0", y: "120%", rotation: '-50', opacity: 0}, {x: "0", y: "160%", rotation: '8', opacity: 1}, .5);
        tl.fromTo(sissorsRef.current,{ opacity:0, scale: 0.2, x:"0%"}, { x: "0%", y: '480%', scale: 0.2, rotate: 360, opacity: 1,}, 1);
        tl.fromTo(pencilRef.current,{ x: "140%", opacity:0, scale: 0.25, rotate:220 }, { x:"140%", rotate: 350, opacity: 1, y: '1400%'}, 1);
        tl.fromTo(penRef.current,{ y: '-100%', opacity:0, scale: 0.25, rotate:20}, { x: "160%", y: '775%', rotate: 350, opacity: 1 }, 1.2);
       
      }
    }
  )

  return () => mm.revert()
}, [])
    return (
<div id="contactwrapper">

    <div className='contact' ref={contactRef}>
        <div className="sissorsDiv" ref={sissorsRef}>
                        <img className="sissorsFall" src={sissors} />
                    </div>
                    <div className="penDiv" ref={penRef}>
                        <img className="penFall" src={pen} />
                    </div>
                    <div className="pencilDiv" ref={pencilRef}>
                        <img className="pencilFall" src={pencil} />
                    </div>

        <div ref={bannerRef} className="chatbanner">
            <span className="bannertitle">
                LET'S CHAT.
            </span>
        </div>

        <div className="happyDiv" ref={happyKittyRef}>
                        <img className="happyKitty" src={happyKitty}/>
                    </div>
            <div className='contactcont'>
                <div className='quickpara'>
                Let's discuss your next idea.
                <br/>
                Let's make it happen.
                </div>
                <div className="smolcomment">
                    (I promise. I don't bite.)
                </div>
                <div className='infosec'>
                <div className="circle">
                    <img src={IMG2}/>
                </div>
                    <div className="info">
                        <p>ROGERS, ARKANSAS</p>
                    </div>
                    <div className="circle">
                        <img src={IMG1}/>
                    </div>
                    <div className="info">
                        <p>OWLLYSSA@GMAIL.COM</p>
                    </div>
                    <div className="circle">
                        <img src={IMG3}/>
                    </div>
                    <div className="info">
                        <p>(479) 387-7652</p>
                    </div>
                </div>
                </div>
            </div>  
            </div>   
    )
 }