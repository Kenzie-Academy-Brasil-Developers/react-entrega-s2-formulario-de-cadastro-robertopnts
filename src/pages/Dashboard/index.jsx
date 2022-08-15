import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { AuthContext } from "../../components/contexts/AuthContext"
import { Main } from '../styles/global.js'
import { DashboardContainer } from '../Dashboard/styles.js'
import Header from '../../components/Header/index.jsx'

export default function Dashboard() {

  const {user, loading} = useContext(AuthContext)
  console.log(user)

  if (loading) {
    return <p>Carregando...</p>
  } 
  else {
    return (
    user ? 
      <>
        <Main>
          <Header/>
          <DashboardContainer>
            <h2> Olá, {user.name} </h2> 
            <p>{user.course_module}</p>
          </DashboardContainer>
        </Main>
      </>
    : <Navigate to='/' replace/>
    )
  }
}