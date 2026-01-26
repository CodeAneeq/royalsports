import {CiMenuBurger} from "react-icons/ci";
import {useSelector} from "react-redux"

const AdminNavbar = ({ onToggleSidebar }) => {
  const name = useSelector(state => state.user.data?.name);

  return (
    <header className="w-full h-16 bg-white border-b flex items-center justify-between px-4 md:px-6">
      
      {/* Left */}
      <div className="flex items-center gap-3">
        {/* Hamburger */}
        <button
          onClick={onToggleSidebar}
          className="md:hidden p-2 rounded-lg hover:bg-gray-100"
        >
          <CiMenuBurger size={22} />
        </button>

        <h1 className="text-lg font-semibold text-gray-800">
          Dashboard Overview
        </h1>
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">
      

        {/* Divider */}
        <div className="w-px h-6 bg-gray-200" />

        {/* User */}
        <div className="flex items-center gap-3">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-medium text-gray-800">
             {name}
            </p>
            <p className="text-xs text-gray-500">
              Admin
            </p>
          </div>

          <img
            src="https://i.pravatar.cc/100?img=12"
            alt="Admin"
            className="w-9 h-9 rounded-full border-2 border-green-500"
          />
        </div>
      </div>
    </header>
  );
};

export default AdminNavbar;
