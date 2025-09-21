function enviar() {
  const categoria = document.getElementById("categoria").value;
  const mensaje = document.getElementById("mensaje").value;
  const urlImagen = document.getElementById("urlImagen").value;

  if (!categoria) {
    alert("Debes seleccionar una categoría");
    return;
  }

  if (!mensaje.trim()) {
    alert("Debes escribir un mensaje");
    return;
  }

  // Redirigimos pasando los datos correctos
  const url = `Confimacionpublicacion.html?categoria=${encodeURIComponent(categoria)}&mensaje=${encodeURIComponent(mensaje)}&urlImagen=${encodeURIComponent(urlImagen)}`;
  window.location.href = url;
}
function mostrarDatos() {
  const params = new URLSearchParams(window.location.search);

  const lblCategoria = document.getElementById("lblCategoria");
  const lblMensaje = document.getElementById("lblMensaje");
  const imgProducto = document.getElementById("imgProducto");

  if (!lblCategoria || !lblMensaje || !imgProducto) return;

  lblCategoria.textContent = params.get("categoria") || "";
  lblMensaje.textContent = params.get("mensaje") || "";

  // Si se pasó URL de imagen, la usamos, si no mostramos default
  const urlImagen = params.get("urlImagen");
  if (urlImagen) {
    imgProducto.src = urlImagen;
  } else {
    imgProducto.src = "img/default.jpg";
  }
}
window.onload = mostrarDatos;
