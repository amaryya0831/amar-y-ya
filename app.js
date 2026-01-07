console.log("APP.JS CARGADO");

const URL = "https://script.google.com/macros/s/AKfycbwFp6gSB7Y6256L2JVVhjmKUhloPjAHVHeEPMdps9nZeiyX431Y2TVOy-Pkz7umoo25/exec";

fetch(URL)
  .then(res => res.json())
  .then(productos => {
    console.log("PRODUCTOS RECIBIDOS:", productos);

    const contenedor = document.getElementById("catalogo");

    productos.forEach(p => {
      if (String(p.activo).trim().toLowerCase() === "true") {
        contenedor.innerHTML += `
          <div class="card">
            <img src="${p.imagen || 'https://via.placeholder.com/300'}">
            <h3>${p.nombre}</h3>
            <p>${p.descripcion}</p>
            <strong>$${p.precio}</strong>
            <a
              href="https://wa.me/5210000000000?text=Hola, me interesa ${p.nombre}"
              target="_blank"
            >
              Comprar
            </a>
          </div>
        `;
      }
    });
  })
  .catch(err => console.error("ERROR FETCH:", err));




