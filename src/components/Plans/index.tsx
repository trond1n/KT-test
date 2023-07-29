import React from "react";
import PlanBlock from "./PlanBlock";
import Flickity from "react-flickity-component";
const flickityOptions = {
  draggable: true,
  // freeScroll: true,
  // contain: true,
  // // disable previous & next buttons and dots
  prevNextButtons: false,
  // pageDots: false,
  groupCells: 2,
  wrapAround:true
};
const data = [
  {
    title: "Мой клик",
    speed: "до 40 Мбит/с",
    describe:
      "Отличный вариант для пенсионеров, выполнения определенных задач и работе с файлами различных размеров.",
    price: 399,
  },
  {
    title: "Резвый клик",
    speed: "80-100 Мбит/с",
    describe:
      "Отличный вариант для всей семьи. Общайтесь в соцсетях и смотрите любимые фильмы и сериалы!",
    price: 449,
  },
  {
    title: "Мой клик",
    speed: "до 40 Мбит/с",
    describe:
      "Отличный вариант для пенсионеров, выполнения определенных задач и работе с файлами различных размеров.",
    price: 449,
  },
];
const Plans: React.FC = () => {
  return (
    <div className="plans">
      <h2>Тарифные планы</h2>

      <Flickity
        className={"items"} 
        elementType={"div"}
        options={flickityOptions}
      >
        {data.map((item, index) => {
          return (
            <PlanBlock
              key={index}
              title={item.title}
              speed={item.speed}
              describe={item.describe}
              price={item.price}
            />
          );
        })}
      </Flickity>
    </div>
  );
};

export default Plans;
