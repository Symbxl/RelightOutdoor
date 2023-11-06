import ServicesCard from "../components/ServicesCard";
import styled from "@emotion/styled";
import { PiHeadsetBold } from "react-icons/pi"
import { AiFillRocket, AiOutlineTool } from "react-icons/ai"
const DisplayServices = () => {
  const service = [
    { number: <PiHeadsetBold />, title: "24/7 Support", desc: "There are multiple ways to request a quote, one way is through the contact page on this site, or through our phone number or email." },
    { number: <AiFillRocket />, title: "Quick delivery", desc: "There are multiple ways to request a quote, one way is through the contact page on this site, or through our phone number or email." },
    { number: <AiOutlineTool />, title: "Warenty Protection Included", desc: "There are multiple ways to request a quote, one way is through the contact page on this site, or through our phone number or email." }
  ]

  const services = [
    { number: 1, title: "Step One: Request a quote", desc: "There are multiple ways to request a quote, one way is through the contact page on this site, or through our phone number or email." },
    { number: 2, title: "Step Two: Receive an estimate", desc: "There are multiple ways to request a quote, one way is through the contact page on this site, or through our phone number or email." },
    { number: 3, title: "Step One: Enjoy you're lights", desc: "There are multiple ways to request a quote, one way is through the contact page on this site, or through our phone number or email." }
  ]
  return (<Container>
    <ServicesCard services={service} />
    <ServicesCard services={services} />
  </Container>);
}

export default DisplayServices;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
`