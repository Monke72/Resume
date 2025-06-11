import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ReactIcon from "@assets/reactIcon.png";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollTrigerT() {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#pin-windmill",
        start: "30% 30%",
        endTrigger: "#pin-windmill-wrap",
        end: "bottom 50%",
        scrub: 2,
        pin: true,
      },
    });

    tl.to("#pin-windmill-svg", {
      rotateZ: 700,
      ease: "none",
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
      tl.kill();
    };
  }, []);

  return (
    <div
      id="pin-windmill-wrap"
      style={{
        height: "100vh",
        textAlign: "center",
        position: "relative",
        top: "0",
      }} // центрируем содержимое
    >
      <div
        id="pin-windmill"
        style={{ position: "absolute", top: 0, right: 0, height: 200 }}
      >
        <img
          id="pin-windmill-svg"
          src={ReactIcon}
          alt=""
          style={{ display: "block", maxWidth: "300px", height: "auto" }}
        />
      </div>
    </div>
  );
}
