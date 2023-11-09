import { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineMenu } from "react-icons/hi"
import Button from '../common/Button';
import Modal from '../common/Modal';
import styled from 'styled-components'

const MenuNavigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => setIsOpen(true)
  const handleClose = () => setIsOpen(false)

  const LinkColor = styled(Link)`
  text-decoration: none;
  font-size: 17px;
  padding: 1.2rem 0;
  margin: 0.5rem;
  color: black;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`
  return (
    <Container>
      <LinkColor to="/"><Logo src="https://i.imgur.com/vho5H8q.png" /> </LinkColor>
      <LinkColor to="/contact">425-999-9999</LinkColor>
      <Span>
        <Button padding="10px 20px">Contact</Button>
        <Menu onClick={handleClick} />
      </Span>
      <Modal isOpen={isOpen} handleClose={handleClose}>
        <ContainerTwo>
          <LinkColor to="/" onClick={handleClick}>Home</LinkColor>
          <LinkColor to="/services">Services</LinkColor>
          <LinkColor to="/animations">Animations</LinkColor>
          <LinkColor to="/gallery">Gallery</LinkColor>
          <LinkColor to="/contact">Contact</LinkColor>
        </ContainerTwo>
      </Modal>
    </Container>
  );
}

export default MenuNavigation;

const media = "@media(min-width: 1100px)"

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 10vh;
  position: sticky;
  top: 0;
  background-color: #ffffff;
  z-index: 1;
  ${media} {
    display: none;
  }
`

const Logo = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 10px;
  margin: 1rem;
`


const ContainerTwo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`

const Span = styled.span`
  display: flex;
  align-items: center;
`

const Menu = styled(HiOutlineMenu)`
  font-size: 25px;
  margin: 1rem;
`
