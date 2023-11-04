window.onload = paginaCargada;

function paginaCargada()
{
    // Evento que captura el envio del formulario
    let botonEnviarContacto = document.getElementById("enviarContacto");
    botonEnviarContacto.onclick = enviarMail;
};

// Función para validar el formulario.
function enviarMail()
{
    let mail = document.getElementById("emailContacto").value;
    let nombre = document.getElementById("nombreContacto").value;
    let comentario = document.getElementById("mensajeContacto").value;
    let body="De: "+nombre +"%0D%0A\
              Email: "+mail+"%0D%0A\
              Comentario: "+comentario;
    window.open('mailto:consultas@brewedharmony.com?subject=Contact&body='+body);
}                  