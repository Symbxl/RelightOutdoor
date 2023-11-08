import { styled } from "styled-components";
import Button from "../common/Button";

const ServiceHeader = () => {
  return (<Section>
    <Container>
      <Title>On-Demand help to make you the best offer.</Title>
      <Description>We are always avalible to answer any questions or concers you may have. If youre lights stop working, dont know how to navigate the app, or if you just have any general questions we are here to help. </Description>
      <Button height="40px">Request a quote</Button>
    </Container>
  </Section>
  );
}

export default ServiceHeader;


const Section = styled.section`
  display: flex;
  justify-content: center;
`
const Container = styled.div`
  height: 45vh;
  width: 480px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Title = styled.h2`
  font-size: 40px;
`

const Description = styled.p`
  font-size: 20px;
  
`