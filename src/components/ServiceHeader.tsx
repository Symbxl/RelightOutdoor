import { styled } from "styled-components";
import Button from "../common/Button";

const ServiceHeader = () => {
  return (<Container>
    <Title>On-Demand help to make you the best offer.</Title>
    <Description>We are always avalible to answer any questions or concers you may have. If youre lights stop working, dont know how to navigate the app, or if you just have any general questions we are here to help. </Description>
    <Button height="40px">Request a quote</Button>
  </Container>);
}

export default ServiceHeader;

const Container = styled.div`
  height: 45vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Title = styled.h2`
  font-size: 40px;
  max-width: 475px;

`

const Description = styled.p`
  max-width: 450px;
  font-size: 20px;
  
`