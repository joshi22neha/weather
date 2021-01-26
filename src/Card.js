import React, { useState } from "react";
import "./weather.css";
import Remove from "./Remove";

const Card = ({ cards, setCards }) => {
  const [modalRemove, setModalRemove] = useState(false);
  const [selectedCardIndex, setSelectedCardIndex] = useState(0);
  const toggleRemove = () => {
    setModalRemove(!modalRemove);
  };

  let date = new Date();

  const renderedList = cards.map((card, index) => {
    if (index>0) {
      return (
        <div
          onClick={() => {
            setSelectedCardIndex(index);
            toggleRemove();
          }}
          className="cardList"
        >
          <b>
            Weather in {card.city}, {card.country}
          </b>
          <br />
          <p className="modalText">
            {" "}
            {card.temp}
            <br />
            {card.main}
          </p>
          <br />
          <span className="dateDisplay">
            {" "}
            {date.getDate()} {date.toLocaleString("default", { month: "long" })}{" "}
            {date.getFullYear()}
          </span>
        </div>
      );
    }
  });

  return (
    <div>
      <div className="d-flex flex-wrap">{renderedList}</div>
      <div>
        <Remove
          cards={cards}
          selectedCardIndex={selectedCardIndex}
          setSelectedCardIndex={setSelectedCardIndex}
          toggleRemove={toggleRemove}
          modalRemove={modalRemove}
          setModalRemove={setModalRemove}
        />
      </div>
    </div>
  );
};

export default Card;
