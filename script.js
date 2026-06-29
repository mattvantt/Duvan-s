// Desplazamiento suave de los enlaces

document.querySelectorAll('a[href^="#"]').forEach(enlace => {

enlace.addEventListener("click", function(e){

e.preventDefault();

const destino=document.querySelector(this.getAttribute("href"));

if(destino){

destino.scrollIntoView({

behavior:"smooth"

});

}

});

});

// Animación al hacer scroll

const elementos=document.querySelectorAll("section");

const aparecer=()=>{

elementos.forEach(el=>{

const posicion=el.getBoundingClientRect().top;

const pantalla=window.innerHeight*0.85;

if(posicion<pantalla){

el.style.opacity="1";

el.style.transform="translateY(0)";

}

});

};

window.addEventListener("scroll",aparecer);

aparecer();
