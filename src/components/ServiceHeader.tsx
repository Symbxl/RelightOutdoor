import React from "react";
import styled from "styled-components";
import Button from "../common/Button";

const ServiceHeader = () => {
  return (
    <Section>
      <Container>
        <Title>On-Demand Help to Make You the Best Offer</Title>
        <Description>
          We are always available to answer any questions or concerns you may
          have. If your lights stop working, don't know how to navigate the
          app, or if you just have any general questions, we are here to help.
        </Description>
        <ButtonWrapper>
          <Button height="40px">Request a Quote</Button>
        </ButtonWrapper>
      </Container>
    </Section>
  );
};

export default ServiceHeader;

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 45vh;
`;

const Container = styled.div`
  text-align: center;
  max-width: 600px;
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 32px;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 18px;
  margin-bottom: 30px;
`;

const ButtonWrapper = styled.div`
  margin-top: 20px;
`;

