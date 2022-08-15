import styled from "styled-components";

export const DashboardContainer = styled.div`
  width: 100%;
  height: 130px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  justify-content: space-around;
  align-items: center;

  @media (min-width: 705px){
    width: 70%;
    flex-direction: row;
  }
`
