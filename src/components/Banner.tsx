import React from "react";
import Button from "./ui/Button";

const Banner: React.FC = () => {
  return (
    <div className="banner">
      <div className="content">
        <div className="info">
          <h1>Экономия нервов и денег — интернет К-Телеком</h1>
          <ul>
            <li>5 тарифов для многоквартирных и 4 для частных домов</li>
            <li>безлимит подключенных устройств</li>
            <li>комфортная поддержка 24/7</li>
          </ul>
          <Button title="Подробнее" color="pink" />
        </div>
        <img src="img/banner.png" alt="banner" />
      </div>
    </div>
  );
};

export default Banner;
