import '../components/Home.scss';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import About from './About.jsx';
import Works from './Works.jsx';
import Skills from './Skills.jsx'
import Exp from './Exp.jsx'
import Contact from './Contact.jsx';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, ScrollSmoother);

const sections = [
  { id: "about", class: "about", Component: About, link: "about", caption:"ABOUT ALLY" },
  { id: "works", class: "works", Component: Works, link: "works", caption: "WORKS" },
  { id: "skills", class: "skills", Component: Skills, link: "skills", caption: "SKILLS" },
  { id: "exp", class: "exp", Component: Exp, link: "exp", caption: "EXP" },
  { id: "contact", class: "contact", Component: Contact, link: "contact", caption: "LET'S CHAT" },
];

export default function Home() {

  const sectionsRef = useRef([]);
const navLinksRef = useRef([]);

useGSAP(() => {
  const sections = sectionsRef.current;
  const navLinks = navLinksRef.current;

  sections.forEach((section, i) => {
    ScrollTrigger.create({
      trigger: section,
      start: "top center",
      end: "bottom center",
      onEnter: () => setActive(i),
      onEnterBack: () => setActive(i),
    });
  });

  function setActive(index) {
    navLinks.forEach((link, i) => {
      link.classList.toggle("active", i === index);
    });
  }

  return () => ScrollTrigger.getAll().forEach(t => t.kill());
}, []);
  return (
    <>
          
         {sections.map(({ id, Component }, i) => (
  <section key={id} id={id} className={`${id}`}  ref={(el) => (sectionsRef.current[i] = el)}>
    <Component />
  </section>
))}
{/*NAVIGATION ONLY */}
      <div id="sectionnav">
        {sections.map((section, i) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            ref={(el) => (navLinksRef.current[i] = el)}
            className={i === 0 ? "active" : ""}
            >
          {section.link}
          </a>
        ))}
      </div>
    </>
  )};