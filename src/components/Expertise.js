import wallpaper from "../utils/wallpaper.svg";

const Expertise = () => {
  return (
    <>
      <div className="mt-2">
        <h1 className=" mb-14 shadow-lg mt-14 text-4xl font-bold text-center">
          My Expertise
        </h1>

        <div
          style={{
            backgroundImage: `url(${wallpaper})`,
            backgroundSize: "cover",
          }}
          className="box-container items-center flex py-16"
        >
          <div className="flex text-white justify-center">
            {/* text container */}
            <div className="w-2/3 space-y-4 mx-8">
              <h1 className="text-4xl font-bold">I love these technologies</h1>
              <p>
                I'm adept at harnessing a versatile arsenal of tech stacks and frameworks, crafting innovative projects that showcase my mastery. From React.js to Node.js, I seamlessly blend these skills to engineer impactful solutions that transcend expectations.
              </p>
              <button className=" text-2xl px-4 py-2 bg-orange-500 rounded-full shadow-lg">
                Hire Me
              </button>
            </div>
          </div>
          <div className="flex justify-center">

            <div className="flex justify-center w-2/3 h-fit space-x-3  flex-wrap">
              <p className="bg-gray-300 w-fit px-3 py-2 mt-1 rounded-full hover:bg-orange-500 cursor-pointer">
                C++
              </p>

              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                Javascript
              </p>

              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                ReactJs
              </p>

              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                Redux toolkit
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                Tailwind CSS
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                Firebase
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                Github
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                Git
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                Atom
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                ExpressJs
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                VS Code
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                State Management
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Expertise;