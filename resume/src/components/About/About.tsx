import { AnimatedText } from "../AnimatedText/AnimatedText";

import "./About.scss";
const About = () => {
  return (
    <section className="about">
      <div className="about__text">
        <AnimatedText>
          <span>{"<strong>"}</span>
          <span className="about__text-accent">Hello!</span>
          <span>{"</strong>"}</span>
          {"\nMy name is Artem Hazmetow\nI'm a Frontend Developer"}

          {"\nPassionate about UI, animation, \nand performance."}
        </AnimatedText>
      </div>
    </section>
  );
};

export default About;
