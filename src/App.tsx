import { IoFishOutline } from "react-icons/io5";
import HeaderLayout from "./layout/HeaderLayout/HeaderLayout";
import { GiLindenLeaf } from "react-icons/gi";
import SystemList from "./components/SystemList/SystemList";
import BlogHome from "./components/BlogHome/BlogHome";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <div className="w-full h-full bg-[#003566] opacity-90">
        <HeaderLayout />
        <div className="w-full h-[80px] bg-blue-800 opacity-80 flex items-center space-x-24">
          <div className="flex items-center space-x-2 text-[#e5e5e5] text-xl">
            <IoFishOutline />
            <p>Smart Farm</p>
          </div>
          <div className="flex items-center space-x-2 text-[#e5e5e5] text-xl">
            <GiLindenLeaf className="text-green-600" />
            <p>Smart Farm</p>
          </div>
          <div className="flex items-center space-x-2 text-[#e5e5e5] text-xl">
            <IoFishOutline />
            <p>Smart Farm</p>
          </div>
          <div className="flex items-center space-x-2 text-[#e5e5e5] text-xl">
            <GiLindenLeaf className="text-green-600" />
            <p>Smart Farm</p>
          </div>
          <div className="flex items-center space-x-2 text-[#e5e5e5] text-xl">
            <IoFishOutline />
            <p>Smart Farm</p>
          </div>
          <div className="flex items-center space-x-2 text-[#e5e5e5] text-xl">
            <GiLindenLeaf className="text-green-600" />
            <p>Smart Farm</p>
          </div>

          <div className="flex items-center space-x-2 text-[#e5e5e5] text-xl">
            <IoFishOutline />
            <p>Smart Farm</p>
          </div>
        </div>
        <SystemList />
        <BlogHome />
        <Footer />
      </div>
    </>
  );
}

export default App;
