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
    <SectionFour />

    <SectionTwo />
    <SectionThree props={["https://i.imgur.com/Fqs64mt.png", "https://i.imgur.com/XhSZJzX.png"]} />
    <SectionThree props={["https://pbs.twimg.com/media/F-A9hPrXsAA_ucm?format=jpg&name=4096x4096", "https://pbs.twimg.com/media/F-A9hjyWYAA9iO_?format=jpg&name=4096x4096"]} />
    <SectionFive imageUrl="https://i.imgur.com/3Unjw3j.jpg" />

  </>);
}

export default ServicesPage;