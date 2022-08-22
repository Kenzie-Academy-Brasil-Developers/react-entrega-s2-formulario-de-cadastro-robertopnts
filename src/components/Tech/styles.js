import styled from "styled-components";

export const TechLi = styled.li`
  list-style: none;
  margin: 5px auto;
  width: 95%;
  background: #121214;
  border: 1px solid #121214;
  border-radius: 4px;
  align-items: center;

  display: flex;
  justify-content: space-between;

  cursor: pointer;

  &:hover {
    background: #343B41;
  }

  @media (min-width: 705px){
  }
`

export const TechInfoDiv = styled.div`
  width: 75%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 5px;

  @media (min-width: 705px) {
    width: 85%;
    padding: 0 30px;
  }
`

export const TechP = styled.p`
  font-size: 14px;
`

export const TechSpan = styled.span`
  font-size: 12px;
  color: #868E96;
`

export const DelButton = styled.button`
  background: #121214;
  border-radius: 40%;
  border: 1px solid #121214;
  color: #ff0000;
  font-weight: 700;
  height: 24px;
  width: 24px;
  cursor: pointer;

  &:hover {
    color: #121214;
    background: #FF0000;
  }
`