import React, { useContext } from "react";
import PersonContext from "../../context/person";
import "./ComponentB.styles.css";

export default function ComponentB() {
  const { state } = useContext(PersonContext);
  return (
    <div className="wrapper">
      <p className="title">Componente B:</p>
      <ul className="list">
        <li className="list--item">Pessoa 1: <b>{state.person1}</b></li>
        <li className="list--item">Pessoa 2: <b>{state.person2}</b></li>
        <li className="list--item">Pessoa 3: <b>{state.person3}</b></li>
      </ul>
    </div>
  );
}
