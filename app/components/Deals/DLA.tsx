import React from "react";
import { DLAPoints } from "../../utils/deals-data";

const DLA: React.FC = () => {
  return (
    <>
      <div className="flex flex-col gap-6 items-center justify-center relative px-6 sm:px-16 lg:px-[90px] mt-[3rem]">
        <div className="relative self-stretch text-justify font-sans font-bold text-black text-2xl tracking-[0] leading-[22px]">
          DLA Piper LLP
        </div>
      </div>
      <div className="px-6 sm:px-16 lg:px-[90px] mt-[2rem]">
        <ul className="list-decimal space-y-4 pl-5 font-body">
          {DLAPoints.map((data) => (
            <li key={data?.id} className="space-y-1">
              {data?.point}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default DLA;
