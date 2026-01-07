document.addEventListener("DOMContentLoaded", () => {

  console.log("APP.JS CARGADO");

  const URL = "https://script.google.com/macros/s/AKfycbwFp6gSB7Y6256L2JVVhjmKUhloPjAHVHeEPMdps9nZeiyX431Y2TVOy-Pkz7umoo25/exec";
  const loader = document.getElementById("loader");
  const catalogo = document.getElementById("catalogo");

  fetch(URL)
    .then(res => res.json())
    .then(productos => {

      productos.forEach(p => {
        if (String(p.activo).trim().toLowerCase() === "true") {
          catalogo.innerHTML += `
            <div class="card">
              <img src="${p.imagen || 'https://via.placeholder.com/300'}">
              <h3>${p.nombre}</h3>
              <p>${p.descripcion}</p>
              <strong>$${p.precio}</strong>
              <a
                href="https://wa.me/573332376867?text=Hola, me interesa ${p.nombre}"
                target="_blank"
              >
                Comprar
              </a>
            </div>
          `;
        }
      });

      // 🔥 AHORA SÍ se oculta correctamente
      loader.style.display = "none";
      catalogo.style.display = "grid";
    })
    .catch(err => {
      console.error("ERROR FETCH:", err);
      loader.innerHTML = "<p>Error al cargar productos</p>";
    });

});





