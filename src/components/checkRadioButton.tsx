import React, { useState } from "react";

interface CustomRadioButtonProps {
  options: string[];
}

const CustomRadioButton: React.FC<CustomRadioButtonProps> = ({ options }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOptionClick = (option: string) => {
    setSelectedOption((prev) => (prev === option ? null : option));
  };

  return (
    <div className="space-y-3">
      {options.map((option) => (
        <div
          key={option}
          className="flex items-center space-x-2 cursor-pointer text-[14px]"
          onClick={() => handleOptionClick(option)}
        >
          <span
            className={`w-4 h-4 rounded-full border transition-colors duration-200 ${
              selectedOption === option
                ? "bg-[#7F56D9] border-[#7F56D9]"
                : "bg-white border-gray-300"
            }`}
          />

          <span className="text-gray-700">{option}</span>
        </div>
      ))}
    </div>
  );
};

export default CustomRadioButton;
