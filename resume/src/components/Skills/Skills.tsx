import "./Skills.scss";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslation } from "react-i18next";
const Skills = () => {
  const { t } = useTranslation();
  const translateSentences = [
    "command",
    "deadlines",
    "clearCode",
    "godThoughts",
    "details",
    "calm",
    "workTime",
    "disagreements",
    "help",
    "studyingTech",
  ];
  useEffect(() => {
    // Анимация для каждого li
    gsap.utils.toArray<HTMLElement>(".skills__item").forEach((el) =>
      gsap.from(el, {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 95%",
          toggleActions: "play none none none",
        },
      })
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);
  return (
    <div className="skills" id="skills">
      <div className="hard__skills">
        <h3 className="skills__title">
          <span className="skills__title-accent">{t("hard")} </span>
          {t("skills")}
        </h3>
        <ul className="skills__list">
          <li className="skills__item">HTML(HTML5) , JSX , TSX</li>
          <li className="skills__item">CSS(CSS3) , SCSS , CSS Modules</li>
          <li className="skills__item">Javascript ES6+ , TypeScript</li>
          <li className="skills__item">React</li>
          <li className="skills__item">Redux (Redux Toolkit, Redux Persist)</li>
          <li className="skills__item">
            Axios , TanStack Query , React Router , React Hook Form
          </li>
          <li className="skills__item">Vite , Webpack</li>
          <li className="skills__item">REST API</li>
          <li className="skills__item">BEM , Accessibility</li>
          <li className="skills__item">FSD(Feature-Sliced Design)</li>
          <li className="skills__item">GIT</li>
          <li className="skills__item">Figma</li>
          <li className="skills__item">Scrum , Jira</li>
          <li className="skills__item">English level - B1</li>
        </ul>
      </div>
      <div className="soft__skills">
        <h3 className="skills__title">
          <span className="skills__title-accent">{t("soft")} </span>
          {t("skills")}
        </h3>
        <ul className="skills__list">
          {translateSentences.map((el, i) => (
            <li className="skills__item" key={i}>
              {t(el)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Skills;
