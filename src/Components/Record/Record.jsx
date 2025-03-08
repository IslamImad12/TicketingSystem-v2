import { useState } from "react";
import { PencilIcon, TrashIcon, PlusIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const initialTickets = [
  { key: "#302561", name: "John Doe" },
  { key: "#702651", name: "Jane Smith" },
  { key: "#264325", name: "Alice Johnson" },
  { key: "#827562", name: "Bob Brown" },
];

export default function Record() {
  const [search, setSearch] = useState("");
  const [tickets, setTickets] = useState(initialTickets);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const filteredTickets = tickets.filter(ticket =>
    ticket.name.toLowerCase().includes(search.toLowerCase())
  );

  const deleteTicket = (key) => {
    setTickets(tickets.filter(ticket => ticket.key !== key));
  };

  return (
    <div className="p-6 mx-auto">
      <h2 className="text-2xl font-bold mb-4">All Tickets</h2>

      <div className="flex flex-wrap items-center justify-between bg-white p-4 shadow-md rounded-xl mb-6">
        <div className="relative w-96">
          <MagnifyingGlassIcon className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search tickets..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border pl-10 p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-300"
          />
        </div>
        <div className="flex items-center gap-4">
          <select
            className="border p-2 rounded-lg"
            value={itemsPerPage}
            onChange={(e) => setItemsPerPage(Number(e.target.value))}
          >
            {[10, 25, 50, 100].map(size => (
              <option key={size} value={size}>{size}</option>
            ))}
          </select>
          <Link
            to='/NewTicket' 
            className="text-white bg-black px-4 py-2 rounded-lg flex items-center gap-2"
          >
            <PlusIcon className="w-5 h-5" /> Add New
          </Link>
        </div>
      </div>

      <div className="bg-white shadow-md rounded-xl overflow-hidden border border-gray-300">
        <table className="w-full text-left">
          <thead className="bg-white border-b">
            <tr>
              <th className="p-4 text-gray-700 font-semibold">ID</th>
              <th className="p-4 text-gray-700 font-semibold">Name</th>
              <th className="p-4 text-gray-700 font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredTickets.slice(0, itemsPerPage).map(ticket => (
              <tr key={ticket.key} className="border-b hover:bg-gray-50">
                <td className="p-4">{ticket.key}</td>
                <td className="p-4">{ticket.name}</td>
                <td className="p-4 flex gap-2">
                  <button className="text-yellow-500 hover:text-yellow-600 transition">
                    <PencilIcon className="w-5 h-5" />
                  </button>
                  <button 
                    className="text-red-500 hover:text-red-600 transition"
                    onClick={() => deleteTicket(ticket.key)}
                  >
                    <TrashIcon className="w-5 h-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
