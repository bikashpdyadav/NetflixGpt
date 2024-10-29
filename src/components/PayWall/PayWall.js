import React from "react";
import TopContainer from "./TopContainer";
import { MidContainer } from "./MidContainer";
import Footer from "../Footer";
import Sidebar from "../Sidebar";

const PayWall = () => {
  return (
    <>
      <Sidebar />
      <div className="w-[100%] p-16 bg-gradient-to-r from-black via-gray-700 to-gray-900 flex flex-col gap-16">
        <TopContainer />
        <Footer />
      </div>
    </>
  );
};

export default PayWall;
