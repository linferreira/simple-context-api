import React, { createContext, useState } from "react";

type PersonType = {
  person1: string;
  person2: string;
  person3: string;
};

type PropsPersonContext = {
  state: PersonType;
  setState: React.Dispatch<React.SetStateAction<PersonType>>;
};

const DEFAULT_VALUE = {
  state: {
    person1: "",
    person2: "",
    person3: "",
  },
  setState: () => {},
};

const PersonContext = createContext<PropsPersonContext>(DEFAULT_VALUE);

const PersonContextProvider: React.FC = ({ children }) => {
  const [state, setState] = useState(DEFAULT_VALUE.state);

  return (
    <PersonContext.Provider
      value={{
        state,
        setState,
      }}
    >
      {children}
    </PersonContext.Provider>
  );
};

export { PersonContextProvider };
export default PersonContext;