import SectionFour from "../common/SectionFour";
import SectionOne from "../common/SectionOne";
import SectionThree from "../common/SectionThree";
import SectionTwo from "../common/SectionTwo";
import ServiceHeader from "../components/ServiceHeader";
import DisplayServices from "../content/DisplayServices";
import SectionFive from "../common/SectionFive";
import Table from "../components/Table"

const ServicesPage = () => {
  return (<>
    <ServiceHeader />
    <DisplayServices />
    <Table />
    <SectionTwo />
    <SectionFour title="Fast & Easy App!" description="Simply slide your fingertip on the color wheel to update the lighting. With 16 million colors and 50,000 shades of white, it gives you a chance to create fabulous home lighting for whether illuminating or entertainment. Match diverse occasions via multiple Scenes and Music Mode." image="https://i.imgur.com/lUCYEuW.jpg" left={true} right={false} />
    <SectionFour title="Timer Function" description="With our timer function, you can add your lights to your daily routine. Program your LED lights to power on/off automatically via the Govee Home App. With your very own lighting schedule, you'll always return to a brightly-lit home." image="https://cdn.shopify.com/s/files/1/0556/4203/0246/files/H6172-P-6.jpg?v=1646790742" left={false} right={true} />
    <SectionThree props={["https://i.imgur.com/Fqs64mt.png", "https://i.imgur.com/XhSZJzX.png"]} />
    <SectionThree props={["https://pbs.twimg.com/media/F-A9hPrXsAA_ucm?format=jpg&name=4096x4096", "https://pbs.twimg.com/media/F-A9hjyWYAA9iO_?format=jpg&name=4096x4096"]} />
    <SectionFive imageUrl="https://i.imgur.com/3Unjw3j.jpg" />
  </>);
}

export default ServicesPage;