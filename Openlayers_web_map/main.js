window.onload = init;
function init(){
    const map = new ol.Map({
        view: new ol.View({
            center: [3949880.2190860063, 4683947.3186397115],
            zoom: 8,
            maxZoom:10,
            minZomm:4,
            rotation: 0.5
        }),
        layers: [
            new ol.layer.Tile({
                source: new ol.source.OSM()
            })
        ],
        target: 'js-map'
    })
    map.on('click', function(e){
        console.log(e.coordinate);  
    })
}