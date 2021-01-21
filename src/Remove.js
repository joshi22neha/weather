import React from 'react';
import './weather.css';
import { Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';


const Remove = ({results, toggle, modal}) => {
    return(
        <div>
            <Modal isOpen={modal} toggle={toggle} className='modal-dialog modal-dialog-centered' >
                    <ModalHeader  toggle={toggle}>Weather in {results.name},{results.sys.country}</ModalHeader>
                    <ModalBody  >
                        <p className='modalText'>{results.main.temp} °C
                        <br/>
                        {results.weather[0].main}
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
                    <button >Remove</button>
                    </ModalFooter>
                </Modal>
        </div>
    );
};

export default Remove;