import image from "../utils/image.png";
import wallpaper from "../utils/wallpaper.svg";
import Typed from "typed.js";
import { useRef } from "react";
import { useEffect } from "react";

const Body = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Software Developer", "Frontend Developer", "Backend Developer"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 100,
      typeSpeed: 50,
      backSpeed: 10,
      backDelay: 100,
      loop: true,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${wallpaper})`,
        backgroundSize: "cover",
      }}
      className="main-container my-5 flex items-center"
    >
      <div className="w-full flex items-center justify-center my-4 text-white ">
        <div className="w-2/3 space-y-2  ms-10">
          <h3 className="text-3xl font-semibold">Hi, I am</h3>
          <h1 className="text-5xl font-bold">Punya Jain</h1>
          <h2 className="text-3xl ">
            I am a <span className="font-bold underline" ref={el}></span>
          </h2>
          <p className="">
            an aspiring Engineering student at DTU with a profound passion for programming, problem-solving, and development. 
            I'm driven by the desire to contribute meaningfully to the missions of forward-thinking companies, leveraging my skills as a software engineer and frontend developer.
            Eager to embark on new challenges and projects, I'm keen to collaborate and innovate, striving towards shared success.
            Let's connect and craft solutions that make a difference!
          </p>
        </div>
      </div>
      <div className=" w-full flex justify-center">
        <img className="rounded-full my-2 shadow-lg w-fit" src={image} />
      </div>
    </div>
  );
};

export default Body;