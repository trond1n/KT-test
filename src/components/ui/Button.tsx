import React from "react";

type ButtonProps = {
  title: string;
  color: string;
  type?: "button" | "submit" | "reset" | undefined;
};
const Button: React.FC<ButtonProps> = ({ title, color, type }) => {
  return (
    <button type={type} className={`button ${color}`}>
      {title}
    </button>
  );
};

export default Button;
//КНОПКИ СДЕЛАТЬ РАЗНОГО РАЗМЕРА!!!
//ЦВЕТ СДЕЛАТЬ ЧЕРЕЗ КЛАСС .active
