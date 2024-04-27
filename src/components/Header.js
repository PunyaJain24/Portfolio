import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="flex justify-between bg-gradient-to-b from-gray-500">
            <div className="text-black p-3 font-bold mx-16">
                <span className="text-4xl text-blue-900">P</span>
                <span className="text-3xl">unya </span>

                <span className="text-4xl text-blue-900">J</span>
                <span className="text-3xl">ain</span>
            </div>
            <div className="text-blue-800 flex mx-3 py-3">
                <Link to='/'><h3  className="mx-3 py-4 font-semibold hover:text-blue-950 hover:cursor-pointer">Home</h3></Link>
                <Link to='/about'><h3 className="mx-3 py-4 font-semibold hover:text-blue-950 hover:cursor-pointer">About</h3></Link>
                <a href="https://drive.google.com/file/d/11C_iCzIpH0hqrrhoOCwoidRhAupn75-o/view?usp=sharing"><h3 className="mx-3 py-4 font-semibold hover:text-blue-950 hover:cursor-pointer">Resume</h3></a>
            </div>
        </div>
    );
};

export default Header;