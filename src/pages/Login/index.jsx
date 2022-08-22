
import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../components/contexts/AuthContext.jsx'
import { Input, LoginButton, LoginContainer } from '../Login/styles.js'
import { Button, Form, H1, Label, Main, P } from '../styles/global.js'

export default function Login() {

  const { register, handleSubmit } = useForm()
  const { signIn } = useContext(AuthContext)
  const navigate = useNavigate()
  return (
    <>
      <Main>

        <H1>Kenzie Hub</H1>
        <LoginContainer>

          <h2>Login</h2>

          <Form onSubmit={handleSubmit(signIn)}>
            <Label htmlFor="login-email">Email</Label>
            <Input placeholder='example@kenzie.com.br' type="email" id="login-email" {...register('email')} />

            <Label htmlFor="login-password">Senha</Label>
            <Input placeholder='********' type="password" id="login-password" {...register('password')} />

            <Button type='submit'>Entrar</Button>
          </Form>

          <P>Ainda não possui uma conta?</P>

          <LoginButton onClick={() => navigate('/register', {replace:true})}>Cadastre-se</LoginButton>
        </LoginContainer>
      </Main>
    </>
  )
}
