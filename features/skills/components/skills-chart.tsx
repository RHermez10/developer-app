"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    skill: "React",
    proficiency: 90,
  },

  {
    skill: "TypeScript",
    proficiency: 82,
  },

  {
    skill: "Next.js",
    proficiency: 85,
  },

  {
    skill: "Tailwind",
    proficiency: 88,
  },

  {
    skill: "Node.js",
    proficiency: 60,
  },

  {
    skill: "PostgreSQL",
    proficiency: 45,
  },
];
export default function SkillsChart() {
  return (
    <div className="rounded-2xl border border-gray-800 bg-gray-900 p-6">
      {/* Header */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-white">Skills Analytics</h3>
        <p className="mt-1 text-sm text-gray-400">
          Technical proficiency overview
        </p>
      </div>
      {/*Chart */}
      <div className="h-[300px] md:h-[350px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#262626" />
            <XAxis
              dataKey="skill"
              stroke="#9ca3af"
              tickLine={false}
              axisLine={false}
            />

            <YAxis stroke="#9ca3af" tickLine={false} axisLine={false} />

            <Tooltip
              contentStyle={{
                backgroundColor: "#111827",
                border: "1px solid #374151",
                borderRadius: "12px",
                color: "white",
              }}
            />

            <Bar
              dataKey="proficiency"
              radius={[8, 8, 0, 0]}
              fill="#6366f1"
              animationDuration={1200}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
