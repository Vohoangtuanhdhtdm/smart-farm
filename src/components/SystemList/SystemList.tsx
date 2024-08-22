import MayImg from "../../assets/May.svg";
import Sodo from "../../assets/soDo.svg";
import Congnghe from "../../assets/Congnghe.svg";
const SystemList = () => {
  return (
    <div className="mt-10 w-full h-[600px] flex flex-col justify-around">
      <div className="w-full h-[30%] flex items-center justify-center">
        <h1 className="text-2xl font-bold text-white text-center ">
          <span className="text-[#FCA311]">Smart</span> system management
        </h1>
      </div>
      <div className="w-full h-[60%] flex items-center justify-evenly space-x-5">
        <div className="  flex flex-col items-center space-y-2">
          <img
            className="w-[70%] h-[70%] object-cover rounded-xl"
            src={MayImg}
            alt=""
          />
          <div className=" flex flex-col items-center space-y-2">
            <h3 className="text-[#FCA311] text-xl font-bold">Water quality</h3>
            <p className="text-sm font-bold text-center text-white leading-relaxed tracking-widest">
              We provide effective water quality management solutions, ensuring
              an optimal environment for seafood and enhancing user experience.
            </p>
          </div>
        </div>
        <div className=" flex flex-col items-center space-y-2">
          <img
            className="w-[70%] h-[70%] object-cover rounded-xl"
            src={Sodo}
            alt=""
          />
          <div className=" flex flex-col items-center space-y-2">
            <h3 className="text-[#FCA311] text-xl font-bold">Water quality</h3>
            <p className="text-sm font-bold text-center text-white leading-relaxed tracking-widest">
              We provide effective water quality management solutions, ensuring
              an optimal environment for seafood and enhancing user experience.
            </p>
          </div>
        </div>
        <div className=" flex flex-col items-center space-y-2">
          <img
            className="w-[70%] h-[70%] object-cover rounded-xl"
            src={Congnghe}
            alt=""
          />
          <div className=" flex flex-col items-center space-y-2">
            <h3 className="text-[#FCA311] text-xl font-bold">Water quality</h3>
            <p className="text-sm font-bold text-center text-white leading-relaxed tracking-widest">
              We provide effective water quality management solutions, ensuring
              an optimal environment for seafood and enhancing user experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SystemList;
