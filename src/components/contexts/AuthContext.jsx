import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";

export const AuthContext = createContext({})

export default function AuthProvider ({children}) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    async function loadUser() {  
      const token = localStorage.getItem('@kenzie-hub:token')

      if (token) {
        try {
          api.defaults.headers.authorization = `Bearer ${token}`

          const { data } = await api.get('/profile')

          setUser(data)
        } catch (error) {
          console.error(error)
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

  return (
    <AuthContext.Provider value={{user, signIn, loading}}>
      {children}
    </AuthContext.Provider>
  )
}

