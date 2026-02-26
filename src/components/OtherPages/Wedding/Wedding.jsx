import Invite from './Invite.jsx'
import Modal from '../Modal.jsx'
import { useRef,useState } from "react";
import gsap from "gsap";
import { ScrollTrigger, Flip } from "gsap/all";
import { useGSAP } from "@gsap/react";
import '../PV/PV.scss';
import { useNavigate } from 'react-router-dom';
import IMG1 from './Images/Portfolio_Wedding_SMBook.png';
import IMG2 from './Images/Portfolio_Wedding_CatTags.png';
import IMG3 from './Images/Portfolio_Wedding_InvitesPretty.png';
import IMG4 from './Images/Portfolio_Wedding_TableBook.png';
import IMG5 from './Images/Portfolio_Wedding_Candybars.png';
import IMG6 from './Images/Portfolio_Wedding_LGBook.png';
import IMG7 from './Images/PortfolioItem2.jpg';
import IMG8 from './Images/LastWeddingPic.png'

gsap.registerPlugin(ScrollTrigger, Flip);

export default function Wedding() {
  const containerRef = useRef(null);
  const wrapperRef = useRef(null);
  const galleryRef = useRef(null);
  const flipCtx = useRef(null);

  const images = [IMG1, IMG2, IMG3, IMG4, IMG5];

  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const navigate = useNavigate();
    const handleHOMEClick = () => {
    console.log('Button clicked, navigating now...'); 
    navigate('/'); 
    }

    const handleInviteClick = () => {
    console.log('Button clicked, navigating now...'); 
    navigate('/invite'); 
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

    function openModalWithContent(component = null) {
    setModalContent(component);
    setShowModal(true);
  }

    const closeModal = () => {
      setShowModal(false);
      setModalContent(null);
    };

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
    { scope: containerRef }
  );

  return (
    <>
    <div ref={containerRef}>
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
            IMG1,
            IMG2,
            IMG3,
            IMG4,
            IMG5,
            IMG6,
            IMG7,
            IMG8
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
      <div className="spacer"/>

        <div className="features">
          {/* LEFT */}
          <div className="portitem portitem--left gs_reveal gs_reveal_fromLeft">
            <div className="portimage">
              <div className="portcard">
                <img
                  className="portimg --left"
                  src={IMG4}
                  alt=""
                />
              </div>
            </div>
            <div className="portcontent">
              <h2 className="porttitle gs_reveal">BEAVERxMARCINIAK WEDDING VISUALS</h2>
              <h4>2025</h4>
              <br/>
              <p className="portdescription gs_reveal">
                Branding an entire wedding is a relatively new trend, and when paired with the many responsibilities already involved in planning, designing a full wedding identity can feel ambitious. 
                <br/>
                <br/>
                This process unfolded through intentional, piece-by-piece development, allowing each element to be thoughtfully considered. From the invitation suite to the oversized storybook for the photo booth, every component contributed to a cohesive visual fairytale experience for both the couple and their guests.    
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="portitem portitem--right gs_reveal gs_reveal_fromRight">
            <div className="portimage">
              <div className="portcard">
                <img
                  className="portimg"
                  src={IMG3}
                  alt=""
                />
              </div>
            </div>
            <div className="portcontent">
              <h2 className="porttitle gs_reveal">INVITATION SUITE</h2>
              <p className="portdescription gs_reveal">
                Designed to feel like a storybook, these invitations set the tone for the wedding from the start. The challenge was creating a book-like experience without sacrificing practicality, so a card-based format was used. Deckled edges on the invitation and details card evoked the look of pages, while a library checkout–style RSVP completed the narrative-inspired design.</p> 
                
                <button className='PVButton' onClick={handleInviteClick}>INTERACTIVE INVITATION SUITE</button> 
            </div>
          </div>

          {/* LEFT */}
          <div className="portitem portitem--left gs_reveal gs_reveal_fromLeft">
            <div className="portimage">
              <div className="portcard">
                <img
                  className="portimg --left"
                  src={IMG6}
                  alt=""
                />
              </div>
            </div>
            <div className="portcontent">
              <h2 className="porttitle gs_reveal">OVERSIZED STORYBOOK PROPS</h2>
              <p className="portdescription gs_reveal">
                The storybook props presented both physical and creative challenges, beginning with the need for a custom base that wasn’t readily available for purchase. The structure was hand-built, allowing the design process to focus on the illustrated pages. Using Clip Studio Paint, Adobe InDesign, and Adobe Illustrator, custom illustrations were created and each page was prepared for individual printing. After hand-cutting the edges, the pages were mounted to the custom base, resulting in a finished piece that became a visual showstopper.
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="portitem portitem--right gs_reveal gs_reveal_fromRight">
            <div className="portimage">
              <div className="portcard">
                <img
                  className="portimg"
                  src={IMG5}
                  alt=""
                />
              </div>
            </div>
            <div className="portcontent">
              <h2 className="porttitle gs_reveal">OTHER WEDDING VISUALS</h2>
              <p className="portdescription gs_reveal">
                Every detail of the wedding was placed with intention, resulting in a highly considered visual outcome. From handmade place cards to custom candy bar packaging and seating chart labels, each element went through careful planning and refinement. Despite rigorous trial and error throughout the process, the day ultimately came together as a cohesive and successful visual experience.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="spacer" />

      <div className="footer">
                <p className="contactp">© 2025 Yehudi Silva from <a href="https://www.mwithlove.com/">MadeWithLove Photography</a>. All Rights Reserved. </p>
                <p className="contactp">(excluding invitation related photography)</p>
            </div>
    </div>
{/* 
    <Modal show={showModal} onClose={closeModal}>
                     {modalContent}
                   </Modal> */}
</>
  );
}
