import React from "react";
import "./weather.css";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const Remove = ({
  cards,
  setCards,
  selectedCardIndex,
  setSelectedCardIndex,
  toggleRemove,
  modalRemove,
  setModalRemove,
}) => {
  const deleteItem = () => {
    cards.splice(selectedCardIndex, 1);
    setCards(cards);
    setModalRemove(!modalRemove);
    setSelectedCardIndex(0);
    localStorage.removeItem(selectedCardIndex);
  };

  return (
    <div>
      <Modal
        isOpen={modalRemove}
        toggle={toggleRemove}
        className="modal-dialog modal-dialog-centered"
      >
        <ModalHeader toggle={toggleRemove}>
          Weather in {cards[selectedCardIndex].city},
          {cards[selectedCardIndex].country}
        </ModalHeader>
        <ModalBody>
          <p className="modalText">
            {cards[selectedCardIndex].temp}
            <br />
            <img src={cards[selectedCardIndex].image} alt='weather desc' /> {cards[selectedCardIndex].main}
            <br />
            <br />
          </p>
          <ul>
            <li>Wind: {cards[selectedCardIndex].wind} </li>
            <li>Humidity: {cards[selectedCardIndex].humidity} </li>
            <li>Pressure: {cards[selectedCardIndex].pressure} </li>
            <li>Sunrise: {cards[selectedCardIndex].sunrise} </li>
            <li>Sunset: {cards[selectedCardIndex].sunset} </li>
          </ul>
        </ModalBody>
        <ModalFooter>
          <button onClick={deleteItem}>Remove</button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default Remove;
