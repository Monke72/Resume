import jsIcon from "@assets/js.png";
import tsIcon from "@assets/ts.svg";
import reactIcon from "@assets/react.svg";
import reduxIcon from "@assets/redux.svg";
import scssIcon from "@assets/Scss.svg";
import htmlIcon from "@assets/html.png";
import cssIcon from "@assets/css.png";
import viteIcon from "@assets/vite.svg";
import figmaIcon from "@assets/Figma.png";
export const freelanceStack = [
  { src: htmlIcon, alt: "HTML" },
  { src: cssIcon, alt: "CSS" },
  { src: jsIcon, alt: "JavaScript" },
  { src: figmaIcon, alt: "Figma" },
];
export const AbomStack = [
  ...freelanceStack,
  { src: tsIcon, alt: "TypeScript" },
  { src: reactIcon, alt: "React" },
  { src: reduxIcon, alt: "Redux" },
  { src: scssIcon, alt: "SCSS" },
  { src: viteIcon, alt: "Vite" },
].filter(
  (el) => el.alt !== "CSS" && el.alt !== "HTML" && el.alt !== "JavaScript"
);
