import styled from "styled-components";

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

const Section = styled.section`
  min-height: 60vh;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 1rem;
`;

const ContentContainer = styled.div`
  max-width: 600px;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1.5rem;
  color: #d2d2d2;
`;

const Image = styled.img`
  width: 100%;
  max-width: 525px;
  height: auto;
  border-radius: 8px; // Add border-radius for rounded corners
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); // Add a subtle box shadow
`;

// Media query for mobile devices
const mobileBreakpoint = "768px";

const mediaQuery = `@media (max-width: ${mobileBreakpoint}) {
  ${Section} {
    align-items: center;
  }
}`;

// Apply media query
const StyledSectionSix = styled(SectionSix)`
  ${mediaQuery}
`;

export { StyledSectionSix };
