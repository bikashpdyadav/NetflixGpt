import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col gap-8 px-4 sm:px-8 lg:px-16 mb-8 sm:mb-0">
      <div className="flex flex-row gap-12 flex-wrap">
        <div className="flex flex-col gap-6 flex-1 min-w-[150px]">
          <h1 className="text-white text-xl font-semibold">Company</h1>
          <div className="flex flex-col gap-2">
            <h3 className="text-gray-500">About Us</h3>
            <h3 className="text-gray-500">Careers</h3>
          </div>
        </div>
        <div className="flex flex-col gap-6 flex-1 min-w-[150px]">
          <h1 className="text-white text-xl font-semibold">View in Website</h1>
          <div className="flex flex-col gap-2">
            <h3 className="text-gray-300">English</h3>
          </div>
        </div>
        <div className="flex flex-col gap-6 flex-1 min-w-[150px]">
          <h1 className="text-white text-xl font-semibold">Need Help?</h1>
          <div className="flex flex-col gap-2">
            <h3 className="text-gray-300">Visit Help Center</h3>
            <h3 className="text-gray-300">Share Feedback</h3>
          </div>
        </div>
        <div className="flex flex-col gap-6 flex-1 min-w-[150px]">
          <h1 className="text-white text-xl font-semibold">Connect With Us</h1>
          <div className="flex flex-col gap-2">
            <h3 className="text-gray-400">Facebook</h3>
            <h3 className="text-gray-400">Twitter</h3>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mt-4 p-4 gap-2">
        <h3 className="text-gray-400 text-sm xs:text-base">
          @ 2024 STAR. All Rights Reserved
        </h3>
        <h3 className="text-gray-400 text-sm xs:text-base">
          Terms Of Use | Privacy Policy | FAQ
        </h3>
      </div>
    </div>
  );
};

export default Footer;
