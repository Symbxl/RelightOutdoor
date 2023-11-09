import { styled } from "styled-components";

const SectionFour = () => {
  return (
    <Section>
      <Container>
        <Title>Fast & Easy App!</Title>
        <Description>Simply slide your fingertip on the color wheel to update the lighting. With 16 million colors and 50,000 shades of white, it gives you a chance to create fabulous home lighting for whether illuminating or entertainment. Match diverse occasions via multiple Scenes and Music Mode.</Description>
      </Container>
      <Image src="https://i.imgur.com/YrFp7wG.png" />
    </Section>
  );
}

export default SectionFour;

const media = "@media(max-width: 1100px)";

const Section = styled.section`
  height: auto;
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  transition: all 0.3s ease; /* Add transition property here */
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 300px;
  width: 500px;
  margin: 2rem;
`;

const Title = styled.h2`
  font-weight: 700;
  color: #007FFF;
`;

const Description = styled.h3`
  font-weight: 400;
`;

const Image = styled.img`
  height: 400px;
  width: 500px;
`;

