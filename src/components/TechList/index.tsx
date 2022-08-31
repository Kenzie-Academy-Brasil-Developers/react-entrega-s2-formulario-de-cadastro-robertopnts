import { ReactElement, useContext, useEffect } from "react"
import api from "../../services/api"
import { AuthContext } from "../contexts/AuthContext"
import { TechsContext } from "../contexts/TechsContext"
import Tech from "../Tech"


export default function TechList (): ReactElement<any>[] {
  const { user } = useContext(AuthContext)
  const { techs, setTechs } = useContext(TechsContext)

  
  useEffect(() => {
    api.get(`/users/${user?.id}`)
      .then(response => setTechs(response.data.techs))
      .catch(error => alert(error))  
  },[setTechs, user])
  
  return (
    techs.map(tech => <Tech tech={tech} key={tech.id}/>)
  )
}