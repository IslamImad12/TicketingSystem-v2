import { useState } from "react";
import { PencilIcon, TrashIcon, PlusIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const initialManagers = [
  { key: "#302561", name: "John Doe", email: "john.doe@example.com", phone: "123-456-7890", department: "IT" },
  { key: "#702651", name: "Jane Smith", email: "jane.smith@example.com", phone: "987-654-3210", department: "HR" },
  { key: "#264325", name: "Alice Johnson", email: "alice.johnson@example.com", phone: "555-123-4567", department: "Finance" },
  { key: "#827562", name: "Bob Brown", email: "bob.brown@example.com", phone: "444-987-6543", department: "Marketing" },
];

export default function Manager() {
  const [search, setSearch] = useState("");
  const [managers, setManagers] = useState(initialManagers);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const filteredManagers = managers.filter(manager =>
    manager.name.toLowerCase().includes(search.toLowerCase())
  );

  const deleteManager = (key) => {
    setManagers(managers.filter(manager => manager.key !== key));
  };

  return (
    <div className="p-6 mx-auto">
      <div className="bg-white p-6 shadow-lg rounded-lg mb-6 flex items-center gap-4">
        <input
          type="text"
          placeholder="Search managers..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-300"
        />
        <select
          className="border p-2 rounded-lg"
          value={itemsPerPage}
          onChange={(e) => setItemsPerPage(Number(e.target.value))}
        >
          {[managers.length, 25, 50, 100].map(size => (
            <option key={size} value={size}>{size}</option>
          ))}
        </select>
        <Link
          to='/NewManager' 
          className="text-white px-4 py-3 rounded-lg flex items-center gap-2"
          style={{ backgroundColor: '#03091E' }}
        >
          <PlusIcon className="w-5 h-5" /> Add New
        </Link>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse shadow-lg rounded-lg overflow-hidden">
          <thead className="text-white" style={{ backgroundColor: '#03091E' }}>
            <tr>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Phone</th>
              <th className="p-3 text-left">Department</th>
              <th className="p-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {filteredManagers.slice(0, itemsPerPage).map(manager => (
              <tr key={manager.key} className="border-b transition duration-300 hover:bg-gray-100">
                <td className="p-3">{manager.name}</td>
                <td className="p-3">{manager.email}</td>
                <td className="p-3">{manager.phone}</td>
                <td className="p-3">{manager.department}</td>
                <td className="p-3 flex gap-2">
                  <button className="text-yellow-500 hover:text-yellow-600 transition">
                    <PencilIcon className="w-5 h-5" />
                  </button>
                  <button 
                    className="text-red-500 hover:text-red-600 transition"
                    onClick={() => deleteManager(manager.key)}
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
