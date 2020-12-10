import { IpLocation } from "./ipLocation.js";
import { UI } from "./UI.js";

const ui = new UI(); 
const coord = new IpLocation('181.168.179.174');
var lat = 'newFunction()';
var lng = '';

function getIp() {
    fetch('https://api.ipify.org/?format=json')
        .then(result => result.json())
        .then(data => data.ip);
}
getIp()


async function fetchLocation() {
    const data = await coord.getIpLocation();
    console.log(data);
    ui.render(data);
    //lat = data.location.lat;
}

document.getElementById('btn').addEventListener('click', (e) => {
    const newip = document.getElementById('input').value;
    coord.changeIp(newip);
    fetchLocation();
    e.preventDefault();
})

document.addEventListener('DOMContentLoaded', fetchLocation);