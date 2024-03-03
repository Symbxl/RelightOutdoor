import { styled } from "styled-components";

const DisplayPricing = () => {
  return (
    <Section>
      <Container>
        <Title>Pricing</Title>
        <Span>
          <Cost>$11</Cost>
          <Foot>/ft</Foot>
        </Span>
        <List>
          <Item>3 year warranty</Item>
          <Item>same day installation</Item>
          <Item>24 hour customer service</Item>
          <Item>30% deposit required </Item>
        </List>
      </Container>
    </Section>
  )
}

export default DisplayPricing;


const Section = styled.section`
  width: 100vw;
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Container = styled.div`
  width: 400px;
  height: 400px;
  border: 1px solid white;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Title = styled.h1`
  font-size: 45px;
`

const Span = styled.span`
  display: flex;
`

const Cost = styled.h2`
  font-size: 40px;

`

const Foot = styled.h3`
`

const List = styled.ul`
  
`

const Item = styled.li`
  
`