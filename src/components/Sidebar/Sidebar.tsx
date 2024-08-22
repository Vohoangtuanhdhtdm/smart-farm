import { FaUsers } from "react-icons/fa";
import { MdOutlineHome, MdOutlineNotificationsActive } from "react-icons/md";
import { RiAccountCircleLine } from "react-icons/ri";

type SidebarProps = {
  toggleDropDown: boolean;
};

const Sidebar: React.FC<SidebarProps> = ({ toggleDropDown }) => {
  return (
    <div
      className={`fixed top-12 left-0 w-[15%] h-[600px] z-10  bg-[#1C1B1B] opacity-90 flex items-center transition-transform duration-300 ${
        toggleDropDown ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="h-[70%] w-full flex flex-col items-center space-y-5 text-white">
        <a
          href="#"
          className="hover:border hover:border-slate-700 hover:shadow-2xl hover:shadow-slate-700 px-4 py-2 rounded-xl flex flex-col items-center justify-center"
        >
          <MdOutlineHome className="text-3xl" />
          Home
        </a>
        <a
          href="#"
          className="hover:border hover:border-slate-700 hover:shadow-2xl hover:shadow-slate-700 px-4 py-2 rounded-xl flex flex-col items-center justify-center "
        >
          <RiAccountCircleLine className="text-3xl" />
          Management
        </a>
        <a
          href="#"
          className="hover:border hover:border-slate-700 hover:shadow-2xl hover:shadow-slate-700 px-4 py-2 rounded-xl flex flex-col items-center justify-center"
        >
          <FaUsers className="text-3xl" />
          Blog
        </a>
        <a
          href="#"
          className="hover:border hover:border-slate-700 hover:shadow-2xl hover:shadow-slate-700 px-4 py-2 rounded-xl flex flex-col items-center justify-center"
        >
          <MdOutlineNotificationsActive className="text-3xl" />
          Notifications
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
