
const elementos = document.querySelectorAll(
    ".problema, .solucion, .beneficios, .herramienta"
);

const observador = new IntersectionObserver(function(entradas) {

    entradas.forEach(function(entrada) {

        if (entrada.isIntersecting) {
            entrada.target.classList.add("visible");
        } else {
            entrada.target.classList.remove("visible");
        }

    });

}, {
    threshold: 0.25
});

elementos.forEach(function(elemento) {
    observador.observe(elemento);
});
