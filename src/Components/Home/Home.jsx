import React, { useState } from "react";
import { Sidebar } from "react-pro-sidebar";
import DashboardIcon from '@mui/icons-material/Dashboard';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import Tickets from "../Tickets/Tickets";

export default function Home() {
  const [activePage, setActivePage] = useState("dashboard");

  return (
    <>
      {/* Sidebar */}
      <aside id="logo-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            <li>
              <button 
                onClick={() => setActivePage("dashboard")}
                className={`flex w-full items-center p-2 rounded-lg group ${activePage === "dashboard" ? "bg-gray-300" : "hover:bg-gray-100 dark:hover:bg-gray-700"}`}>
                <DashboardIcon />
                <span className="ms-3">Dashboard</span>
              </button>
            </li>
            <li>
              <button 
                onClick={() => setActivePage("tickets")}
                className={`flex w-full items-center p-2 rounded-lg group ${activePage === "tickets" ? "bg-gray-300" : "hover:bg-gray-100 dark:hover:bg-gray-700"}`}>
                <ConfirmationNumberIcon />
                <span className="ms-3">All Tickets</span>
              </button>
            </li>
            <li>
              <button 
                onClick={() => setActivePage("manager")}
                className={`flex w-full items-center p-2 rounded-lg group ${activePage === "manager" ? "bg-gray-300" : "hover:bg-gray-100 dark:hover:bg-gray-700"}`}>
                <ManageAccountsIcon />
                <span className="ms-3">Add Manager</span>
              </button>
            </li>
            <li>
              <button 
                onClick={() => setActivePage("records")}
                className={`flex w-full items-center p-2 rounded-lg group ${activePage === "records" ? "bg-gray-300" : "hover:bg-gray-100 dark:hover:bg-gray-700"}`}>
                <RadioButtonCheckedIcon />
                <span className="ms-3">Add Record</span>
              </button>
            </li>
            <li>
              <a href="/login" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <ExitToAppIcon />
                <span className="ms-3">Sign out</span>
              </a>
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
              <p>Here you can add new managers.</p>
            </div>
          )}

          {activePage === "records" && (
            <div>
              <h2 className="text-xl font-bold">Add Record</h2>
              <p>Here you can add new records.</p>
            </div>
          )}

        </div>
      </div>
    </>
  );
}
