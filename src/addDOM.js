import { getData } from ".";
import { capitalizeFirstLetter } from "./helper";
import './style.css';

const images = require.context('./WeatherIcons-main/WeatherIcons-main/SVG/4th Set - Color', true, /\.(png|jpg|svg)$/);

export function onSubmit(){
    const submitBtn = document.querySelector('#location');
    const loader = document.querySelector('.loader');
    loader.style.display = 'none';
    submitBtn.addEventListener('click', async (e) => {
        e.preventDefault();
        let city = getCity();
        if (city !== "" && city) {
            try {
                reset();
                loader.style.display = loader.style.display === 'none' ? '' : 'none';
                const weatherData = await getData(city);
                loader.style.display = loader.style.display === 'none' ? '' : 'none';
                if(!weatherData){
                    display();
                }else{
                    createCard(weatherData);
                }
            } catch (error) {
                console.error('Error fetching weather data:', error);
                // Handle the error appropriately (e.g., show an error message to the user)
            }
        } else {
            console.log('Enter a location');
        }
    });
}

function getCity(){
    const location = document.querySelector('input');
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


export function display(url) {
    const main = document.querySelector('.display');
    const card = document.createElement('div');
    const address = document.createElement('div');

    address.textContent = 'Not A Valid City';
    address.style.fontSize = '3rem';

    card.appendChild(address);
    card.classList.add('tempCard');
    main.appendChild(card);


}


function reset(){
    const display = document.querySelector('.display');
    if(display.lastChild && display.lastChild.className == 'tempCard'){
        display.removeChild(display.lastChild);
    }
}