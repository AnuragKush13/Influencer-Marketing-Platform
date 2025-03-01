import { useState } from "react";
import { FaCaretDown, FaUser } from "react-icons/fa";
import Link from "next/link"; // Import Link from next/link
import { Button } from "@/components/ui/button";

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
                <div className="block p-2 rounded hover:bg-[var(--hover)] dark:hover:bg-[var(--hover)] dark:text-white">
                  Home
                </div>
              </Link>
            </li>
            <li>
              <Link href="/dashboard/campaigns">
                <div className="block p-2 rounded hover:bg-[var(--hover)] dark:hover:bg-[var(--hover)] dark:text-white">
                  Campaigns
                </div>
              </Link>
            </li>
            <li>
              <Link href="/dashboard/messages">
                <div className="block p-2 rounded hover:bg-[var(--hover)] dark:hover:bg-[var(--hover)] dark:text-white">
                  Messages
                </div>
              </Link>
            </li>
            <li>
              <Link href="/dashboard/profile">
                <div className="block p-2 rounded hover:bg-[var(--hover)] dark:hover:bg-[var(--hover)] dark:text-white">
                  Profile
                </div>
              </Link>
            </li>
            <li>
              <Link href="/dashboard/settings">
                <div className="block p-2 rounded hover:bg-[var(--hover)] dark:hover:bg-[var(--hover)] dark:text-white">
                  Settings
                </div>
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* User Dropdown */}
      <div className="relative mt-auto">
        <Button
          onClick={() => setDropdownOpen(!isDropdownOpen)}
          variant={"outline"}
        >
          <FaUser className="text-white" />
          <span className="ml-2">Anurag Kushwaha</span>
          <FaCaretDown className="text-lg" />
        </Button>
        {isDropdownOpen && (
          <div className="absolute bottom-12 left-0 w-full bg-white dark:bg-gray-800 shadow-lg rounded-lg p-2">
            <ul className="space-y-2">
              <li>
                <Link href="/dashboard/profile">
                  <div className="block p-2 rounded hover:bg-[var(--hover)] dark:hover:bg-[var(--hover)]">
                    Profile
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/dashboard/settings">
                  <div className="block p-2 rounded hover:bg-[var(--hover)] dark:hover:bg-[var(--hover)]">
                    Settings
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/logout">
                  <div className="block p-2 rounded hover:bg-[var(--hover)] dark:hover:bg-[var(--hover)]">
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
