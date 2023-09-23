interface TextAreaProps {
    label?: string;
    className?: string;
    name?: string;
    focusContent?: string;
    rows?: any;
    classNameTwo?: string;
    placeholder?: string;
    register?: any;
  }
  
  export const TextArea = ({
    label,
    name,
    className,
    focusContent,
    rows,
    classNameTwo,
    placeholder,
    register
  }: TextAreaProps) => {
    return (
      <>
      <div className={`${className} rounded-md cursor-pointer space-y-3`}>
        <label htmlFor={name} className="font-semibold text-sm flex">
            {label} <span className="ml-1 text-red-700 font-normal text-[10px] hidden lg:block">{focusContent}</span>
          </label>
          <textarea
            className={`${classNameTwo} border rounded focus:outline-none p-3 w-full`}
            name=""
            placeholder={placeholder}
            rows={rows}
            {...register}
          ></textarea>
        </div>
      </>
    );
  };
  