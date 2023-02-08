import React from "react";

const ComParametro = (props) => {
  // console.log(props)
  const sub = props.subtitulo;
  const status = props.nota >= 8 ? "aprovado" : "aeprovado";
  return (
    <div>
      <h2>{props.titulo}</h2>
      <h3>{sub}</h3>
      <p>
        {props.aluno} tem nota {props.nota} e foi {status}.
      </p>
    </div>
  );
};

export default ComParametro;
