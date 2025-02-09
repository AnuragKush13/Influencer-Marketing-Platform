import React from "react";

interface CampaignCardProps {
    campaign :{
    id:number;
    title: string;
    brand: string;
    budget: string;
    status: "Pending" | "Approved" | "Ongoing" | "Completed" | "Open";
    description: string;
    role: "brand" | "influencer";}
}

const CampaignCard: React.FC<CampaignCardProps> = ({ campaign}) => {
    const {title, brand, budget, status, description,role} = campaign;
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md border border-gray-300 dark:border-gray-700">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-gray-500 dark:text-gray-400">Brand: {brand}</p>
      <p className="text-gray-500 dark:text-gray-400">Budget: {budget}</p>
      <p className={`inline-flex items-center text-xs font-semibold mt-2 py-1 px-2 rounded-full 
        ${status === "Approved" ? "bg-black bg-opacity-20 text-green-500" :
        status === "Pending" ? "bg-black bg-opacity-20 text-yellow-500" :
        status === "Ongoing" ? "bg-black bg-opacity-20 text-blue-500" :
        "bg-black bg-opacity-20 text-gray-500"}`}>
        <span className={`w-2.5 h-2.5 rounded-full 
            ${status === "Approved" ? "bg-green-500" : 
            status === "Pending" ? "bg-yellow-500" : 
            status === "Ongoing" ? "bg-blue-500" : 
            "bg-gray-500"} mr-2`}></span>
        {status}
      </p>
      <p className="text-gray-500 dark:text-gray-400">Description: {description}</p>
        
      {/* Conditional actions based on role */}
      {role === "influencer" ? (
        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Apply</button>
      ) : (
        <button className="mt-4 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">Manage</button>
      )}
    </div>
  );
};

export default CampaignCard;
