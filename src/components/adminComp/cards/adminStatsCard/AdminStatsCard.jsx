import {IoIosTrendingUp} from "react-icons/io"

const AdminStatsCard = ({
  title = "Total Sales",
  value = "$124,500",
  change = "+12.5%",
  icon,
}) => {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 w-full max-w-sm">
      
      {/* Top Row */}
      <div className="flex items-center justify-between mb-4">
        {/* Icon */}
        <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600">
          {icon || <IoIosTrendingUp size={20} />}
        </div>

        {/* Change */}
        <div className="text-sm font-semibold text-green-500 flex items-center gap-1">
          {change}
          <span className="text-xs">↑</span>
        </div>
      </div>

      {/* Title */}
      <p className="text-sm text-gray-500 mb-1">
        {title}
      </p>

      {/* Value */}
      <h2 className="text-3xl font-bold text-blue-600">
        {value}
      </h2>
    </div>
  );
};

export default AdminStatsCard;
