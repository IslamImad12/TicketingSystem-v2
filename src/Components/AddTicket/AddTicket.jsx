import { useState } from "react";
// import DashboardIcon from '@mui/icons-material/Dashboard';
import { Link } from "react-router-dom";
import ReplyIcon from '@mui/icons-material/Reply';

export default function AddTicket() {
    const [activePage, setActivePage] = useState("dashboard");
  
    return (
      <>
        {/* Sidebar */}
        <aside 
          id="logo-sidebar" 
          style={{ backgroundColor: '#03091E', color: '#B3B3B3' }} 
          className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full sm:translate-x-0 border-r border-gray-200"
        >
          <div className="h-full px-3 pb-4 overflow-y-auto" style={{ backgroundColor: '#03091E' }}>
            <ul className="space-y-2 font-medium">
              <li>
                <button 
                  onClick={() => setActivePage("dashboard")}
                  className={`flex w-full items-center p-2 rounded-lg group ${
                    activePage === "dashboard" ? "bg-[#051754] text-white" : "hover:bg-[#051754]"
                  }`}>
                  <ReplyIcon />
                  <Link to='/home' className="ms-3">Back to home</Link>
                </button>
              </li>
            </ul>
          </div>
        </aside>
  
        {/* Main Content */}
        <div className="p-4 sm:ml-64 flex justify-center items-center min-h-screen ">
          <div className=" p-8  w-full  ">
            <h1 className="text-2xl font-bold mb-6">Create New</h1>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">First Name</label>
                <input type="text" className="mt-1 block w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-300" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Last Name</label>
                <input type="text" className="mt-1 block w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-300" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" className="mt-1 block w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-300" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Department</label>
                <input type="text" className="mt-1 block w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-300" />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Ticket Details</label>
              <textarea className="mt-1 block w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-300" rows="4"></textarea>
            </div>
            <button className="w-full text-white p-3 rounded-lg" style={{ backgroundColor: '#03091E' }}>Submit</button>
          </div>
        </div>
      </>
    );
}
