import { useForm } from "react-hook-form"
import { schema } from "../../validators/Register/registerUser"
import { yupResolver } from "@hookform/resolvers/yup"
import { useNavigate } from "react-router-dom"
import api from "../../services/api"
import { Button, Form, Label, Main, P } from "../styles/global"
import { Input, RegisterContainer, Select } from "./styles"
import Header from "../../components/Header"



export default function Register () {
  const { register, handleSubmit, formState: {errors} 
  } = useForm({
    resolver: yupResolver(schema)
  })
  const navigate = useNavigate()
  
  function registerData(data) {
    api.post('/users', data)
      .then(
        response => {console.log(response)
        alert('Conta registrada!')
        navigate('/', {replace: true})}
        )
      .catch(error => alert(error)) 
    
    

  }



  return (
  <>
    <Main>

      <Header/>

      <RegisterContainer>
        <h1>Crie sua conta</h1>
        <h3>Rápido e grátis, vamos nessa</h3>

        <Form onSubmit={handleSubmit(registerData)}>

          <Label htmlFor="name">Nome:</Label>
          <Input placeholder="example example" type='text' id='name' {...register('name')} />
          <P>{errors.name?.message}</P>

          <Label htmlFor="email">E-mail:</Label>
          <Input placeholder="example@kenzie.com" type='email' id='email' {...register('email')} />
          <P>{errors.email?.message}</P>

          <Label htmlFor="password">Senha:</Label>
          <Input placeholder="********" type='password' id='password' {...register('password')}/>
          <P>{errors.password?.message}</P>

          <Label htmlFor="confirm-password">Confirmar senha:</Label>
          <Input placeholder="Digite a mesma senha digitada anteriormente" type='password' id='confirm-password' {...register('confirmPassword')} />
          <P>{errors.confirmPassword?.message}</P>

          <Label htmlFor="bio">Bio:</Label>
          <Input placeholder="Fale sobre você" type='text' id='bio' {...register('bio')} />
          <P>{errors.bio?.message}</P>

          <Label htmlFor="contact">Contato:</Label>
          <Input placeholder="Digite seu contato" type='tel' id='contact' {...register('contact')}/>
          <P>{errors.contact?.message}</P>

          <Label htmlFor="module">Selecionar módulo:</Label>
          <Select name="module" id="module" {...register('course_module')}>
            <option value="first module (front-end)">Primeiro módulo</option>
            <option value="second module (front-end)">Segundo módulo</option>
            <option value="third module (front-end)">Terceiro módulo</option>
            <option value="fourth module (back-end)">Quarto módulo</option>
            <option value="fifth module (back-end)">Quinto módulo</option>
            <option value="sixth module">Sexto módulo</option>
          </Select>
          <P>{errors.module?.message}</P>

          <Button type="submit">Cadastrar</Button>
        </Form>
      </RegisterContainer>
    </Main>
  </>
  )
}