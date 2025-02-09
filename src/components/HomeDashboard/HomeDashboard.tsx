import { ReactNode, useState } from "react";
import { FaChartBar, FaMoneyBillWave, FaUsers, FaClipboardList } from "react-icons/fa";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

interface Widget {
  title: string;
  value: string;
  icon: ReactNode;
}

const HomeDashboard = () => {
  const [role, setRole] = useState("brand"); // Can be "brand", "influencer", or "admin"

  const widgets: Record<string, Widget[]> = {
    brand: [
      { title: "Total Campaigns", value: "24", icon: <FaClipboardList /> },
      { title: "Active Collaborations", value: "12", icon: <FaUsers /> },
      { title: "Budget Spent", value: "$50,000", icon: <FaMoneyBillWave /> },
      { title: "Engagement Stats", value: "4.5%", icon: <FaChartBar /> },
    ],
    influencer: [
      { title: "Total Earnings", value: "$12,500", icon: <FaMoneyBillWave /> },
      { title: "Active Campaigns", value: "5", icon: <FaClipboardList /> },
      { title: "Engagement Rate", value: "7.8%", icon: <FaChartBar /> },
      { title: "Top Brand", value: "Nike", icon: <FaUsers /> },
    ],
    admin: [
      { title: "Total Users", value: "10,000", icon: <FaUsers /> },
      { title: "Active Campaigns", value: "350", icon: <FaClipboardList /> },
      { title: "Reports Overview", value: "85 Reports", icon: <FaChartBar /> },
      { title: "Platform Stats", value: "99.9% Uptime", icon: <FaMoneyBillWave /> },
    ],
  };

  const data = [
    { month: "Jan", engagement: 5 },
    { month: "Feb", engagement: 6 },
    { month: "Mar", engagement: 7 },
    { month: "Apr", engagement: 4 },
    { month: "May", engagement: 8 },
  ];

  const recentActivity = [
    { user: "Alice", action: "Joined a campaign", time: "2h ago" },
    { user: "Bob", action: "Completed a campaign", time: "5h ago" },
    { user: "Charlie", action: "Withdrawn earnings", time: "1d ago" },
  ];

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {widgets[role].map((widget, index) => (
        <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow flex items-center space-x-4">
          <div className="text-3xl text-blue-500">{widget.icon}</div>
          <div>
            <h3 className="text-lg font-semibold">{widget.title}</h3>
            <p className="text-xl font-bold">{widget.value}</p>
          </div>
        </div>
      ))}

      {/* Chart Section */}
      <div className="col-span-1 md:col-span-2 lg:col-span-2 bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">Analytics Overview</h3>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={data}>
            <XAxis dataKey="month" stroke="#ccc" />
            <YAxis stroke="#ccc" />
            <Tooltip />
            <Line type="monotone" dataKey="engagement" stroke="#4CAF50" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Recent Activity Feed */}
      <div className="col-span-1 md:col-span-2 lg:col-span-2 bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
        <ul className="space-y-2">
          {recentActivity.map((activity, index) => (
            <li key={index} className="flex items-center space-x-3 bg-gray-100 dark:bg-gray-700 p-3 rounded">
              <div className="w-8 h-8 bg-blue-500 text-white flex items-center justify-center rounded-full text-sm font-semibold">
                {activity.user.charAt(0)}
              </div>
              <div>
                <span className="font-semibold">{activity.user}</span> {activity.action} 
                <span className="text-gray-500 text-sm"> ({activity.time})</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HomeDashboard;
