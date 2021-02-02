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
 /* const renderedList = () => {
    for(let index = 1; index<cards.length; index++){
      var card = JSON.parse(localStorage.getItem(index));
      if(card && index>=1){
        return (
          <div
            onClick={() => {
              setSelectedCardIndex(index);
              toggleRemove();
            }}
            className="cardList"
            key={card[index].city}
          >
            <b>
              Weather in {card[index].city}, {card[index].country}
            </b>
            <br />
            <p className="modalText">
              {" "}
              {card[index].temp}
              <br />
              <img src={card[index].image} alt="weather desc" /> {card[index].main}
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
      
    }
  };*/
  


  const renderedList = cards.map((card, index) => {
    
    if (index > 0) {
      return (
        <div
          onClick={() => {
            setSelectedCardIndex(index);
            toggleRemove();
          }}
          className="cardList"
          key={card.city}
        >
          <b>
            Weather in {card.city}, {card.country}
          </b>
          <br />
          <p className="modalText">
            {" "}
            {card.temp}
            <br />
            <img src={card.image} alt="weather desc" /> {card.main}
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
