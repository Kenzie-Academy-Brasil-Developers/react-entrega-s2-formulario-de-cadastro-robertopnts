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

export const LoginButton = styled.button`
  width: 270px;
  height: 39px;
  background: #868E96;
  border: 1.5px solid #868E96;
  border-radius: 4px;
  margin: 0 auto;
  color: #F8F9FA;
  cursor: pointer;
  margin-bottom: 10px;

  &:hover {
    background: #FF8BA7
  }

  @media (min-width: 705px){
    width: 330px;
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

