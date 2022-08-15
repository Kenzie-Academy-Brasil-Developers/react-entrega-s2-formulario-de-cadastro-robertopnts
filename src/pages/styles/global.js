import styled from "styled-components";

export const Main = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: #121214;
  align-items: center;
  justify-content: center;
  font-family: 'Inter';
  color: #F8F9FA
`

export const Label = styled.label`
  font-size: 10px;
  font-weight: 400;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 14px;
`

export const Button = styled.button`
  width: 270px;
  height: 39px;
  background: #FF577F;
  border: 1.5px solid #FF577F;
  border-radius: 4px;
  margin: 0 auto;
  color: #F8F9FA;
  cursor: pointer;

  &:hover {
    background: #FF8BA7
  }

  @media (min-width: 705px;){
    width: 330px;
  }

`

export const P = styled.p`
  font-size: 10px;
  line-height: 0px

  @media (min-width: 705px;){
    font-size: 12px;
  }
`