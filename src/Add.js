import "./weather.css";
import React, { useState } from "react";
import Card from "./Card";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Add = ({
  errorMessage,
  setErrorMessage,
  modal,
  toggle,
  results,
  setModal,
  image,
}) => {
  const [cards, setCards] = useState([{}]);

  const addToCard = () => {
    setCards(
      cards.concat({
        city: results.name,
        country: results.sys.country,
        temp: results.main.temp + " °C",
        main: results.weather[0].main,
        wind: results.wind.speed + ", " + results.wind.deg,
        humidity: results.main.humidity + " %",
        pressure: results.main.pressure + " hpa",
        sunrise: new Date(results.sys.sunrise).toISOString().slice(11, 16),
        sunset: new Date(results.sys.sunset).toISOString().slice(11, 16)
      })
    );
    //cards.splice(0,1);
    setModal(!modal);
  };
  if (errorMessage) {
    return (
      <Modal
        isOpen={modal}
        toggle={toggle}
        onClosed={() => {
          setErrorMessage("");
        }}
        className="modal-dialog modal-dialog-centered"
      >
        <ModalHeader toggle={toggle}>Invalid City</ModalHeader>
        <ModalBody>Please Enter valid city name</ModalBody>
      </Modal>
    );
  } else {
    return (
      <React.Fragment>
        <Modal
          isOpen={modal}
          toggle={toggle}
          className="modal-dialog modal-dialog-centered"
        >
          <ModalHeader toggle={toggle}>
            Weather in {results.name},{results.sys.country}
          </ModalHeader>
          <ModalBody>
            <p className="modalText">
              {results.main.temp} °C
              <br />
              <img src={image} alt="weather" />
              {results.weather[0].main}
              <br />
              <br />
            </p>
            <ul>
              <li>
                Wind: {results.wind.speed},{results.wind.deg}{" "}
              </li>
              <li>Humidity: {results.main.humidity}% </li>
              <li>Pressure: {results.main.pressure} hpa </li>
              <li>Sunrise: {new Date (results.sys.sunrise).toISOString().slice(11, 16)} </li>
              <li>Sunset: {new Date (results.sys.sunset).toISOString().slice(11, 16)} </li>
            </ul>
          </ModalBody>
          <ModalFooter>
            <button onClick={addToCard}>Add</button>
          </ModalFooter>
        </Modal>
        <Card cards={cards} setCards={setCards} />
      </React.Fragment>
    );
  }
};

export default Add;
