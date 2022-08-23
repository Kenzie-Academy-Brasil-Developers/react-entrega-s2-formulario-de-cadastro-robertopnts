import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";

export const AuthContext = createContext({})

export default function AuthProvider ({children}) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [techs, setTechs] = useState([])
  const [show, setShow] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    async function loadUser() {  
      const token = localStorage.getItem('@kenzie-hub:token')

      if (token) {
        try {
          api.defaults.headers.authorization = `Bearer ${token}`

          const { data } = await api.get('/profile')

          setUser(data)
          setTechs(data.techs)
        } catch (error) {
          console.error(error)
          localStorage.clear()
        }
      }
      setLoading(false)
    }

    loadUser()
  }, [])

  const signIn = async (data) => {
    const response = await api.post('/sessions', data)

    const { user: userResponse, token } = response.data

    api.defaults.headers.authorization = `Bearer ${token}`

    setUser(userResponse)

    localStorage.setItem('@kenzie-hub:token', token)
    localStorage.setItem('@kenzie-hub:userId', userResponse.id)

    

    navigate('/dashboard', { replace: true })
  }

  const registerData = (data) => {
    console.log(data)
    api.post('/users', data)
      .then(
        response => {console.log(response)
        alert('Conta registrada!')
        navigate('/', {replace: true})}
        )
      .catch(error => alert(error)) 
  }

  const registerTech = (newTech) => {
    const token = localStorage.getItem('@kenzie-hub:token')
    console.log(token, newTech)
    api.defaults.headers.authorization = `Bearer ${token}`

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

  const deleteTech = (delTech) => {
    const token = localStorage.getItem('@kenzie-hub:token')
    api.defaults.headers.authorization = `Bearer ${token}`
    console.log(delTech)

    api.delete(`/users/techs/${delTech.id}`)
      .then(
        response => response)
      .catch( error => alert(error))
  }

  return (
    <AuthContext.Provider value={{user, techs, setTechs, show, setShow, signIn, registerData, deleteTech, loading, registerTech}}>
      {children}
    </AuthContext.Provider>
  )
}

