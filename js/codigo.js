//código para la pagina iniciarsesion.html
document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('formInicioSesion').addEventListener('submit', function(event){
        //prevengo que se envie el form
        event.preventDefault();

        //reseteo de mensajes de error
        resetMensajesError();

        //declaro variables y las valido
        let mail = document.getElementById('mail').value.trim();
        let password = document.getElementById('password').value.trim();
        let valido = true;
        
        if (mail === ''){
            mostrarMensajeError('errorMail', 'El campo no puede estar vacío.');
            valido = false;
        } else if (!validarMail(mail)){
            mostrarMensajeError('errorMail', 'Formato de mail inváldo.');
            valido = false;
        }

        if (password.length < 8){
            mostrarMensajeError('errorPassword', 'La contraseña debe tener al menos 8 caracteres');
            valido = false;
        }

        if (valido){
            alert('Ingreso correcto. Bienvenido!');
            this.submit();
        }
    })
})

function validarMail(mail){
    const expresionMail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return expresionMail.test(String(mail).toLowerCase());
}

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

//código para la pagina registrarse.html
document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('formRegistracion').addEventListener('submit', function(event){
        //detenemos el evento del envio del form
        event.preventDefault();

        //reseto de valores
        resetMensajesError();

        //asignamos y validamos parametros
        let txtNombre = document.getElementById('txtNombre').value.trim();
        let txtApellido = document.getElementById('txtApellido').value.trim();
        let txtEmail = document.getElementById('txtEmail').value.trim();
        let txtContrasenia = document.getElementById('txtContrasenia').value.trim();
        let txtFecha = document.getElementById('txtFecha').value;
        let txtPais = document.getElementById('txtPais').value;
        let chkTerminos = document.getElementById('chkTerminos').checked;
        let isValid = true;
        
        if (txtNombre === ''){
            mostrarMensajeError('errortxtNombre', 'El campo no puede estar vacío.');
            isValid = false;
        }

        if (txtApellido === ''){
            mostrarMensajeError('errortxtApellido', 'El campo no puede estar vacio.');
            isValid = false;
        }

        if (txtEmail === ''){
            mostrarMensajeError('errortxtEmail', 'El campo no puede estar vacio.');
            isValid = false;
        } else if (!validarMail(txtEmail)){
            mostrarMensajeError('errortxtEmail', 'Formato de correo no válido.');
            isValid = false;
        }

        if (txtContrasenia.length < 8){
            mostrarMensajeError('errortxtContrasenia', 'La contraseña debe tener al menos 8 caracteres.');
            isValid = false;
        }

        if (txtFecha === ''){
            mostrarMensajeError('errortxtFecha', 'Debe seleccionar su fecha de nacimiento.');
            isValid = false;
        }

        if (txtPais === ''){
            mostrarMensajeError('errortxtPais', 'Debe seleccionar Nacionalidad.');
            isValid = false;
        }

        if (!chkTerminos){
            mostrarMensajeError('errorchkTerminos', 'Debe aceptar términos y condiciones.');
            isValid = false;
        }

        if (isValid){
            this.submit();
            alert('Registro enviado correctamente!');
        }
    })
})