import React, { useRef, useState } from "react"
import "./Home.scss"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import catFall from "../assets/kittysidejump.png"
import pencil from "../assets/pencil.png"
import pen from "../assets/pen.png"
import sissors from "../assets/sissors.png"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger);

const ampInfo = { id: 1, type:"work", where: "WALMART AMP", jobtitle: "Artist Services Coordinator", when:"2024-CURRENT", desc1:"Artist Hospitality is my #1 Priority", desc2: "Graphic Design for our Production team", desc3: "Artist Services Guide (sent to tours) for 2024 and 2025 One-Sheet - advertises the highlights of our venue to potential tours Other misc. Projects; Various signage throughout the backstage areas, menu cards for catering, backstage maps for tour usage" }
    const ware = {
        ps: "ps",
        ai: "ai",
        ind: "ind",
        blend: "blend",
        excel: "excel",
        node: "node",
        javs: "javs",
        htm: "htm",
        cs: "cs",
        gsap: "gsap"
    }


export default function Skills () {
    
const skillsRef = useRef(null);
const swSkillsRef = useRef(null);
const catFallRef=useRef(null);
const penRef=useRef(null);
const pencilRef=useRef(null);
const sissorsRef=useRef(null);

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
      scrollTrigger: {
        trigger: skillsRef.current,
        start: 'center center',
        end: desktop ? "+=" + (window.innerHeight * 2) : "+=100%" + window.innerHeight * 2,
        scrub: 0.5,
        //markers: true,
        pin: "#skillswrapper",
        anticipatePin: true,
        invalidateOnRefresh: true,
      },
    })

    if (desktop) {
        tl.fromTo(catFallRef.current, {opacity:0, x: "80%", y: "-1000%" }, {x: "70%", y:"-350%", opacity: 1}, 0)
        tl.fromTo(sissorsRef.current,{ opacity:0, x: "-20%", y: "-220%"}, { y: '-170%', rotate: 240, opacity: 1,}, 0.2);
        tl.fromTo(pencilRef.current,{ x: "180%", y: '-1000%', opacity:0, rotate:220 }, { x: "180%", y: '-500%', rotate: 40, opacity: 1 }, 0.2);
        tl.fromTo(penRef.current,{ x:"150%", y: '1000%', opacity:0, rotate:20}, { x: "150%", y: '-400%', rotate: 320, opacity: 1 }, 0.6);
        tl.fromTo(swSkillsRef.current, {y: '50%', opacity: 0}, { opacity: 1, y: '0%' }, .5); 
        tl.to(catFallRef.current, { opacity: 0, x: "50%", y: "0%" }, 2.5);
        tl.to(swSkillsRef.current, { y: "-50%", opacity: 0}, 3);
        tl.to(sissorsRef.current, { rotate: '60', opacity: 0, y: "0%" }, 3.5);
        tl.to(penRef.current, { rotate: '60', opacity: 0, y: "0%",}, 3);
        tl.to(pencilRef.current, { rotate: '60', opacity: 0, y: "0%" }, 3.2);
      }

      /* -------------------------
         TABLET (SIMPLIFIED)
      ------------------------- */
      if (tablet) {
        tl.fromTo(catFallRef.current, {opacity:0, x: "0%", y: "-480%", scale: 0.6 }, { x: "40%", y:"-360%", opacity: 1, scale: 0.6}, 0);
        tl.fromTo(swSkillsRef.current, {opacity: 0, scale: 0.5, y: '0%'}, { x:"3%", y: '0%', opacity: 1, scale: 1 }, 0); 
        tl.fromTo(sissorsRef.current,{ opacity:0, scale: 0.5}, { y: '-50%', rotate: 240, opacity: 1,}, 0.2);
        tl.fromTo(pencilRef.current,{ opacity:0, scale: 0.5, rotate:220 }, { x:"-20%", rotate: 40, opacity: 1, y: '-1800%'}, 0.2);
        tl.fromTo(penRef.current,{ y: '-100%', opacity:0, scale: 0.5, rotate:20}, { x: "170%", y: '-500%', rotate: 320, opacity: 1 }, 0.6);
        tl.fromTo(swSkillsRef.current, {opacity: 0, scale: 0.5,}, { opacity: 1, scale: 1 }, .5);        
      }

      /* -------------------------
         MOBILE (MINIMAL)
      ------------------------- */
      if (mobile) {
        tl.fromTo(catFallRef.current, {opacity:1, x: "0%", y: "-280%" }, { x: "0%", y:"-380%", opacity: 0, scale: 0.7}, 0);
        tl.fromTo(swSkillsRef.current, {opacity: 0, scale: 0.5, y: '0%'}, { x:"3%", y: '0%', opacity: 1, scale: 1 }, 0); 
        tl.fromTo(sissorsRef.current,{ opacity:0, scale: 0.5, y: "-200%", x:"15%"}, { x: "15%", y: '-50%', rotate: 240, opacity: 1,}, 0.5);
        tl.fromTo(pencilRef.current,{ opacity:0, scale: 0.4, y:"-950%", x: "150%" }, { x: "150%", rotate: 340, opacity: 1, y: '-800%'}, 0.5);
        tl.fromTo(penRef.current,{ y: '-650%', opacity:0, scale: 0.3, rotate:20}, { y: '-500%', rotate: 320, opacity: 1 }, 0.6);
      }
    }
  )

  return () => mm.revert()
}, [])

     return(
            <div id="skillswrapper">
                <div className="skills" ref={skillsRef}>
                    <div ref={swSkillsRef} className="softwareskills sampsw">
                        <div className='sampimg'>
                            <div className="sampcon">
        
                        <div className='testcaption'>
                            <span className="swborder">SKILLS</span>
                        </div>

                        <div className="adobesw">
                            <div className="header2">
                                <p>ADOBE</p>
                            </div>
                            <div className="wares">
                                <div className="ware">
                                    <div className={`${ware.ps} imgcont`}/>
                                </div>
                                <div className="ware">
                                    <div className={`${ware.ai} imgcont`}/>
                                </div>
                                <div className="ware">
                                    <div className={`${ware.ind} imgcont`}/>
                                </div>
                            </div>
                        </div>

                        <div className="fedsw">
                            <div className="header2">
                                <p>WEB DEVELOPMENT</p>
                            </div>

                            <div className="wares">
                                <div className="ware">
                                    <div className={`${ware.htm} imgcont`}/>
                                </div>
                                <div className="ware">
                                    <div className={`${ware.cs} imgcont`}/>
                                </div>
                                <div className="ware">
                                    <div className={`${ware.javs} imgcont`}/>
                                </div>
                                <div className="ware">
                                    <div className={`${ware.node} imgcont`}/>
                                </div>
                                <div className="ware">
                                    <div className={`${ware.gsap} imgcont`}/>
                                </div>
                            </div>
                        </div>

                        <div className="othersw">
                            <div className="header2"> 
                                <p>OTHER</p>
                        </div>
                        <div className="wares">
                            <div className="ware">
                                <div className={`${ware.excel} imgcont`}/>
                            </div>
                            <div className="ware">
                                <div className={`${ware.blend} imgcont`}/>
                            </div>
                        <div className="ware">
                            <div className={`${ware.node} imgcont`}/>
                        </div>
                    </div>
                </div>
            </div>  
        </div> 
        </div>
        </div>

        <div className="sissorsDiv" ref={sissorsRef}>
                        <img className="sissorsFall" src={sissors} />
                    </div>
                    <div className="penDiv" ref={penRef}>
                        <img className="penFall" src={pen} />
                    </div>
                    <div className="pencilDiv" ref={pencilRef}>
                        <img className="pencilFall" src={pencil} />
                    </div>
                    <div ref={catFallRef}className='catDiv'>
                        <img className="catFall" src={catFall}/>
                    </div>
        </div>

)}