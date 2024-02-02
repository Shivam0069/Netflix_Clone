import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeSelected } from "../utils/headerSlice";

export default function HeaderItem({ title}) {
  const dispatch = useDispatch();
  const heading = useSelector((store) => store.header?.selected);
  const isActive = heading === title;
  return (
    <div
      onClick={() => dispatch(changeSelected(title))}
      className={`hidden lg:inline-flex text-white text-sm mx-1 lg:mx-2 cursor-pointer hover:scale-110   ${isActive ? "brightness-200" : "brightness-75"}`}
    >
      {title}
    </div>
  );
}
export  function HeaderListHover({ title }) {
  const dispatch = useDispatch();
  const heading = useSelector((store) => store.header?.selected);
  const isActive = heading === title;
  return (
    <div
      onClick={() => dispatch(changeSelected(title))}
      className={`lg:hidden text-white  mx-1 lg:mx-2 hover:scale-110 py-2 px-4 hover:bg-white/25 text-sm   cursor-pointer   ${isActive ? "brightness-200" : "brightness-50"}`}
    >
      {title}
    </div>
  );
}
