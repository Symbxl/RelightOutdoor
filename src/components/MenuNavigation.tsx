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
  color: #000000;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`

  const Color = styled.h3`
color: #000000;
padding: 0 2rem;
`

  const Phone = styled.p`
    font-size: 17px;
  padding: 1.2rem 0;
  margin: 0.5rem;
  color: #ffffff;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`
  return (
    <Container>
      <LinkColor to="/"><Logo src="https://i.imgur.com/Xy8Ho9R.png" /> </LinkColor>
      <Phone>(825) 973-7707</Phone>
      <Span>
        <Button padding="10px 20px">Contact</Button>
        <Menu onClick={handleClick} />
      </Span>
      <Modal isOpen={isOpen} handleClose={handleClose}>
        <ContainerTwo>
          <Color>Relight Outdoor Lighting</Color>
          <LinkColor to="/" onClick={handleClick}>Home</LinkColor>
          <LinkColor to="/services">Services</LinkColor>
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
  min-height: 10vh;
  color:#101418;
  border: 1px solid #101418;
  border-radius: 5px;
  ${media} {
    display: none;
  }
`

const Logo = styled.img`
  height: 45px;
  width: 45px;
  border-radius: 10px;
  margin-left: 1rem;
  background-color: white;
  padding: 0.5rem;
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
  color: white;
`
