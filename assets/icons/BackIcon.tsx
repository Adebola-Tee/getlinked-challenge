interface backIconProps {
  color?: string;
  className?: string;
  width?: number;
  height?: number;
}

export const BackIcon = ({
  color,
  className,
  width,
  height,
}: backIconProps) => {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      viewBox="0 0 23 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="11.5" cy="11.5" r="11" stroke="url(#paint0_linear_53_4794)" />
      <path
        d="M12.2669 9.20001L9.2002 12.2667L12.2669 14.5667"
        stroke="white"
      />
      <defs>
        <linearGradient
          id="paint0_linear_53_4794"
          x1="11.5"
          y1="0"
          x2="11.5"
          y2="23"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#903AFF" />
          <stop offset="1" stop-color="#FF26B9" />
        </linearGradient>
      </defs>
    </svg>
  );
};
