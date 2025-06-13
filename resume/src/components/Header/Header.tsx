import { useTranslation } from "react-i18next";
import devIcon from "@assets/dev.svg";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import "./Header.scss";
import { useState } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const { t, i18n } = useTranslation();
  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "ru" : "en";
    i18n.changeLanguage(newLang);
  };

  const headerTextRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (headerTextRef.current) {
      gsap.to(headerTextRef.current, {
        color: "#669bbc", // желаемый цвет
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    }
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", onScroll);

    // очистка обработчика при размонтировании
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className={`header ${scrolled ? "isScrolled" : ""}`} id="header">
      <div className="header__wrapper container">
        <div className="header__icon">
          <img className="header__icon-image" src={devIcon} alt="dev icon" />
        </div>
        <nav className="header__nav">
          <ul className="header__nav-list">
            <li className="header__nav-item">
              <a href="#" className="header__nav-link">
                {t("About")}
              </a>
            </li>
            <li className="header__nav-item">
              <a href="#skills" className="header__nav-link">
                {t("Skills")}
              </a>
            </li>
            <li className="header__nav-item">
              <a href="#jobs" className="header__nav-link">
                {t("Job experience")}
              </a>
            </li>
            <li className="header__nav-item">
              <a href="#contact" className="header__nav-link">
                {t("Contacts")}
              </a>
            </li>
          </ul>
        </nav>
        <button
          ref={headerTextRef}
          className="header__language-button"
          onClick={toggleLanguage}
        >
          {i18n.language === "en" ? "EN" : "RU"}
        </button>
      </div>
    </section>
  );
};

export default Header;
