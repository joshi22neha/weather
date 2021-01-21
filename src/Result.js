import './weather.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Add from './Add';

const Result = ({term, modal, setModal, toggle}) => {
    const token= 'ab1f9e7f91651c4aad84f69d28fc8f9c';
    const [results,setResults] = useState('');
    const [cards,setCards] = useState([{}]);
    const [image,setImage] = useState('');

    useEffect(()=>{
        const searchKeyword = async() => {
            const response = await axios.get('http://api.openweathermap.org/data/2.5/weather?', {
                params:{
                    q: term,
                    appid: token,
                    units: 'metric'
                },
            } );
            setResults(response.data);
            const imageResponse = axios.get('https://openweathermap.org/img/wn/' + response.data.weather[0].icon + '@2x.png');
            setImage(imageResponse);
        };
        
        const timeoutId= setTimeout(()=>{
            if(term){
            searchKeyword();
            }
        },1000); 

        return() => {
            clearTimeout(timeoutId);
        };  
        
        
    }, [term] );
    

    if(!results)
    {
        return(
            <div>
                <p className='pageIntro' >Type City name to search for data</p>
            </div>
        );
    }
    else{
        return(
            <div>
                <Add image={image} modal={modal} toggle={toggle} results={results} setModal={setModal} cards={cards} setCards={setCards} />
                <Card cards={cards} results={results}  />
                
            </div>

        );
    }
};

export default Result;


