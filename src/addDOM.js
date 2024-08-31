import { getData } from ".";


export function onSubmit(){
    const submitBtn = document.querySelector('#location');
    submitBtn.addEventListener('click',getData(getCity()));
}

function getCity(){
    const location = document.querySelector('#locationDialog');
    console.log(location.value);
    return location.value;
}


onSubmit();