import * as yup from 'yup'

export const loginSchema = yup.object({
  email: yup
      .string()
      .email('Insira um email')
      .required('Email é obrigatório'),
  password: yup
      .string()
      .required('Senha obrigatória')
})