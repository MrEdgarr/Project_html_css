let map;

// function initMap() {
//     map = new google.maps.Map(document.getElementById("map"), {
//         center: { lat: -34.397, lng: 150.644 },
//         zoom: 8,
//         scrollwheel: false
//     });
// }
function initMap() {
    const geocode = { lat: 21.027763, lng: 105.834160 };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 8,
        center: geocode,
        scrollwheel: false
    });


    const marker = new google.maps.Marker({
        position: geocode,
        map: map,
        animation: google.maps.Animation.BOUNCE,
    });
}