import 'jspm_packages/npm/leaflet@0.7.3/dist/leaflet.css!';
import L from 'leaflet';

export default class Mapper {
    constructor() {
        this.lat = 55.9531;
        this.lng = -3.1889;
        this.map;
    }
    
    init(divId) {
        // specify the path to the leaflet images folder
        L.Icon.Default.imagePath = 'jspm_packages/npm/leaflet@0.7.3/dist/images/';

        // initialize the map
        this.map = new L.Map(divId).setView([this.lat, this.lng], 5);

        // set an attribution string
        var attribution = 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>';

        // set the tiles the map will use
        var tiles = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

        // create a tileLayer with the tiles, attribution
        var layer = new L.tileLayer(tiles, {
            maxZoom: 18,
            attribution: attribution
        });

        // add the tile layer to the map
        layer.addTo(this.map);
    }

    addGeojsonToMap(data) {
        var geojsonLayer = L.geoJson().addTo(this.map);
        geojsonLayer.addData(data);
    }
}