import React from "react";
import TopContainer from "./TopContainer";
import MiddleContainer from "./MiddleContainer";
import Sidebar from "../Sidebar";
import Footer from "../Footer";
import MenuBar from "../MenuBar";

const MySpace = () => {
  return (
    <>
      <div className="xs:hidden lg:block">
        <Sidebar />
      </div>
      <div className="xs:block lg:hidden">
        <MenuBar />
      </div>
      <div className="w-[100%] xs:p-4 lg:p-16 bg-gradient-to-r from-black via-gray-700 to-gray-900 flex flex-col gap-16">
        <TopContainer />
        <div className="xs:-mt-4 border-b-2 opacity-10"></div>
        <MiddleContainer />
        <Footer />
      </div>
    </>
  );
};

export default MySpace;
