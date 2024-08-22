import NguDan from "../../assets/NguDan.svg";
import NguDan2 from "../../assets/NguDanBlog2.svg";

const BlogHome = () => {
  return (
    <>
      <div className="mt-10 w-full h-[500px] flex flex-col justify-around bg-[#003566]">
        <div className="w-full h-[30%] flex items-center justify-center">
          <h1 className="text-2xl font-bold text-white text-center ">
            Welcome To <span className="text-[#FCA311]">Blog</span>
          </h1>
        </div>
        <div className="w-full h-[65%] flex items-center justify-evenly">
          <div className="w-[50%] h-full flex items-center justify-center">
            <img
              className="w-[80%] h-full object-cover rounded-xl"
              src={NguDan}
              alt=""
            />
          </div>
          <div className="w-[40%] h-full flex flex-col space-y-5">
            <div className="flex flex-col w-full h-[70%] items-center space-y-8">
              <h3 className="tracking-widest text-xl font-bold text-white">
                Close-up of the pangasius capital of hundreds of millions of
                dollars in the West
              </h3>
              <p className="text-sm text-gray-300 font-bold leading-relaxed tracking-widest">
                Hong Ngu city (Dong Thap province) is considered the "pangasius
                capital" of the West, because it is one of the cradles of
                formation and has the earliest history of developing the
                pangasius industry in the Mekong Delta.
              </p>
            </div>
            <div className="h-[30%]">
              <button className="px-16 py-2 rounded-2xl text-white bg-[#FCA311]">
                Read Article
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[500px] flex flex-col justify-around bg-[#003566]">
        <div className=" w-full h-[65%] flex items-center justify-center">
          <div className="w-[40%]  h-full flex flex-col ml-10">
            <div className=" flex flex-col w-full h-[70%] items-center space-y-8">
              <h3 className="tracking-widest text-xl font-bold text-white">
                Developing key agricultural industries in Dong Thap
              </h3>
              <p className="text-sm text-gray-300 font-bold leading-relaxed tracking-widest">
                Besides its strengths in rice, mango, and lotus, Dong Thap
                province is also known as the leading locality in the country in
                exported pangasius output. This is a key local industry,
                annually earning billions of US dollars and is also one of five
                agricultural industries chosen by the province to restructure
                over the past many years.
              </p>
            </div>
            <div className="h-[30%]">
              <button className="px-16 py-2 rounded-2xl text-white bg-[#FCA311]">
                Read Article
              </button>
            </div>
          </div>
          <div className="w-[50%] h-full flex items-center justify-end">
            <img
              className="w-[80%] h-full object-cover rounded-xl"
              src={NguDan2}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogHome;
