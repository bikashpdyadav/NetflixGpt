import React from "react";
import TopContainer from "./TopContainer";
import MidContainer from "./MidContainer"; // Corrected to use MidContainer directly
import Footer from "../Footer";
import Sidebar from "../Sidebar";
import MenuBar from "../MenuBar";

const PayWall = () => {
  return (
    <div className="min-h-screen flex">
      <div className="xs:hidden lg:block">
        <Sidebar />
      </div>
      <div className="xs:block lg:hidden">
        <MenuBar />
      </div>
      <div className="flex-grow w-full xs:p-4 sm:p-8 lg:p-16 bg-gradient-to-r from-black via-gray-700 to-gray-900 flex flex-col gap-16">
        <TopContainer />
        <div className="mt-auto">
            <Footer />
          </div>
      </div>
    </div>
  );
};

export default PayWall;
