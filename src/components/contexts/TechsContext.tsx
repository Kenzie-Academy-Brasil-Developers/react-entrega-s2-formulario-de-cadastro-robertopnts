import React, { createContext, useState } from "react";
import api from "../../services/api";

export interface ITechForm {
  title: string,
  status: string
}

interface ITechsProvider {
  children: React.ReactNode
}

export interface ITechs {
  id: string,
  title: string,
  status: string,
  created_at: string,
  updated_at: string
}

export interface ITechsContext {
  techs: ITechs[];
  setTechs: React.Dispatch<React.SetStateAction<ITechs[]>>;
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  registerTech: (newTech: ITechForm) => void;
  deleteTech: (delTech: ITechs) => void;
}

export const TechsContext = createContext<ITechsContext>({} as ITechsContext)

export default function TechsProvider ({children}: ITechsProvider) {
  const [techs, setTechs] = useState<ITechs[]>([] as ITechs[])
  const [show, setShow] = useState<boolean>(false)

    async function registerTech(newTech: ITechForm) {
      const token = localStorage.getItem('@kenzie-hub:token')
      console.log(token, newTech)
      api.defaults.headers.common.authorization = `Bearer ${token}`
  
      api.post('/users/techs', newTech)
        .then(
          async response => {
            console.log(response)
            alert('Tecnologia registrada!')
            setShow(false)
          }
        )
        .catch(error => alert(error))
    }
  
    async function deleteTech(delTech: ITechs) {
      const token = localStorage.getItem('@kenzie-hub:token')
      api.defaults.headers.common.authorization = `Bearer ${token}`
      console.log(delTech)
  
      api.delete(`/users/techs/${delTech.id}`)
        .then(
          response => response)
        .catch( error => alert(error))
    }

  return (
    <TechsContext.Provider value={{techs, setTechs, show, setShow,registerTech, deleteTech}}>
      {children}
    </TechsContext.Provider>
  )
}