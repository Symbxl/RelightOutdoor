import { styled } from "styled-components";
const Modal = ({ isOpen, children, handleClose }: any) => {

  return (<>
    {isOpen && (
      <Container onClick={handleClose}>
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
  height: 575px;
  width: 350px;
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 10px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;  `

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