import styled from "styled-components";

export const DashboardContainer = styled.div`
  width: 95%;
  height: 130px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  border-bottom: 0.5px solid #F8F9FA;

  @media (min-width: 705px){
    width: 70%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`

export const H2 = styled.h2`
  font-size: 18px;
  font-weight: 700;
  color: #f8f9fa;
`

export const PDash = styled.p`
  font-size: 12px;
  font-weight: 600;
  color: #868E96;
`

export const TechsDiv = styled.div`
  width: 95%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #F8F9FA;
  margin-bottom: 25px;

  @media (min-width: 705px){
    width: 70%;
  }
`

export const PTech = styled.p`
  font-size: 16px;
  font-weight: 600;
`

export const TechButton = styled.button`
  padding: 11px;
  height: 32px;
  display: inline-flex;
  align-items: center;
  font-size: 16px;
  font-weight: 700;
  background: #212529;
  border-radius: 4px;
  color: #F8F9FA;
  border: 1px solid #212529;
  cursor: pointer;

  &:hover {
    background: #FF8BA7;
  }
`

export const TechsContainer = styled.ul`
  background: #212529;
  border-radius: 4px;
  width: 95%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0;
  padding: 20px 0;

  @media (min-width: 705px) {
    width: 70%;
  }
`