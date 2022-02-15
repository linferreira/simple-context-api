import React, { useContext } from "react";
import PersonContext from "../../context/person";

export default function ComponentB() {
  const { state } = useContext(PersonContext);
  return (
    <div>
      <p>Componente B:</p>
      <ul>
        <li>Pessoa 1: {state.person1}</li>
        <li>Pessoa 2: {state.person2}</li>
        <li>Pessoa 3: {state.person3}</li>
      </ul>
    </div>
  );
}
