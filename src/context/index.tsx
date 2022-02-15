import React from "react";
import { PersonContextProvider } from "./person";

const GlobalContext: React.FC = ({ children }) => {
  return <PersonContextProvider>{children}</PersonContextProvider>;
};

export default GlobalContext;
