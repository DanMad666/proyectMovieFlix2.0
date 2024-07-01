//Validacion de pagina Administrador
document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('formAdmPeliculas').addEventListener("submit", function(event){
        //detenemos el envio del form
        event.preventDefault();

        //reseteo de valores
        resetMensajesError();

        //asigancion y validacion de parametros
        let txtTitulo = document.getElementById('admTit').value.trim();
        let txtFecEstreno = document.getElementById('admFecEstreno').value.trim();
        let txtGenero = document.getElementById('admGenero').value.trim();
        let txtDuracion = document.getElementById('admDuracion').value.trim();
        let txtDirector = document.getElementById('admDirector').value.trim();
        let txtReparto = document.getElementById('admReparto').value.trim();
        let txtSinopsis = document.getElementById('admSinopsis').value.trim();
        let txtImagen = document.getElementById('admImagen').value;
        let isValid = true;

        if (txtTitulo === ''){
            mostrarMensajeError('tituloError', 'El campo no puede estar vacío');
            isValid = false;
        }
        if (txtFecEstreno === ''){
            mostrarMensajeError('fechaestrenoError', 'El campo no puede estar vacío');
            isValid = false;
        }
        if (txtGenero === ''){
            mostrarMensajeError('generoError', 'El campo no puede estar vacío');
            isValid = false;
        }
        if (txtDuracion === ''){
            mostrarMensajeError('duracionError', 'El campo no puede estar vacío');
            isValid = false;
        }
        if (txtDirector === ''){
            mostrarMensajeError('directorError', 'El campo no puede estar vacío');
            isValid = false;
        }
        if (txtReparto === ''){
            mostrarMensajeError('repartoError', 'El campo no puede estar vacío');
            isValid = false;
        }
        if (txtSinopsis === ''){
            mostrarMensajeError('sinopsisError', 'El campo no puede estar vacío');
            isValid = false;
        }
        if (txtImagen === ''){
            mostrarMensajeError('imagenError', 'Debe agregar la imagen de la película');
            isValid = false;
        }
        //si todo está completo, se cargan los datos
        if (isValid){
            this.submit();
            alert('Registro cargado correctamente');
        }
    })
})

function mostrarMensajeError(elementId, mensaje){
    let errorElement = document.getElementById(elementId);
    errorElement.innerText = mensaje;
}

function resetMensajesError(){
    let errorElements = document.querySelectorAll('.mensajeError');
    errorElements.forEach(function(element){
        element.innerText = '';
    })
}
