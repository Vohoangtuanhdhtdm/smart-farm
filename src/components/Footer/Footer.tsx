import { CiTwitter } from "react-icons/ci";
import logoFooter from "../../assets/LogoFooter.svg";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="relative w-full h-[100px] ">
        <div className="absolute w-full h-1/2 border-b border-dashed"></div>
        <div className="absolute bottom-[40%] mx-auto my-0 left-[40%]">
          <img className=" z-10 object-cover" src={logoFooter} alt="" />
        </div>
      </div>
      <div className="w-full h-[300px]  flex items-end justify-evenly text-xl font-bold text-white">
        <div className=" h-full flex flex-col items-start space-y-4 ">
          <h3>Legal</h3>
          <h3>Privacy Policy</h3>
          <h3>Terms and Conditions</h3>
          <h3>About us</h3>
        </div>
        <div className="h-full flex items-start justify-evenly space-x-10">
          <CiTwitter className="text-4xl mt-4 " />
          <FaInstagram className="text-4xl mt-4" />
          <FaLinkedinIn className="text-4xl mt-4" />
        </div>
        <div className=" h-full flex  flex-col items-start space-y-4">
          <h3>Home</h3>
          <h3>Blog</h3>
          <h3>OurTeam</h3>
        </div>
      </div>
    </>
  );
};

export default Footer;
