import fish from "../../assets/fish.svg";

const Benner = () => {
  return (
    <div
      className={`w-full h-[600px] flex items-center justify-center bg-cover bg-center bg-no-repeat bg-bg-fish`}
    >
      <div className="relative w-[80%] h-[80%] rounded-3xl shadow-inner backdrop-blur-xl">
        <div className="absolute right-0 w-[50%] h-full flex flex-col items-center space-y-3">
          <div className="flex flex-col items-center space-y-2 mt-14">
            <h1 className="text-4xl font-bold tracking-wide leading-snug text-[#FCA311]">
              Technology for smart fish farms, outstanding efficiency.
            </h1>
            <p className="text-lg text-white leading-relaxed tracking-widest">
              "We leverage advanced IoT and AI systems to deliver the most
              optimal solutions, ready to tackle any challenge and provide the
              best solution tailored to your needs."
            </p>
          </div>
          <div className="flex justify-end w-full">
            <button className="bg-[#FCA311] px-4 py-2 mr-16 rounded-3xl text-white">
              Explore the system
            </button>
          </div>
        </div>
        <div className="absolute left-0 w-[70%] h-full">
          <img className="w-full h-full object-cover" src={fish} alt="Fish" />
        </div>
      </div>
    </div>
  );
};

export default Benner;
