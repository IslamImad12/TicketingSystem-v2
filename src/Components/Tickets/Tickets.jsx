import { useState } from "react";
import { PencilIcon, TrashIcon, PlusIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const initialTickets = [
  { key: "#302561", subject: "Lorem ipsum dolor sit amet", status: "Completed", date: "Mon, Dec 12" },
  { key: "#702651", subject: "Lorem ipsum dolor sit amet", status: "Completed", date: "Mon, Dec 12" },
  { key: "#264325", subject: "Lorem ipsum dolor sit amet", status: "Processing", date: "Mon, Dec 12" },
  { key: "#827562", subject: "Lorem ipsum dolor sit amet", status: "Pending", date: "Mon, Dec 12" },
];

const statusColors = {
  "Completed": "bg-green-200 text-green-700",
  "Processing": "bg-yellow-200 text-yellow-700",
  "Pending": "bg-gray-200 text-gray-700",
};

export default function Tickets() {
  const [search, setSearch] = useState("");
  const [tickets, setTickets] = useState(initialTickets);
  const [newTicketSubject, setNewTicketSubject] = useState("");
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const filteredTickets = tickets.filter(ticket =>
    ticket.subject.toLowerCase().includes(search.toLowerCase())
  );

  const deleteTicket = (key) => {
    setTickets(tickets.filter(ticket => ticket.key !== key));
  };

  const addTicket = () => {
    if (!newTicketSubject.trim()) return;
    const newTicket = {
      key: `#${Math.floor(Math.random() * 1000000)}`,
      subject: newTicketSubject,
      status: "Pending",
      date: "Just now",
    };
    setTickets([...tickets, newTicket]);
    setNewTicketSubject("");
  };

  return (
    <div className="p-6 mx-auto">
      <div className="bg-white p-6 shadow-lg rounded-lg mb-6 flex items-center gap-4">
        <input
          type="text"
          placeholder="Search tickets..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-300"
        />
        {/* <h2 className="text-xl font-semibold">Tickets ({tickets.length})</h2> */}
        <select
          className="border p-2 rounded-lg"
          value={itemsPerPage}
          onChange={(e) => setItemsPerPage(Number(e.target.value))}
        >
          {[tickets.length, 25, 50, 100 ].map(size => (
            <option key={size} value={size}>{size}</option>
          ))}
        </select>
        <Link
          to='/AddTicket' 
          className="text-white px-4 py-3 rounded-lg flex items-center gap-2"
          style={{ backgroundColor: '#03091E' }}
          onClick={addTicket}
        >
          <PlusIcon className="w-5 h-5" /> New Ticket
        </Link>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse shadow-lg rounded-lg overflow-hidden">
          <thead className="text-white" style={{ backgroundColor: '#03091E' }}>
            <tr>
              <th className="p-3 text-left">Subject</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Date</th>
              <th className="p-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {filteredTickets.slice(0, itemsPerPage).map(ticket => (
              <tr key={ticket.key} className="border-b transition duration-300 hover:bg-gray-100">
                <td className="p-3">{ticket.subject}</td>
                <td className="p-3">
                  <span className={`px-3 py-1 rounded-full text-sm ${statusColors[ticket.status]}`}>
                    {ticket.status}
                  </span>
                </td>
                <td className="p-3 text-gray-500">{ticket.date}</td>
                <td className="p-3 flex gap-2">
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
