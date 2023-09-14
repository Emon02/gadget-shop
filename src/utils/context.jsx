import { createContext } from "react";

export const Context = createContext();

const AppContext = ({ children }) => {
  return <Context.Provider></Context.Provider>;
};

export default AppContext;
