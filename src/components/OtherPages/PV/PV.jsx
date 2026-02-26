import Guide from '../PV/ArtistGuide.jsx'
// import Modal from '../Modal.jsx'
import { useRef,useState } from "react";
import gsap from "gsap";
import { ScrollTrigger, Flip } from "gsap/all";
import { useGSAP } from "@gsap/react";
import './PV.scss';
import { useNavigate } from 'react-router-dom';
import IMG1 from './Images/AMP_Lanyards.png'
import IMG2 from './Images/AMPArtistGuideFront.png'
import IMG3 from './Images/AMPOnesheetMock.png'
import IMG4 from './Images/AMPCateringSign.png'
import IMG5 from './Images/AMPArtistGuideMock.png'
import IMG6 from './Images/ArtistGuidePages16.png'
import IMG7 from './Images/AMPBackstageWallSign.png'
import IMG8 from './Images/AMPHallSigns.png'

gsap.registerPlugin(ScrollTrigger, Flip);

export default function ProductionVisuals() {

  ScrollTrigger.clearScrollMemory("manual");
window.scrollTo(0, 0);

  const PVcontainerRef = useRef(null);
  const wrapperRef = useRef(null);
  const galleryRef = useRef(null);
  const flipCtx = useRef(null);

  const images = [IMG1, IMG2, IMG3, IMG4, IMG5];

  // const [showModal, setShowModal] = useState(false);
  // const [modalContent, setModalContent] = useState(null);

  const navigate = useNavigate();
    const handlePVClick = () => {
    console.log('Button clicked, navigating now...'); 
    navigate('/artistguide'); 
    }

    const handleHOMEClick = () => {
    console.log('Button clicked, navigating now...'); 
    navigate('/allycatportfolio'); 
    }

    const createTween = () => {
    const gallery = galleryRef.current;
    if (!gallery) return;

    const items = gallery.querySelectorAll(".gallery__item");

    // clean up previous context
    flipCtx.current && flipCtx.current.revert();
    gallery.classList.remove("gallery--final");

    flipCtx.current = gsap.context(() => {
      // capture final state
      gallery.classList.add("gallery--final");
      const state = Flip.getState(items);
      gallery.classList.remove("gallery--final");

      const flip = Flip.to(state, {
        simple: true,
        ease: "expoScale(1, 5)"
      });

      gsap.timeline({
        scrollTrigger: {
          trigger: gallery,
          start: "center center",
          end: "+=100%",
          scrub: true,
          pin: wrapperRef.current
          // markers: true
        }
      }).add(flip);

      return () => gsap.set(items, { clearProps: "all" });
    }, wrapperRef);
  };

  useGSAP(() => {
    createTween();
    window.addEventListener("resize", createTween);

    return () => window.removeEventListener("resize", createTween);
  }, []);

  useGSAP(
    () => {
      const animateFrom = (elem, direction = 1) => {
        let x = 0;
        let y = direction * 100;

        if (elem.classList.contains("gs_reveal_fromLeft")) {
          x = -100;
          y = 0;
        } else if (elem.classList.contains("gs_reveal_fromRight")) {
          x = 100;
          y = 0;
        }

        gsap.fromTo(
          elem,
          { x, y, autoAlpha: 0 },
          {
            duration: 1.25,
            x: 0,
            y: 0,
            autoAlpha: 1,
            ease: "expo",
            overwrite: "auto",
          }
        );
      };

      const hide = (elem) => {
        gsap.set(elem, { autoAlpha: 0 });
      };

      gsap.utils.toArray(".gs_reveal").forEach((elem) => {
        hide(elem);

        ScrollTrigger.create({
          trigger: elem,
          onEnter: () => animateFrom(elem, 1),
          onEnterBack: () => animateFrom(elem, -1),
          onLeave: () => hide(elem),
        });
      });
    },
    { scope: PVcontainerRef }
  );

  return (
    <>
    <div ref={PVcontainerRef}>
      <div className="content">
        <div className="backbtn" onClick={handleHOMEClick}>
            ←
        </div>
        <div className="gallery-wrap" ref={wrapperRef}>
        <div
          className="gallery gallery--bento gallery--switch"
          id="gallery-8"
          ref={galleryRef}
        >
          {[
            IMG8,
            IMG6,
            IMG5,
            IMG3,
            IMG1,
            IMG2,
            IMG4,
            IMG7
          ].map((img, i) => (
            <div className="gallery__item" key={i}>
              <img
                src={`${img}`}
                alt=""
              />
            </div>
          ))}
        </div>
      </div>

      <div className="spacer"/>

        <div className="features">
          {/* LEFT */}
          <div className="portitem portitem--left gs_reveal gs_reveal_fromLeft">
            <div className="portimage">
              <div className="portcard">
                <img
                  className="portimg --left"
                  src={IMG1}
                  alt=""
                />
              </div>
            </div>
            <div className="portcontent">
              <h2 className="porttitle gs_reveal">WALMART AMP BACKSTAGE VISUAL UPDATE</h2>
              <h4>2024, 2025</h4>
              <br/>
              <p className="portdescription gs_reveal">
                This small series of graphic design works are refreshing the backstage look of the music venue by blending functionality with visual character.
                <br/>
                <br/>
                Through updated signage, attractive documentation upgrades, and subtle wayfinding elements, these various design projects have helped created a more cohesive and welcoming environment for artists and their tours. The overall approach balanced bold, music-driven aesthetics with practical clarity that also follows the style guide as well as the energy behind the branding found at the Walmart AMP.   
                <br/>
                <br/>
                These visuals support the backstage area by making them feel both energized and thoughtfully organized.
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="portitem portitem--right gs_reveal gs_reveal_fromRight">
            <div className="portimage">
              <div className="portcard">
              {/* <div className="portcard portbg"> */}
                <img
                  className="portimg"
                  src={IMG5}
                  alt=""
                />
              </div>
            </div>
            <div className="portcontent">
              <h2 className="porttitle gs_reveal">ARTIST'S GUIDE</h2>
              <p className="portdescription gs_reveal">
                One of the most ambitious projects taken on is the Artist Guide. This booklet-style document is sent to touring artists by our Artist Services team and provides a concise overview of the area. 
                <br/>
                <br/>
                Designed to support artists during their short stay, the guide includes everything from local restaurant recommendations and sightseeing opportunities to more technical details, such as a backstage facility map and an easy-to-reference contacts page—ensuring they feel informed and prepared as soon as they arrive on site.  It is nesseasary that this document stays up-to-date regularly and is revisited several times thoroughout the year as we learn the trends of information needed.
                </p>
                <button className='PVButton' onClick={handlePVClick}>INTERACTIVE ARTIST GUIDE</button> 
            </div>
          </div>

          {/* LEFT */}
          <div className="portitem portitem--left gs_reveal gs_reveal_fromLeft">
            <div className="portimage">
              <div className="portcard">
              {/* <div className="portcard portbg"> */}
                <img
                  className="portimg --left"
                  src={IMG3}
                  alt=""
                />
              </div>
            </div>
            <div className="portcontent">
              <h2 className="porttitle gs_reveal">ONE-SHEET</h2>
              <p className="portdescription gs_reveal">
                We identified the need for a single, streamlined document that gives potential tours a clear overview of the venue, which led to the creation of our one-sheet. This concise file includes essential details—such as capacity options, stage size, and front- and back-of-house amenities—allowing tours to quickly determine if the venue meets their needs. 
                <br/>
                <br/>
                Easy to share and efficient, it also reduces inquiry time while serving as effective marketing for AMP.
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="portitem portitem--right gs_reveal gs_reveal_fromRight">
            <div className="portimage">
              <div className="portcard">
              {/* <div className="portcard portbg"> */}
                <img
                  className="portimg"
                  src={IMG8}
                  alt=""
                />
              </div>
            </div>
            <div className="portcontent">
              <h2 className="porttitle gs_reveal">OTHER WALMART AMP PROJECTS</h2>
              <p className="portdescription gs_reveal">
                As the area continues to grow, so does our facility—and with that growth comes an ongoing need for design support. I have been steadily working to help improve the amphitheater through projects such as QR-accessible backstage maps for touring artists and clear, functional signage that makes back-of-house areas easier to navigate. By identifying and taking on these needs, my goal is to strengthen the AMP’s overall brand. <br/>
                <br/>
                These efforts are just the beginning of building a more cohesive and recognizable presence for the Walmart AMP throughout the venue and the surrounding area.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="spacer" />
    </div>
</>
  );
}
