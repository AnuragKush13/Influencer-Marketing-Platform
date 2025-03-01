import { ReactNode, useEffect, useState } from "react";
import {
  FaChartBar,
  FaMoneyBillWave,
  FaUsers,
  FaClipboardList,
} from "react-icons/fa";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface Widget {
  title: string;
  value: string;
  icon: ReactNode;
}
const HomeDashboard = () => {
  const [role, setRole] = useState("brand"); // Can be "brand", "influencer", or "admin"
  useEffect(() => setRole("influencer"), []);

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
      {
        title: "Platform Stats",
        value: "99.9% Uptime",
        icon: <FaMoneyBillWave />,
      },
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
        <div
          key={index}
          className="bg-gray-800 p-6 rounded-xl shadow-sm flex items-center space-x-6 border border-gray-700"
        >
          <div className="text-2xl text-gray-400">
            {widget.icon}
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-400">
              {widget.title}
            </h3>
            <p className="text-lg font-semibold text-white mt-1">
              {widget.value}
            </p>
          </div>
        </div>
      ))}

      {/* Chart Section */}
      <div className="col-span-1 md:col-span-2 lg:col-span-2 bg-gray-900 p-6 rounded-xl shadow-sm">
        <h3 className="text-lg font-semibold mb-4 text-white">Analytics Overview</h3>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={data}>
            <defs>
              <linearGradient id="colorEngagement" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#4B5563" stopOpacity={0.1}/>
                <stop offset="95%" stopColor="#4B5563" stopOpacity={0.01}/>
              </linearGradient>
            </defs>
            <XAxis 
              dataKey="month" 
              stroke="#6B7280" 
              axisLine={false} 
              tickLine={false} 
            />
            <YAxis 
              stroke="#6B7280" 
              axisLine={false} 
              tickLine={false} 
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: '#1F2937',
                border: '1px solid #374151',
                borderRadius: '8px',
                color: '#F9FAFB'
              }}
            />
            <Line
              type="monotone"
              dataKey="engagement"
              stroke="#6B7280"
              strokeWidth={2}
              dot={{ stroke: '#6B7280', strokeWidth: 2, fill: '#374151' }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Recent Activity Feed */}
      <div className="col-span-1 md:col-span-2 lg:col-span-2 bg-gray-900 p-6 rounded-xl shadow-sm">
        <h3 className="text-lg font-semibold mb-4 text-white">Recent Activity</h3>
        <ul className="space-y-4">
          {recentActivity.map((activity, index) => (
            <li
              key={index}
              className="flex items-center space-x-4 p-3 rounded-lg bg-gray-800"
            >
              <div className="w-8 h-8 bg-gray-700 text-white flex items-center justify-center rounded-full text-sm">
                {activity.user.charAt(0)}
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-2">
                  <span className="font-medium text-white">
                    {activity.user}
                  </span>
                  <span className="text-gray-400">{activity.action}</span>
                </div>
                <span className="text-sm text-gray-500">
                  {activity.time}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HomeDashboard;
