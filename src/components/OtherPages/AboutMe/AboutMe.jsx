import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useNavigate } from 'react-router-dom';
import MEIMG from "./Images/portrait.png"

gsap.registerPlugin(ScrollTrigger);

export default function AboutMe() {

//   ScrollTrigger.clearScrollMemory("manual");
// window.scrollTo(0, 0);

    const navigate = useNavigate();
    const handleHOMEClick = () => {
    console.log('Button clicked, navigating now...'); 
    navigate('/allycatportfolio'); 
    }

    const handleTLClick = () => {
    console.log('Button clicked, navigating now...'); 
    navigate('/timeline'); 
  };

  const containerRef = useRef(null);
  const progressFillRef = useRef(null);
  const sectionsRef = useRef([]);
  const stepsRef = useRef([]);
      const [activeStep, setActiveStep] = useState(0);

  const sectionsData = [
    {
    //   title: "SELF",
      text: "I am a graphic designer and a creative consultant that has a passion for helping both myself and others grow creatively by turning unique ideas into something meaningful and inspiring.  I enjoy finding that sweet spot between minimalism and maximalism - mixing both concepts with clean, intentional design.",
      text2: "I draw inspiration from both the world around me — nature, art, music, travel, history — and the inner landscapes of imagination.",
      img: [MEIMG],
    //   button: "Continue the story"
    },

    {
    //   title: "MY EXP",
      text: "Freelancing and working with the Walmart AMP over the past five yearrs have given me the space to truely explore my strengths and better understand my weaknesses.  The experience has led to tremendous growth, while also reminding me that there is always more to learn, improve, and refine.",
      img: "",
    button: "FULL TIMELINE"
    },

    {
    //   title: "MY APPROACH",
      text: "My background allows me to bring a creative mindset to a wide range of situations, both professionally and personally.  I approach challenges with curiosity and confidence - believing there is always a solution and always a way to keep moving forward.",
     // button: "ABOUT MY PROCESS",
      img: "",
    },

    {
    //   title: "MY PRINCIPLES",
      he: "Intentionality",
      text: "Making purposeful design choices - every color, typeface, layout and detail selected with clear meaning, strategy, and impact in mind",
      he2: "Quality",
      text2: "Delivering intententional, well-crafted work that is visually refined, strategically purposeful, and impactful down to the smallest detail",
      he3: "Responsibility",
      text3: "To thoughtfully represent the client's vision with integrity, meeting deadlines with professionalism, and creating work that communicates clearly and ethically to the targeted audience",
      he4: "Transparency",
      text4: "Communicating openly about the process, expectations, and decisions while building honest, collaborative relationships with both clients and the audience",
      img: ""
    },

    {
    //   title: "MY GOALS",
      he: "Professional",
      text: "Hone Photography Skills, Working More Collaboratively with Larger Team Sizes, Master GSAP and other Front-end Development Processes, Music Album Cover, Concert Background Visuals",
      he2: "Personal",
      text2: "Design a Tabletop Boardgame, Strengthen 2-D Animation Skills, Be a voice for our community, be heard by making a difference",
      img: ""
    }
  ];

  // =============================
  // GSAP ANIMATIONS
  // =============================
  useGSAP(() => {
    const sections = sectionsRef.current;

    sections.forEach((section, index) => {
  const textBlock = section.querySelector(".text-block");

  // Animation
  if (index === 0) {
    gsap.timeline()
      .fromTo(section, { opacity: 0 }, { opacity: 1, duration: 0.5 })
      .fromTo(textBlock, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.5 }, "-=0.3");
  } else {
    gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 60%",
        end: "bottom 40%",
        toggleActions: "play reverse play reverse"
      }
    })
      .fromTo(section, { opacity: 0 }, { opacity: 1, duration: 0.5 })
      .fromTo(textBlock, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.5 }, "-=0.3");
  }

  // 🔥 Active step control
  ScrollTrigger.create({
    trigger: section,
    start: "top center",
    end: "bottom center",
    onEnter: () => setActiveStep(index),
    onEnterBack: () => setActiveStep(index),
  });
});

  }, { scope: containerRef });

  // =============================
  // SCROLL PROGRESS
  // =============================
  useEffect(() => {
    const handleScroll = () => {
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const scrollPercentage = (window.scrollY / docHeight) * 100;
      const progressWidth = Math.min(100, Math.max(0, scrollPercentage));

      if (progressFillRef.current) {
        progressFillRef.current.style.width = `${progressWidth}%`;
      }

      const currentSection = Math.floor(
        scrollPercentage / (100 / sectionsData.length)
      );

      localStorage.setItem("scrollPosition", window.scrollY);
      localStorage.setItem("currentSection", currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("beforeunload", handleScroll);

    // Restore
    const savedPosition = localStorage.getItem("scrollPosition");

    if (savedPosition) {
      window.scrollTo(0, parseInt(savedPosition));

    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("beforeunload", handleScroll);
    };
  }, []);

  // =============================
  // THEME
  // =============================


  // =============================
  // JSX
  // =============================
  return (
<>
        <div className="backbtn" onClick={handleHOMEClick}>
            ←
        </div>

    <div ref={containerRef}>
      {/* Progress Bar */}
      <div className="progress-bar">
        <span className="abouttitle"><p>ABOUT MY</p></span>
        <div className="progress-bar-fill" ref={progressFillRef}>
        </div>

        {["SELF", "EXP", "PROCESS", "PRINCIPLES", "GOALS"].map((label, i) => (
          <div
            key={i}
            ref={(el) => (stepsRef.current[i] = el)}
            className={`progress-step ${i === activeStep ? "active" : ""}`}
            onClick={() => {
              sectionsRef.current[i].scrollIntoView({ behavior: "smooth" });
            }}
          >
            {label}
          </div>
        ))}
      </div>

      {/* Sections */}
      <div className="story-container">
        {sectionsData.map((section, index) => (
          <section
            key={index}
            ref={(el) => (sectionsRef.current[index] = el)}
            className="story-section"
          >
            <div className="mePhoto">
                  <img src={`${section.img}`}/>
            </div>
            <div className="text-block aboutMe">
              <p className="abouth2">{section.he}</p>
              <p className="aboutp">{section.text}</p>
              {section.button && (
                <button
                  className="tlbtn"
                  onClick={handleTLClick}
                  >
                  {section.button}
                </button>
              )}
              <div className="abouth2">{section.he2}</div>
              <p className="aboutp">{section.text2}</p>
              <div className="abouth2">{section.he3}</div>
              <p className="aboutp">{section.text3}</p>
              <div className="abouth2">{section.he4}</div>
              <p className="aboutp">{section.text4}</p>
            </div>
          </section>
        ))}
      </div>
    </div>
    </>
  );
}