import {google} from '../lib/load-maps-api.js';

const standart_options = {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
}

class GoogleMap extends HTMLElement {
    constructor(map_options = standart_options) {
        super();
        this.map_options = map_options;
        this.shadow = this.attachShadow({mode: 'open'});
    }
    connectedCallback() {
        this.mapElement = document.createElement('div');
        this.shadow.appendChild(this.mapElement);
        this.map = new google.maps.Map(this.mapElement, this.map_options);
        this.style.height = '100%'
        this.mapElement.style.height = '100%';
        console.log(this.map);
        this.addGeoJson = (data) => this.map.data.addGeoJson(data);
    }
}

customElements.define('google-map', GoogleMap)