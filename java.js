document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault(); // Evita que se recargue la página al enviar el formulario
    let nombre = document.getElementById('nombre').value;
    let email = document.getElementById('email').value;
    let Ciudad = document.getElementById('Ciudad').value;
    // Aquí puedes realizar acciones con los datos del formulario, como enviarlos a un servidor
    alert('Formulario enviado');
    document.getElementById('nombre').value = '';
    document.getElementById('email').value = '';
    document.getElementById('Ciudad').value = '';
     ///////////////////////////////////////////////////////////////////////////////////////////
////pernite que llene el formulario correctamente para enviasr////
    function validarFormulario() {
        let nombre = document.getElementById('nombre').value;
        let email = document.getElementById('email').value;
        let mensaje = document.getElementById('Ciudad').value;
        // Validar que los campos no estén vacíos
        if (nombre === '' || email === '' || mensaje === '') {
            alert('Por favor, complete todos los campos.');
            return false;
        }
        // Validar formato de email
        let regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regexEmail.test(email)) {
            alert('Por favor, ingrese un email válido.');
            return false;
        }
      // Si todo está correcto, enviar el formulario
        alert('¡Formulario enviado!');
        return true;
    }
//////////////////////////////////////////////////////////////////////////////////////////////////////
////funcion para agregar nueva categoria////////
    const nuevaCategoriaInput = document.getElementById("nueva-categoria");
    const agregarCategoriaBtn = document.getElementById("agregar-categoria");
    agregarCategoriaBtn.addEventListener("click", () => {
      const nuevaCategoria = nuevaCategoriaInput.value;
      // Validar que la categoría no esté vacía
      if (nuevaCategoria === "") {
        alert("Ingrese una categoría válida");
        return;
      }
      // Agregar la nueva categoría a la lista
      const categoriasList = document.querySelector("#Categorias ul");
      const nuevaCategoriaItem = document.createElement("li");
      nuevaCategoriaItem.textContent = nuevaCategoria;
      categoriasList.appendChild(nuevaCategoriaItem);
      // Limpiar el campo de texto
      nuevaCategoriaInput.value = "";

///////////////////////////////////////////////////////////////////////////////////////////////////////
 });
 // Función para modificar el texto de un título (H2)
    function modificarTitulo(seccionId, nuevoTexto) {
    const seccion = document.getElementById(seccionId);
    const titulo = seccion.querySelector("h3");
    titulo.textContent = nuevoTexto;
  }
  // Función para eliminar una imagen de la sección "Super Promo"
    function eliminarImagen(indice) {
    const imagenes = document.querySelectorAll("section > img");
    if (indice >= 0 && indice < imagenes.length) {
    imagenes[indice].parentNode.removeChild(imagenes[indice]);
  }
  }
    // Ejemplo de uso de las funciones
    modificarTitulo("Categorias", "¡Ofertas imperdibles para tu viaje soñado!");
    eliminarImagen(2); // Elimina la tercera imagen de la sección "Super Promo"

});
