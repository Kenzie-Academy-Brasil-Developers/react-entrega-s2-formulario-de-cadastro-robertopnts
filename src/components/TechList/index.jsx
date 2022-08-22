import { useContext } from "react"
import { AuthContext } from "../contexts/AuthContext"
import Tech from "../Tech"


export default function TechList () {
  const { user } = useContext(AuthContext)

  return (
    user.techs.map(tech => <Tech tech={tech} key={tech.id}/>)
  )
}