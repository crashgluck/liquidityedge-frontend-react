import { X, Home, Users, Settings, Activity, BarChart2, FileText } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function AdminAside({ menuOpen, setMenuOpen }) {
  return (
    <aside
      className={`fixed md:static top-0 left-0 h-full bg-white shadow-sm flex flex-col w-64 transform transition-transform duration-300 z-40
      ${menuOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
    >
      {/* Header del Sidebar */}
      <div className="flex items-center justify-between p-6 border-b">
        <div className="text-xl text-blue-700 font-semibold">LiquidityEdge</div>
        <button
          onClick={() => setMenuOpen(false)}
          className="md:hidden text-gray-500 hover:text-gray-800"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Navegación */}
      <nav className="flex-1 p-4 space-y-2 text-sm overflow-y-auto">
        {/* Links activos */}
        <NavLink
          to="/admin/dashboard"
          className={({ isActive }) =>
            `flex items-center p-2 rounded-lg hover:bg-gray-100 ${
              isActive ? "bg-blue-100 text-blue-700 font-semibold" : "text-gray-700"
            }`
          }
        >
          <Home className="w-5 h-5 mr-2" /> Dashboard
        </NavLink>

        <p className="text-blue-400 text-xs mt-4 mb-2">USERS</p>
        <NavLink
          to="/admin/investors"
          className={({ isActive }) =>
            `flex items-center p-2 rounded-lg hover:bg-gray-100 cursor-not-allowed ${
              isActive ? "bg-blue-100 text-blue-700 font-semibold" : "text-gray-700"
            }`
          }
        >
          <Users className="w-5 h-5 mr-2" /> Investors
        </NavLink>

        {/* Links deshabilitados */}
         <NavLink
          to="/admin/fund-manager"
          className={({ isActive }) =>
            `flex items-center p-2 rounded-lg hover:bg-gray-100 ${
              isActive ? "bg-blue-100 text-blue-700 font-semibold" : "text-gray-700"
            }`
          }
        >
         <BarChart2 className="w-5 h-5 mr-2" /> Fund Managers
        </NavLink>
      
        <a
          className="flex items-center p-2 rounded-lg cursor-not-allowed text-gray-400"
        >
          <Activity className="w-5 h-5 mr-2" /> Activity Log
        </a>

        <p className="text-blue-400 text-xs mt-4 mb-2">DATA MANAGEMENT</p>
        <a
          className="flex items-center p-2 rounded-lg cursor-not-allowed text-gray-400"
        >
          <FileText className="w-5 h-5 mr-2" /> Funds
        </a>
        <a
          className="flex items-center p-2 rounded-lg cursor-not-allowed text-gray-400"
        >
          <FileText className="w-5 h-5 mr-2" /> Fund Classes
        </a>
        <a
          className="flex items-center p-2 rounded-lg cursor-not-allowed text-gray-400"
        >
          <FileText className="w-5 h-5 mr-2" /> Tenders
        </a>

        <a
          className="flex items-center p-2 mt-6 rounded-lg cursor-not-allowed text-gray-400"
        >
          <Settings className="w-5 h-5 mr-2" /> Settings
        </a>
      </nav>
    </aside>
  );
}
