import React, { useContext, useState } from "react";
import PersonContext from "../../context/person";
import "./ComponentA.styles.css";

export default function ComponentA() {
  const [person1, setperson1] = useState("");
  const [person2, setperson2] = useState("");
  const [person3, setperson3] = useState("");

  const { setState: setGlobalState } = useContext(PersonContext);

  const handleSubmit = () => {
    setGlobalState({
      person1,
      person2,
      person3,
    });
  };

  return (
    <div className="container">
      <p className="title">Componente A:</p>
      <div>
        <label className="label" htmlFor="person1">
          Pessoa 1:{" "}
        </label>
        <input
          className="input"
          type="text"
          id="person1"
          onChange={({ target }) => setperson1(target.value)}
        />
      </div>

      <div>
        <label className="label" htmlFor="person2">
          Pessoa 2:{" "}
        </label>
        <input
          className="input"
          type="text"
          id="person2"
          onChange={({ target }) => setperson2(target.value)}
        />
      </div>
      <div>
        <label className="label" htmlFor="person3">
          Pessoa 3:{" "}
        </label>
        <input
          className="input"
          type="text"
          id="person3"
          onChange={({ target }) => setperson3(target.value)}
        />
      </div>
      <button className="button" onClick={handleSubmit}>
        Enviar
      </button>
    </div>
  );
}
