import { useState } from "react";
import { FaCaretDown, FaUser } from "react-icons/fa";
import Link from "next/link"; // Import Link from next/link

const Sidebar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  return (
    <aside className="w-64 h-[95vh] bg-[var(--background)] text-[var(--foreground)] shadow-lg p-6 rounded-2xl m-4 border border-gray-300 dark:border-gray-700 flex flex-col justify-between">
      <div>
        <h2 className="text-xl font-bold mb-6">Dashboard</h2>
        <nav>
          <ul className="space-y-4">
            <li>
              <Link href="/dashboard">
                <div className="block p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-800 dark:text-white">
                  Home
                </div>
              </Link>
            </li>
            <li>
              <Link href="/dashboard/campaigns">
                <div className="block p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-800 dark:text-white">
                  Campaigns
                </div>
              </Link>
            </li>
            <li>
              <Link href="/dashboard/messages">
                <div className="block p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-800 dark:text-white">
                  Messages
                </div>
              </Link>
            </li>
            <li>
              <Link href="/dashboard/profile">
                <div className="block p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-800 dark:text-white">
                  Profile
                </div>
              </Link>
            </li>
            <li>
              <Link href="/dashboard/settings">
                <div className="block p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-800 dark:text-white">
                  Settings
                </div>
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* User Dropdown */}
      <div className="relative mt-auto">
        <button
          onClick={() => setDropdownOpen(!isDropdownOpen)}
          className="flex items-center justify-between w-full p-2 bg-gray-100 dark:bg-gray-800 rounded-lg cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-900"
        >
          <div className="w-8 h-8 bg-gray-300 dark:bg-gray-500 rounded-full flex items-center justify-center">
            <FaUser className="text-white" />
          </div>
          <span className="ml-2">Anurag Kushwaha</span>
          <FaCaretDown className="text-lg" />
        </button>
        {isDropdownOpen && (
          <div className="absolute bottom-12 left-0 w-full bg-white dark:bg-gray-800 shadow-lg rounded-lg p-2">
            <ul className="space-y-2">
              <li>
                <Link href="/dashboard/profile">
                  <div className="block p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
                    Profile
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/dashboard/settings">
                  <div className="block p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
                    Settings
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/logout">
                  <div className="block p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
                    Logout
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
