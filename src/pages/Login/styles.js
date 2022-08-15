import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background: #212529;
  width: 300px;
  height: 405px;

  @media (min-width: 705px){
    width: 400px;
    height: 510px;
  }
`

export const Input = styled.input`
  width: 270px;
  height: 39px;
  background: #343B41;
  border: 1px solid #F8F9FA;
  border-radius: 4px;
  color: #F8F9FA;
  font-size: 14px;

  @media (min-width: 705px){
    width: 330px;
  }
`

