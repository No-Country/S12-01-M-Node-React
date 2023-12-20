export const formatoFecha = (fecha: string) => {
  const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  const fechaObj = new Date(fecha);
  const dia = fechaObj.getDate();
  const mes = meses[fechaObj.getMonth()];
  const anio = fechaObj.getFullYear();

  return `${dia} de ${mes} de ${anio}`;
};

export const formatoHora = (fecha: string) => {
  const fechaObj = new Date(fecha);
  const hora = fechaObj.getHours().toString().padStart(2, "0");
  const minutos = fechaObj.getMinutes().toString().padStart(2, "0");

  return `${hora}:${minutos}`;
};
