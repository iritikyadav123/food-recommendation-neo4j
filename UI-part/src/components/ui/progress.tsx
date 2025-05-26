import React from "react";

type ProgressBarProps = {
  value: number; // percentage (0-100)
  barColor?: string;
  bgColor?: string;
  className?: string; // optional extra styles
};

const Progress: React.FC<ProgressBarProps> = ({
  value,
  barColor = "bg-green-500",
  bgColor = "bg-gray-300",
  className = "",
}) => {
  return (
    <div
      className={`w-full h-2 rounded overflow-hidden ${bgColor} ${className}`}
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div
        className={`h-full transition-all duration-300 ease-in-out ${barColor}`}
        style={{ width: `${value}%` }}
      />
    </div>
  );
};

export default Progress;
