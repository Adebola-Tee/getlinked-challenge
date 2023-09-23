interface InputProps {
    label?: string;
    className?: string;
    classNameTwo?: string;
    name?: string;
    type?: string;
    inputName?: string;
    focusContent?: string;
    register?: any;
    placeholder?: string;
  }
  
  export const Input = ({
    label,
    name,
    type,
    className,
    classNameTwo,
    focusContent,
    inputName,
    register,
    placeholder
  }: InputProps) => {
    return (
      <>
        <div className={`${className} rounded-md cursor-pointer space-y-3`}>
          <label htmlFor={inputName} className="font-semibold text-sm flex text-white">
            {label} <span className="ml-1 text-red-700 font-normal text-[10px] hidden lg:block">{focusContent}</span>
          </label>
          <input
            name={inputName}
            placeholder={placeholder}
            type={type}
            {...register}
            className={`${classNameTwo} border rounded focus:outline-none p-3 w-full`}
          />
        </div>
      </>
    );
  };
  