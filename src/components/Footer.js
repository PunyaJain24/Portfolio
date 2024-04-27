const Footer = () => {
    return (
      <>
        <div className="py-5 border bg-gray-800 text-white flex justify-between px-72">
          <div className="mx-9">
            <p>
              @2024 Punya Jain <span>All Rights Reserved</span>
            </p>
          </div>
          <div className="mx-9">
          <p>Mail to: punyajain06@gmail.com</p>
            <p>+91 6397724952</p>
          </div>
          <div className="space-x-5 flex mx-9">
            <div className="w-5">
                <a href="https://www.linkedin.com/in/punya-jain-1b39981b6/" className=" hover:bg-orange-600  border  cursor-pointer px-4 py-4 w-6 h-6  rounded-full flex justify-center items-center bg-gray-800">
                    <i class="fa-brands text-xl  fa-linkedin-in"></i>
                </a>
            </div>
            <div className="w-5">
                <a href="https://github.com/PunyaJain24/" className=" hover:bg-orange-600  border  cursor-pointer px-4 py-4 w-6 h-6  rounded-full flex justify-center items-center bg-gray-800">
                    <i class="fa-brands fa-github"></i>
                </a>
            </div>
            <div className="w-5">
                <a href="https://github.com/PunyaJain24/" className=" hover:bg-orange-600  border  cursor-pointer px-4 py-4 w-6 h-6  rounded-full flex justify-center items-center bg-gray-800">
                    <i class="fa-solid fa-phone"></i>
                </a>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default Footer;