import React from "react";

const ProfileCard = () => {
    return (
        <div className="mx-auto">
            <div className="bg-white rounded-xl overflow-hidden border border-gray-200">
                <div className="relative">
                    <img src="/peoples.jpg" alt="Background" className="w-full h-[100px] object-cover" />
                    <div className="absolute top-[50px] left-1/2 transform -translate-x-1/2 border-4 border-white rounded-full w-[72px] h-[72px] overflow-hidden">
                        <img src="/person.png" alt="Profile" className="w-full h-full object-cover" />
                    </div>
                </div>
                <div className="text-center mt-2 p-4">
                    <h2 className="text-[16px] font-semibold text-gray-900">Albert Flores</h2>
                    <p className="text-[13px] text-gray-600 leading-tight mt-1">
                        Senior Product Designer | UI/UX Designer | Graphic Designer | Web...
                    </p>
                    <p className="text-[12px] text-gray-500 mt-1">Clinton, Maryland</p>
                </div>
            </div>

            <div className="border-gray-200 px-4 bg-white rounded-xl overflow-hidden py-5 mt-3 shadow">
                <div className="flex justify-between py-2 text-[13px] text-gray-600">
                    <span>Profile Visitors</span>
                    <span className="text-[#0154AA] font-medium">140</span>
                </div>
                <div className="flex justify-between py-2 text-[13px] text-gray-600 border-t border-gray-200">
                    <span>Resume Viewers</span>
                    <span className="text-[#0154AA] font-medium">20</span>
                </div>
                <div className="flex justify-between py-2 text-[13px] text-gray-600 border-t border-gray-200">
                    <span>My Jobs</span>
                    <span className="text-[#0154AA] font-medium">88</span>
                </div>
            </div>

            <div className="border-gray-200 px-4 bg-white rounded-xl overflow-hidden py-5 mt-3 shadow">
                <div className="flex justify-between items-center text-[13px] font-semibold text-gray-800">
                    <span>My Calendar</span>
                    <span className="text-gray-500">⌄</span>
                </div>
                <p className="text-[13px] text-gray-500 mt-1">Upcoming Interviews</p>
            </div>
        </div>
    );
};

export default ProfileCard;
