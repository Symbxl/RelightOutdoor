import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface BannerProps {
  imageUrl: string;
}

interface Props {
  imageUrl: string;
  children?: ReactNode;
}

const SectionContainer = styled.div`
  padding: 20px;
  background-color: #f2f2f2;
`;

const Banner = styled.div<BannerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px; /* You can adjust the height as needed */
  background-image: ${(props) => `url(${props.imageUrl})`};
  background-size: cover;
  background-position: center;
  /* Add any other styling you need for the banner */
`;

const Content = styled.div`
  text-align: center;
`;

const SectionFive: React.FC<Props> = ({ imageUrl, children }) => {
  return (
    <SectionContainer>
      <Banner imageUrl={imageUrl}>
      </Banner>
      <Content>{children}</Content>
    </SectionContainer>
  );
};

export default SectionFive;
