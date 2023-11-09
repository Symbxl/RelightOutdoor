import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #ffffff;
  padding: 15px;
  text-align: center;
`;

const ContactInfo = styled.div`
  margin-top: 10px;
`;

const PhoneNumber = styled.p`
  font-weight: bold;
`;

const Email = styled.p`
  font-style: italic;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <h2>Contact Us</h2>
      <ContactInfo>
        <PhoneNumber>Phone: (825)-973-7707</PhoneNumber>
        <Email>Email: admin@relightgp.ca</Email>
      </ContactInfo>
    </FooterContainer>
  );
};

export default Footer;
