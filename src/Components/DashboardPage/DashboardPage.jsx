import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line, CartesianGrid, PieChart, Pie, Cell } from "recharts";
import Tickets from "../Tickets/Tickets";

const DashboardPage = () => {
  const stats = [
    { label: "All tickets", value: 10, percentage: 100 },
    { label: "Open tickets", value: 7, percentage: 70 },
    { label: "Closed tickets", value: 3, percentage: 30 },
    { label: "Users", value: 6, percentage: 60 },
  ];

  const barData = [
    { name: "Sat", value: 20 },
    { name: "Sun", value: 30 },
    { name: "Mon", value: 50 },
    { name: "Tue", value: 40 },
    { name: "Wed", value: 60 },
    { name: "Thu", value: 45 },
    { name: "Fri", value: 35 },
  ];

  const lineData = [
    { year: 2021, tickets: 1500 },
    { year: 2022, tickets: 2000 },
    { year: 2023, tickets: 2500 },
    { year: 2024, tickets: 3000 },
    { year: 2025, tickets: 4000 },
    { year: 2026, tickets: 3500 },
  ];

  const COLORS = ["#2C5282", "#3182CE", "#90CDF4"];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>

      {/* الإحصائيات مع الدوائر */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md text-center relative">
            <h3 className="text-lg font-semibold">{stat.label}</h3>
            <p className="text-2xl font-bold">{stat.value}</p>
            <div className="absolute top-3 right-3">
              <PieChart width={50} height={50}>
                <Pie
                  data={[
                    { name: "Completed", value: stat.percentage },
                    { name: "Remaining", value: 100 - stat.percentage },
                  ]}
                  cx="50%"
                  cy="50%"
                  innerRadius={15}
                  outerRadius={25}
                  fill="#8884d8"
                  dataKey="value"
                >
                  <Cell fill={COLORS[0]} />
                  <Cell fill="#e0e0e0" />
                </Pie>
              </PieChart>
            </div>
          </div>
        ))}
      </div>

      {/* المخططات */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">Daily Respond</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={barData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#3182CE" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">Annual Tickets Average</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={lineData}>
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <CartesianGrid stroke="#ccc" />
              <Line type="monotone" dataKey="tickets" stroke="#2C5282" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* جدول التذاكر الحديثة */}
      <div className="bg-white p-4 rounded-lg shadow-md mt-6">
        <h3 className="text-lg font-semibold mb-2">Recent Tickets</h3>
        <Tickets />
      </div>
    </div>
  );
};

export default DashboardPage;
