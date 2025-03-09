import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import MenuIcon from "@mui/icons-material/Menu";
import Tickets from "../Tickets/Tickets";
import Record from "../Record/Record";
import Manager from "../Manager/Manager";
import Logo from "../../images/logotext.png";
import Navbar from "../Navbar/Navbar";
import DashboardPage from "../DashboardPage/DashboardPage";

export default function Home() {
  const [activePage, setActivePage] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Call on mount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const menuItems = [
    { id: "dashboard", icon: <DashboardIcon />, label: "Dashboard" },
    { id: "tickets", icon: <ConfirmationNumberIcon />, label: "All Tickets" },
    { id: "manager", icon: <ManageAccountsIcon />, label: "Add Manager" },
    { id: "records", icon: <RadioButtonCheckedIcon />, label: "Add Record" },
  ];

  const handleMenuClick = (id) => {
    setActivePage(id);
    setSidebarOpen(false); // Close sidebar on mobile
  };

  return (
    <div className="flex">
      {/* Mobile Menu Button */}
      <button
        className="absolute top-5 left-5 text-white sm:hidden z-50"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <MenuIcon fontSize="large" />
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-40 w-64 h-screen pt-5 bg-[#03091E] text-[#B3B3B3] border-r border-gray-700 transition-transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } sm:translate-x-0`}
      >
        <div className="h-full px-3 pb-4 overflow-y-auto flex flex-col justify-between">
          <div>
            <img src={Logo} className="w-[150px] mb-6" alt="Logo" />
            <ul className="space-y-2 font-medium">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleMenuClick(item.id)}
                    className={`flex w-full items-center p-2 rounded-lg transition ${
                      activePage === item.id ? "bg-[#051754] text-white" : "hover:bg-[#051754]"
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
      <main className={`w-full ${sidebarOpen ? "ml-0" : "sm:ml-64"}`}>
        {showNavbar && <Navbar />}
        <div className="p-8 mt-14">
          {activePage === "dashboard" && <DashboardPage />}
          {activePage === "tickets" && <Tickets />}
          {activePage === "manager" && <Manager />}
          {activePage === "records" && <Record />}
        </div>
      </main>
    </div>
  );
}
