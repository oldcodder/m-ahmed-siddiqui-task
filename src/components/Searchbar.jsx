import React from "react";

const SearchBar = () => {
    return (
        <div className="flex flex-wrap items-center w-full max-w-5xl bg-white border border-gray-300 rounded-lg shadow-sm p-4 gap-3 sm:gap-0">
            <input
                type="text"
                placeholder="Job Title, Company, or Keywords"
                className="flex-grow px-4 py-2 outline-none bg-transparent text-gray-700 placeholder-gray-500 border border-gray-300 sm:border-none rounded-md sm:rounded-none w-full sm:w-auto"
            />
            <div className="w-full sm:w-auto px-4">
                <select className="w-full sm:w-auto px-4 py-2 border-l border-gray-300 bg-white outline-none text-gray-700 rounded-md sm:rounded-none">
                    <option value="">Select Location</option>
                    <option value="new-york">New York</option>
                    <option value="san-francisco">San Francisco</option>
                    <option value="los-angeles">Los Angeles</option>
                </select>
            </div>
            <div className="w-full sm:w-auto px-4">
                <select className="w-full sm:w-auto px-4 py-2 border-l border-gray-300 bg-white outline-none text-gray-700 rounded-md sm:rounded-none">
                    <option value="">Job Type</option>
                    <option value="full-time">Full Time</option>
                    <option value="part-time">Part Time</option>
                    <option value="contract">Contract</option>
                </select>
            </div>
            <div className="w-full sm:w-auto flex justify-center">
                <button className="bg-[#0154AA] text-white px-10 py-2 rounded-md hover:bg-[#013f80] transition flex items-center w-full sm:w-auto">
                    <span className="pr-2"><img src="/search.png" alt="Search Icon" /></span> Search
                </button>
            </div>
        </div>
    );
};

export default SearchBar;
