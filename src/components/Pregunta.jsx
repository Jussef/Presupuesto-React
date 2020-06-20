import React, { Fragment, useState } from "react";

const Pregunta = () => {

  // Funcion que lee el presupuesto
  const definirPresupuesto = (e) => {
    guardarCantidad(parseInt(e.target.value));
  };

  // El state en hooks
  const [cantidad, guardarCantidad] = useState(0);

//   Submit para agregar el presupuesto
  const agregarPresupuesto = e => {
      
  }

  return (
    <Fragment>
      <h2>Coloca tu presupuesto</h2>

      <form onSubmit={agregarPresupuesto}>
        <input
          type="number"
          className="u-full-width"
          placeholder="Coloca tu presupuesto"
          onChange={definirPresupuesto}
        />
        <input
          type="submit"
          className="button-primary u-full-width"
          value="Definir Presupuesto"
        />
      </form>
    </Fragment>
  );
};

export default Pregunta;
