import styled from "styled-components";

export const Main = styled.main`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Inter';
  color: #F8F9FA;
  margin: 20px 0;
`

export const Label = styled.label`
  font-size: 10px;
  font-weight: 400;
`

export const H1 = styled.h1`
  font-size: 16px;
  color: #FF577F;
  font-family: 'Inter';

  @media (min-width: 705px) {
    font-size: 22px;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 14px;
`

export const HeaderContainer = styled.div`
  width: 300px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  @media (min-width: 705px){
    width: 400px;
  }
`

export const DashboardHeader = styled.div`
  width: 95%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px #F8F9FA SOLID;

  @media (min-width: 705px){
    width: 70%;
  }
`

export const BackButton = styled.button`
  width: 80px;
  height: 32px;
  background: #212529;
  border: 1.5px solid #212529;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #FF8BA7;
  }

  font-size: 10px;
  color: #F8F9FA;
  padding: 4.5px 25px;

  @media (min-width: 705px){
    font-size: 12px;
    width: 70px;
    padding: 5px 15px;
  }
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
  margin-bottom: 10px;

  &:hover {
    background: #FF8BA7
  }

  @media (min-width: 705px){
    width: 330px;
  }

`

export const P = styled.p`
  font-size: 10px;
  line-height: 0px;

  @media (min-width: 705px){
    font-size: 12px;
  }
`