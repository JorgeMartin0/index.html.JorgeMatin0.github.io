let boton = document.getElementById("botonNoche");
let cajaFlexNoche = document.getElementById("Flexsection");
let cajaContenedorNoche = document.getElementById("Contenedor");
let cajaResumenNoche = document.getElementById("Resumen");
let cajaOscura1 = document.getElementById("Caja1");
let cajaOscura2 = document.getElementById("Caja2");
let cajaOscura3 = document.getElementById("Caja3");
let cajaOscura4 = document.getElementById("Caja4");
let cajaOscura5 = document.getElementById("Caja5");
let cajaOscura6 = document.getElementById("Caja6");
let cajaOscura7 = document.getElementById("Caja7");
let cajaOscura8 = document.getElementById("Caja8");
boton.addEventListener('click', () => {
    cajaFlexNoche.setAttribute("class", "modoNoche")
    cajaContenedorNoche.setAttribute("class", "modoNoche2")
    cajaResumenNoche.setAttribute("class", "Resumen")
    cajaOscura1.setAttribute("class", "Caja1")
    cajaOscura2.setAttribute("class", "Caja2")
    cajaOscura3.setAttribute("class", "Caja3")
    cajaOscura4.setAttribute("class", "Caja4")
    cajaOscura5.setAttribute("class", "Caja5")
    cajaOscura6.setAttribute("class", "Caja6")
    cajaOscura7.setAttribute("class", "Caja7")
    cajaOscura8.setAttribute("class", "Caja8")
});

let boton2 = document.getElementById("botonDia");
boton2.addEventListener('click', () => {
    cajaFlexNoche.setAttribute("class", "flexsection")
    cajaContenedorNoche.setAttribute("class", "contenedor")
    cajaResumenNoche.setAttribute("class", "resumen")
    cajaOscura1.setAttribute("class", "caja1")
    cajaOscura2.setAttribute("class", "caja2")
    cajaOscura3.setAttribute("class", "caja3")
    cajaOscura4.setAttribute("class", "caja4")
    cajaOscura5.setAttribute("class", "caja5")
    cajaOscura6.setAttribute("class", "caja6")
    cajaOscura7.setAttribute("class", "caja7")
    cajaOscura8.setAttribute("class", "caja8")
});
