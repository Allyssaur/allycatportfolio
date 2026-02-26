import { Link } from "react-router-dom";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import WPKITTY from "../assets/whoopsiepoopsie.png";
import WPKL from "../assets/wpl.png";
import WPKR from "../assets/wpr.png";

const NotFoundPage = () => {
  const container = useRef(null);
  const kittyleft = useRef(null);
  const kittyright = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ repeat: -1, ease: "none" });

      tl.to(
        kittyleft.current,
        { rotate: -360, 
          duration: 2,
          repeat: -1,
          //yoyo: true,
          ease: 'none',
        },
        0
      ).to(
        kittyright.current,
        { rotate: 360, 
          duration: 2,
          repeat: -1,
          //yoyo: true,
          ease: 'none',
        },
        0
      );
    },
    { scope: container }
  );

  return (
    <div className="whoopsiepoopsie" ref={container}>
      <div className="wpkitty">
        <img className="wpkittybody" src={WPKITTY} alt="" />
        <img ref={kittyleft} className="wpkittyl" src={WPKL} alt="" />
        <img ref={kittyright} className="wpkittyr" src={WPKR} alt="" />
      </div>

      <h1>Whoopsie, Poopsie!</h1>
      <div>Page Not Found! :C</div>

      <Link to="/">
        <button>Go Back</button>
      </Link>
    </div>
  );
};

export default NotFoundPage;
