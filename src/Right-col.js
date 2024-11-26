import React from "react";
import { useRecoilState } from "recoil";

import { dataAtomState } from "./dataAtom";

const Rightcol = ({ filters }) => {
    const [dataState, setDataState] = useRecoilState(dataAtomState);
  return (
    <div className="p-[1rem] bg-[#f5f5f5] w-[100%] mt-[30px] flex flex-col gap-4">
      <h3 className="text-2xl ">Information</h3>
      <p><strong>Duration:</strong> {dataState.date}</p>
        <p><strong>Filters:</strong> Product: {dataState.product}, Region: {dataState.region}</p>
      <p><strong>Data Source:</strong> Database</p>
      
    </div>
  );
};

export default Rightcol;
