import React from "react";
import { FenwickPoints } from "../../utils/deals-data";

const Fenwick: React.FC = () => {
  return (
    <>
      <div className="flex flex-col gap-6 items-center justify-center relative px-6 sm:px-16 lg:px-[90px] mt-[3rem]">
        <div className="relative self-stretch text-justify font-sans font-bold text-black text-2xl tracking-[0] leading-[22px]">
          Fenwick & West LLP
        </div>
      </div>
      <div className="px-6 sm:px-16 lg:px-[90px] mt-[2rem] mb-[4rem]">
        <ul className="list-decimal space-y-4 pl-5 font-body">
          {FenwickPoints.map((data) => (
            <li key={data?.id} className="space-y-1">
              {data?.point}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Fenwick;
