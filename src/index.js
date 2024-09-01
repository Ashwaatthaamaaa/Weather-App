import { onSubmit } from "./addDOM";
import './style.css';

export async function getData(city) {
    try{
        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=T5YN5X3A2RQ4K46HL5TFBATGM&contentType=json`,{mode:'cors'});

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);

          }

        const weather = await response.json();
        return weather;
    }catch(error){
        console.error(error);
    }


}


function getCity(){

    let city = prompt('enter location');
    getData(city)

}
onSubmit();
