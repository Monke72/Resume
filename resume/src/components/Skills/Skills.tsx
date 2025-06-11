import React from "react";

const Skills = () => {
  return (
    <div className="skills">
      <div className="hard__skills">
        <h3 className="skills__title">
          <span className="skills__title-accent">Hard</span>
        </h3>
        <ul className="skills__list">
          <li className="skills__item">HTML(HTML5) , JSX , TSX</li>
        </ul>
      </div>
      <div className="soft__skills">
        <h3 className="skills__title">
          <span className="skills__title-accent">Soft</span>
        </h3>
        <ul className="skills__list">
          <li className="skills__item">Ответсвтенность</li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
