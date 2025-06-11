import { useTranslation } from "react-i18next";
import devIcon from "@assets/dev.png";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import "./Header.scss";

const Header = () => {
  const { i18n } = useTranslation();
  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "ru" : "en";
    i18n.changeLanguage(newLang);
  };

  const headerTextRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (headerTextRef.current) {
      gsap.to(headerTextRef.current, {
        color: "#9381ff", // желаемый цвет
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    }
  }, []);

  return (
    <section className="header container">
      <div className="header__icon">
        <img className="header__icon-image" src={devIcon} alt="dev icon" />
      </div>
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item">
            <a href="" className="header__nav-link">
              About
            </a>
          </li>
          <li className="header__nav-item">
            <a href="" className="header__nav-link">
              Skills
            </a>
          </li>
          <li className="header__nav-item">
            <a href="" className="header__nav-link">
              Job experience
            </a>
          </li>
          <li className="header__nav-item">
            <a href="" className="header__nav-link">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <button
        ref={headerTextRef}
        className="header__language-button"
        onClick={toggleLanguage}
      >
        {i18n.language === "en" ? "RU" : "EN"}
      </button>
    </section>
  );
};

export default Header;
