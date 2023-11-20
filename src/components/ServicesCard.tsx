import React from 'react';
import styled from '@emotion/styled';

interface Service {
  number: JSX.Element | number;
  title: string;
  desc: string;
}

interface Props {
  services: Service[];
}

const ServicesCard = ({ services }: Props) => {
  return (
    <CardContainer>
      {services.map((service, index) => (
        <ServiceItem key={index}>
          <NumberCircle>{service.number}</NumberCircle>
          <Title>{service.title}</Title>
          <Description>{service.desc}</Description>
        </ServiceItem>
      ))}
    </CardContainer>
  );
};

const CardContainer = styled.div`
  width: 100%;
  max-width: 270px;
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin: 1rem;
`;

const ServiceItem = styled.div`
  margin-bottom: 20px;
  text-align: center;
`;

const NumberCircle = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #000000;
  color: #fff;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 15px;
`;

const Title = styled.h3`
  margin: 0;
  font-size: 20px;
  color: #333;
`;

const Description = styled.p`
  margin: 1rem;
  font-size: 14px;
  color: #555;
`;

export default ServicesCard;
