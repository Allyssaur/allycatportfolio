import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Draggable } from "gsap/all";
import INVITEMAIN from "./Images/invite2.png"
import INVITERSVP from "./Images/invite4.png"
import INVITEDETAILS from "./Images/invite3.png"
import INVITEENVOUTER from "./Images/invite5.png"
import INVITEENVINNER from "./Images/invite6.png"
import INVITECARD from "./Images/invite1.png"
import {useNavigate} from "react-router-dom"
// import { InertiaPlugin } from "gsap/InertiaPlugin"; // If you have Club GSAP

gsap.registerPlugin(Draggable /*, InertiaPlugin */);

export default function Invite() {
  const invitecontainerRef = useRef(null);
  const mainRef = useRef(null);
  const rsvpRef = useRef(null);
  const detailsRef = useRef(null);
  const envelopeouterRef = useRef(null);
  const envelopeinnerRef = useRef(null);
  const invitecardRef = useRef(null);

   const navigate = useNavigate();
    const handleBackClick = () => {
    console.log('Button clicked, navigating now...'); 
    navigate('/allycatportfolio/wedding'); 
    }

  useGSAP(() => {
    Draggable.create(mainRef.current, {
      bounds: invitecontainerRef.current,
      edgeResistance: 0.5,
      type: "x,y",
      inertia: true // remove if you don't have InertiaPlugin
    }),
    Draggable.create(rsvpRef.current, {
      bounds: invitecontainerRef.current,
      edgeResistance: 0.5,
      type: "x,y",
      inertia: true // remove if you don't have InertiaPlugin
    }),
    Draggable.create(detailsRef.current, {
      bounds: invitecontainerRef.current,
      edgeResistance: 0.5,
      type: "x,y",
      inertia: true // remove if you don't have InertiaPlugin
    }),
    Draggable.create(envelopeouterRef.current, {
      bounds: invitecontainerRef.current,
      edgeResistance: 0.5,
      type: "x,y",
      inertia: true // remove if you don't have InertiaPlugin
    }),
    Draggable.create(envelopeinnerRef.current, {
      bounds: invitecontainerRef.current,
      edgeResistance: 0.5,
      type: "x,y",
      inertia: true // remove if you don't have InertiaPlugin
    }),
    Draggable.create(invitecardRef.current, {
      bounds: invitecontainerRef.current,
      edgeResistance: 0.5,
      type: "x,y",
      inertia: true // remove if you don't have InertiaPlugin
    });
  },
   { scope: invitecontainerRef });

  

  return (
    <>
    <div className="backbtn" onClick={handleBackClick}>
            ←
        </div>
    <div ref={invitecontainerRef} className="invitescontainer">
      <div ref={detailsRef} className="paper detailsinvite">
        <img src={INVITEDETAILS}/>
      </div>
      <div ref={mainRef} className="paper main">
        <img src={INVITEMAIN} />
        </div>
      <div ref={rsvpRef} className="paper rsvp">
        <img src={INVITERSVP} />
      </div>
      <div ref={envelopeinnerRef} className="paper envinner">
        <img src={INVITEENVINNER}/>
      </div>
      <div ref={envelopeouterRef} className="paper envouter">
        <img src={INVITEENVOUTER}/>
      </div>
      <div ref={invitecardRef} className="paper invitecard">
        <img className="imgbox" src={INVITECARD} />
        </div>
    </div>
    </>
  );
}
