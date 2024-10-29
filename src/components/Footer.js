import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col gap-8 ">
      <div className="flex flex-row gap-48 flex-wrap">
        <div className="ml-4 gap-6 flex flex-col ">
          <h1 className="text-white text-xl font-semibold">Company</h1>
          <div className="flex flex-col gap-2">
            <h3 className="text-gray-500">About Us</h3>
            <h3 className="text-gray-500">Careers</h3>
          </div>
        </div>
        <div className="ml-4 gap-6 flex flex-col ">
          <h1 className="text-white text-xl font-semibold">View in website</h1>
          <div className="flex flex-col gap-2">
            <h3 className="text-gray-300"> English</h3>
          </div>
        </div>
        <div className="ml-4 gap-6 flex flex-col ">
          <h1 className="text-white text-xl font-semibold">Need help?</h1>
          <div className="flex flex-col gap-2">
            <h3 className="text-gray-300">Visit Help Center</h3>
            <h3 className="text-gray-300">Share Feedback</h3>
          </div>
        </div>
        <div className="ml-4 gap-6 flex flex-col flex-wrap">
          <h1 className="text-white text-xl font-semibold">Connect With Us</h1>
          <div className="flex flex-col gap-2">
            <h3 className="text-gray-400">Facebook</h3>
            <h3 className="text-gray-400">Twitter</h3>
          </div>
        </div>
      </div>
      <div className="ml-4 flex flex-col gap-2">
        <h3 className="text-gray-400">@ 2023 STAR. All Rights Reserved</h3>
        <h3 className="text-gray-400">Terms Of Use Privacy Policy FAQ </h3>
      </div>
    </div>
  );
};

export default Footer;
