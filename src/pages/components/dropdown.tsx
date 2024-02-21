import React, { useState, useRef } from "react";

interface dropdownProps {
    optionList: string[]
    value: string
    setValue: React.Dispatch<React.SetStateAction<string>>
  }

const Dropdown = ({optionList, value, setValue}: dropdownProps) => {

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    console.log(isDropdownOpen);
  };

  const handleOptionSelect = (selectedOption: string) => {
    setValue(selectedOption);
    // toggleDropdown()
  };

  const handleBlur = (event: any) => {
    // Close the dropdown on blur unless the blur happens within the dropdown container
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.relatedTarget) &&
      document.activeElement !== dropdownRef.current
    ) {
      setIsDropdownOpen(false);
    }
  };

  return (
    <>
      <div style={{ position: "relative", display: "inline-block" }}>
          <div
            ref={dropdownRef}
            style={{
              position: "relative",
              display: "inline-block",
              width: "100%",
            }}
          >
            <input
              type="text"
              value={value}
              onChange={handleInputChange}
              placeholder="Type or select an option..."
              onClick={toggleDropdown}
              onBlur={handleBlur}
            />
            {isDropdownOpen && (
              <div
                className="bg-white"
                style={{
                  position: "absolute",
                  top: "100%",
                  left: "0",
                  width: "100%",
                  border: "1px solid #ccc",
                  zIndex: 1,
                }}
                onBlur={handleBlur}
                tabIndex={0}
              >
                {optionList.map((option) => (<div
                  style={{ padding: "8px", cursor: "pointer" }}
                  onClick={() => handleOptionSelect(option)}
                  key={option}
                >
                  {option}
                </div>))}
              </div>
            )}
          </div>
      </div>

      <br />
      <br />
      <br />
      {/* <div>
        OPTION: {value}
        <br />
        VISIBLE?: {String(isDropdownOpen)}
      </div> */}
    </>
  );
};

export default Dropdown;
