import { useContext, useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import { ITechs, TechsContext } from "./TechsContext";

interface IAuthProvider {
  children: React.ReactNode
}

export interface IData {
  email: string,
  password: string
}

export interface ICreateUser{
  email: string,
  password: string,
  confirmPassword: string,
  name: string,
  bio: string,
  contact: string,
  course_module: string
}

interface IUserWorks{
  id: string,
  title: string,
  description: string,
  deploy_url: string,
  created_at: string,
  updated_at: string
}

interface IUser {
  id: string,
  name: string,
  email: string,
  course_module: string,
  bio: string,
  contact: string,
  techs: ITechs[],
  works: IUserWorks[],
  created_at: string,
  updated_at: string
}

interface IUserContext {
  user: IUser | null;
  signIn: (data: IData) => Promise<void>;
  registerData: (data: ICreateUser) => void;
  loading: boolean;
}

export const AuthContext = createContext<IUserContext>({} as IUserContext)

export default function AuthProvider ({children}: IAuthProvider) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()
  const { setTechs } = useContext(TechsContext)

  useEffect(() => {
    async function loadUser() {  
      const token = localStorage.getItem('@kenzie-hub:token')

      if (token) {
        try {
          api.defaults.headers.common.authorization = `Bearer ${token}`

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
  }, [setTechs])

  const signIn = async (data: IData) => {
    const response = await api.post('/sessions', data)

    const { user: userResponse, token } = response.data

    api.defaults.headers.common.authorization = `Bearer ${token}`

    setUser(userResponse)

    localStorage.setItem('@kenzie-hub:token', token)
    localStorage.setItem('@kenzie-hub:userId', userResponse.id)

    

    navigate('/dashboard', { replace: true })
  }

  const registerData = (data: ICreateUser) => {
    console.log(data)
    api.post('/users', data)
      .then(
        response => {console.log(response)
        alert('Conta registrada!')
        navigate('/', {replace: true})}
        )
      .catch(error => alert(error)) 
  }

  return (
    <AuthContext.Provider value={{user, signIn, registerData, loading}}>
      {children}
    </AuthContext.Provider>
  )
}

