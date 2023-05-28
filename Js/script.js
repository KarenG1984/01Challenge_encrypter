var texto = document.querySelector("#text");
var button = document.querySelector("#btnEncrypt");

button.addEventListener("click", () => {
  if (texto.value.length == 0) {
    swal("Ooops!", "Debes ingresar un texto para encriptar", "warning");
    document.getElementById("imgSearch").src = "../Assets/Questions-bro.png";
    document.getElementById("btnCopy").style.display = "none";
  }
});

function encrypter() {
  var texto = document.getElementById("text").value.toLowerCase();
  var txtEncrypter = texto.replace(/e/gi, "enter");
  var txtEncrypter = txtEncrypter.replace(/o/gim, "ober");
  var txtEncrypter = txtEncrypter.replace(/i/gim, "imes");
  var txtEncrypter = txtEncrypter.replace(/a/gim, "ai");
  var txtEncrypter = txtEncrypter.replace(/u/gim, "ufat");

  document.getElementById("imgSearch").src = "../Assets/Innovation-bro.png";
  document.getElementById("paragraph").style.display = "none";
  document.getElementById("msgError").style.display = "none";
  document.getElementById("paragraphEncrypt").innerHTML = txtEncrypter;
  document.getElementById("btnCopy").style.display = "show";
  document.getElementById("btnCopy").style.display = "inherit";
}

function decryptor() {
  var texto = document.getElementById("text").value.toLowerCase();
  var txtEncrypter = texto.replace(/enter/gim, "e");
  var txtEncrypter = txtEncrypter.replace(/ober/gim, "o");
  var txtEncrypter = txtEncrypter.replace(/imes/gim, "i");
  var txtEncrypter = txtEncrypter.replace(/ai/gim, "a");
  var txtEncrypter = txtEncrypter.replace(/ufat/gim, "u");

  document.getElementById("imgSearch").src = "../Assets/Innovation-bro.png";
  document.getElementById("msgError").style.display = "none";
  document.getElementById("paragraphEncrypt").innerHTML = txtEncrypter;
  document.getElementById("btnCopy").style.display = "show";
  document.getElementById("btnCopy").style.display = "inherit";
}

function copy() {
  let paragraphEncrypt = document.getElementById("paragraphEncrypt");
  let copiar = document.getElementById("btnCopy");

  navigator.clipboard.writeText(paragraphEncrypt.textContent);
  swal("Buen trabajo!", "Se ha copiado el texto exitosamente", "success");
}
