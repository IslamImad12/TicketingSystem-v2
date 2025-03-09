import { useState } from "react";
import { PencilIcon, TrashIcon, PlusIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
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

  const filteredManagers = managers.filter(manager =>
    manager.name.toLowerCase().includes(search.toLowerCase())
  );

  const deleteManager = (key) => {
    setManagers(managers.filter(manager => manager.key !== key));
  };

  return (
    <div className="p-4 md:p-6 mx-auto max-w-6xl">
      <h2 className="text-2xl font-bold mb-4">All Managers</h2>

      {/* Search and Add Section */}
      <div className="flex flex-col md:flex-row items-center justify-between bg-white p-4 shadow-md rounded-xl mb-6 gap-4">
        {/* Search Box */}
        <div className="relative w-full md:w-96">
          <MagnifyingGlassIcon className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search managers..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border pl-10 p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-300"
          />
        </div>

        {/* Add Manager Button */}
        <div className="w-full md:w-auto">
          <Link
            to="/NewManager"
            className="text-white bg-black px-4 py-2 rounded-lg flex items-center gap-2 w-full md:w-auto justify-center"
          >
            <PlusIcon className="w-5 h-5" /> Add New
          </Link>
        </div>
      </div>

      {/* Responsive Table */}
      <div className="bg-white shadow-md rounded-xl overflow-hidden border border-gray-300">
        <div className="overflow-x-auto">
          <table className="w-full text-left min-w-[700px]">
            <thead className="bg-white border-b">
              <tr>
                {["NAME", "EMAIL", "PHONE", "DEPARTMENT", "ACTIONS"].map(header => (
                  <th key={header} className="p-4 text-gray-700 font-semibold whitespace-nowrap">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filteredManagers.map(({ key, name, email, phone, department }) => (
                <tr key={key} className="border-b hover:bg-gray-50">
                  <td className="p-4 flex items-center gap-3 min-w-[200px]">
                    <img
                      src="https://randomuser.me/api/portraits/men/50.jpg"
                      alt="User"
                      className="w-8 h-8 rounded-full border"
                    />
                    <div>
                      <p className="font-medium">{name}</p>
                      <p className="text-sm text-gray-500">{department}</p>
                    </div>
                  </td>
                  <td className="p-4 min-w-[200px]">{email}</td>
                  <td className="p-4 min-w-[150px]">{phone}</td>
                  <td className="p-4 min-w-[150px]">{department}</td>
                  <td className="p-4 flex gap-2 min-w-[100px]">
                    <button className="text-red-500 hover:text-red-600 transition" onClick={() => deleteManager(key)}>
                      <TrashIcon className="w-5 h-5" />
                    </button>
                    <button className="text-yellow-500 hover:text-yellow-600 transition">
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
