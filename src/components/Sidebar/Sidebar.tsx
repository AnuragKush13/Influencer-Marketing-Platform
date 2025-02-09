import { useState } from "react";
import { FaCaretDown, FaUser } from "react-icons/fa";

const Sidebar = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
  
    return (
      <aside className="w-64 h-[95vh] bg-[var(--background)] text-[var(--foreground)] shadow-lg p-6 rounded-2xl m-4 border border-gray-300 dark:border-gray-700 flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-bold mb-6">Dashboard</h2>
          <nav>
            <ul className="space-y-4">
              <li><a href="/dashboard" className="block p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-800 dark:text-white">Home</a></li>
              <li><a href="/dashboard/campaigns" className="block p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-800 dark:text-white">Campaigns</a></li>
              <li><a href="/dashboard/messages" className="block p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-800 dark:text-white">Messages</a></li>
              <li><a href="/dashboard/profile" className="block p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-800 dark:text-white">Profile</a></li>
              <li><a href="/dashboard/settings" className="block p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-800 dark:text-white">Settings</a></li>
            </ul>
          </nav>
        </div>
        
        {/* User Dropdown */}
        <div className="relative mt-auto ">
          <button
            onClick={() => setDropdownOpen(!isDropdownOpen)}
            className="flex items-center justify-between w-full p-2 bg-gray-100 dark:bg-gray-800 rounded-lg cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-900"
          >
            <div className="w-8 h-8 bg-gray-300 dark:bg-gray-500 rounded-full flex items-center justify-center ">
              <FaUser className="text-white" />
            </div>
            <span className="ml-2">Anurag Kushwaha</span>
            <FaCaretDown className="text-lg" />
            
          </button>
          {isDropdownOpen && (
            <div className="absolute bottom-12 left-0 w-full bg-white dark:bg-gray-800 shadow-lg rounded-lg p-2">
              <ul className="space-y-2">
                <li><a href="/dashboard/profile" className="block p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700">Profile</a></li>
                <li><a href="/dashboard/settings" className="block p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700">Settings</a></li>
                <li><a href="/logout" className="block p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700">Logout</a></li>
              </ul>
            </div>
          )}
        </div>
      </aside>
    );
  };

  export default Sidebar;