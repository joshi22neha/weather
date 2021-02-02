import "./weather.css";
import React, { useState, useRef, useEffect } from "react";
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
  term,
}) => {
  const [cards, setCards] = useState([{}]);

  useEffect(()=>{
    cards.forEach((card, index)=>{
      localStorage.setItem(index, JSON.stringify(card));
    });
    
    
  }, [cards]);
  
  
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
        sunset: new Date(results.sys.sunset).toISOString().slice(11, 16),
        image: image,
      })
    );

    setModal(!modal);
  };
  const isFirstRun = useRef(false);
  let display = "";
  if (isFirstRun.current) {
    if (cards) {
      const value = cards.filter((card) => {
        return card.city === results.name;
      });

      if (value.length === 0) {
        display = <button onClick={addToCard}>Add</button>;
        
      } else {
        display = (
          <button
            onClick={() => {
              toggle();
              cards.forEach((card, index) => {
                if (card.city === value[0].city) {
                  cards.splice(index, 1);
                  setCards(cards);
                }
              });
            }}
          >
            Remove
          </button>
        );
      }
    }
  } else {
    display = <button onClick={addToCard}>Add</button>;
    isFirstRun.current = true;
  }
  const addOutput = () => {
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
                <img src={image} alt="weather desc" />
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
                <li>
                  Sunrise:{" "}
                  {new Date(results.sys.sunrise).toISOString().slice(11, 16)}{" "}
                </li>
                <li>
                  Sunset:{" "}
                  {new Date(results.sys.sunset).toISOString().slice(11, 16)}{" "}
                </li>
              </ul>
            </ModalBody>
            <ModalFooter>{display}</ModalFooter>
          </Modal>
          <Card cards={cards} setCards={setCards} />
        </React.Fragment>
      );
    }
  };
  return <>{addOutput()}</>;
};

export default Add;
