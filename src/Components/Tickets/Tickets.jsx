import { useState } from "react";

const ticketsData = [
  { key: "#302561", subject: "Laptop screen flickering issue.", type: "Hardware Problem", priority: "Less Urgent", status: "Delay processing", date: "a few seconds ago", assignees: ["Mervin Mittie", "Ezra Amara"] },
  { key: "#702651", subject: "Software crashing on startup.", type: "Software Problem", priority: "Urgent", status: "Delay processing", date: "a few seconds ago", assignees: ["Jada Margarette", "Mellie Alvina"] },
  { key: "#264325", subject: "Request to update user records.", type: "Data Update", priority: "Generally", status: "Waiting for confirmation", date: "a few seconds ago", assignees: ["Emilia Gianni", "Tremayne Casandra"] },
  { key: "#827562", subject: "Booking for annual tech conference.", type: "Event Booking", priority: "Urgent", status: "Processing", date: "a few seconds ago", assignees: ["Tremayne Casandra", "Erin Kraig"] },
];

export default function Tickets() {
  const [search, setSearch] = useState("");
  const [priority, setPriority] = useState("");
  const [type, setType] = useState("");
  const [tickets, setTickets] = useState(ticketsData);
  const [newTicketSubject, setNewTicketSubject] = useState("");
  const [newTicketType, setNewTicketType] = useState("Hardware Problem");

  const addTicket = () => {
    if (!newTicketSubject.trim()) return;
    const newTicket = {
      key: `#${Math.floor(Math.random() * 1000000)}`,
      subject: newTicketSubject,
      type: newTicketType,
      priority: "Generally",
      status: "New",
      date: "Just now",
      assignees: [],
    };
    setTickets([...tickets, newTicket]);
    setNewTicketSubject("");
    setNewTicketType("Hardware Problem");
  };

  const filteredTickets = tickets.filter(ticket =>
    ticket.subject.toLowerCase().includes(search.toLowerCase()) &&
    (priority ? ticket.priority === priority : true) &&
    (type ? ticket.type === type : true)
  );

  return (
    <div className="p-6 mx-auto">
      {/* Form Section */}
      <div className="bg-white p-6 shadow-lg rounded-lg mb-6">
        <h2 className="text-xl font-semibold mb-4">Manage Tickets</h2>
        <div className="flex gap-4 mb-4">
          <input
            type="text"
            placeholder="Search tickets..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-300"
          />
          <select
            onChange={(e) => setPriority(e.target.value)}
            value={priority}
            className="border p-3 rounded-lg bg-white focus:ring-2 focus:ring-blue-300"
          >
            <option value="">All Priorities</option>
            <option value="Less Urgent">Less Urgent</option>
            <option value="Urgent">Urgent</option>
            <option value="Generally">Generally</option>
          </select>
          <select
            onChange={(e) => setType(e.target.value)}
            value={type}
            className="border p-3 rounded-lg bg-white focus:ring-2 focus:ring-blue-300"
          >
            <option value="">All Types</option>
            <option value="Hardware Problem">Hardware Problem</option>
            <option value="Software Problem">Software Problem</option>
            <option value="Event Booking">Event Booking</option>
            <option value="Data Update">Data Update</option>
          </select>
        </div>
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Enter ticket subject..."
            value={newTicketSubject}
            onChange={(e) => setNewTicketSubject(e.target.value)}
            className="border p-3 rounded-lg w-1/2 focus:ring-2 focus:ring-blue-300"
          />
          <select
            value={newTicketType}
            onChange={(e) => setNewTicketType(e.target.value)}
            className="border p-3 rounded-lg bg-white focus:ring-2 focus:ring-blue-300"
          >
            <option value="Hardware Problem">Hardware Problem</option>
            <option value="Software Problem">Software Problem</option>
            <option value="Event Booking">Event Booking</option>
            <option value="Data Update">Data Update</option>
          </select>
          <button 
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition duration-300"
            onClick={addTicket}
          >
            Create Ticket
          </button>
        </div>
      </div>

      {/* Table Section */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse shadow-lg rounded-lg overflow-hidden">
          <thead className="bg-blue-500 text-white">
            <tr>
              <th className="p-3 text-left">Key</th>
              <th className="p-3 text-left">Subject</th>
              <th className="p-3 text-left">Type</th>
              <th className="p-3 text-left">Priority</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Date</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {filteredTickets.map(ticket => (
              <tr key={ticket.key} className="border-b transition duration-300 hover:bg-gray-100">
                <td className="p-3">{ticket.key}</td>
                <td className="p-3">{ticket.subject}</td>
                <td className="p-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold 
                      ${ticket.type === "Hardware Problem" ? "bg-gray-200 text-gray-700" :
                      ticket.type === "Software Problem" ? "bg-blue-100 text-blue-600" :
                      ticket.type === "Event Booking" ? "bg-purple-100 text-purple-600" :
                      "bg-green-100 text-green-600"}`}>
                    {ticket.type}
                  </span>
                </td>
                <td className="p-3">{ticket.priority}</td>
                <td className="p-3">{ticket.status}</td>
                <td className="p-3 text-gray-500">{ticket.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
