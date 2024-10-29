import React from "react";

export const MidContainer = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div className="flex flex-row gap-12">
        <div className=" border rounded-lg text-white w-max p-2 pl-8 pr-8">
          <h1>Super</h1>
          <h1>899/Year</h1>
        </div>
        <div className=" border rounded-lg text-white w-max p-2 pl-8 pr-8">
          <h1>Premium</h1>
          <h1>899/Year</h1>
        </div>
        <div className=" border rounded-lg text-white w-max p-2 pl-8 pr-8">
          <h1>Premium</h1>
          <h1>299/Year</h1>
        </div>
      </div>
      <div className="w-[100%]">
        <button className="bg-blue-600 w-[100%] p-4 text-lg rounded-lg">
          Continue With Super
        </button>
      </div>
    </div>
  );
};
