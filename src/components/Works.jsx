import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger, Draggable } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { useNavigate } from "react-router-dom";
import AMP1 from "../assets/Icons/AmpLogoIcon.png";
import AMP2 from "../assets/Icons/AmpLogoIconAFTER.png";
import WED1 from "../assets/Icons/BeaverxMarciniakIcon.png";
import WED2 from "../assets/Icons/BeaverxMarciniakIconAFTER.png";
import DDI1 from "../assets/Icons/DecibelDaddiesIcon.png";
import DDI2 from "../assets/Icons/DecibelDaddiesIconACTIVE.png";
import KT1 from "../assets/Icons/KimonosTailIcon.png";
import KT2 from "../assets/Icons/KimonosTailIconACTIVE.png";
import ACS1 from "../assets/Icons/ACSIcon.png";
import ACS2 from "../assets/Icons/ACSIconACTIVE.png";

gsap.registerPlugin(ScrollTrigger, Draggable);

const cardsData = [
  { id: "card4", title: "Other Logo Works", link: "/allycatportfolio/otherlogos", image: DDI1, activeImage: DDI2 },
  { id: "card5", title: "Illustration Work", link: "/allycatportfolio/illustrations", image: ACS1, activeImage: ACS2 }, 
  { id: "card1", title: "Walmart AMP Artist Guide", link: "/allycatportfolio/productionvisuals", image: AMP1, activeImage: AMP2},
  { id: "card2", title: "BeaverxMarciniak Wedding", link: "/allycatportfolio/wedding", image: WED1, activeImage: WED2},
  { id: "card3", title: "Kimono's Tail", link: "/allycatportfolio/kimonostail", image: KT1, activeImage: KT2},
];

export default function Works() {
  const worksRef = useRef(null);
  const galleryRef = useRef(null);
  const cardsRef = useRef([]);
  const navigate = useNavigate();

  // const onClick = () => { window.open(url, "_blank"); };

  useGSAP(() => {
    const cards = cardsRef.current;
    const spacing = 0.15;

    // ----------------------------
    // Initial state
    // ----------------------------
    gsap.set(cards, {
      xPercent: 400,
      opacity: 0,
      scale: 0
    });

    // ----------------------------
    // Card animation
    // ----------------------------
    const animateCard = (el) =>
      gsap.timeline()
        .fromTo(
          el,
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.5,
            repeat: 1,
            yoyo: true,
            ease: "power1.in",
            immediateRender: false
          }
        )
        .fromTo(
          el,
          { xPercent: 400 },
          {
            xPercent: -400,
            duration: 1,
            ease: "none",
            immediateRender: false
          },
          0
        );

    // ----------------------------
    // Seamless loop builder
    // ----------------------------
    const buildSeamlessLoop = () => {
      const overlap = cards.length;
      const startTime = cards.length * spacing + 0.8;
      const loopTime = (cards.length + overlap) * spacing + 1;

      const raw = gsap.timeline({ paused: true });
      const loop = gsap.timeline({
        paused: true,
        repeat: -1,
        onRepeat() {
          this._time === this._dur && (this._tTime += this._dur - 0.01);
        }
      });

      const total = cards.length + overlap * 2;

      for (let i = 0; i < total; i++) {
        raw.add(animateCard(cards[i % cards.length]), i * spacing);
      }

      raw.time(startTime);

      loop
        .to(raw, {
          time: loopTime,
          duration: loopTime - startTime,
          ease: "none"
        })
        .fromTo(
          raw,
          { time: overlap * spacing + 1 },
          {
            time: startTime,
            duration: startTime - (overlap * spacing + 1),
            ease: "none",
            immediateRender: false
          }
        );

      return loop;
    };

    const seamlessLoop = buildSeamlessLoop();
    const wrapTime = gsap.utils.wrap(0, seamlessLoop.duration());

    // ----------------------------
    // Active card detection
    // ----------------------------
    let activeCard = null;

    const updateActiveCard = () => {
  let closest = null;
  let min = Infinity;

  cards.forEach((card) => {
    const x = Math.abs(gsap.getProperty(card, "xPercent"));
    if (x < min) {
      min = x;
      closest = card;
    }
  });

  if (closest !== activeCard) {
    if (activeCard) {
      gsap.to(activeCard.querySelector(".card-image.active"), {
        opacity: 0,
        duration: 0.3
      });
      gsap.to(activeCard.querySelector(".card-image.default"), {
        opacity: 1,
        duration: 0.3
      });
      activeCard.classList.remove("is-active");
    }

    gsap.to(closest.querySelector(".card-image.active"), {
      opacity: 1,
      duration: 0.4,
      ease: "power1.out"
    });
    gsap.to(closest.querySelector(".card-image.default"), {
      opacity: 0,
      duration: 0.4,
      ease: "power1.out"
    });

    closest.classList.add("is-active");
    activeCard = closest;
  }
};


    // ----------------------------
    // Playhead scrub
    // ----------------------------
    const playhead = { offset: 0 };

    const scrub = gsap.to(playhead, {
      offset: 0,
      duration: 0.5,
      ease: "power3",
      paused: true,
      onUpdate() {
        const t = wrapTime(playhead.offset);
        seamlessLoop.time(t);
        updateActiveCard();
      }
    });

    // ----------------------------
    // ScrollTrigger snapping
    // ----------------------------
    const snapTo = gsap.utils.snap(
      cards.map((_, i) => (i * spacing) / seamlessLoop.duration())
    );

    const trigger = ScrollTrigger.create({
      trigger: worksRef.current,
      start: "top top",
      end: "+=" + window.innerHeight * 3,
      pin: true,
      scrub: 1,
      invalidateOnRefresh: true,
      normalizeScroll: true,

      snap: {
        snapTo,
        duration: 0.3,
        ease: "power3.out"
      },

      onUpdate(self) {
        const t = wrapTime(self.progress * seamlessLoop.duration());
        seamlessLoop.time(t);
        updateActiveCard();
      }
    });
  }, { scope: galleryRef });

  return (
    <section ref={worksRef} className="works-section">
      {/* <div className="spacer"/> */}

      <div className="gallery" ref={galleryRef}>
        <div className="cards">
          {cardsData.map((card, i) => (
            <article
                ref={(el) => (cardsRef.current[i] = el)}
                className={`cardcontainer ${card.id}`}
                // onClick={ () => window.location.href = card.link }
                onClick={() => navigate(card.link)}
              >
              <img
                className="card-image default"
                src={card.image}
                alt=""
              />
              <img
                className="card-image active"
                src={card.activeImage}
                alt=""
              />

              <div className="card-overlay">
                <div className="cardtitle">{card.title}</div>
                <span className="vptext">View Project ⇨</span>
              </div>
            </article>


          ))}
        </div>
      </div>
    </section>
  );
}
