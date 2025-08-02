"use client";

import { useEffect, useState } from "react";

const TypewriterParagraph = ({ children }: { children: React.ReactNode }) => {
  const [hasMounted, setHasMounted] = useState(false);
  const [displayedChars, setDisplayedChars] = useState(0);
  const [textArray, setTextArray] = useState<React.ReactNode[]>([]);

  useEffect(() => {
    setHasMounted(true); // prevent hydration mismatch
  }, []);

  useEffect(() => {
    if (!hasMounted) return;
    const flattenedText = flattenChildren(children);
    setTextArray(flattenedText);
  }, [children, hasMounted]);

  useEffect(() => {
    if (!hasMounted || displayedChars >= textArray.length) return;
    const timeout = setTimeout(() => {
      setDisplayedChars((prev) => prev + 1);
    }, 15);
    return () => clearTimeout(timeout);
  }, [displayedChars, textArray, hasMounted]);

  if (!hasMounted) return null;

  return (
    <p>
      {textArray.slice(0, displayedChars).map((char, i) => (
        <span key={i}>{char}</span>
      ))}
    </p>
  );
};

export default TypewriterParagraph;

function flattenChildren(children: React.ReactNode): React.ReactNode[] {
  const result: React.ReactNode[] = [];

  const flatten = (node: React.ReactNode): void => {
    if (typeof node === "string") {
      node.split("").forEach((char) => result.push(char));
    } else if (Array.isArray(node)) {
      node.forEach(flatten);
    } else if (typeof node === "object" && node !== null && "props" in node) {
      const element = node as React.ReactElement;
      const { children: nestedChildren, ...props } = element.props;
      const newChildren = flattenChildren(nestedChildren);
      newChildren.forEach((child, i) => {
        result.push(
          <element.type key={i} {...props}>
            {child}
          </element.type>
        );
      });
    }
  };

  flatten(children);
  return result;
}
