// 1. MENSAJE DE BIENVENIDA
function bienvenida() {
    alert("¡Bienvenido a mi página web!");
}
// 2. MODO OSCURO
function modoOscuro() {
    document.body.classList.toggle("oscuro");
}
function cambiarFondo() {
    const colores = [
        "#b61d1d",
        "#096ef3",
        "#08ef59",
        "#fef3c7",
        "#f6018c"
    ];

    const numero = Math.floor(Math.random() * colores.length);

    document.body.style.backgroundColor = colores[numero];
}
// 4. MOSTRAR FECHA Y HORA
function mostrarFecha() {
    const ahora = new Date();

    const fecha = ahora.toLocaleDateString();
    const hora = ahora.toLocaleTimeString();

    alert("Fecha: " + fecha + "\nHora: " + hora);
}
// 5. MENSAJE DE AGRADECIMIENTO
function agradecer() {
    alert("¡Gracias por visitar mi página!");
}
