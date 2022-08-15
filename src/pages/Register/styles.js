import styled from "styled-components"

export const RegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background: #212529;
  width: 300px;
  height: 710px;

  @media (min-width: 705px){
    width: 400px;
    height: 900px;
  }
`

export const Input = styled.input`
  width: 270px;
  height: 39px;
  background: #343B41;
  border: 1px solid #343B41;
  border-radius: 4px;
  color: #F8F9FA;
  font-size: 14px;

  @media (min-width: 705px){
    width: 330px;
  }
`

export const Select = styled.select`
  width: 270px;
  height: 39px;
  background: #343B41;
  border: 1px solid #343B41;
  border-radius: 4px;
  color: #F8F9FA;
  font-size: 14px;

  @media (min-width: 705px){
    width: 330px;
  }
`