function guardarDatosLocal() {
  const nombre = document.getElementById('nombre').value;
  const pais = document.getElementById('pais').value;
  const biografia = document.getElementById('biografia').value;

  const datos = {
    nombre,
    pais,
    biografia,
  };

  localStorage.setItem('formularioDatos', JSON.stringify(datos));
}

function cargarDatosLocal() {
  const datosGuardados = localStorage.getItem('formularioDatos');
  if (datosGuardados) {
    const datos = JSON.parse(datosGuardados);
    document.getElementById('nombre').value = datos.nombre;
    document.getElementById('pais').value = datos.pais;
    document.getElementById('biografia').value = datos.biografia;
  }
}

window.addEventListener('load', cargarDatosLocal);

document.getElementById('guardarBtn').addEventListener('click', guardarDatosLocal);
