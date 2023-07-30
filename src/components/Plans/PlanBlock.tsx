import React from "react";
type PlanBlockProps = {
  title: string;
  speed: string;
  price: number;

  describe: string;
};
const PlanBlock: React.FC<PlanBlockProps> = ({
  title,
  speed,
  describe,
  price,
}) => {
  const [select, setSelect] = React.useState(true);
  const onClickButton = () => {
    setSelect(!select);
  };

  return (
    <div className="plan__block">
      <div className="info">
        <h2>{title}</h2>
        <p className="speed">Скорость интернета</p>
        <span>{speed}</span>
        <p className="describe">{describe}</p>
        <form>
          <input type="checkbox" className="checkbox"></input>
          <label>ТВ + 100 ₽ (пакет “Базовый”)</label>
        </form>
        <p className="price">
          {price} ₽<span>в месяц</span>
        </p>
        <p className="notice">
          *итоговая цена зависит от варианта оплаты и пакета ТВ при
          необходимости
        </p>
      </div>

      {/* <Button title={"Выбрать тариф"} />
       */}
      <button
        onClick={onClickButton}
        className={`button ${select ? "pink" : "blue"}`}
      >
        {`${select ? "Выбрать тариф" : "Тариф выбран"}`}
      </button>
    </div>
  );
};

export default PlanBlock;
//ЛОГИКА НАЖАТИЯ НА КНОПКУ - СДЕЛАТЬ
