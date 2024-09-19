import React from "react";
import { GoGear } from "react-icons/go";
import { FaFilePen } from "react-icons/fa6";
import { TbReportSearch } from "react-icons/tb";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { AiOutlineMessage } from "react-icons/ai";
import "./LeftPart.css";

const LeftPart: React.FC = () => {
  return (
    <div className="left-container">
      <section className="section">
        <div className="section-content">
          <h2 className="section-title">
            <span className="highlight">ФИН</span> Контроль
          </h2>
          <div className="menu-controls">
            <button className="menu-button">
              Меню <span className="close-button"></span>x
            </button>
          </div>
        </div>
        <div className="button-container">
          <button className="icon-button">
            <GoGear /> Настройки
          </button>
          <button className="icon-button">
            <FaFilePen /> Внесение данных
          </button>
          <button className="icon-button">
            <TbReportSearch /> Отчеты
          </button>
          <button className="icon-button">
            <HiOutlineDocumentReport /> База знаний
          </button>
        </div>
      </section>
      <section className="section">
        <h2 style={{ padding: "0", margin: "0" }}>Техническая поддержка</h2>
        <div className="support-info">
          <div className="support-row">
            <div className="support-item">
              <strong style={{ color: "#4b5672" }}>Номер поддержки:</strong>
              <span style={{ fontSize: "1rem" }}>8 (999) 999 99 99</span>
            </div>
            <div className="support-item">
              <strong style={{ color: "#4b5672" }}>Почта поддержки:</strong>
              <span style={{ fontSize: "1rem" }}>pf1@wertjessest.ru</span>
            </div>
          </div>
          <div className="support-item">
            <strong style={{ color: "#4b5672" }}>Часы работы:</strong>
            <span style={{ fontSize: "1rem" }}>Пн-Пт с 9:00 до 19:00 мск</span>
          </div>
        </div>

        <div className="additional-sections">
          <div className="additional-item">Пользовательское соглашение</div>
          <div className="additional-item">Политика конфиденциальности</div>
          <div className="additional-item">Юридическая информация</div>
          <div className="additional-item">Публичная оферта</div>
        </div>
      </section>
      <button className="contact-button">
        {" "}
        <AiOutlineMessage className="contact-icon" />
        Связаться с нами
      </button>
    </div>
  );
};

export default LeftPart;
