import React, { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  className?: string;
  classNameTwo?: string;
  focusContent?: string;
  inputName?: string;
}

export const Input = ({
  label,
  inputName,
  className,
  classNameTwo,
  focusContent,
  ...rest
}: InputProps) => {
  return (
    <>
      <div className={`${className} rounded-md cursor-pointer space-y-3`}>
        <label
          htmlFor={inputName}
          className="font-semibold text-sm flex text-white"
        >
          {label}{" "}
          <span className="ml-1 text-red-700 font-normal text-[10px] hidden lg:block">
            {focusContent}
          </span>
        </label>
        <input
          id={inputName}
          {...rest}
          className={`${classNameTwo} border rounded focus:outline-none p-3 w-full`}
        />
      </div>
    </>
  );
};
