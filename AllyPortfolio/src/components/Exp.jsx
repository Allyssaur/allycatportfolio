import React, { useRef } from "react"
import "./Home.scss"
import "./Exp.scss"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import catFall from "../assets/kittysidejump.png"
import pencil from "../assets/pencil.png"
import pen from "../assets/pen.png"
import sissors from "../assets/sissors.png"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useNavigate } from 'react-router-dom'

gsap.registerPlugin(ScrollTrigger);

const ampInfo = { id: 1, type:"work", where: "WALMART AMP", jobtitle: "Artist Services Coordinator", when:"2024-CURRENT", 
  desc1:"-Supports the preparation, hospitality coordination, and full setup/tear-down operations for high-profile touring artists", 
  desc2: "-Facilitates room transitions, event setups, and decor execution while serving as a professional ambassador for our venue across both front-of-house and back-of-house operations", 
  desc3: "-Maintains consistent communication with external vendors and facilities to coordinate and fulfill specialized artist requests prior to on-site arrival",
  desc4: "-Collaborates cross-functionally with internal and external departments, sponsors, and partners to fulfill special requests, execute projects, and maintain the overall facility excellence",
  desc5: "-Enhances operational processes by leveraging graphic design expertise, advanced Excel documentation, and innovative problem-solving", }
//}
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


