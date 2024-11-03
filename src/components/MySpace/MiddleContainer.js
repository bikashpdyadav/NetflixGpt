import React from "react";
import { useSelector } from "react-redux";

const MiddleContainer = () => {
  const userDetails = useSelector((store) => store.user.userDetails);
  return (
    <div className="xs:-mt-8 flex flex-col py-12 gap-8">
      <div className="text-white font-bold ml-4 flex flex-col gap-6 justify-center">
        <div className="flex flex-row justify-between">
          <h1 className=" text-2xl opacity-70">Profiles</h1>
          <h1 className=" text-2xl opacity-70">Edit</h1>
        </div>

        <div className="flex flex-row -ml-8">
          <div className="flex flex-col items-center gap-2">
            <img
              src="https://img1.hotstarext.com/image/upload/w_201,h_200,c_fill/v1/feature/profile/38.png"
              alt="myProfile image"
              className="w-[40%]"
            />
            <h3>{userDetails?.email}</h3>
          </div>
          <div className="flex-col flex items-center gap-2 -ml-20">
            <img
              src="https://img1.hotstarext.com/image/upload/w_200,h_200,c_fill/feature/profile/19.png"
              alt="myProfile image"
              className="w-[40%]"
            />
            <h3>KIDS</h3>
          </div>
          <div className="flex-col flex items-center gap-2 -ml-20">
            <img
              src="https://img1.hotstarext.com/image/upload/w_200,h_200,c_fill/feature/profile/19.png"
              alt="myProfile image"
              className="w-[40%]"
            />
            <h3>KIDS</h3>
          </div>
        </div>
      </div>
      <div className="text-white font-bold ml-4 flex flex-col gap-6 justify-center">
        <h1 className="xs:text-md lg:text-2xl opacity-70">
          Continue Watching for {userDetails?.email}
        </h1>
      </div>
    </div>
  );
};

export default MiddleContainer;
