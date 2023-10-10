function guardarDatosSession() {
  const nombre = document.getElementById('nombre').value;
  const pais = document.getElementById('pais').value;
  const biografia = document.getElementById('biografia').value;

  const datos = {
    nombre,
    pais,
    biografia,
  };

  sessionStorage.setItem('formularioDatos', JSON.stringify(datos));
}

function cargarDatosSession() {
  const datosGuardados = sessionStorage.getItem('formularioDatos');
  if (datosGuardados) {
    const datos = JSON.parse(datosGuardados);
    document.getElementById('nombre').value = datos.nombre;
    document.getElementById('pais').value = datos.pais;
    document.getElementById('biografia').value = datos.biografia;
  }
}

window.addEventListener('load', cargarDatosSession);

document.getElementById('guardarBtn').addEventListener('click', guardarDatosSession);
