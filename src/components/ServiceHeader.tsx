import { styled } from "styled-components";
import Button from "../common/Button";

const ServiceHeader = () => {
  return (<Container>
    <Title>On-Demand help to make the best offer.</Title>
    <Description>We are always avalible to answer any questions or concers you may have. If youre lights stop working, dont know how to navigate the app, or if you just have any general questions we are here to help. </Description>
    <Button height="30px">Request a quote</Button>
  </Container>);
}

export default ServiceHeader;


const Container = styled.div`
  height: 50vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin-left: 0.5rem;
`

const Title = styled.h2`
  font-size: 40px;
`

const Description = styled.p`
  max-width: 500px;
  font-size: 20px;
`