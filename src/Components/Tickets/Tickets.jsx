import { useState } from "react";
import { PencilIcon, TrashIcon, PlusIcon } from "@heroicons/react/24/outline";

const initialTickets = [
  { key: "#302561", subject: "Laptop screen flickering issue.", status: "Delay processing", date: "a few seconds ago" },
  { key: "#702651", subject: "Software crashing on startup.", status: "Delay processing", date: "a few seconds ago" },
  { key: "#264325", subject: "Request to update user records.", status: "Waiting for confirmation", date: "a few seconds ago" },
  { key: "#827562", subject: "Booking for annual tech conference.", status: "Processing", date: "a few seconds ago" },
];

export default function Tickets() {
  const [search, setSearch] = useState("");
  const [tickets, setTickets] = useState(initialTickets);
  const [newTicketSubject, setNewTicketSubject] = useState("");

  const filteredTickets = tickets.filter(ticket =>
    ticket.subject.toLowerCase().includes(search.toLowerCase())
  );

  const deleteTicket = (key) => {
    setTickets(tickets.filter(ticket => ticket.key !== key));
  };

  const updateTicket = (key, newStatus) => {
    setTickets(tickets.map(ticket => ticket.key === key ? { ...ticket, status: newStatus } : ticket));
  };

  const addTicket = () => {
    if (!newTicketSubject.trim()) return;
    const newTicket = {
      key: `#${Math.floor(Math.random() * 1000000)}`,
      subject: newTicketSubject,
      status: "New",
      date: "Just now",
    };
    setTickets([...tickets, newTicket]);
    setNewTicketSubject("");
  };

  return (
    <div className="p-6 mx-auto">
      {/* Header Section - Single Row */}
      <div className="bg-white p-6 shadow-lg rounded-lg mb-6 flex items-center gap-4">
        <input
          type="text"
          placeholder="Search tickets..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-300"
        />
        <h2 className="text-xl font-semibold">Tickets ({tickets.length})</h2>
        <button 
          className="text-white px-4 py-3 rounded-lg transition flex items-center gap-2"
          style={{ backgroundColor: '#03091E' }}
          onClick={addTicket}
        >
          <PlusIcon className="w-5 h-5" /> New Ticket
        </button>
      </div>

      {/* Table Section */}
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
            {filteredTickets.map(ticket => (
              <tr key={ticket.key} className="border-b transition duration-300 hover:bg-gray-100">
                <td className="p-3">{ticket.subject}</td>
                <td className="p-3">{ticket.status}</td>
                <td className="p-3 text-gray-500">{ticket.date}</td>
                <td className="p-3 flex gap-2">
                  <button 
                    className="text-yellow-500 hover:text-yellow-600 transition"
                    onClick={() => updateTicket(ticket.key, "Updated")}
                  >
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
