import "./Job.scss";
import { useRef, useEffect } from "react";
import { AbomStack } from "@assets/stackList/stackList";
import { freelanceStack } from "@assets/stackList/stackList";
import gsap from "gsap";

const Job = () => {
  const blocksRef = useRef<HTMLLIElement[]>([]);

  useEffect(() => {
    blocksRef.current.forEach((el, i) => {
      if (!el) return;
      gsap.fromTo(
        el,
        {
          opacity: 0,
          x: -150,
          scale: 0.9,
        },
        {
          opacity: 1,
          y: 0,
          x: 0,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
          delay: i * 0.2,
        }
      );
    });
  }, []);

  return (
    <section className="job container">
      <h3 className="job__title">
        <span className="job__accent">Job </span>Experience
      </h3>
      <div className="job__info">
        <ul className="info__list">
          {[
            {
              date: "Juniary 2023 - Present",
              job: "Abom",
              name: "Frontend Developer",
              text: "I worked in a team with a senior developer on an internal web application for managing company employees.",
              stack: AbomStack,
            },
            {
              date: "December 2022 - Juniary 2023",
              job: "Freelance",
              name: "Frontend/Web Developer",
              text: "Worked on SPA applications: admin panels, online stores, landing pages.",
              stack: freelanceStack,
            },
          ].map((item, i) => (
            <li
              className="info__item"
              key={i}
              ref={(el) => {
                blocksRef.current[i] = el!;
              }}
            >
              <div className="info__date">{item.date}</div>
              <h3 className="info__job">{item.job}</h3>
              <h5 className="info__name">{item.name}</h5>
              <p className="info__text">{item.text}</p>
              <ul className="info__stack-list">
                {item.stack.map((el, j) => (
                  <li className="info__stack-item" key={j}>
                    <img
                      className="info__stack-image"
                      src={el.src}
                      alt={el.alt}
                    />
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Job;
