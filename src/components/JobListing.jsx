import React from "react";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

const JobListing = () => {
    return (
        <div className="w-full max-w-6xl mx-auto px-4 py-6">
            <div>
                <h1 className="text-[20px] font-semibold text-gray-800">
                    Find your Dream Job, <span className="text-[#0154AA]">Albert!</span>
                </h1>
                <p className="text-gray-500 text-[14px]">
                    Explore the latest job openings and apply for the best opportunities available today!
                </p>
            </div>

            <div className="mt-2">
                <SearchBar />
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
                <span className="text-gray-600 text-[14px]">Similar:</span>
                <button className="px-3 py-1 border rounded-md text-gray-700 text-[12px]">Frontend</button>
                <button className="px-3 py-1 border rounded-md text-gray-700 text-[12px]">Backend</button>
                <button className="px-3 py-1 border rounded-md text-gray-700 text-[12px]">Graphic Designer</button>
            </div>

            <div className="mt-6">
                <div className="flex md:justify-start  md:gap-4 items-center justify-between">
                    <h2 className="text-[16px] font-semibold text-gray-800">Featured Jobs</h2>
                    <h3 className="text-[#0154AA] text-[14px] border-b border-[#0154AA] cursor-pointer">See Featured Jobs</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-4">
                    {Array(5).fill(0).map((_, index) => (
                        <div key={index} className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                            <span className="text-[10px] text-[#333333] font-bold">Promoted</span>
                            <h3 className="text-[14px] font-semibold text-gray-800 mt-1 flex items-center">
                                <img src="/mail.png" alt="" className="mr-1" /> UI/UX Designer
                            </h3>
                            <p className="text-[12px] text-gray-600">Teams</p>
                            <p className="text-[12px] text-gray-500 flex items-center">
                                <img src="/Vector.png" alt="" className="mr-1" /> Seattle, USA (Remote)
                            </p>
                            <p className="text-[12px] text-gray-500">🕒 1 day ago | <span className="text-[#0154AA]">22 applicants</span></p>
                            <button className="bg-[#0154AA] text-white w-full py-2 mt-2 rounded-md text-[12px]">
                                Apply Now
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-6">
                <div className="flex md:justify-start  md:gap-4 items-center justify-between">
                    <h2 className="text-[16px] font-semibold text-gray-800">Recommended Jobs</h2>
                    <p className="text-[#0154AA] text-[14px] border-b border-[#0154AA]">
                        See Recommended Jobs
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-4">
                    {Array(5).fill(0).map((_, index) => (
                        <div key={index} className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                            <h3 className="text-[14px] font-semibold text-gray-800 mt-1 flex items-center">
                                <img src="/mail.png" alt="" className="mr-2" /> UI/UX Designer
                            </h3>
                            <p className="text-[12px] text-gray-600">Teams</p>
                            <p className="text-[12px] text-gray-500 flex items-center">
                                <img src="/Vector.png" alt="" className="mr-2" /> Seattle, USA (Remote)
                            </p>
                            <p className="text-[12px] text-gray-500">🕒 1 day ago | <span className="text-[#0154AA]">22 applicants</span></p>
                            <button className="bg-[#0154AA] text-white w-full py-2 mt-2 rounded-md text-[12px]">
                                Apply Now
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default JobListing;
