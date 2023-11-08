import { styled } from "styled-components";
const Modal = ({ isOpen, children, handleClose }: any) => {

  return (<>
    {isOpen && (
      <Container>
        <Close onClick={handleClose}>x</Close>
        <ChildContainer>
          {children}
        </ChildContainer>
      </Container>
    )}
  </>);
}

export default Modal;

const Container = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  height: 500px;
  width: 350px;
  display: flex;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;  
  background-color: #ffffff;
  border-radius: 5px;
  `

const ChildContainer = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  height: 200px;
`

const Close = styled.button`
  height: 35px;
  width: 35px;  
  margin: 1rem;
  align-self: end;
  border: none;
  font-size: 20px;
  background-color: transparent;
`