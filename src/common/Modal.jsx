import { styled } from "styled-components";

const Modal = ({ isOpen, children, handleClose }: any) => {

  return (
    <>
      {isOpen && (
        <Container onClick={handleClose}>
          <Close onClick={handleClose}>x</Close>
          <ChildContainer>
            {children}
          </ChildContainer>
        </Container>
      )}
    </>
  );
}

export default Modal;

const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 500px;
  width: 375px;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border: 1px solid #ccc;
`;

const ChildContainer = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const Close = styled.button`
  height: 35px;
  width: 35px;  
  margin: 1rem;
  align-self: flex-end;
  border: none;
  font-size: 18px;
  background-color: #f2f2f2;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #e6e6e6;
  }
`;
