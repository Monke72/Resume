import "./Skills.scss";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const Skills = () => {
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
    <div className="skills">
      <div className="hard__skills">
        <h3 className="skills__title">
          <span className="skills__title-accent">Hard </span>
          skills
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
          <span className="skills__title-accent">Soft </span>
          skills
        </h3>
        <ul className="skills__list">
          {[
            "Эффективно взаимодействую с командой, включая разработчиков, дизайнеров и менеджеров.",
            "Всегда соблюдаю сроки и несу ответственность за качество выполненной работы.",
            "Пишу чистый, понятный и поддерживаемый код, соблюдая стиль проекта.",
            "Умею точно и ясно доносить свои мысли, быстро формулирую вопросы и предложения.",
            "Тщательно вникаю в требования, внимательно отношусь к деталям технического задания.",
            "Спокойно принимаю конструктивную критику и использую её для профессионального роста.",
            "Умею грамотно организовать своё рабочее время и соблюдать приоритеты.",
            "Разрешаю рабочие разногласия без конфликта, поддерживаю здоровую атмосферу.",
            "Помогаю младшим специалистам, делюсь опытом и помогаю в обучении.",
            "Постоянно изучаю новые технологии и подходы, чтобы расти как специалист.",
          ].map((text, index) => (
            <li className="skills__item" key={index}>
              {text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Skills;
