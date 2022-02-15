import React, { useContext, useState } from "react";
import PersonContext from "../../context/person";

export default function ComponentA() {
  const [person1, setperson1] = useState("");
  const [person2, setperson2] = useState("");
  const [person3, setperson3] = useState("");

  const { setState: setGlobalState } = useContext(PersonContext);

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setGlobalState({
      person1,
      person2,
      person3,
    });
  };

  return (
    <>
      <p>Componente A:</p>
      <form>
        <div>
          <label htmlFor="person1">Pessoa 1: </label>
          <input
            type="text"
            id="person1"
            onChange={(e) => setperson1(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="person2">Pessoa 2: </label>
          <input
            type="text"
            id="person2"
            onChange={({ target }) => setperson2(target.value)}
          />
        </div>
        <div>
          <label htmlFor="person3">Pessoa 3: </label>
          <input
            type="text"
            id="person3"
            onChange={({ target }) => setperson3(target.value)}
          />
        </div>
        <button type="submit" onClick={(e) => handleSubmit(e)}>Enviar</button>
      </form>
    </>
  );
}
