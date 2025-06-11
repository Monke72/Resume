import About from "../About/About";
import ScrollTrigerT from "../ScrollTrigger/ScrollTriggerT";
import Skills from "../Skills/Skills";
import "./Info.scss";

const Info = () => {
  return (
    <div className="info container">
      <div className="info__me">
        <About />
        <Skills />
      </div>
      <ScrollTrigerT />
    </div>
  );
};

export default Info;
