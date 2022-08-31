import { useContext } from "react";
import { TechsContext } from "../contexts/TechsContext";
import { DelButton, TechInfoDiv, TechLi, TechP, TechSpan } from "./styles";


export default function Tech (tech: any) {
  const {deleteTech} = useContext(TechsContext)

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