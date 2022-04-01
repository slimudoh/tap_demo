import React from "react";

const Button: React.FC<{
  title: string;
  disabled: boolean;
  handleButtonClick: () => void;
}> = ({ title, disabled, handleButtonClick }) => {
  const handleClick = () => {
    handleButtonClick();
  };

  return (
    <div className="page_button">
      <button
        onClick={handleClick}
        style={{
          backgroundColor: disabled ? "rgba(0, 78, 146, 0.2)" : "",
        }}
      >
        {title}
      </button>
    </div>
  );
};

export default Button;
