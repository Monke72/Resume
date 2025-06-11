import { ReactNode, useEffect, useRef } from "react";
import { gsap } from "gsap";
import * as React from "react";

type AnimatedTextProps = {
  children: ReactNode;
};

export const AnimatedText = ({ children }: AnimatedTextProps) => {
  const refs = useRef<HTMLElement[]>([]);

  useEffect(() => {
    gsap.fromTo(
      refs.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: "power3.out",
      }
    );
  }, []);

  refs.current = []; // сбросить перед рендером

  return (
    <>
      {React.Children.map(children, (child, i) => {
        if (typeof child === "string") {
          return child.split("").map((char, j) => {
            if (char === "\n") {
              return <br key={`${i}-${j}`} />;
            }

            return (
              <span
                key={`${i}-${j}`}
                ref={(el) => {
                  if (el) refs.current.push(el);
                }}
                style={{ display: "inline-block" }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            );
          });
        }

        if (React.isValidElement(child)) {
          return (
            <span
              key={i}
              ref={(el) => {
                if (el) refs.current.push(el);
              }}
              style={{ display: "inline-block" }}
            >
              {child}
            </span>
          );
        }

        return null;
      })}
    </>
  );
};
