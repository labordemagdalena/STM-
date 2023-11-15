// Asegúrate de tener una API key válida de Google Maps
// Reemplaza 'YOUR_GOOGLE_MAPS_API_KEY' con tu propia clave
const googleMapsApiKey = 'AIzaSyCqMUJgXTSeZyFbcOR3mNXFVMdLee5zWYA';

function initMap() {
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: { lat: -34.397, lng: 150.644 } // Coordenadas iniciales
    });

    const directionsService = new google.maps.DirectionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer({ map: map });

    document.getElementById('origin').addEventListener('change', function () {
        calculateRoute();
    });

    document.getElementById('destination').addEventListener('change', function () {
        calculateRoute();
    });

    window.calculateRoute = function () {
        const origin = document.getElementById('origin').value;
        const destination = document.getElementById('destination').value;

        if (origin && destination) {
            directionsService.route(
                {
                    origin: origin,
                    destination: destination,
                    travelMode: 'DRIVING'
                },
                function (response, status) {
                    if (status === 'OK') {
                        directionsRenderer.setDirections(response);
                    } else {
                        window.alert('No se pudo calcular la ruta debido a: ' + status);
                    }
                }
            );
        }
    };
}

// Carga la API de Google Maps
function loadGoogleMapsScript() {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${googleMapsApiKey}&callback=initMap&libraries=places`;
    script.defer = true;
    document.body.appendChild(script);
}



function initAutocomplete() {
    const originInput = document.getElementById('origin');
    const autocomplete = new google.maps.places.Autocomplete(originInput);

    const destinationInput = document.getElementById('destination');
    const destinationAutocomplete = new google.maps.places.Autocomplete(destinationInput);
}

// Actualiza el autocompletado
function updateAutocomplete() {
    const originInput = document.getElementById('origin');
    const autocomplete = new google.maps.places.Autocomplete(originInput);

    const destinationInput = document.getElementById('destination');
    const destinationAutocomplete = new google.maps.places.Autocomplete(destinationInput);
}




// Llama a la función para cargar la API de Google Maps
loadGoogleMapsScript();
