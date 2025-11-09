import { useState } from "react";
import {
  Home,
  Users,
  Settings,
  Activity,
  BarChart2,
  FileText,
  Menu,
  X,
} from "lucide-react";

export default function AdminDashboardLayout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#F7F9FB] text-[#050020]">
      {/* sidebar */}
      <aside
        className={`fixed md:static top-0 left-0 h-full bg-white shadow-sm flex flex-col w-64 transform transition-transform duration-300 z-40
        ${menuOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
      >
        <div className="flex items-center justify-between p-6 border-b">
          <div className="text-xl text-blue-700 font-semibold">LiquidityEdge</div>
          <button
            onClick={() => setMenuOpen(false)}
            className="md:hidden text-gray-500 hover:text-gray-800"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="flex-1 p-4 space-y-2 text-sm overflow-y-auto">
          <a
            href="#"
            className="flex items-center p-2 rounded-lg bg-blue-50 text-blue-600 font-medium"
          >
            <Home className="w-5 h-5 mr-2" /> Dashboard
          </a>

          <p className="text-blue-400 text-xs mt-4 mb-2">USERS</p>
          <a href="#" className="flex items-center p-2 rounded-lg hover:bg-gray-100">
            <Users className="w-5 h-5 mr-2" /> Investors
          </a>
          <a href="#" className="flex items-center p-2 rounded-lg hover:bg-gray-100">
            <BarChart2 className="w-5 h-5 mr-2" /> Fund Managers
          </a>
          <a href="#" className="flex items-center p-2 rounded-lg hover:bg-gray-100">
            <Activity className="w-5 h-5 mr-2" /> Activity Log
          </a>

          <p className="text-blue-400 text-xs mt-4 mb-2">DATA MANAGEMENT</p>
          <a href="#" className="flex items-center p-2 rounded-lg hover:bg-gray-100">
            <FileText className="w-5 h-5 mr-2" /> Funds
          </a>
          <a href="#" className="flex items-center p-2 rounded-lg hover:bg-gray-100">
            <FileText className="w-5 h-5 mr-2" /> Fund Classes
          </a>
          <a href="#" className="flex items-center p-2 rounded-lg hover:bg-gray-100">
            <FileText className="w-5 h-5 mr-2" /> Tenders
          </a>

          <a
            href="#"
            className="flex items-center p-2 mt-6 rounded-lg hover:bg-gray-100"
          >
            <Settings className="w-5 h-5 mr-2" /> Settings
          </a>
        </nav>
      </aside>

      {/* main area */}
      <div className="flex-1 flex flex-col min-h-screen">
        <header className="flex items-center justify-between bg-white shadow-sm p-4 md:px-8">
          <div className="flex items-center gap-4">
            <button
              className="md:hidden text-gray-700"
              onClick={() => setMenuOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
            <h1 className="text-xl font-bold">Dashboard</h1>
          </div>
          <button className="text-blue-600 text-sm border border-blue-200 rounded-full px-4 py-1 hover:bg-blue-50">
            🔔 2 new tenders
          </button>
        </header>

        <main className="flex-1 p-4 md:p-8 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
