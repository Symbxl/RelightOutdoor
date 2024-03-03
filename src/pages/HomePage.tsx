import SectionOne from "../common/SectionOne"
import SectionTwo from "../common/SectionTwo";
import SectionThree from "../common/SectionThree";
import SectionFour from "../common/SectionFour";
import DisplayServices from "../content/DisplayServices";
import Table from "../components/Table";
import Header from "../components/Header";
const HomePage = () => {
  return <>
    <Header />
    <SectionTwo />
    <SectionOne />
    <DisplayServices />
    <Table />
    <SectionFour title="Fast & Easy App!" description="Simply slide your fingertip on the color wheel to update the lighting. With 16 million colors and 50,000 shades of white, it gives you a chance to create fabulous home lighting for whether illuminating or entertainment. Match diverse occasions via multiple Scenes and Music Mode." image="https://i.imgur.com/KdEfeN8.jpg" left={true} right={false} />
    <SectionFour title="Timer Function" description="With our timer function, you can add your lights to your daily routine. Program your LED lights to power on/off automatically via the Govee Home App. With your very own lighting schedule, you'll always return to a brightly-lit home." image="https://cdn.shopify.com/s/files/1/0556/4203/0246/files/H6172-P-6.jpg?v=1646790742" left={false} right={true} />
    <SectionThree props={["https://i.imgur.com/Fqs64mt.png", "https://i.imgur.com/XhSZJzX.png", "https://i.imgur.com/dAHWvFV_d.webp?maxwidth=1520&fidelity=grand"]} />

  </>;
}

export default HomePage;