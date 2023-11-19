import styled from "styled-components";

interface Props {
  items: Items[];
}

interface Items {
  id: number;
  icon: string;
  title: string;
  description: string;
}

const FeaturesCard = ({ items }: Props) => {
  return (
    <>
      {items.map((item) => {
        return (
          <Container key={item.id}>
            <TitleContainer>
              <Icon src={item.icon} alt={item.title} />
              <Title>{item.title}</Title>
            </TitleContainer>
            <Description>{item.description}</Description>
          </Container>
        );
      })}
    </>
  );
};

export default FeaturesCard;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 250px;
  width: 300px;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1.5rem;
  margin: 2rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const Icon = styled.img`
  width: 40px; /* Adjusted icon size */
  height: 40px;
  margin-right: 1rem; /* Added margin for spacing */
`;

const Title = styled.h2`
  font-size: 1.6rem;
  text-align: center;
  margin: 0;
`;

const Description = styled.p`
  text-align: center;
  color: #666;
  font-size: 1.1rem;
`;
