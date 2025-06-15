import { useEffect, useState } from "react";
import Contacts from "./components/Contacts/Contacts";
import Header from "./components/Header/Header";
import Info from "./components/Info/Info";
import Job from "./components/Job/Job";
import { allStack } from "@assets/stackList/stackList";

function App() {
  const [overlay, setOverlay] = useState<boolean>(true);

  useEffect(() => {
    if (overlay) {
      document.body.classList.add("overlay");
    } else {
      document.body.classList.remove("overlay");
    }
  }, [overlay]);
  const handleAnimationEnd = (index: number) => {
    // Когда анимация закончилась у последнего элемента
    if (index === allStack.size - 1) {
      setOverlay(false);
    }
  };

  return (
    <>
      <div
        className={`${overlay ? "overlay__content" : "overlay__clear"} overlay`}
      >
        <ul className="overlay__list">
          {Array.from(allStack).map((el, i) => (
            <li
              key={i}
              className="overlay__item"
              style={{ animationDelay: `${i * 250}ms` }}
              onAnimationEnd={() => handleAnimationEnd(i)}
            >
              <img className="overlay__image" src={el.src} alt={el.alt} />
            </li>
          ))}
        </ul>
      </div>
      <div className="app__content">
        <Header />
        <Info />
        <Job />
        <Contacts />
      </div>
    </>
  );
}

export default App;
