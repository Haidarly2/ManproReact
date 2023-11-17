import React from "react";

export const ToggleSwitch: React.FC = () => {
  const [isChecked, setIsChecked] = React.useState(false);

  const toggleCheck = (): void => {
    setIsChecked(!isChecked);
  };

  return (
    <label className="flex justify-center cursor-pointer w-fit">
      <div className="relative">
        <input
          type="checkbox"
          className="hidden"
          checked={isChecked}
          onChange={toggleCheck}
        />
        <div
          className={`toggle__line w-[5.5rem] h-[3rem] rounded-full shadow-inner ${
            isChecked ? "bg-green-500" : "bg-gray-500"
          }`}></div>
        <div
          className={`toggle__dot absolute w-[2rem] h-[2rem] bg-white rounded-full shadow inset-y-0 left-0 ${
            isChecked ? "translate-x-full" : ""
          }`}></div>
      </div>
    </label>
  );
};
