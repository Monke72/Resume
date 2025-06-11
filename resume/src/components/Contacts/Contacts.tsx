import { contactsArray } from "@assets/contactList/contactList";
import "./Contacts.scss";
const Contacts = () => {
  return (
    <section className="contacts container" id="contact">
      <div className="contacts__wrapper">
        <div className="contacts__info">
          <h1 className="contacts__title">
            <span className="contacts__accent">
              Do you feel like asking me something interesting?{" "}
            </span>{" "}
            <br /> I’m here and ready to chat.
          </h1>
          <p className="contacts__text">
            Write to me and I will try to respond at any time convenient for
            you.
          </p>
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
