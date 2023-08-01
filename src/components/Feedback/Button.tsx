import React from "react";

type ButtonProps = {
  title: string;
};

const Button: React.FC<ButtonProps> = ({ title }) => {
  const [isButtonActive, setIsButtonActive] = React.useState(false);

  const toggleButton = () => {
    setIsButtonActive((prevState) => !prevState);
  };
  return (
    <button onClick={toggleButton} className={isButtonActive ? "active" : ""}>
      {title}
    </button>
  );
};

export default Button;
