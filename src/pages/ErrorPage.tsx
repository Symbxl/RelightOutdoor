import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NotFoundPage: React.FC = () => {
  return (
    <Container>
      <Title>404 - Page Not Found</Title>
      <Text>Sorry, the page you are looking for does not exist.</Text>
      <StyledLink to="/">Go to Home Page</StyledLink>
    </Container>
  );
};

const Container = styled.div`
  text-align: center;
  margin-top: 20vh;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: #f00;
`;

const Text = styled.p`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 2rem;
`;

const StyledLink = styled(Link)`
  font-size: 1.2rem;
  color: #007bff;
  text-decoration: none;
`;

export default NotFoundPage;
