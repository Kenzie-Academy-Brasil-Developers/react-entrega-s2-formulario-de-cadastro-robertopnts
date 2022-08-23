import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { DelButton, TechInfoDiv, TechLi, TechP, TechSpan } from "./styles";


export default function Tech ({tech}) {
  const {deleteTech} = useContext(AuthContext)

  return (
    <TechLi>
      <TechInfoDiv>
        <TechP>{tech.title}</TechP>
        <TechSpan>{tech.status}</TechSpan>
      </TechInfoDiv>
      <DelButton onClick={() => deleteTech(tech)}>X</DelButton>
    </TechLi>
  )
}