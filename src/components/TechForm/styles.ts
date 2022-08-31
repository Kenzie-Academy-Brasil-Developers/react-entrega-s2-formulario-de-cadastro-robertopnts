import styled from "styled-components";

export const ModalPage = styled.div`
  position: fixed;
  background: rgba(0,0,0,.45);
  width: 100%;
  height: 100vh;
`

export const AddTechModal = styled.div`
  align-items: center;

  margin: auto;
  width: 300px;
  color: #F8F9FA;
  display: flex;
  flex-direction: column;
  background: #212529;
  border-radius: 4px;

  @media (min-width: 705px){
    width: 400px;
  }
`

export const TechModalHeader = styled.header`
  height: 40px;
  width: 100%;
  background: #343B41;
  margin-bottom: 8px;
  align-items: center;
  border-radius: 4px 4px 0px 0px;
  
  display: flex;
  justify-content: space-between;

  p {
    margin-left: 10px;
    font-size: 12px;
    font-weight: 700;

    @media (min-width: 705px) {
      font-size: 14px;
    }
  }

  button {
    margin-right: 10px;
    cursor: pointer;
    background: transparent;
    color: #868E96;
    border: none;
    opacity: 0.4;
    

    &:hover {
      transition: .4s;
      opacity: 1;
    }
  }
`