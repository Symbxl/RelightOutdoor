import SectionOne from "../common/SectionOne"
import SectionTwo from "../common/SectionTwo";
import SectionThree from "../common/SectionThree";
import SectionFour from "../common/SectionFour";
import Gallery from "../content/Gallery";
import DisplayServices from "../content/DisplayServices";
import SectionFive from "../common/SectionFive";

const HomePage = () => {
  return <>
    <SectionOne />
    <SectionTwo />
    <DisplayServices />
    <SectionThree />
    <SectionFive imageUrl="https://i.imgur.com/3Unjw3j.jpg" />
    <SectionFour />
    <SectionFive imageUrl="https://i.imgur.com/0h7lF3W.jpg" />

  </>;
}

export default HomePage;