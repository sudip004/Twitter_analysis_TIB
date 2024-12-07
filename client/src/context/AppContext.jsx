import {createContext,useContext,useState} from 'react'

export const AppContext = createContext();

export const AppProvider = ({children}) => {
  const [state,setState] = useState("hellow");

  return (
    <AppContext.Provider value={{state,setState}}>
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => {
  return useContext(AppContext);
}