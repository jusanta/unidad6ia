document.addEventListener("DOMContentLoaded", function () {
  const btnVolverArriba = document.getElementById("btnVolverArriba");

  btnVolverArriba.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth" // Desplazamiento suave
    });
  });
});
