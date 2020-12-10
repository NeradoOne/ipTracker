import './renderMap.js';


export class UI {
  constructor() {
    this.address = document.getElementById("address");
    this.location = document.getElementById("location");
    this.utc = document.getElementById("utc");
    this.isp = document.getElementById("isp");
  }

  render(data) {
    this.address.textContent = data.ip;
    this.location.textContent = `${data.location.region}, ${data.location.country} ${data.location.postalCode}`;
    this.utc.textContent = data.location.timezone;
    this.isp.textContent = data.isp;
  }
  setMap(data) {
    map.setView(new L.LatLng(lat,lon), 9 );

    //var map = L.map('mapid').setView([data.location.lat, data.location.lng, 13])
  }
  
}
