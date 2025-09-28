document.addEventListener("DOMContentLoaded", function () {
    const contenedorOfertas = document.querySelector(".contenedor-ofertas");
    const filtrarBtn = document.getElementById("filtrarBtn");

    const ofertasData = {
        "ofertas": [
            {
                "tipo": "Departamentos",
                "imagen": "img/dpto.png",
                "precio": 90000
            },
            {
                "tipo": "Casas",
                "imagen": "img/dpto1.png",
                "precio": 70000
            },
            {
                "tipo": "Habitaciones",
                "imagen": "img/dpto11.png",
                "precio": 50000
            },
            {
                "tipo": "Departamentos",
                "imagen": "img/dpto2.png",
                "precio": 40000
              },
              {
                "tipo": "Casas",
                "imagen": "img/casa2.png",
                "precio": 75000
              },
              {
                "tipo": "Habitaciones",
                "imagen": "img/habitacion_hotel1.png",
                "precio": 55000
              },
              {
                "tipo": "Departamentos",
                "imagen": "img/habitacion_hotel2.png",
                "precio": 89000
              },
              {
                "tipo": "Casas",
                "imagen": "img/casa2.png",
                "precio": 84000
              },
              {
                "tipo": "Habitaciones",
                "imagen": "img/habitacion_hotel1.png",
                "precio": 73000
              },
        ]
    };

    
    function cargarOfertas(ofertas) {
        contenedorOfertas.innerHTML = ""; 

        ofertas.forEach(oferta => {
            const ofertaHTML = document.createElement("div");
            ofertaHTML.classList.add("oferta");

            ofertaHTML.innerHTML = `
                <img class="imagen_dpto" src="${oferta.imagen}" alt="">
                <div class="dpto_detalle">
                    <h3 class="dpto_titulo">${oferta.tipo}</h3>
                    <p class="dpto_precio">${oferta.precio}</p>
                    <button class="dpto_consulta">Ver Más</button>
                </div>
            `;

            contenedorOfertas.appendChild(ofertaHTML);
        });
    }

    
    cargarOfertas(ofertasData.ofertas);

    
    filtrarBtn.addEventListener("click", function () {
        const precioMinimo = prompt("Ingresa el precio mínimo:");
        const precioMaximo = prompt("Ingresa el precio máximo:");

        const ofertasFiltradas = ofertasData.ofertas.filter(oferta => {
            const precio = oferta.precio;
            return precio >= parseFloat(precioMinimo) && precio <= parseFloat(precioMaximo);
        });

        cargarOfertas(ofertasFiltradas);
    });
});
