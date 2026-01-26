import { useState } from "react";
// import AdminSidebar from "./AdminSidebar";
// import AdminNavbar from "./AdminNavbar";
import AdminSidebar from "../adminComp/sidebar/Sidebar";
import AdminNavbar from "../adminComp/navbar/AdminNavbar";

const AdminLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      
      {/* Sidebar */}
      <AdminSidebar
        isOpen={sidebarOpen}
        setIsOpen={setSidebarOpen}
      />

      {/* Main Content */}
      <div className="flex flex-col flex-1">
        <AdminNavbar
          onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
        />

        <main className="flex-1 overflow-y-auto bg-gray-50 p-4 md:p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
