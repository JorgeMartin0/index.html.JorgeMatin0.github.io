let puntuaje = 0;
let botonA1 = document.getElementById("A1");
let botonB1 = document.getElementById("B1");
let botonA2 = document.getElementById("A2");
let botonB2 = document.getElementById("B2");
let botonA3 = document.getElementById("A3");
let botonB3 = document.getElementById("B3");
let botonA4 = document.getElementById("A4");
let botonB4 = document.getElementById("B4");
let botonA5 = document.getElementById("A5");
let botonB5 = document.getElementById("B5");
let botonA6 = document.getElementById("A6");
let botonB6 = document.getElementById("B6");
let botonfin = document.getElementById("Fin");

botonA1.addEventListener('click', () => {
    alert("Incorrecto ❌, en el 1945 terminó dicha guerra")
});

botonB1.addEventListener('click', () => {
    puntuaje++;
    alert("¡Correcto! ✔️, puntuaje actual: " + puntuaje)
});

botonA2.addEventListener('click', () => {
    puntuaje++;
    alert("¡Correcto! ✔️, puntuaje actual: " + puntuaje)
});

botonB2.addEventListener('click', () => {
    alert("Incorrecto ❌, Hernán Cortés lideró la conquista del Imperio Azteca")
});

botonA3.addEventListener('click', () => {
    puntuaje++
    alert("¡Correcto! ✔️, puntuaje actual: " + puntuaje)
});

botonB3.addEventListener('click', () => {
    alert("Incorrecto ❌, la Revolución Industrial fue un proceso económico-tecnológico que comenzó antes en Gran Bretaña")
});

botonA4.addEventListener('click', () => {
    puntuaje++
    alert("¡Correcto! ✔️, puntuaje actual: " + puntuaje)
});

botonB4.addEventListener('click', () => {
    alert("Incorrecto ❌")
});

botonA5.addEventListener('click', () => {
    alert("Incorrecto ❌, el Tratado de Utrech puso fin a la Guerra de Sucesión Española en el 1713")
});

botonB5.addEventListener('click', () => {
    puntuaje++
    alert("¡Correcto! ✔️, puntuaje actual: " + puntuaje)
});

botonA6.addEventListener('click', () => {
    alert("Incorrecto ❌, Napoleón Bonaparte fue emperador de Francia entre 1804 y 1814, es decir, siglo XIX, no XX")
});

botonB6.addEventListener('click', () => {
    puntuaje++
    alert("¡Correcto! ✔️, puntuaje actual: " + puntuaje)
});

botonfin.addEventListener('click', () => {
    alert(`Tu puntuaje final  es: ${puntuaje}`)
});