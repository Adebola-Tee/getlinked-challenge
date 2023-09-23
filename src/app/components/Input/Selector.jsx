"use client"
import React, { useState } from "react";
import { BiSolidDownArrow } from "react-icons/bi";

export const Selector = ({
  placeholder,
  onSelect,
  selectOption,
  label,
  focusContent,
  inputData,
  className,
  classNameTwo
}) => {
  const [inputValue, setInputValue] = useState("");
  const [selected, setSelected] = useState("");
  const [open, setOpen] = useState(false);

  const handleSelect = (item) => {
    const itemName = item.name; // Extract the 'name' property
    if (itemName.toLowerCase() !== selected.toLowerCase()) {
      setSelected(itemName);
      setOpen(false);
      setInputValue("");
      onSelect ? onSelect(itemName) : null;
    }
  };

  return (
    <div className={`${className} text-sm space-y-3`}>
      <p className="font-semibold flex text-white text-[12px]">
        {label}
        <span className="ml-1 text-red-700 text-[10px] hidden lg:block">
          {focusContent}
        </span>
      </p>
      <div className="relative">
        <div
          onClick={() => setOpen(!open)}
          className={`${classNameTwo} text-white bg-[#1C142E] w-full flex justify-between items-center rounded border-[1.5px] border-gray-200 font-normal text-[8px] ${
            !selected && "text-gray-200"
          }`}
        >
          {selected
            ? selected?.length > 25
              ? selected?.substring(0, 25) + "..."
              : selected
            : "Select your category"}
          <BiSolidDownArrow
            size={12}
            className={` text-gray-400 ${open && "rotate-180"}`}
          />
        </div>

        <ul
          className={`shadow-[0_8px_30px_rgb(0,0,0,0.12)] bg-white mt-2 overflow-y-auto w-full font-normal ${
            open ? "max-h-60" : "max-h-0"
          } absolute top-full w-full z-50`}
        >
          {inputData?.map((item, idx) => (
            <li
              key={idx}
              className={`p-2 pl-4 pt-3 text-sm hover:bg-gray-200 cursor-pointer hover:text-black
            ${item.name?.toLowerCase() === selected?.toLowerCase() && ""}
            ${item.name?.toLowerCase().startsWith(inputValue) ? "block" : "hidden"}`}
              onClick={() => handleSelect(item)}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};