import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    const [hide, setHide] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleClick = () => {
        setHide(!hide);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="w-full h-[60px] flex items-center justify-between bg-white shadow-md px-4 md:px-8 lg:px-12">
            <div className="flex items-center space-x-6">
                <div className="w-[40px] h-[40px] md:w-[50px] md:h-[50px]">
                    <img
                        src="/logo.png"
                        alt="Logo"
                        className="w-full h-full object-contain"
                    />
                </div>
                <div className="hidden md:flex space-x-4 text-[14px] font-normal text-gray-600">
                    <Link to="/find-jobs" className="text-[#0154AA] font-semibold hover:text-[#0154AA]">
                        Find Jobs
                    </Link>
                    <Link to="/top-companies" className="hover:text-gray-800">Top Companies</Link>
                    <Link to="/job-tracker" className="hover:text-gray-800">Job Tracker</Link>
                    <Link to="/my-calendar" className="hover:text-gray-800">My Calendar</Link>
                    <Link to="/documents" className="hover:text-gray-800">Documents</Link>
                    <Link to="/messages" className="hover:text-gray-800">Messages</Link>
                    <Link to="/notifications" className="hover:text-gray-800">Notifications</Link>
                </div>
            </div>
            <div className="flex items-center space-x-3">
                <div className="relative w-[150px] md:w-[250px] h-[32px]">
                    <input
                        type="text"
                        placeholder="Search"
                        className="w-full h-full bg-gray-100 px-8 py-1 rounded-md text-gray-700 text-[14px] outline-none"
                    />
                    <span className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500 text-[14px]">
                        <img src="/searchsilver.png" alt="Search" />
                    </span>
                </div>
                <Link to="/resume-builder" className="hidden md:block">
                    <button className="w-[120px] h-[32px] bg-[#0154AA] text-white text-[14px] rounded-md hover:bg-[#013f80] transition">
                        Resume Builder
                    </button>
                </Link>
                <div className="w-[32px] h-[32px] rounded-full overflow-hidden">
                    <img
                        src="demo.jpg"
                        alt="Profile"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="md:hidden">
                    <button className="text-gray-700 text-2xl" onClick={toggleMenu}>
                        ☰
                    </button>
                </div>
            </div>

            {/* Responsive Dropdown Menu */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-[60px] right-0 w-full bg-white shadow-md">
                    <div className="flex flex-col space-y-4 p-4 text-[14px] font-normal text-gray-600">
                        <Link to="/find-jobs" className="text-[#0154AA] font-semibold hover:text-[#0154AA]">
                            Find Jobs
                        </Link>
                        <Link to="/top-companies" className="hover:text-gray-800">Top Companies</Link>
                        <Link to="/job-tracker" className="hover:text-gray-800">Job Tracker</Link>
                        <Link to="/my-calendar" className="hover:text-gray-800">My Calendar</Link>
                        <Link to="/documents" className="hover:text-gray-800">Documents</Link>
                        <Link to="/messages" className="hover:text-gray-800">Messages</Link>
                        <Link to="/notifications" className="hover:text-gray-800">Notifications</Link>
                        <Link to="/resume-builder">
                            <button className="w-full h-[32px] bg-[#0154AA] text-white text-[14px] rounded-md hover:bg-[#013f80] transition">
                                Resume Builder
                            </button>
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default NavBar;