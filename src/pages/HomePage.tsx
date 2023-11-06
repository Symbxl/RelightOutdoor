import SectionOne from "../common/SectionOne"
import SectionTwo from "../common/SectionTwo";
import SectionThree from "../common/SectionThree";
import SectionFour from "../common/SectionFour";
import Gallery from "../content/Gallery";
import DisplayServices from "../content/DisplayServices";

const HomePage = () => {
  return <>
    <SectionOne />
    <SectionTwo />
    <DisplayServices />
    <SectionThree />
    <SectionFour />
  </>;
}

export default HomePage;