import { useContext, useEffect } from "react"
import api from "../../services/api"
import { AuthContext } from "../contexts/AuthContext"
import Tech from "../Tech"


export default function TechList () {
  const { techs, setTechs, user } = useContext(AuthContext)
  useEffect(() => {
    api.get(`/users/${user.id}`)
      .then(response => setTechs(response.data.techs))
      .catch(error => alert(error))  
  },[techs])
  

  return (
    techs.map(tech => <Tech tech={tech} key={tech.id}/>)
  )
}