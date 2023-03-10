import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";

ReactDOM.render(
  <div>
    <Primeiro />
    <ComParametro
      titulo="Segundo componente"
      subtitulo="Segundo componente"
      aluno="Pedro"
      nota={9.8}
    />
  </div>,
  document.getElementById("root")
);
