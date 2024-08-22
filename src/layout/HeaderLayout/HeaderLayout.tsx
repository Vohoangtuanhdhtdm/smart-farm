import { useState } from "react";
import Benner from "../../components/Benner/Benner";
import Menu from "../../components/Header/Menu";
import Sidebar from "../../components/Sidebar/Sidebar";

const HeaderLayout = () => {
  const [toggleDropDown, setToggleDropDown] = useState(false);

  const handleDropDown = () => setToggleDropDown(!toggleDropDown);

  return (
    <div className="w-full h-full">
      <Menu toggleDropDown={toggleDropDown} handleDropDown={handleDropDown} />
      <Sidebar toggleDropDown={toggleDropDown} />
      <div className="w-full h-full">
        <Benner />
      </div>
    </div>
  );
};

export default HeaderLayout;
