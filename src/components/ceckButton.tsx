import { useState } from "react";

const CheckButton = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleClick = () => {
    setIsChecked(!isChecked);
  };

  return (
    <button
      onClick={handleClick}
      className={`w-4 h-4 flex items-center justify-center rounded-full transition-colors duration-200 ${
        isChecked
          ? "bg-[#7F56D9] text-white border "
          : "border border-[#7F56D9] text-transparent"
      }`}
    >
      <span className="text-xs font-bold">{isChecked ? "✓" : ""}</span>
    </button>
  );
};

export default CheckButton;
