import { useTranslation } from "react-i18next";
import { AnimatedText } from "../AnimatedText/AnimatedText";
import React from "react";

import "./About.scss";
const About = () => {
  const { t } = useTranslation();
  return (
    <section className="about" id="about">
      <div className="about__text">
        <AnimatedText>
          <span>{"<strong>"}</span>
          <span className="about__text-accent">{t("hello")}!</span>
          <span>{"</strong>"}</span>
          <br />
          {t("aboutText")}

          {t("like")}
        </AnimatedText>
      </div>
    </section>
  );
};

export default About;
