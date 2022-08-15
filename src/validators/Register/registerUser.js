import * as yup from 'yup'

export const schema = yup.object({
  name: yup
      .string()
      .required('O nome é obrigatório'),
  email: yup
      .string()
      .email('Deve ser um email')
      .required('Email é obrigatório'),
  password: yup
      .string()
      .min(8, 'No minimo 8 caracteres')
      .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/, 'A senha deve conter ao menos 1 letra minúscula, 1 letra maiúscula, 1 número e 1 símbolo')
      .required(),
  confirmPassword: yup
      .string()
      .required('Confirme a senha')
      .oneOf([yup.ref('password')], 'Confirmação deve ser igual a senha'),
  bio: yup
      .string()
      .required('Digite a Bio'),
  contact: yup
      .string()
      .required('O campo é obrigatório')
})

