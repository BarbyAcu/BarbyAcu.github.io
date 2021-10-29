

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener('submit', validarFormulario); 
  });

  function validarFormulario(evento) {
    evento.preventDefault();
    var Nombre = document.getElementById('nombre').value;
    if(Nombre.length == 0 || Nombre.length<3) {
      alert('No has escrito ningun nombre o el mismo es muy corto');
      return;
    }
    var Apellido = document.getElementById('apellido').value;
    if(Apellido.length == 0 ||Apellido.length<3) {
      alert('No has escrito el Apellido o el mismo es muy corto');
      return;
    }
    var Email = document.getElementById('mail').value;
    if(Email.length == 0 ||Email.length<9) {
      alert('No has escrito tu mail o el mismo es muy corto');
      return;
    }
}