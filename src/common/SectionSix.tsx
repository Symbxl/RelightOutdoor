import styled, { keyframes } from "styled-components";

interface Props {
  image: string;
  title: string;
  description: string;
}

const SectionSix = ({ image, title, description }: Props) => {
  return (
    <Section>
      <Image src={image} alt={title} />
      <ContentContainer>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </ContentContainer>
    </Section>
  );
};

export default SectionSix;

// Animation keyframes
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Section = styled.section`
  min-height: 60vh;
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-around;
  text-align: center; /* Center text content */
  animation: ${fadeIn} 1s ease; /* Apply fade-in animation */
`;

const ContentContainer = styled.div`
  max-width: 600px;
  width: 80%; /* Adjusted width for better mobile alignment */
  margin: 0 auto; /* Center the content on mobile */
  margin-top: 1rem;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1rem;
`;

const Image = styled.img`
  width: 100%;
  max-width: 525px;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

// Media query for mobile devices
const mobileBreakpoint = "768px";

const mediaQuery = `@media (max-width: ${mobileBreakpoint}) {
  ${ContentContainer} {
    width: 90%; /* Adjusted width for better mobile alignment */
  }
}`;

// Apply media query and animations
const StyledSectionSix = styled(SectionSix)`
  ${mediaQuery}
`;

export { StyledSectionSix };
