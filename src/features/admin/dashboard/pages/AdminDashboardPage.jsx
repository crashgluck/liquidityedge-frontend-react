import AdminDashboardLayout from "../../layouts/AdminDashboardLayout";
import Breadcrumb from "../../components/Breadcrumb";

export default function AdminDashboardPage() {
  return (
    <AdminDashboardLayout>
   
    <main className="flex-1 p-4 md:p-8 overflow-y-auto">
        <div className="pb-3 py-1">
            <Breadcrumb></Breadcrumb>
        </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <p className="text-sm text-blue-500">Investors Pending Verification</p>
          <h2 className="text-3xl font-semibold mt-2">6</h2>
        </div>
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <p className="text-sm text-blue-500">Total Investors</p>
          <h2 className="text-3xl font-semibold mt-2">45</h2>
        </div>
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <p className="text-sm text-blue-500">Total Fund Managers</p>
          <h2 className="text-3xl font-semibold mt-2">13</h2>
        </div>
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <p className="text-sm text-blue-500">Submitted Proposals</p>
          <h2 className="text-3xl font-semibold mt-2">$1,492,102</h2>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm p-6">
        <h3 className="font-semibold mb-2">Recent Notifications</h3>
        <p className="text-sm text-gray-500 mb-4">
          Latest system activities and alerts
        </p>

        <ul className="space-y-3">
          <li className="border rounded-xl p-3 hover:bg-gray-50">
            Investor John Smith received proposal from Fund Manager ABC
          </li>
          <li className="border rounded-xl p-3 hover:bg-gray-50">
            New investor Sarah Johnson completed registration
          </li>
        </ul>
      </div>
    </main>
        </AdminDashboardLayout>
  );
}
