var map = L.map('map').setView([4.639386, -74.082412], 10);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([4.639386, -74.082412]).addTo(map);

async function CargarPuntos() {
  var miArchivo = await fetch("microonda.geojson");
  var datos = await miArchivo.json();

  let listaFeatures = datos["features"];

  for (let i = 0; i < listaFeatures.length; i++) {
        console.log(listaFeatures[i]);

        // Obtener coordenadas y cambiarlas de [lng, lat] a [lat, lng]
        let coords = listaFeatures[i]["geometry"]["coordinates"];
        let misCoordenadas = [coords[1], coords[0]];

        var miMarcador = L.marker(misCoordenadas);
        miMarcador.addTo(map);
    }

}
CargarPuntos();