import SalesChart from "@/components/organisms/SalesChart";

export default function DashboardPage() {
  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Sales Dashboard</h1>
      <SalesChart />
    </div>
  );
}