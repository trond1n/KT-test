import React from "react";

type ButtonProps = {
  title: string;
  color: string;
};
const Button: React.FC<ButtonProps> = ({ title, color }) => {
  return <button className={`button ${color}`}>{title}</button>;
};

export default Button;
//КНОПКИ СДЕЛАТЬ РАЗНОГО РАЗМЕРА!!!
//ЦВЕТ СДЕЛАТЬ ЧЕРЕЗ КЛАСС .active