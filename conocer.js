const tarjetas = document.querySelectorAll(".tarjeta");

tarjetas.forEach(function(tarjeta) {

    const barra = tarjeta.querySelector(".progreso");
    const numero = tarjeta.querySelector("span");
    const objetivo = Number(barra.dataset.porcentaje);

    let iniciada = false;
    let actual = 0;

    // Comenzar desde cero
    barra.style.width = "0%";
    numero.textContent = "0%";

    tarjeta.addEventListener("mouseenter", function() {

        if (iniciada) return;
        iniciada = true;

        const intervalo = setInterval(function() {

            actual++;

            barra.style.width = actual + "%";
            numero.textContent = actual + "%";

            if (actual >= objetivo) {
                clearInterval(intervalo);
            }

        }, 2000 / objetivo);

    });

});