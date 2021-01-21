import './weather.css';
import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Add = ({modal, toggle, results, setModal, cards, setCards, image}) => {
    
    const addToCard = () => {
        setCards(cards.concat({
            city: results.name,
            country: results.sys.country,
            temp: results.main.temp + '°C',
            main: results.weather[0].main
        }));
        setModal(!modal);
    };
    return(
        <Modal isOpen={modal} toggle={toggle} className='modal-dialog modal-dialog-centered' >
                    <ModalHeader  toggle={toggle}>Weather in {results.name},{results.sys.country}</ModalHeader>
                    <ModalBody  >
                        <p className='modalText'>{results.main.temp} °C
                        <br/>
                        <img> {image} </img>{results.weather[0].main}
                        <br/>
                        <br/></p>
                        <ul>
                            <li>Wind: {results.wind.speed},{results.wind.deg} </li>
                            <li>Humidity: {results.main.humidity}% </li>
                            <li>Pressure: {results.main.pressure} hpa </li>
                            <li>Sunrise: {results.sys.sunrise} </li>
                            <li>Sunset: {results.sys.sunset} </li>
                        </ul>
                    </ModalBody>
                    <ModalFooter >
                    <button onClick={addToCard}>Add</button>
                    </ModalFooter>
                </Modal>
    );
};

export default Add;