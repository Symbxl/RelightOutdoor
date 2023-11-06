import SectionFour from "../common/SectionFour";
import SectionOne from "../common/SectionOne";
import SectionThree from "../common/SectionThree";
import SectionTwo from "../common/SectionTwo";
import ServiceHeader from "../components/ServiceHeader";
import DisplayServices from "../content/DisplayServices";

const ServicesPage = () => {
  return (<>
    <ServiceHeader />
    <DisplayServices />
    <SectionTwo />
    <SectionThree />
    <SectionFour />
  </>);
}

export default ServicesPage;