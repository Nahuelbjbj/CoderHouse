// COTIZADOR DE OPERACIONES PARA UN WAREHOUSE
// El siguiente Simulador (Calculadora) intenta emular el proceso de costeo de Operaciones para un Warehouse

// DESIGNO LAS VARIABLES GLOBALES
// Costos en Mano de Obra
const costosManoDeObra = [
  { puesto: "auxiliarOperativo1", valor: 1000 },
  { puesto: "auxiliarOperativo2", valor: 1500 },
  { puesto: "opServicios", valor: 2000 },
  { puesto: "Supervisor", valor: 3500 },
  { puesto: "Eventual", valor: 800 },
];

// Costos Maquinaria
const costoMaquinaria = [
  { maquinaria: "Autoelevador", valor: 4710 },
  { maquinaria: "Zorra Electrica", valor: 2041 },
  { maquinaria: "Reach", valor: 5338 },
];
// Funciones de costeo
function calcularCostoRecepcion(unidades) {
  const costoAuxiliarOperativo1 = costosManoDeObra.find(
    (puesto) => puesto.puesto === "auxiliarOperativo1"
  );
  if (costoAuxiliarOperativo1) {
    const costoManoObra = unidades * costoAuxiliarOperativo1.valor;
    return costoManoObra;
  } else {
    return 0;
  }
}

function calcularCostoDescarga(unidades) {
  const costoAuxiliarOperativo2 = costosManoDeObra.find(
    (puesto) => puesto.puesto === "auxiliarOperativo2"
  );
  const costoAutoelevador = costoMaquinaria.find(
    (maquinaria) => maquinaria.maquinaria === "Autoelevador"
  );
  if (costoAuxiliarOperativo2 && costoAutoelevador) {
    const costoManoObra = unidades * costoAuxiliarOperativo2.valor;
    const costoMaquinaria = (unidades * costoAutoelevador.valor) / 2;
    return costoManoObra + costoMaquinaria;
  } else {
    return 0;
  }
}

function calcularCostoIngreso(unidades) {
  const costoOpServicios = costosManoDeObra.find(
    (puesto) => puesto.puesto === "opServicios"
  );
  const costoReach = costoMaquinaria.find(
    (maquinaria) => maquinaria.maquinaria === "Reach"
  );
  if (costoOpServicios && costoReach) {
    const costoManoObra = unidades * costoOpServicios.valor;
    const costoMaquinaria = (unidades * costoReach.valor) / 1;
    return costoManoObra + costoMaquinaria;
  } else {
    return 0;
  }
}
function calcularCostoAlmacenamiento(unidades) {
  const costoOpServicios2 = costosManoDeObra.find(
    (puesto) => puesto.puesto === "opServicios"
  );
  const costoReach2 = costoMaquinaria.find(
    (maquinaria) => maquinaria.maquinaria === "Reach"
  );
  if (costoOpServicios2 && costoReach2) {
    const costoManoObra = unidades * costoOpServicios2.valor;
    const costoMaquinaria = (unidades * costoReach2.valor) / 1;
    return costoManoObra + costoMaquinaria;
  } else {
    return 0;
  }
}

function calcularCostoPreparacion(unidades) {
  const costoSupervisor = costosManoDeObra.find(
    (puesto) => puesto.puesto === "opServicios"
  );
  const costoReach2 = costoMaquinaria.find(
    (maquinaria) => maquinaria.maquinaria === "Reach"
  );
  150;
  if (costoSupervisor && costoReach2) {
    const costoManoObra = unidades * costoSupervisor.valor;
    const costoMaquinaria = (unidades * costoReach2.valor) / 1;
    return costoManoObra + costoMaquinaria;
  } else {
    return 0;
  }
}

function calcularCostoDespacho(unidades) {
  const costoEventual = costosManoDeObra.find(
    (puesto) => puesto.puesto === "Eventual"
  );
  const costoZorraElectrica = costoMaquinaria.find(
    (maquinaria) => maquinaria.maquinaria === "Zorra Electrica"
  );
  if (costoEventual && costoZorraElectrica) {
    const costoManoObra = unidades * costoEventual.valor;
    const costoMaquinaria = (unidades * costoZorraElectrica.valor) / 1;
    return costoManoObra + costoMaquinaria;
  } else {
    return 0;
  }
}

