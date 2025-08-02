"use client";

import React, { useEffect, useRef, ReactNode } from "react";

interface Props {
  offset?: string;
  delay?: string;
  children?: ReactNode;
}

export default function SlideUp({ children, offset = "0px", delay = "0s" }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    const node = ref.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0");
            entry.target.classList.add("animate-slideUpCubiBezier", `animation-delay-[${delay}]`);
            // Optional: unobserve after first trigger to avoid replays
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: offset, threshold: 0.1 }
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
    };
  }, [offset, delay]);

  return (
    <div ref={ref} className="relative opacity-0">
      {children}
    </div>
  );
}
