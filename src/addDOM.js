import { getData } from ".";
import { capitalizeFirstLetter } from "./helper";
import './style.css';
import { fetchGif } from ".";


export function onSubmit(){
    const submitBtn = document.querySelector('#location');
    submitBtn.addEventListener('click',getData(getCity()));
}

function getCity(){
    const location = document.querySelector('#locationDialog');
    console.log(location.value);
    return location.value;
}





export function createCard(obj){
    const main = document.querySelector('.display');
    const card = document.createElement('div');
    const address = document.createElement('div');
    const icon = document.createElement('img');
    const temp = document.createElement('div');
    const feelsLike = document.createElement('div');
    const humidity = document.createElement('div');
    const precipitation = document.createElement('div');


    address.textContent = capitalizeFirstLetter(obj.address);
    address.style.fontSize = '3rem';
    const iconPath = images(`./${obj.currentConditions.icon}.svg`);
    icon.src = iconPath;
    temp.textContent = `${obj.currentConditions.temp}` + ' \u00B0' + 'C';
    temp.style.fontSize = '2rem';
    feelsLike.textContent = `Feels like: ${obj.currentConditions.feelslike} \u00B0C`;
    humidity.textContent = `Humidity: ${obj.currentConditions.humidity} %`;
    precipitation.textContent = `Precipitation: ${obj.currentConditions.precipprob} %`;


    card.appendChild(address);
    card.appendChild(icon);
    card.appendChild(temp);
    card.appendChild(feelsLike);
    card.appendChild(humidity);
    card.appendChild(precipitation);


    card.classList.add('tempCard');

    main.appendChild(card);


}


export function display(url){

    const display = document.querySelector('.display');
    if (display.lastChild && display.lastChild.nodeName.toLowerCase() === 'img') {
        // If it does, use that image
        display.removeChild(display.lastChild);
    } else {
        // If not, create a new image
        const image = document.createElement('img');
        image.classList.add('gif')
        image.src = url;
        display.appendChild(image);    }

}

function reset(){
    const display = document.querySelector('.display');
    if(display.lastChild ){
        display.removeChild(display.lastChild);
    }
}