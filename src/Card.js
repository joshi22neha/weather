import React, {useState} from 'react';
import './weather.css';
import Remove from './Remove';

const Card = ({cards, results }) => {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    let date = new Date();

    const renderedList = cards.map((card,index)=>{
        if(index>0){
            return(
                <div onClick={toggle} className='cardList'>
                    <b>Weather in {card.city}, {card.country}</b>
                    <br/>
                    <p className='modalText'> {card.temp}
                    <br/>
                    {card.main}</p>
                    <br/>
                    <span className='dateDisplay'> {date.getDate()} {date.toLocaleString('default', { month: 'long' })} {date.getFullYear()}</span>
                </div>
            );
        }
    });
    
    return(
        <div>
            <div className="d-flex flex-wrap">
                {renderedList}
            </div>
            <div>
                <Remove results={results} toggle={toggle} modal={modal} />            
            </div>
        </div>
    );
};

export default Card;
