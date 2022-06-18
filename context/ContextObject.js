import { createContext, useContext, useState } from 'react';

const Context = createContext();
export function ContextWrapper({ children }) {
   const [t, setT] = useState([]);

   return (
    <Context.Provider value={[t, setT]}>
      {children}
    </Context.Provider>
   );
}
export function useAppContext() {
    return useContext(Context);
}