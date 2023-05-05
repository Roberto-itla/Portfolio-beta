/*Menu de hamburguesa*/
const hamburguer = document.querySelector(".hamburguer");
const menu = document.querySelector(".menu-navegacion");

/*Variables de abrir las imagenes*/
const imagenes = document.querySelectorAll(".img-proyect");
const imagenesLigth = document.querySelector(".agregar-imagen");
const contenedorLigth = document.querySelector(".imagen-ligth");
const hamburguer1 = document.querySelector(".hamburguer");

/*Abrir/Cerrar el menu hamburguesa*/
hamburguer.addEventListener("click", () => {
  menu.classList.toggle("spread");
});

window.addEventListener("click", (e) => {
  if (
    menu.classList.contains("spread") &&
    e.target != menu &&
    e.target != hamburguer
  ) {
    menu.classList.toggle("spread");
  }
});

/*Mostrar/No mostrar las imagenes*/

imagenes.forEach((imagen) => {
  imagen.addEventListener("click", () => {
    Mostrar(imagen.getAttribute("src"));
  });
});

const Mostrar = (imagen) => {
  imagenesLigth.src = imagen;
  contenedorLigth.classList.toggle("show");
  imagenesLigth.classList.toggle("showImage");
  hamburguer1.style.opacity = "0";
};

contenedorLigth.addEventListener("click", (e) => {
  if (e.target !== imagenesLigth) {
    contenedorLigth.classList.toggle("show");
    imagenesLigth.classList.toggle("showImage");
    hamburguer1.style.opacity = "1";
  }
});