// ACCEDEMOS AL DOM
document.addEventListener("DOMContentLoaded", function () {
  // Variables para acceder al formulario
  const form = document.querySelector("form");

  const costos = {};

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Accedemos a los datos del formulario

    const empresa = document.getElementById("name").value;
    const tipoServicio = document.getElementById("servicio").value;
    const comercialResponsable = document.getElementById("responsable").value;
    const personaCotizacion = document.getElementById("analista").value;
    const fechaInicio = document.getElementById("fecha").value;
    const unidades = document.getElementById("unidades").value;
    const zonaOperacion = document.querySelector("select").value;

    // Obtenemos las actividades seleccionadas
    const actividades = [];
    document
      .querySelectorAll('input[type="checkbox"]:checked')
      .forEach(function (checkbox) {
        actividades.push(checkbox.id);
      });
      
    // Lógica del bucle para seleccionar actividades
    actividades.forEach(function (actividadSeleccionada) {
      switch (actividadSeleccionada) {
        case "Recepcion":
          const costoRecepcion = calcularCostoRecepcion(unidades);
          costos["Recepcion"] = costoRecepcion;
          break;

        case "Descarga":
          const costoDescarga = calcularCostoDescarga(unidades);
          costos["Descarga"] = costoDescarga;
          break;

        case "Ingreso":
          const costoIngreso = calcularCostoIngreso(unidades);
          costos["Ingreso"] = costoIngreso;
          break;

        case "Almacenamiento":
          const costoAlmacenamiento = calcularCostoAlmacenamiento(unidades);
          costos["Almacenamiento"] = costoAlmacenamiento;
          break;

        case "Preparacion":
          const costoPreparacion = calcularCostoPreparacion(unidades);
          costos["Preparacion"] = costoPreparacion;
          break;
      }
    });

    // MODIFICAMOS EL DOM PARA QUE NOS MUESTRE LOS RESULTADOS

    const contenedor = document.createElement("div")

    contenedor.innerHTML = "<br /><br />"
    contenedor.innerHTML = "<h2> Tabla Caracteristicas <h2>"

    document.body.append(contenedor)

    //Creamos una tabla
    const tabla = document.createElement("table");
    tabla.border = "2";

    //Armamos las filas de la tabla para cada caracteristica
    const encabezado = tabla.createTHead();
    const filaEncabezado = encabezado.insertRow();
    const filaValores = encabezado.insertRow(-1);

    let celdaEmpresa = filaEncabezado.insertCell(0);
    celdaEmpresa.textContent = "Empresa";
    let celdaEmpresa2 = filaValores.insertCell(0);
    celdaEmpresa2.textContent = empresa;

    let celdaTipoServicio = filaEncabezado.insertCell(1);
    celdaTipoServicio.textContent = "Tipo de Servicio";
    let celdaTipoServicio2 = filaValores.insertCell(1);
    celdaTipoServicio2.textContent = tipoServicio;

    let celdaComercialResponsable = filaEncabezado.insertCell(2);
    celdaComercialResponsable.textContent = "Comercial";
    let celdaComercialResponsable2 = filaValores.insertCell(2);
    celdaComercialResponsable2.textContent = comercialResponsable;

    let celdaPersonaCargoCotizacion = filaEncabezado.insertCell(3);
    celdaPersonaCargoCotizacion.textContent = "Analista";
    let celdaPersonaCargoCotizacion2 = filaValores.insertCell(3);
    celdaPersonaCargoCotizacion2.textContent = personaCotizacion;

    let celdaZonaOperacion = filaEncabezado.insertCell(4);
    celdaZonaOperacion.textContent = "Zona de Operación";
    let celdaZonaOperacion2 = filaValores.insertCell(4);
    celdaZonaOperacion2.textContent = zonaOperacion;

    let celdaFechaInicio = filaEncabezado.insertCell(5);
    celdaFechaInicio.textContent = "Fecha de Inicio";
    let celdaFechaInicio2 = filaValores.insertCell(5);
    celdaFechaInicio2.textContent = fechaInicio;

    document.body.append(tabla)


    const contenedor2 = document.createElement("div")

    contenedor2.innerHTML = "<br /><br />"
    contenedor2.innerHTML = "<h2> Tabla Actividades <h2>"

    document.body.append(contenedor2)

    //Creamos una tabla
    const tabla2 = document.createElement("table");
    tabla2.border = "2";

    //Creamos las filas para cada actividad y su costo
    for (const actividad in costos) {
      const filaDatos = tabla2.insertRow();
      const celdaActividad = filaDatos.insertCell(0);
      const celdaCosto = filaDatos.insertCell(1);

      celdaActividad.textContent = actividad;
      celdaCosto.textContent = costos[actividad];

      document.body.append(tabla2)

    }
  });
});
