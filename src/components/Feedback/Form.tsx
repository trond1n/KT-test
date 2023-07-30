import React, { useState } from "react";
import Button from "../ui/Button";

const Form: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    agreementChecked: false,
  });

  const handleInputChange = (event: {
    target: { name: any; value: any; type: any; checked: any };
  }) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === "checkbox" ? checked : value;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: newValue,
    }));
  };

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    console.log("Форма отправлена:", formData);
    setFormData({ name: "", phone: "", agreementChecked: false });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="inputs">
        <div>
          <input
            className="name"
            placeholder="Имя"
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <input
            className="phone"
            placeholder="Номер Телефона"
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="checkbox">
          <input
            type="checkbox"
            id="agreementChecked"
            name="agreementChecked"
            checked={formData.agreementChecked}
            onChange={handleInputChange}
            required
          />
          <label htmlFor="agreementChecked">
            Я соглашаюсь на условия <span>обработки данных</span>
          </label>
        </div>
      </div>

      <Button title={"Отправить"} color={"pink"} type="submit" />
      <p className="rules">Нажимая кнопку “Отправить” вы соглашаетесь на условия <span>обработки данных</span></p>
    </form>
  );
};

export default Form;
