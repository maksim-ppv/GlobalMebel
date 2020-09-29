ymaps.ready(init);
 
function init() {

    var myMap = new ymaps.Map("map", {
        center: [53.913924084558154,27.401446110396485],
        zoom: 14,
        controls: [
            'zoomControl'
        ]
    });

    
    var placemark = new ymaps.Placemark([53.914886,27.391385], {
        balloonContentBody: ''
    }, {
        iconLayout: 'default#image',
        iconImageHref: './img/icon/map.png',
        // Размеры метки.
        iconImageSize: [37, 58],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-14, -56],
        balloonCloseButton: false,
        hideIconOnBalloonOpen: false
    });
    myMap.geoObjects.add(placemark);

};