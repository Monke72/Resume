import gitIcon from "@assets/git.svg";
import tgIcon from "@assets/tg.svg";
import telIcon from "@assets/tel.svg";
import mailIcon from "@assets/Mail.svg";
import { IIcons } from "src/types/IconTypes";

interface IContacts extends IIcons {
  href: string;
}

export const contactsArray: IContacts[] = [
  { src: gitIcon, alt: "GIT", href: "https://github.com/Monke72" },
  { src: tgIcon, alt: "TG", href: "https://web.telegram.org/k/#@Monke_72" },
  { src: telIcon, alt: "tel", href: "tel:+79376516737" },
  { src: mailIcon, alt: "mail", href: "mailto:wera16307@gmail.com" },
];
