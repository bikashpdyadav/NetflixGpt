import React from "react";
import TopContainer from "./TopContainer";
import MiddleContainer from "./MiddleContainer";
import Sidebar from "../Sidebar";
import Footer from "../Footer";
import MenuBar from "../MenuBar";

const MySpace = () => {
  return (
    <>
      <div className="min-h-screen flex">
        {/* Sidebar or MenuBar Section */}
        <div className="xs:hidden lg:block">
          <Sidebar />
        </div>
        <div className="xs:block lg:hidden">
          <MenuBar />
        </div>

        {/* Main Content Section */}
        <div className="flex-grow w-full xs:p-4 sm:p-8 lg:p-16 bg-gradient-to-r from-black via-gray-700 to-gray-900 flex flex-col gap-16">
          <TopContainer />
          <div className="xs:-mt-4 border-b-2 border-gray-500 opacity-50"></div>
          <MiddleContainer />

          {/* Footer fixed at the bottom */}
          <div className="mt-auto">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default MySpace;
