import { styled } from "styled-components";

interface Props {
  title: string;
  description: string;
  image: string;
  left: boolean;
  right: boolean;
}
const SectionFour = ({ title, description, image, left, right }: Props) => {
  return (
    <Section>
      {left && <Image src={image} />}
      <Container>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Container>
      {right && <Image src={image} />}
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
  transition: all 0.3s ease; 
  margin-top: 1rem;
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
  font-weight: 300;
  font-size: 32px;
  color: #000000;
`;

const Description = styled.h3`
  font-weight: 300;
  font-size: 22px;
  margin-left: 0.5rem;
`;

const Image = styled.img`
  height: 500px;
  width: 425px;
`;

