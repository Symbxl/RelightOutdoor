import { Link as link } from "react-router-dom";
import Button from "../common/Button";
import styled from "styled-components"

const MainNavigation = () => {
  return (
    <List>
      <Item><LinkColor to="/"> <Logo src="https://i.imgur.com/KUEzFqL.png" /></LinkColor></Item>
      <Container>
        <Item><Link to="/"> Home</Link></Item>
        <Item><Link to="/services">Services</Link></Item>
        <Item><Link to="/animations">Animations</Link></Item>
        <Item><Link to="/gallery">Gallery</Link></Item>
        <Item><Link to="/contact">Contact</Link></Item>
      </Container>
      <RightContainer>
        <Item>425-999-9999</Item>
        <Button padding="10px 23px">Contact</Button>
      </RightContainer>
    </List>
  )
}

export default MainNavigation;


const Item = styled.li`
  padding: 0.7rem;
`

const Container = styled.span`
  min-height: 10vh;
  display: flex;
  align-items: center;
`

const RightContainer = styled.span`
  height: 10vh;
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`
const Logo = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 10px;
`

const Link = styled(link)`
text-decoration: none;
padding: 0.2rem;
color: black;
`
const media = "@media(max-width: 1100px)"

const List = styled.ul`
display: flex;
justify-content: space-between;
align-items: center;
list-style: none;
${media} {
  display: none;
}

position: sticky;
top: 0;
background-color: #ffffffe1;
z-index: 1;
`
const LinkColor = styled(Link)`
font-size: 22px;
font-weight: 400;
font-family: "General Sans",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
`