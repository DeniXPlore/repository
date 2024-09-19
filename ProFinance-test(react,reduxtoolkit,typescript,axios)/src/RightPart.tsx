import React from "react";
import Table from "./Table";
import { FaUserCircle } from "react-icons/fa";
import { PiCashRegister } from "react-icons/pi";
import { HiMiniArrowLongRight } from "react-icons/hi2";
import { HiOutlineDocumentReport } from "react-icons/hi";
import "./RightPart.css";

const RightPart: React.FC = () => {
  return (
    <>
      <div className="right-container">
        <div className="top-row">
          <div className="user-name">
            <FaUserCircle className="user-icon" />
            Иванов В.И.
          </div>
          <div className="tariff">
            <PiCashRegister className="tariff-icon" />
            <span className="tariff-text">Тариф до 15.04.2024</span>
          </div>
          <button className="exit-button">Выйти</button>
          <button className="info-button">
            О нас <HiMiniArrowLongRight className="arrow-icon" />
          </button>
        </div>
        <div className="info-row">
          <span className="info-text">Остатки сформированы на 01.04.23.</span>
          <button className="instructions-button">
            <HiOutlineDocumentReport className="instructions-icon" />
            Инструкции
          </button>
        </div>
        <div className="product-row">
          <div className="barcode">
            <div className="label">Баркод:</div>
            <div className="value">56432421334323099</div>
          </div>
          <div className="article">
            <div className="label">Артикул:</div>
            <div className="value">ДжЖСинМом0823</div>
          </div>
          <div className="size">
            <div className="label">Размер:</div>
            <div className="value">44</div>
          </div>
          <div className="category">
            <div className="label">Категория:</div>
            <div className="value">
              Джинсы
              <span className="arrow-down"></span>
            </div>
          </div>
        </div>
        <Table />
      </div>
    </>
  );
};

export default RightPart;
