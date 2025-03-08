import { Link } from "react-router-dom";
import admin from '../../images/admin4.png';
import AddAlertIcon from '@mui/icons-material/AddAlert';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-64 z-50 w-[calc(100%-16rem)] bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700 px-6 py-3 shadow-md">
      <div className="flex items-center justify-between">
        {/* العنوان */}
        <div className="flex items-center">
          <span className="text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
            Hello Hazem!
          </span>
        </div>

        {/* الروابط */}
        

        {/* الإشعارات والبروفايل */}
        <div className="flex items-center gap-4">
          <button className="relative text-gray-700 dark:text-white">
            <i className="fas fa-bell text-xl"></i>
          </button>
            <AddAlertIcon/>
          
          <Link to="/profile" className="flex items-center gap-2">
            <img className="w-10 h-10 rounded-full border-2 border-gray-300 dark:border-white" src={admin} alt="User" />
            <span className="text-lg font-medium dark:text-white">Hazem Sharaf</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
