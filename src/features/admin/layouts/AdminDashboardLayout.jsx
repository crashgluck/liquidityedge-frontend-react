import { useState } from "react";
import { Menu } from "lucide-react";
import AdminAside from "./base/AdminAside";

export default function AdminDashboardLayout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#F7F9FB] text-[#050020]">
      {/* sidebar */}
      <AdminAside menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      {/* header */}
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

        {/* main area */}
        <main className="flex-1 p-4 md:p-8 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
