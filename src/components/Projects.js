const Projects = () => {
    return (
        <div>
            <h1 className="mt-14 mb-14 font-bold shadow-lg text-4xl text-center">Projects</h1>
            <div className="flex mx-4 mb-8 justify-center">
                <div className="p-4 rounded-xl mx-8 hover:bg-gray-100">
                    <img className="w-[250px] h-[250px] rounded-lg shadow-lg" src="https://imgs.search.brave.com/7RmDk-tvZtE-RtvIKp_nEgcrDGNZ8e92mJoS7SAoOVc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/ZmF0Yml0LmNvbS9m/YWIvd3AtY29udGVu/dC91cGxvYWRzLzIw/MTQvMDUvTXVsdGkt/cmVzdGF1cmFudC1m/b29kLWRlbGl2ZXJ5/LTEuLTIucG5n" />
                    <h3 className="px-2 font-extrabold text-lg text-pretty">E-food website</h3>
                    <p className="px-2 w-[250px] font-thin text-black">Crafted a dynamic React-based food ordering platform, integrating Swiggy API for real-time restaurant data, personalized recommendations, and streamlined user experience.</p>
                </div>
                <div className="p-4 rounded-xl mx-8 hover:bg-gray-100">
                    <img className="w-[250px] h-[250px] rounded-lg shadow-lg" src="https://imgs.search.brave.com/pkTTBVQfzwJcfx8Iq14J7aijEzIeX_DKw6SD-M78mRE/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/dnBsYXllZC5jb20v/YmxvZy93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMy8wNy9zdWl0/YWJsZS1mb3ItT1RU/LVNvbHV0aW9uLndl/YnA" />
                    <h3 className="px-2 font-extrabold text-lg text-pretty">CinematicVista</h3>
                    <p className="px-2 w-[250px] font-thin text-black">Engineered CinematicVista, integrating React, Js, and Tailwind CSS for secure authentication, AI-driven recommendations, and visually immersive UI/UX across all devices.</p>
                </div>
                <div className="p-4 rounded-xl mx-8 hover:bg-gray-100">
                    <img className="w-[250px] h-[250px] rounded-lg shadow-lg" src="https://imgs.search.brave.com/7RmDk-tvZtE-RtvIKp_nEgcrDGNZ8e92mJoS7SAoOVc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/ZmF0Yml0LmNvbS9m/YWIvd3AtY29udGVu/dC91cGxvYWRzLzIw/MTQvMDUvTXVsdGkt/cmVzdGF1cmFudC1m/b29kLWRlbGl2ZXJ5/LTEuLTIucG5n" />
                    <h3 className="px-2 font-extrabold text-lg text-pretty">Smart Parking System</h3>
                    <p className="px-2 w-[250px] font-thin text-black">Engineered an IoT-based Smart Parking System utilizing IR sensors and microcontroller technology for real-time parking slot detection and efficient space utilization, supported by seamless wireless communication.</p>
                </div>
            </div>
        </div>
    );
};

export default Projects;