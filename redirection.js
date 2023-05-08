
redireccionar = (id) => {
  const seccionDestino = id;
  /* seccionDestino.id.scrollIntoView({ behavior: 'smooth' }); */
  /* console.log(seccionDestino);
  console.log(seccionDestino.id); */
  window.location.href = 'galeria.html#'+seccionDestino;
};