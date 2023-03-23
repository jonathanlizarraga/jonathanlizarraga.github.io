
//** FUNCION MOSTRAR OCULTAR  */


function myFunction1() {
    var x = document.getElementById("DATOSPERSONALES");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function button1() {
    var x = document.getElementById("ESTUDIOS");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function myFunction3() {
    var x = document.getElementById("CURSOS");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function myFunction4() {
    var x = document.getElementById("OBJETIVOS");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

// Get the button
let mybutton = document.getElementById("myBtn");

// muesta el boton cuando se baja mas de 20 pixels //    
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// hacer click en el boton para subir //
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}