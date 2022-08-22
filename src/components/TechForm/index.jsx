import { yupResolver } from "@hookform/resolvers/yup"
import { useContext } from "react"
import { useForm } from "react-hook-form"
import * as yup from 'yup'
import { Input, RegisterButton, Select } from "../../pages/Register/styles"
import { Form, Label, P } from "../../pages/styles/global"
import { AuthContext } from "../contexts/AuthContext"
import { AddTechModal, ModalPage, TechModalHeader } from "./styles"


export default function TechForm () {
  const techSchema = yup.object().shape({
    title: yup.string().required('O nome da tecnologia é obrigatório!')
  })
  const { register, handleSubmit, formState: {errors}} = useForm({resolver: yupResolver(techSchema)})
  const { registerTech } = useContext(AuthContext)


  return (
    <ModalPage>
      <AddTechModal>
        <TechModalHeader>
          <p>Cadastrar Tecnologia</p>
          <button>X</button>
        </TechModalHeader>

        <Form onSubmit={handleSubmit(registerTech)}>
          <Label htmlFor="title">Nome</Label>
          <Input type="text" id="title" {...register('title')} />
          {errors.title?.message && <P>{errors.title.message}</P>}

          <Label htmlFor="status">Selecionar status</Label>
          <Select name="status" id="status" {...register('status')}>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </Select>
          <RegisterButton type="submit">Cadastrar Tecnologia</RegisterButton>
        </Form>
      </AddTechModal>
    </ModalPage>
  )
}