import React from "react";
import Form from "./Form";
import Button from "./Button";
const buttons = ["Интернет", "Интернет + ТВ", "Телефония", "Видеонаблюдение"];
const Feedback: React.FC = () => {
  return (
    <div className="feedback">
      <h2>Подключиться просто!</h2>
      <div className="buttons">
        {buttons.map((item, index) => {
          return <Button key={index} title={item} />;
        })}
      </div>
      <Form />
    </div>
  );
};

export default Feedback;
