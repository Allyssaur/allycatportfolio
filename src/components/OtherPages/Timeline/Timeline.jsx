import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import "./Timeline.scss";
import { useNavigate } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);


const Timeline = () => {
  const containerRef = useRef(null);
  const fillRef = useRef(null);
  const itemsRef = useRef([]);

 const navigate = useNavigate();
    const handleHOMEClick = () => {
    console.log('Button clicked, navigating now...'); 
    navigate('/allycatstudios'); 
    }

  useGSAP(
    () => {
      if (!fillRef.current || itemsRef.current.length === 0) return;

      /* ----------------------------
         Animate timeline line
      ----------------------------- */
      gsap.to(fillRef.current, {
        scaleY: 1,
        ease: "linear",
        transformOrigin: "top center",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
      });

      /* ----------------------------
         Item enter / leave behavior
      ----------------------------- */
      itemsRef.current.forEach((item) => {
        ScrollTrigger.create({
          trigger: item,
          start: "top center",
          onEnter: () => item.classList.add("is-active"),
          onLeaveBack: () => item.classList.remove("is-active"),
        });
      });
    },
    { scope: containerRef }
  );

  return (
    <>
    <div className="backbtn" onClick={handleHOMEClick}>
            ←
        </div>


    <div className="timeline">
      <div className="contain">
        <div className="timeline__head" />

        <div
          className="timeline__container js-timeline-container"
          ref={containerRef}
        >
          <div className="timeline__line">
            <span
              className="timeline__fill js-timeline-fill"
              ref={fillRef}
              style={{ transform: "scaleY(0)" }}
            />
          </div>

          <div className="timeline__items">
            {[
              {
                year: "2021",
                org: "NORTHWEST ARKANSAS COMMUNITY COLLEGE",
                type: "timeline__edu",
                roles: [
                  "Associate of Arts",
                  "Associate of Science and Liberal Arts",
                ],
              },
              {
                year: "2022",
                org: "JOHN BROWN UNIVERSITY",
                type: "timeline__edu",
                roles: ["Graphic Design Degree Focus"],
                about: [
                  "Completed +30 hours in Graphic Design and Marketing related courses",
                ],
              },
              {
                year: "2022",
                org: "JOHN BROWN UNIVERSITY",
                type: "timeline__exp",
                roles: ["JBU Marketing Assistant"],
                about: [
                  "Supported marketing campaigns through a graphic design-focused work-study role.",
                  "Various projects consisted of:",
                  " - Event postcards sent to high-profile sponsors",
                  " - Creating posters for campus events and activites", 
                  " - Photo editing materials used for marketing purposes",
                ],
              },
              {
                year: "2023",
                org: "ALLY CAT STUDIOS",
                extra: "(ONGONIG)",
                type: "timeline__exp",
                roles: ["Self-Employed"],
                about: ["Ally Cat Studios began as a passion-driven creative venture.  As a multidisciplinary artist, I explored several directions before refining its focus.  Over time, it slowly evolved into the alias I now use for my work in creative direction.",
                  "Through Ally Cat Studios, I offer services including:",
                  "-Full project development from concept to completion.",
                  "-Creative consulting",
                  "-Commissioned artwork (digital and traditional)",
                  "-Wedding Invitation Suites",
                  "-Logo Design and Brand Building",
                  "-Limited Web Development (front-end, graphic-related builds)"
                ],
              },
              {
                year: "2023",
                org: "PROMINEO TECH",
                type: "timeline__edu",
                roles: ["Front End Development Bootcamp Certificate"],
                about: ["Certificate covered the foundations of front end development such as HTML, CSS, JavaScript, React, and other web development tools."],
              },
              {
                year: "2024",
                org: "WALMART AMP",
                extra: "(ONGOING)",
                type: "timeline__exp",
                roles: ["Artist Services Coordinator"],
                about: [
                  "-Supports the preparation, hospitality coordination, and full setup/tear-down operations for high-profile touring artists",
                  "-Facilitates room transitions, event setups, and decor execution while serving as a professional ambassador for our venue across both front-of-house and back-of-house operations",
                  "-Maintains consistent communication with external vendors and facilities to coordinate and fulfill specialized artist requests prior to on-site arrival",
                  "-Collaborates cross-functionally with internal and external departments, sponsors, and partners to fulfill special requests, execute projects, and maintain the overall facility excellence.",
                  "-Enhances operational processes by leveraging graphic design expertise, advanced Excel documentation, and innovative problem-solving",                ],
              },
              {
                year: "2026",
                org: "EXPLORE HERE",
                extra: "(ONGOING)",
                type: "timeline__exp",
                roles: ["Graphic Designer"],
                about: [
                  "Contributes to the application's visual identity and user interface, ensuring cohesive brand alignment, design consistency and marketing efficacy",
                ],
              },
              {
                year: "2026",
                org: "???",
                roles: [],
                about: ["What's next?  I'm always excited to chat, brainstorm, and bring new projects and ideas to life."],
              },
            ].map((item, i) => (
              <div
                key={i}
                className="timeline__item js-timeline-item"
                ref={(el) => (itemsRef.current[i] = el)}
              >
                <span className={`timeline__dot ${item.type}`} />

                <div className="timeline__year">
                  {item.year}
                  <p className="para">{item.org}</p>
                  {item.extra && <p className="para">{item.extra}</p>}
                </div>

                <div className="timeline__text">
                  {item.roles.map((role, idx) => (
                    <p className="timeline__role" key={idx}>
                      {role}
                    </p>
                  ))}

                  {item.about &&
                    item.about.map((text, idx) => (
                      <p className="timeline__about" key={idx}>
                        {text}
                      </p>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Timeline;
