import { useTranslation } from "react-i18next";

const Header = () => {
  const { t, i18n } = useTranslation();
  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "ru" : "en";
    i18n.changeLanguage(newLang);
  };
  console.log("Current language:", i18n.language);

  return (
    <section className="header">
      <div className="header__icon"></div>
      <nav>{t(`language`)}</nav>
      <button onClick={toggleLanguage}>
        {i18n.language === "en" ? "RU" : "EN"}
      </button>
    </section>
  );
};

export default Header;
