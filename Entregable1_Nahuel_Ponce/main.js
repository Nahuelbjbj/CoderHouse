//COTIZADOR DE OPERACIONES PARA UN WAREHOUSE
  //El siguiente Simulador (Calculadora) intenta emular el proceso de costeo de Operaciones para un Warehouse

  //DESIGNO LAS VARIABLES GLOBALES
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


// Solicitar actividades a realizar
const actividades = [
  "Recepcion",
  "Descarga",
  "Ingreso",
  "Almacenamiento",
  "Preparacion",
  "Despacho",
  "Ninguna",
];

  //INGRESO DE UNIDADES A COTIZAR
// Solicitudes unidades a operar
let unidades = parseInt(prompt("Ingrese las cantidades deseadas: "));

  //FUNCIONES DE COSTEO
//Recepcion
function calcularCostoRecepcion(unidades) {
  const costoAuxiliarOperativo1 = costosManoDeObra.find(
    (puesto) => puesto.puesto === "auxiliarOperativo1"
  );
  if (costoAuxiliarOperativo1) {
    const costoManoObra = unidades * costoAuxiliarOperativo1.valor;
    return costoManoObra;
  } else {
    return "No se encontró el costo para alguna de las actividades";
  }
}
//Descarga
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
    return "No se encontró el costo para alguna de las actividades.";
  }
}
//Ingreso
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
    return "No se encontró el costo para alguna de las actividades.";
  }
}
//Almacenamiento
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
    return "No se encontró el costo para alguna de las actividades.";
  }
}
//Preparacion
function calcularCostoPreparacion(unidades) {
  const costoSupervisor = costosManoDeObra.find(
    (puesto) => puesto.puesto === "opServicios"
  );
  const costoReach2 = costoMaquinaria.find( 
    (maquinaria) => maquinaria.maquinaria === "Reach"
  );150
  if (costoSupervisor && costoReach2) {
    const costoManoObra = unidades * costoSupervisor.valor;
    const costoMaquinaria = (unidades * costoReach2.valor) / 1;
    return costoManoObra + costoMaquinaria;
  } else {
    return "No se encontró el costo para alguna de las actividades.";
  }
}
//Despacho
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
    return "No se encontró el costo para alguna de las actividades.";
  }
}

  //ARMADO DEL BUCLE PARA SOLICITAR AL USUARIO LAS INSTRUSCCIONES A OPERAR
const seleccionarActividad = () => {
  let actividad = prompt(
    "Seleccione una actividad: " + actividades.join(" - \n")
  );
  return actividad;
};

let actividadSeleccionada = seleccionarActividad();

while (actividadSeleccionada !== "Ninguna" && actividadSeleccionada !== "") {
  switch (actividadSeleccionada) {
    case "Recepcion":
      const costoRecepcion = calcularCostoRecepcion(unidades);
      console.log("El costo de Recepcion: " + costoRecepcion);
      break;

    case "Descarga":
      const costoDescarga = calcularCostoDescarga(unidades);
      console.log("El costo de Descarga: " + costoDescarga);
      break;

    case "Ingreso":
      const costoIngreso = calcularCostoIngreso(unidades);
      console.log("El costo de Ingreso: " + costoIngreso);
      break;

    case "Almacenamiento":
      const costoAlmacenamiento = calcularCostoAlmacenamiento(unidades);
      console.log("El costo de Almacenamiento: " + costoAlmacenamiento);
      break;

    case "Preparacion":
      const costoPreparacion = calcularCostoPreparacion(unidades);
      console.log("El costo de Preparacion: " + costoPreparacion);
      break;

    case "Despacho":
      const costoDespacho = calcularCostoDespacho(unidades);
      console.log("El costo de Despacho: " + costoDespacho);
      break;

    default:
      alert("La actividad seleccionada no es válida");
  }

  // Volver a pedir la actividad
  actividadSeleccionada = seleccionarActividad();
}
