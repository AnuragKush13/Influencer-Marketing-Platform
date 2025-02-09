import { useState } from "react";
import CampaignCard from "@/components/CampaignCard";
import Sidebar from "@/components/Sidebar"; // Import Sidebar

interface CampaignProp {
  id: number;
  title: string;
  brand: string;
  budget: string;
  status: "Pending" | "Approved" | "Ongoing" | "Completed" ;
  description: string;
  role: "brand" | "influencer";
}

const dummyCampaigns: CampaignProp[] = [
  {
    id: 1,
    title: "Summer Style Collaboration",
    brand: "Nike",
    budget: "$5,000",
    status: "Ongoing",
    description: "Seeking fashion influencers for summer campaign.",
    role : "influencer"
  },
  {
    id: 2,
    title: "Tech Gadget Reviews",
    brand: "Apple",
    budget: "$10,000",
    status: "Ongoing",
    description: "Looking for tech reviewers for the latest iPhone.",
    role : "influencer"
  },
  {
    id: 3,
    title: "Fitness Challenge Promo",
    brand: "Adidas",
    budget: "$3,500",
    status: "Completed",
    description: "Fitness enthusiasts needed for workout promotion.",
    role : "influencer"
  }
];

const CampaignsPage = () => {
  const [search, setSearch] = useState("");

  const filteredCampaigns = dummyCampaigns.filter((campaign) =>
    campaign.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6">
        <h2 className="text-2xl font-bold mb-4">Campaigns</h2>
        <input
          type="text"
          placeholder="Search campaigns..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-2 border rounded mb-4"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredCampaigns.map((campaign) => (
            <CampaignCard key={campaign.id} campaign={campaign} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CampaignsPage;
