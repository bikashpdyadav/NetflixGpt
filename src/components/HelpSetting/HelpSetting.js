import React from "react";
import Footer from "../Footer";
import Sidebar from "../Sidebar";

const HelpSetting = () => {
  return (
    <>
      <Sidebar />

      <div className="bg-gradient-to-r from-black via-stone-800 to-gray-500 gap-24 flex flex-col">
        <div className="flex flex-row bg-gradient-to-r from-black via-stone-800 to-gray-500">
          <div className="text-white flex flex-col w-full  gap-8 p-8 pl-20">
            <h1 className="text-2xl font-bold">Help & Settings</h1>
            <div className="flex flex-col gap-4">
              <div className=" border-white border w-[45%] rounded-lg p-2 flex flex-row gap-4 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
                <div>
                  <h1 className=" font-bold opacity-80">
                    Subscription & Devices
                  </h1>
                  <h1 className=" text-gray-500">
                    Manage Subscriptions & Devices
                  </h1>
                </div>
              </div>
              <div className=" border-white border w-[45%] rounded-lg p-2 flex flex-row gap-4 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                  />
                </svg>

                <div>
                  <h1 className=" font-bold opacity-80">Parental Controls</h1>
                  <h1 className=" text-gray-500">Parental Lock</h1>
                </div>
              </div>
              <div className=" border-white border w-[45%] rounded-lg p-2 flex flex-row gap-4 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
                  />
                </svg>

                <div>
                  <h1 className=" font-bold opacity-80">Help & Support</h1>
                  <h1 className=" text-gray-500">Help Center</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="text-white w-full flex flex-col  gap-12 pr-16 pt-8">
            <div className="flex flex-row justify-between">
              <h1 className="text-2xl font-bold">Subscribe to enjoy</h1>
              <button className="bg-blue-500 p-4">Subscribe</button>
            </div>
            <div className="flex flex-row justify-between">
              <div>
                <h1 className="text-2xl font-bold">Registered Email</h1>
                <h1 className="font-semibold text-base">7457845875</h1>
              </div>
              <button className="font-bold text-lg">Update</button>
            </div>
            <h1 className=" text-xl font-bold">This device</h1>
            <div className="flex flex-row justify-between">
              <h1 className="text-2xl font-bold">Web Browser</h1>
              <button className="bg-blue-500 p-4">Log Out</button>
            </div>
            <h1 className=" text-xl font-bold">Other devices</h1>
            <div className="flex flex-row justify-between">
              <div>
                <h1 className="text-2xl font-bold">Android Phone/Tablet</h1>
                <button>Last Used:Yesterday</button>
              </div>
              <button className="bg-blue-500 p-4">Log Out</button>
            </div>
          </div>
        </div>
        <div className="p-16">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default HelpSetting;
