import DashboardLayout from "@/layouts/DashboardLayout";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <h2 className="text-2xl font-bold pl-5">Welcome to the Dashboard</h2>
      <p className="pl-5">Here you can manage campaigns, messages, and settings.</p>
    </DashboardLayout>
  );
};

export default Dashboard;
