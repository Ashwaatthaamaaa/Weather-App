import { onSubmit } from "./addDOM";
import { createCard } from "./addDOM";
import { display } from "./addDOM";
import './style.css';

export async function getData(city) {
    try{
        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=T5YN5X3A2RQ4K46HL5TFBATGM&contentType=json`,{mode:'cors'});

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);

          }

        const weather = await response.json();
        console.log(weather);
        return weather;
    }catch(error){
        console.error(error);
    }


}


function getCity(){

    let city = prompt('enter location');
    getData(city)

}

export async function fetchGif() {
    try {
        const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=LwQfFbJnHPLkNdANhixn9gQ0xhzQpsaG&s=not-found`, {mode: 'cors'});
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data.data.images.original.url;
    } catch(error) {
        console.error('Error:', error);
        return null; // or a default URL
    }
}


onSubmit();
createCard();