export default function Exp () {
    
const expRef = useRef(null);
const timelineSampRef = useRef(null);
const catFallExpRef=useRef(null);
const penExpRef=useRef(null);
const pencilExpRef=useRef(null);
const sissorsExpRef=useRef(null);
const navigate = useNavigate();

  const handleClick = () => {
    console.log('Button clicked, navigating now...'); 
    navigate('/timeline'); 
  };

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
        //defaults: { duration: 1 },
      scrollTrigger: {
        trigger: expRef.current,
        start: 'center center',
         end: desktop ? "+=" + window.innerHeight * 2 : "+=100%" + window.innerHeight * 2,
        scrub: 1,
        //markers: true,
        anticipatePin: true,
        pin: "#expwrapper",
        invalidateOnRefresh: true,
      },

     }); 
        tl.to(sissorsExpRef.current, { rotate: '60', y: "0%", opacity: 0 }, 3.5);
        tl.to(penExpRef.current, { rotate: '60', y: "0%", opacity: 0 }, 3);
        tl.to(pencilExpRef.current, { rotate: '60', y: "0%", opacity: 0 }, 3)

      if (desktop) {
        tl.fromTo(catFallExpRef.current,{   x:"60%", y:"-520%", opacity:0, rotate: 0 }, { x: '60%', y: "-440%", rotate: -20, opacity: 1, }, 0);
        tl.fromTo(sissorsExpRef.current, { x: '-35%', opacity:0, y:"-220%" }, { x:"-40%", y: "-150%", rotate: 240, opacity: 1 }, 0.2);
        tl.fromTo(pencilExpRef.current, { x: '0%', y: "-100%", opacity:0, rotate:220 }, { x: '170%', y:"-1300%", rotate: 10, opacity: 1}, 0.2);
        tl.fromTo(penExpRef.current, { opacity:0, x:"0%", y: "0%", rotate:20}, {x: '180%', y: "0%", rotate: 300, opacity: 1 }, 0.6);    
        tl.fromTo(timelineSampRef.current, { x: '0', y: '0%', opacity: 0, }, { x: '0%', y: "0%", opacity: 1 }, .5);
        tl.to(catFallExpRef.current, { rotate: '0', x: "0%", y: "0%", opacity: 0 }, 3.5);
        tl.to(timelineSampRef.current, { y: "-1000%", opacity: 0}, 3)
      }

      /* -------------------------
         TABLET (SIMPLIFIED)
      ------------------------- */
      if (tablet) {
        tl.fromTo(catFallExpRef.current,{   x:"50%", y: '-520%', opacity:0, scale: 0.4, rotate: 0 }, { x: '50%', y: '-370%', scale: 0.6, rotate: -5, opacity: 1, }, 0);
        tl.fromTo(sissorsExpRef.current, { x: '-25%', opacity:1, scale: 0.4 }, { x: '0%', y: "-50%", rotate: 0, opacity: 1 }, 0.8);
        tl.fromTo(pencilExpRef.current, { x: "-20%", y: "-2500", opacity:0, scale: 0.1 }, { x: "20%", y: "-2050%", scale: 0.5, opacity: 1, rotate: -50}, 1);
        tl.fromTo(penExpRef.current, { x: "130%", opacity:0, y: "-1500%", scale: 0.3, rotate:0}, {x: '130%', y:"-1000%", scale: 0.5, rotate: 0, opacity: 1 }, 0.8);    
        tl.fromTo(timelineSampRef.current, { x: '0%', opacity: 1 }, { x: '0%', y: "0%", opacity: 1 }, .5);
        tl.to(catFallExpRef.current, { x: '0%', y: '0%', scale: 0.6, rotate: -15, opacity: 0, }, 2);
        }

      /* -------------------------
         MOBILE (MINIMAL)
      ------------------------- */
      if (mobile) {
         tl.fromTo(timelineSampRef.current, { x: '0%', y: '0%', opacity: 0, scale: 0.5 }, { x: '0%', y: "0%", opacity: 1, scale: 1 }, 0);
        tl.fromTo(catFallExpRef.current,{   x:"0%", y: '-400%', opacity:0, scale: 0.4, rotate: 10 }, { x: '0%', y: '-402%', scale: 0.6, rotate: 0, opacity: 1, }, 1);
        tl.fromTo(sissorsExpRef.current, { x: '-50%', opacity:0, scale: 0.4, rotate: 240}, { x: '5%', y: "-30%",rotate: 0, opacity: 1 }, 1.3);
        tl.fromTo(pencilExpRef.current, { x: '-40%', y: "-2000%", opacity:0, scale: 0.1, rotate:220 }, { x: '-40%', y:"-1950%", scale: 0.4, rotate: 50, opacity: 1}, 1.3);
        tl.fromTo(penExpRef.current, { y:"-1000", opacity:0, scale: 0.3, rotate:20}, {x: '-40%', y: "-830%", scale: 0.5, rotate: 300, opacity: 1 }, 2);    

      }
    }
  )

  return () => mm.revert()
}, [])

  
     return(
          <div id="expwrapper">
            <div className="exp" ref={expRef}>
              <div ref={timelineSampRef} className="timelinesamp sampexp">
                    <div className='sampimg2'>
                      <div className="sampcon" data-bg-text={`${ampInfo.when}`}>
                        <div className="testcaption">
                          <span className="expborder">EXP</span>
                        </div>
                        <div className="tlHead">
                          <div className={`type ${ampInfo.type}`}/>
                            {ampInfo.where}
                          </div>
                          <div className="sampjobtitle">
                            {ampInfo.jobtitle}
                          </div>
                          <div className="sampwaresused">
                            <div className={`${ware.ps} waressmol`} />
                            <div className={`${ware.ai} waressmol`} />
                            <div className={`${ware.ind} waressmol`} />
                            <div className={`${ware.excel} waressmol`} />
                          </div>
                          <div className="sampdesc">
                            <p>{ampInfo.desc1}</p>
                            <p>{ampInfo.desc2}</p>
                            <p>{ampInfo.desc3}</p>
                            <p>{ampInfo.desc4}</p>
                            <p>{ampInfo.desc5}</p>
                            
                          </div>
                          <div className="tlbutton">
                            <button onClick={handleClick}>FULL TIMELINE</button>
                          </div>
                      </div>
                    </div>
                  </div>
              </div>
              <div className="sissorsDiv" ref={sissorsExpRef}>
                            <img src={sissors} />
                        </div>
                        <div className="penDiv" ref={penExpRef}>
                            <img src={pen} />
                        </div>
                        <div className="pencilDiv" ref={pencilExpRef}>
                            <img src={pencil} />
                        </div>
                        <div className='catDiv' ref={catFallExpRef}>
                          <img src={catFall}/>
                        </div>
            </div>
);
}