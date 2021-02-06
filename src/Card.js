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
      
    //var list = JSON.parse(localStorage.getItem(index) || '0');
    //console.log(list);
    if (index > 0) {
      return (
        <div
          onClick={() => {
            setSelectedCardIndex(index);
            toggleRemove();
          }}
          className="cardList"
           key={card.city}
          // key={list.city}
        >
          <b>
            Weather in {card.city}, {card.country}
            {/* Weather in {list.city}, {list.country} */}
          </b>
          <br />
          <p className="modalText">
            {" "}
            {card.temp}
            {/* {list.temp} */}
            <br />
            <img src={card.image} alt="weather desc" /> {card.main}
            {/* <img src={list.image} alt="weather desc" /> {list.main} */}
          </p>
          <br />
          <span className="dateDisplay">
            {" "}
            {date.getDate()} {date.toLocaleString("default", { month: "long" })}{" "}
            {date.getFullYear()}
          </span>
        </div>
      );
    } else return null;
  });

  return (
    <div>
      <div className="d-flex flex-wrap">{renderedList}</div>
      <div>
        <Remove
          cards={cards}
          setCards={setCards}
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
