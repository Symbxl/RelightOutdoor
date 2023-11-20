import styled from "@emotion/styled";
import Button from "../common/Button";

const Header = () => {
  return (
    <Head>
      <Container>
        <Title>Lighting Up Grande Prairie, all year long.</Title>
        <Description>
          Make your neighbor jealous and put a smile on your face every time you
          leave the driveway. Request a quote and light up your home today!
        </Description>
        <Button height="50px" width="150px">
          Request Quote
        </Button>
      </Container>
      <Image src="https://i.imgur.com/dAHWvFV.jpeg" />
    </Head>
  );
};

export default Header;

const Image = styled.img`
  width: 525px;
  max-width: 525px;
  height: auto;
  margin: 1rem;
`;

const Head = styled.header`
  min-height: 50vh;
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1rem;
  min-height: 30vh;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  max-width: 600px;
  line-height: 1.2;
`;

const Description = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  max-width: 600px;
`;

const mobileBreakpoint = "768px";

const responsiveStyles = `
  ${Title}, ${Description} {
    width: 100%;
    max-width: none;
  }
`;

const mediaQuery = `@media (max-width: ${mobileBreakpoint}) {
  ${responsiveStyles}
}`;

// Apply responsive styles
const ResponsiveContainer = styled(Container)`
  ${mediaQuery}
`;
