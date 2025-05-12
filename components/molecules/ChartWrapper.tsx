import { ReactNode } from "react";
import Heading from "../atoms/Heading";

type ChartWrapperProps = {
  title: string;
  children: ReactNode;
};

export default function ChartWrapper({ title, children }: ChartWrapperProps) {
  return (
    <section className="bg-white shadow-md rounded-xl p-6 mb-8">
      <Heading level="h2">{title}</Heading>
      <div className="overflow-x-auto">{children}</div>
    </section>
  );
}