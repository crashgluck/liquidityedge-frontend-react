import { useState } from "react";
import AdminDashboardLayout from "../../layouts/AdminDashboardLayout";

export default function AdminFundManagers() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalEditOpen, setisModalEditOpen] = useState(false);
  

  return (
    <AdminDashboardLayout>
      <main className="flex-1 p-4 md:p-8 overflow-y-auto">
        {/* Search + filter + button */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
          <div className="flex flex-1 gap-3">
            <input
              type="text"
              placeholder="Search fund manager..."
              className="w-full md:w-72 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <select
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              defaultValue=""
            >
              <option value="">All Status</option>
              <option value="active">Active</option>
              <option value="pending">Pending</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all self-end md:self-auto"
          >
            + Add Fund Manager
          </button>
        </div>

        {/* Table */}
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <table className="min-w-full text-sm text-left border border-gray-200 rounded-lg">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="px-4 py-3">
                  <input type="checkbox" />
                </th>
                <th className="px-6 py-3 font-medium">Name</th>
                <th className="px-6 py-3 font-medium">Email</th>
                <th className="px-6 py-3 font-medium">Company</th>
                <th className="px-6 py-3 font-medium">Status</th>
                <th className="px-6 py-3 font-medium text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t hover:bg-gray-50">
                <td className="px-4 py-3">
                  <input type="checkbox" />
                </td>
                <td className="px-6 py-3">John Doe</td>
                <td className="px-6 py-3">john.doe@example.com</td>
                <td className="px-6 py-3">Global Capital Ltd.</td>
                <td className="px-6 py-3">Active</td>
                <td className="px-6 py-3 text-center">
                  <button 
                  className="text-blue-600 hover:underline mr-2"
                  onClick={() => setIsModalOpen(true)}>
                    Edit
                  </button>

                  <button className="text-red-600 hover:underline">
                    Delete
                  </button>

                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-6">
              <h2 className="text-lg font-semibold mb-4">
                Add Fund Manager
              </h2>

              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Fund Manager Name
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Role
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Status
                  </label>
                  <select className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500">
                    <option value="active">Active</option>
                    <option value="pending">Pending</option>
                    <option value="inactive">Inactive</option>
                  </select>
                </div>

                <div className="flex justify-end gap-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {isModalEditOpen && (
          <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-6">
              <h2 className="text-lg font-semibold mb-4">
                Edit Fund Manager
              </h2>

              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Fund Manager Name
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Role
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Status
                  </label>
                  <select className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500">
                    <option value="active">Active</option>
                    <option value="pending">Pending</option>
                    <option value="inactive">Inactive</option>
                  </select>
                </div>

                <div className="flex justify-end gap-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setIsModalEditOpen(false)}
                    className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                  >
                    Save changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </main>
    </AdminDashboardLayout>
  );
}
