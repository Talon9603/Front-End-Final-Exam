"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { salesDataByYear } from "@/data/salesData";
import ChartWrapper from "../molecules/ChartWrapper";

export default function SalesChart() {
  return (
    <div className="space-y-10">
      {Object.entries(salesDataByYear).map(([year, data]) => (
        <ChartWrapper key={year} title={`Sales for ${year}`}>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="sales" fill="#3b82f6" />
            </BarChart>
          </ResponsiveContainer>
        </ChartWrapper>
      ))}
    </div>
  );
}