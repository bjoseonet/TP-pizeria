let header = (document.querySelector("header").innerHTML = `
<div class="navbar">
<div class="topnav" id="myTopnav">
    <img class="logo" src="../img/logopizzcode.svg" alt="logo">
    <a href="../index.html">HOME</a>
    <a href="../nosotros/nosotros.html">NOSOTROS</a>
    <a href="../contacto/contacto.html">CONTACTENOS</a>
    <a href="../login/login.html"><button>LOGIN</button></a>
    <a href="javascript:void(0);" class="icon" onclick="burguerMenu()">
        <i class="fa fa-bars"></i>
    </a>
</div>
</div>
`);

header.innerHTML += header;

let footer = (document.querySelector("footer").innerHTML = `
<div>
<p class="text-presentation">Somos la mejor pizeria de la cuadra. </p>
<p class='rights-text'>© 2024 Grupo 2. All right reserved.</p>
</div>
<div>
<h3>Siguenos en nuestras redes</h3>
<div class="redes-sociales">
  <a href="https://twitter.com/?lang=en" target="_blank"><i class="fab fa-twitter"></i></a>
  <a href="https://www.facebook.com/" target="_blank"><i class="fab fa-facebook"></i></a>
  <a href="https://www.instagram.com/" target="_blank"><i class="fab fa-instagram"></i></a>
</div>
</div>

`);

footer.innerHTML += footer;

const form = document.querySelector(".cuadro-registro");

const inputNombre = document.querySelector("#inputNombre");
const inputApellido = document.querySelector("#inputApellido");
const inputCodPostal = document.querySelector("#inputCodPostal");
const inputEmail__registro = document.querySelector("#inputEmail__registro");

const password__01 = document.querySelector("#inputPassword__registro1");
const password__02 = document.querySelector("#inputPassword__registro2");

function validarInputNombre(inputNombre) {
  // const inputNombre = document.querySelector("#inputNombre");
  let erroresValidacion = false;
  // alert(inputNombre);
  if (inputNombre.length < 2) {
    erroresValidacion = true;

    const errorInputNombre = document.querySelector(".errorInputNombre");
    errorInputNombre.textContent =
      "El nombre tiene que tener 2 caracteres o mas";

    setTimeout(() => {
      errorInputNombre.textContent = "";
      document.querySelector("#inputNombre").value = "";
      document.getElementById(`inputNombre`).focus();
    }, 2000);
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const password01 = password__01.value.trim();
  const password02 = password__02.value.trim();

  let erroresValidacion = false;

  if (password01 != password02) {
    erroresValidacion = true;

    const error = document.querySelector(".error");
    error.textContent = "Las contraseñas deben ser iguales";

    setTimeout(() => {
      error.textContent = "";
      document.querySelector("#inputPassword__registro1").value = "";
      document.querySelector("#inputPassword__registro2").value = "";
      document.getElementById(`inputPassword__registro1`).focus();
    }, 2000);
  }

  /*   if (erroresValidacion) {
  }
 */
});
