import { useState } from "react";
import { Link } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import Tickets from "../Tickets/Tickets";
import Record from "../Record/Record";
import Manager from "../Manager/Manager";
import Logo from "../../images/logotext.png";
import Navbar from '../Navbar/Navbar'

export default function Home() {
  const [activePage, setActivePage] = useState("dashboard");

  const menuItems = [
    { id: "dashboard", icon: <DashboardIcon />, label: "Dashboard" },
    { id: "tickets", icon: <ConfirmationNumberIcon />, label: "All Tickets" },
    { id: "manager", icon: <ManageAccountsIcon />, label: "Add Manager" },
    { id: "records", icon: <RadioButtonCheckedIcon />, label: "Add Record" },
  ];

  return (
    <div className="flex">
      {/* Sidebar */}
      <aside
        className="fixed top-0 left-0 z-40 w-64 h-screen pt-5 bg-[#03091E] text-[#B3B3B3] border-r border-gray-700 sm:translate-x-0"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto flex flex-col justify-between ">
          <div>
            <img src={Logo} className="w-50 mb-6" alt="Logo" />
            <ul className="space-y-2 font-medium">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => setActivePage(item.id)}
                    className={`flex w-full items-center p-2 rounded-lg transition ${
                      activePage === item.id
                        ? "bg-[#051754] text-white"
                        : "hover:bg-[#051754]"
                    }`}
                  >
                    {item.icon}
                    <span className="ms-3">{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Logout Button */}
          <div className="mb-4">
            <Link
              to="/login"
              className="flex items-center p-2 rounded-lg text-red-600 transition hover:bg-[#051754] hover:text-white"
              onClick={() => setActivePage("logout")}
            >
              <ExitToAppIcon />
              <span className="ms-3">Sign out</span>
            </Link>
          </div>
        </div>
      </aside>
      {/* Main Content */}
      <main className="sm:ml-64 w-full">
              <div>
                <Navbar/>
              </div>
        <div className="p-8  mt-14">
          {/*  */}
          {activePage === "dashboard" && (
            <div>
              <h2 className="text-xl font-bold">Dashboard</h2>
              <div className="grid grid-cols-4 gap-4 mt-4">
                {[
                  { label: "New Tickets", count: 20 },
                  { label: "Open Tickets", count: 14 },
                  { label: "Closed Tickets", count: 6 },
                  { label: "Unassigned Tickets", count: 0 },
                ].map((item, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-lg p-4 text-center">
                    <span className="text-lg font-semibold">{item.label}</span>
                    <span className="block text-2xl font-bold">{item.count}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activePage === "tickets" && <Tickets />}
          {activePage === "manager" && <Manager />}
          {activePage === "records" && <Record />}
        </div>
      </main>
    </div>
  );
}
