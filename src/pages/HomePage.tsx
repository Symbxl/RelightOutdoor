import SectionOne from "../common/SectionOne"
import SectionTwo from "../common/SectionTwo";
import SectionThree from "../common/SectionThree";
import SectionFour from "../common/SectionFour";
import DisplayServices from "../content/DisplayServices";
import SectionFive from "../common/SectionFive";
import Table from "../components/Table";
import Header from "../components/Header";
import SectionSix from "../common/SectionSix";
const HomePage = () => {
  return <>
    <Header />
    <SectionTwo />
    <SectionSix image="https://media.discordapp.net/attachments/1154098807483682867/1176282039553634464/IMG_0641.jpg?ex=656e4d04&is=655bd804&hm=2fab7553d9eb8f8b8ea86b6c7b187eb345319b424419635099a541e789cf6f73&=&width=820&height=616" title="ReLight Ourdoor Lighting" description="Now servicing in Grande Prairie, Canada!" />
    <SectionOne />
    <SectionSix image="https://media.discordapp.net/attachments/1154098807483682867/1176282138929287188/IMG_0642.jpg?ex=656e4d1c&is=655bd81c&hm=4dc2872eee5dba9c1d08ad44ea9a47452b06bd880f2190513bddafce83140ca4&=&width=1370&height=1028" title="Celebrate Every Holiday with ReLight!" description="ReLight Outdoor Lighting provides a permanent solution to hanging those lights up every year. The lights we install are fully customizable via mobile app. Make your home shine for any potential occasion!" />
    <DisplayServices />
    <Table />
    <SectionFour title="Fast & Easy App!" description="Simply slide your fingertip on the color wheel to update the lighting. With 16 million colors and 50,000 shades of white, it gives you a chance to create fabulous home lighting for whether illuminating or entertainment. Match diverse occasions via multiple Scenes and Music Mode." image="https://i.imgur.com/lUCYEuW.jpg" left={true} right={false} />
    <SectionFour title="Timer Function" description="With our timer function, you can add your lights to your daily routine. Program your LED lights to power on/off automatically via the Govee Home App. With your very own lighting schedule, you'll always return to a brightly-lit home." image="https://cdn.shopify.com/s/files/1/0556/4203/0246/files/H6172-P-6.jpg?v=1646790742" left={false} right={true} />
    <SectionThree props={["https://i.imgur.com/Fqs64mt.png", "https://i.imgur.com/XhSZJzX.png", "https://i.imgur.com/dAHWvFV_d.webp?maxwidth=1520&fidelity=grand"]} />

  </>;
}

export default HomePage;