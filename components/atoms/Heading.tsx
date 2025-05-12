import { ReactNode } from "react";

type HeadingProps = {
  level?: "h1" | "h2" | "h3";
  children: ReactNode;
};

export default function Heading({ level = "h2", children }: HeadingProps) {
  const Tag = level;
  const className = {
    h1: "text-4xl font-bold mb-4",
    h2: "text-3xl font-semibold mb-4",
    h3: "text-2xl font-medium mb-3",
  }[level];

  return <Tag className={className}>{children}</Tag>;
}