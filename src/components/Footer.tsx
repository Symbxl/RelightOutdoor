import styled from 'styled-components';

const FooterContainer = styled.footer`
  padding: 15px;
  text-align: center;
`;

const ContactInfo = styled.div`
  margin-top: 10px;
  color: white;

`;

const PhoneNumber = styled.p`
  font-weight: bold;
  color: white;

`;

const Email = styled.p`
  font-style: italic;
  color: white;

`;


const Title = styled.h2`
  color: white;
`
const Footer = () => {
  return (
    <FooterContainer>
      <Title>Contact Us</Title>
      <ContactInfo>
        <PhoneNumber>Phone: (825) 973-7707</PhoneNumber>
        <Email>Email: admin@relightgp.ca</Email>
      </ContactInfo>
    </FooterContainer>
  );
};

export default Footer;
