import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import logo from "../../assets/logoFish.svg";
import logoAccount from "../../assets/Account.svg";

type MenuProps = {
  toggleDropDown: boolean;
  handleDropDown: () => void;
};

const Menu: React.FC<MenuProps> = ({ toggleDropDown, handleDropDown }) => {
  return (
    <div className="w-full h-[55px] flex items-center justify-between bg-[#1C1B1B]">
      <div className="ml-10 flex items-center space-x-10">
        <button
          onClick={handleDropDown}
          className="relative w-[40px] h-[40px] text-white"
        >
          {toggleDropDown ? (
            <IoMdClose className="ml-1 w-2/3 h-2/3 animate-wiggle transition-all duration-300" />
          ) : (
            <FiMenu className="w-full h-full animate-fadeIn transition-all duration-300" />
          )}
        </button>
        <div className="w-[224px] h-[34px]">
          <img className="w-full h-full" src={logo} alt="logo" />
        </div>
      </div>
      <div className="mr-10 w-[70px] h-[40px]">
        <img className="w-full h-full" src={logoAccount} alt="account" />
      </div>
    </div>
  );
};

export default Menu;
