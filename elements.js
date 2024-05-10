// const footer = (document.getElementById("div-footer").innerHTML = ``);

let header = (document.querySelector("header").innerHTML = `
<div class="navbar">
<div class="topnav" id="myTopnav">
    <img class="logo" src="../img/logopizzcode.svg" width="32" height="32" alt="logo">
    <a href="../index.html" class="active">Home</a>
    <a href="../login/login.html">Login</a>
    <a href="../contacto/contacto.html">Contáctenos</a>
    <a href="../nosotros/nosotros.html">Nosotros</a>
    <a href="javascript:void(0);" class="icon" onclick="burguerMenu()">
        <i class="fa fa-bars"></i>
    </a>
</div>
</div>
`);
header.innerHTML += header;

let footer = (document.querySelector("footer").innerHTML = `
<div class="rights">
<p class="text-presentation">Somos la mejor pizeria de la cuadra. </p>
<p class='rights-text'>© 2024 Grupo 2. All right reserved.</p>
</div>

<div class="redes">
<h3>Siguenos en nuestras redes</h3>
<div class="opcionesRedes">
    <ul>
        <li>
            <a href="https://twitter.com/?lang=en" target="_blank"><i
                    class="fab icons-styles fa-twitter">
                    X</i></a>
        </li>
        <li>
            <a href="https://www.facebook.com/" target="_blank"><i class="fab icons-styles fa-facebook">
                    Facebook</i></a>
        </li>
        <li>
            <a href="https://www.instagram.com/" target="_blank"><i
                    class="fab icons-styles fa-instagram">
                    Instagram</i></a>
        </li>
    </ul>
</div>
</div>

<div class="mapa">
<h3>Mapa del sitio</h3>
<div class="opcionesMapa">
    <ul>
        <li>
            <a class="our-site" href="../index.html">Home</a>
        </li>
        <li>
            <a class="our-site" href="../login/login.html">Login</a>
        </li>
        <li>
            <a class="our-site" href="../contacto/contacto.html">Contáctenos</a>
        </li>
        <li>
            <a class="our-site" href="../nosotros/nosotros.html">Nosotros</a>
        </li>
    </ul>
</div>
</div>
`);
footer.innerHTML += footer;

// const form__login = document.querySelector(".cuadro");
// const inputPassword = document.querySelector("#inputPassword");
/*
const inputPassword = document.getElementById("inputPassword");
form__login.addEventListener("submit", (event) => {
  const inputPassword = document.querySelector("#inputPassword");
  event.preventDefault();
  const value__inputPassword = inputPassword.value.trim();
});
*/
const button__login = document.querySelector(".form__button__login");
button__login.addEventListener("click", (event) => {
  console.log("Hola desde button__login");
  event.preventDefault();

  const value__inputEmail = inputEmail.value.trim();
  console.log(value__inputEmail);
  const value__inputPassword = inputPassword.value.trim();
  console.log(value__inputPassword);
});

const button__registro = document.querySelector(".form__button__registro");
button__registro.addEventListener("click", (event) => {
  console.log("Hola desde button__registro");
  event.preventDefault();

  const value__inputNombre = inputNombre.value.trim();
  console.log(value__inputNombre);
  const value__inputApellido = inputApellido.value.trim();
  console.log(value__inputApellido);
  const value__inputCodPostal = inputCodPostal.value.trim();
  console.log(value__inputCodPostal);
  const value__inputEmailregistro = inputEmail__registro.value.trim();
  console.log(value__inputEmailregistro);
  const value__inputPasswordregistro1 = inputPassword__registro1.value.trim();
  console.log(value__inputPasswordregistro1);
  const value__inputPasswordregistro2 = inputPassword__registro2.value.trim();
  console.log(value__inputPasswordregistro2);
});
