import SectionFour from "../common/SectionFour";
import SectionOne from "../common/SectionOne";
import SectionThree from "../common/SectionThree";
import SectionTwo from "../common/SectionTwo";
import ServiceHeader from "../components/ServiceHeader";
import DisplayServices from "../content/DisplayServices";
import SectionFive from "../common/SectionFive";

const ServicesPage = () => {
  return (<>
    <ServiceHeader />
    <DisplayServices />
    <SectionTwo />
    <SectionThree />
    <SectionFive imageUrl="https://i.imgur.com/3Unjw3j.jpg" />
    <SectionFour />
    <SectionFive imageUrl="https://i.imgur.com/0h7lF3W.jpg" />

  </>);
}

export default ServicesPage;