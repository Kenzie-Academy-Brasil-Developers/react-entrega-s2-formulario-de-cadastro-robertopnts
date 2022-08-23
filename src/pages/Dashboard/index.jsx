import { useContext } from "react"
import { Navigate, useNavigate } from "react-router-dom"
import { AuthContext } from "../../components/contexts/AuthContext"
import { BackButton, DashboardHeader, H1, Main } from '../styles/global.js'
import { DashboardContainer, H2, PDash, PTech, TechButton, TechsContainer, TechsDiv } from '../Dashboard/styles.js'
import TechList from "../../components/TechList"
import TechForm from "../../components/TechForm"


export default function Dashboard() {

  const navigate = useNavigate()
  const {user, loading, show, setShow} = useContext(AuthContext)
  console.log(user)

  function logout () {
    localStorage.clear()
    navigate('/', {replace: true})
  }

  if (loading) {
    return <p>Carregando...</p>
  } 
  else {
    return (
    user ? 
      <>
        {show && <TechForm/>}

        <Main>
          <DashboardHeader>
            <H1>Kenzie Hub</H1>
            <BackButton onClick={() => logout()}>Sair</BackButton>
          </DashboardHeader>
          <DashboardContainer>
            <H2> Olá, {user.name} </H2> 
            <PDash>{user.course_module}</PDash>
          </DashboardContainer>
          <TechsDiv>
            <PTech>Tecnologias</PTech>
            <TechButton onClick={() => setShow(true)}>+</TechButton>
          </TechsDiv>
          <TechsContainer>
            <TechList/>
          </TechsContainer>
        </Main>
      </>
    : <Navigate to='/' replace/>
    )
  }
}