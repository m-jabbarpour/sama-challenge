import { createContext, useContext, useState } from "react";

const FieldsContext = createContext(null);

export function FieldsProvider({ children }) {
  const [fields, setFields] = useState({});

  return (
    <FieldsContext.Provider value={{ fields, setFields }}>
      {children}
    </FieldsContext.Provider>
  );
}

export function useFields() {
  return useContext(FieldsContext);
}
