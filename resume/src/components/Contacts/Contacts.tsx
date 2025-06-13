import { contactsArray } from "@assets/contactList/contactList";
import "./Contacts.scss";
import { useTranslation } from "react-i18next";
const Contacts = () => {
  const { t } = useTranslation();
  return (
    <section className="contacts container" id="contact">
      <div className="contacts__wrapper">
        <div className="contacts__info">
          <h1 className="contacts__title">{t("askMe")}</h1>
          <p className="contacts__text">{t("writeMe")}</p>
        </div>
        <div className="contacts__icons">
          <ul className="icons__list">
            {contactsArray.map((el, i) => (
              <li key={i} className="icons__item">
                <a href={el.href} target="_blank">
                  <img className="icons__image" src={el.src} alt={el.alt} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
