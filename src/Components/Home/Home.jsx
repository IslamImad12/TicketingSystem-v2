import  { useState } from "react";
// import { Sidebar } from "react-pro-sidebar";
import DashboardIcon from '@mui/icons-material/Dashboard';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import Tickets from "../Tickets/Tickets";
import { Link } from "react-router-dom";
import Record from "../Record/Record";
import Manager from "../Manager/Manager";

export default function Home() {
  const [activePage, setActivePage] = useState("dashboard");

  return (
    <>
      {/* Sidebar */}
     <aside 
      id="logo-sidebar" 
      style={{ backgroundColor: '#03091E', color: '#B3B3B3' }} 
      className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full sm:translate-x-0 border-r border-gray-200 dark:border-gray-700"
      >
  <div className="h-full px-3 pb-4 overflow-y-auto" style={{ backgroundColor: '#03091E' }}>
    <ul className="space-y-2 font-medium">
      <li>
        <button 
          onClick={() => setActivePage("dashboard")}
          className={`flex w-full items-center p-2 rounded-lg group ${
            activePage === "dashboard" ? "bg-[#051754] text-white" : "hover:bg-[#051754]"
          }`}>
          <DashboardIcon />
          <span className="ms-3">Dashboard</span>
        </button>
      </li>
      <li>
        <button 
          onClick={() => setActivePage("tickets")}
          className={`flex w-full items-center p-2 rounded-lg group ${
            activePage === "tickets" ? "bg-[#051754] text-white" : "hover:bg-[#051754]"
          }`}>
          <ConfirmationNumberIcon />
          <span className="ms-3">All Tickets</span>
        </button>
      </li>
      <li>
        <button 
          onClick={() => setActivePage("manager")}
          className={`flex w-full items-center p-2 rounded-lg group ${
            activePage === "manager" ? "bg-[#051754] text-white" : "hover:bg-[#051754]"
          }`}>
          <ManageAccountsIcon />
          <span className="ms-3">Add Manager</span>
          
        </button>
      </li>
      <li>
        <button 
          onClick={() => setActivePage("records")}
          className={`flex w-full items-center p-2 rounded-lg group ${
            activePage === "records" ? "bg-[#051754] text-white" : "hover:bg-[#051754]"
          }`}>
          <RadioButtonCheckedIcon />
          <span className="ms-3">Add Record</span>
        </button>
      </li>
      <li>
      <Link 
        to="/login" 
        className={`flex items-center p-2 rounded-lg group ${
          activePage === "logout" ? "bg-[#051754] text-white" : "hover:bg-[#051754]"
        }`}
        onClick={() => setActivePage("logout")}
      >
        <ExitToAppIcon />
        <span className="ms-3">Sign out</span>
      </Link>
    </li>

    </ul>
  </div>
</aside>


      {/* Main Content */}
      <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
          
          {activePage === "dashboard" && (
            <div>
              <h2 className="text-xl font-bold">Dashboard</h2>
              <div className="grid grid-cols-4 gap-4 mt-4">
                <div className="bg-white rounded-lg shadow-lg p-4 text-center">
                  <span className="text-lg font-semibold">New Tickets</span>
                  <span className="block text-2xl font-bold">20</span>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-4 text-center">
                  <span className="text-lg font-semibold">Open Tickets</span>
                  <span className="block text-2xl font-bold">14</span>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-4 text-center">
                  <span className="text-lg font-semibold">Closed Tickets</span>
                  <span className="block text-2xl font-bold">6</span>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-4 text-center">
                  <span className="text-lg font-semibold">Unassigned Tickets</span>
                  <span className="block text-2xl font-bold">0</span>
                </div>
              </div>
            </div>
          )}

          {activePage === "tickets" && (
            <div>
              <h2 className="text-xl font-bold">All Tickets</h2>
              <Tickets/>
            </div>
          )}

          {activePage === "manager" && (
            <div>
              <h2 className="text-xl font-bold">Add Manager</h2>
              <Manager/>
            </div>
          )}

          {activePage === "records" && (
            <div>
              <h2 className="text-xl font-bold">Add Record</h2>
              <Record/>
            </div>
          )}

        </div>
      </div>
    </>
  );
}
