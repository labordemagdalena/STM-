/*const googleMapsApiKey = 'AIzaSyCqMUJgXTSeZyFbcOR3mNXFVMdLee5zWYA';
function initMap() {
    // Puedes ajustar la ubicación y el nivel de zoom según tus necesidades
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 14,
      center: { lat: -34.6096, lng: -58.3924 },
    });

     // Inicializa el autocompletado
     initAutocomplete(map, directionsService, directionsRenderer);
    }
    
    function loadGoogleMapsScript() {
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=${googleMapsApiKey}&callback=initMap&libraries=places`;
        script.defer = true;
        document.body.appendChild(script);
    }
    // Función para buscar la dirección en el mapa
    window.buscarDireccion = function () {
      var geocoder = new google.maps.Geocoder();
      var address = document.getElementById('address').value;

      geocoder.geocode({ 'address': address }, function (results, status) {
        if (status == 'OK') {
          // Centra el mapa en la ubicación encontrada
          map.setCenter(results[0].geometry.location);

          // Crea un marcador en la ubicación encontrada
          var marker = new google.maps.Marker({
            map: map,
            position: results[0].geometry.location,
            title: address,
          });
        } else {
          alert('No se pudo encontrar la dirección: ' + status);
        }
      });
    };*/
  

// Carga la API de Google Maps
loadGoogleMapsScript();


/*function initMap() {
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: { lat: -34.397, lng: 150.644 } // Coordenadas iniciales
    });

    const directionsService = new google.maps.DirectionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer({ map: map });

    // Inicializa el autocompletado
    initAutocomplete(map, directionsService, directionsRenderer);
}

function loadGoogleMapsScript() {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${googleMapsApiKey}&callback=initMap&libraries=places`;
    script.defer = true;
    document.body.appendChild(script);
}

function initAutocomplete(map, directionsService, directionsRenderer) {
    const originInput = document.getElementById('origin');
    const autocomplete = new google.maps.places.Autocomplete(originInput);

    // Evento para calcular la ruta cuando se selecciona una ubicación de origen
    autocomplete.addListener('place_changed', function () {
        calculateRoute(autocomplete, map, directionsService, directionsRenderer);
    });
}



function calculateRoute(autocomplete, map, directionsService, directionsRenderer) {
    const originPlace = autocomplete.getPlace();

    if (!originPlace.geometry) {
        window.alert("No se encontró la ubicación de origen");
        return;
    }

    directionsService.route(
        {
            origin: originPlace.geometry.location,
            destination: 'Tu destino aquí', // Reemplaza con tu lógica para obtener el destino
            travelMode: 'DRIVING'
        },
        function (response, status) {
            if (status === 'OK') {
                directionsRenderer.setDirections(response);
                document.getElementById('map-container').style.display = 'block';
            } else {
                window.alert('No se pudo calcular la ruta debido a: ' + status);
            }
        }
    );
}








// Llama a la función para cargar la API de Google Maps
loadGoogleMapsScript();

// para manejar el menu
function toggleMenu() {
    // Muestra u oculta el menú al hacer clic en el botón
    const menu = document.getElementById("menu");
    menu.classList.toggle("visible");
}*/
