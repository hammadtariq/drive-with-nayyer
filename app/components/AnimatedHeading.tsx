"use client";

import { useState, useEffect, ElementType, CSSProperties } from "react";
import { useReducedMotion } from "motion/react";

interface AnimatedHeadingProps {
  text: string;
  as?: ElementType;
  className?: string;
  style?: CSSProperties;
  delay?: number;
  charDelay?: number;
}

export function AnimatedHeading({
  text,
  as: Tag = "h1",
  className = "",
  style,
  delay = 200,
  charDelay = 30,
}: AnimatedHeadingProps) {
  const [triggered, setTriggered] = useState(false);
  const shouldReduce = useReducedMotion();

  useEffect(() => {
    const t = setTimeout(() => setTriggered(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  const lines = text.split("\n");

  // Cumulative character counts to compute each char's stagger offset
  const lineStarts: number[] = [];
  let acc = 0;
  for (const line of lines) {
    lineStarts.push(acc);
    acc += line.length;
  }

  return (
    <Tag className={className} style={style}>
      {lines.map((line, li) => (
        <span key={li} className="block">
          {Array.from(line).map((char, ci) => {
            const animDelay = (lineStarts[li] + ci) * charDelay;
            return (
              <span
                key={ci}
                className="inline-block"
                style={
                  shouldReduce
                    ? {}
                    : {
                        opacity: triggered ? 1 : 0,
                        transform: triggered ? "translateX(0)" : "translateX(-18px)",
                        transitionProperty: "opacity, transform",
                        transitionDuration: "500ms",
                        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                        transitionDelay: `${animDelay}ms`,
                      }
                }
              >
                {char === " " ? " " : char}
              </span>
            );
          })}
        </span>
      ))}
    </Tag>
  );
}
