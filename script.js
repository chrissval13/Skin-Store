// Función para validar y enviar el formulario de contacto
function enviarFormulario(event) {
    event.preventDefault(); // Evita que se envíe el formulario por defecto
  
    var nombre = document.getElementById("nombre").value;
    var correo = document.getElementById("correo").value;
    var mensaje = document.getElementById("mensaje").value;
  
    // Validación básica del formulario
    if (nombre.trim() === "" || correo.trim() === "" || mensaje.trim() === "") {
      alert("Por favor, complete todos los campos del formulario.");
      return;
    }
  
    // Envío del formulario (simulado)
    alert("Formulario enviado con éxito. ¡Gracias por tu mensaje!");
    mostrarMensajeContacto();
    // Aquí puedes realizar una petición HTTP para enviar el formulario a un servidor
  }
  
  function mostrarMensajeContacto() {
    var mensaje = document.createElement("div");
    mensaje.textContent = "Nos pondremos en contacto contigo.";
    mensaje.classList.add("mensaje-contacto");
    document.body.appendChild(mensaje);
  
    setTimeout(function() {
      mensaje.remove();
    }, 3000);
  }
  
  document.getElementById("contactoForm").addEventListener("submit", enviarFormulario);
  