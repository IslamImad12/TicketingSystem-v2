import { useState } from "react";
import { PencilIcon, TrashIcon, PlusIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const initialTickets = [
  { key: "#302561", subject: "Ticket Subject 1", status: "Completed", date: "Mon, Dec 12" },
  { key: "#702651", subject: "Ticket Subject 2", status: "Completed", date: "Mon, Dec 12" },
  { key: "#264325", subject: "Ticket Subject 3", status: "Processing", date: "Mon, Dec 12" },
  { key: "#827562", subject: "Ticket Subject 4", status: "Pending", date: "Mon, Dec 12" },
];

const statusColors = {
  Completed: "bg-green-100 text-green-700 border border-green-300",
  Processing: "bg-yellow-100 text-yellow-700 border border-yellow-300",
  Pending: "bg-gray-200 text-gray-700 border border-gray-400",
};

export default function Tickets() {
  const [search, setSearch] = useState("");
  const [tickets] = useState(initialTickets);

  const filteredTickets = tickets.filter(ticket =>
    ticket.subject.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4 md:p-6 mx-auto max-w-6xl">
      {/* Header Section */}
      <h2 className="text-2xl font-bold mb-4">All Tickets</h2>

      <div className="flex flex-col md:flex-row items-center justify-between bg-white p-4 shadow-md rounded-xl mb-6 gap-4">
        {/* Search Box */}
        <div className="relative w-full md:w-96">
          <MagnifyingGlassIcon className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border pl-10 p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-300"
          />
        </div>

        {/* Controls */}
        <div className="flex items-center gap-4 w-full md:w-auto">
          <Link
            to="/AddTicket"
            className="text-white bg-black px-4 py-2 rounded-lg flex items-center gap-2 w-full md:w-auto justify-center"
          >
            <PlusIcon className="w-5 h-5" /> New Ticket
          </Link>
        </div>
      </div>

      {/* Responsive Table */}
      <div className="bg-white shadow-md rounded-xl overflow-hidden border border-gray-300">
        <div className="overflow-x-auto">
          <table className="w-full text-left min-w-[600px]">
            <thead className="bg-white border-b">
              <tr>
                {["SUBJECT", "STATUS", "DATE", "ACTIONS"].map(header => (
                  <th key={header} className="p-4 text-gray-700 font-semibold whitespace-nowrap">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filteredTickets.map(({ key, subject, status, date }) => (
                <tr key={key} className="border-b hover:bg-gray-50">
                  <td className="p-4 flex items-center gap-3 min-w-[200px]">
                    <img
                      src="https://randomuser.me/api/portraits/men/75.jpg"
                      alt="User"
                      className="w-8 h-8 rounded-full border"
                    />
                    <div>
                      <p className="font-medium">{subject}</p>
                      <p className="text-sm text-gray-500">Hazem Sharaf</p>
                    </div>
                  </td>
                  <td className="p-4 min-w-[150px]">
                    <span className={`px-3 py-1 rounded-full text-sm ${statusColors[status]}`}>
                      {status}
                    </span>
                  </td>
                  <td className="p-4 text-gray-500 min-w-[120px]">{date}</td>
                  <td className="p-4 flex gap-2 min-w-[100px]">
                    <button className="text-red-500 hover:text-red-600">
                      <TrashIcon className="w-5 h-5" />
                    </button>
                    <button className="text-yellow-500 hover:text-yellow-600">
                      <PencilIcon className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
