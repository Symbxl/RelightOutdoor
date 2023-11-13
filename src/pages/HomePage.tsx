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
    <SectionFour />
    <SectionTwo />
    <DisplayServices />
    <SectionThree props={["https://i.imgur.com/Fqs64mt.png", "https://i.imgur.com/XhSZJzX.png"]} />
    <SectionThree props={["https://pbs.twimg.com/media/F-A9hPrXsAA_ucm?format=jpg&name=4096x4096", "https://pbs.twimg.com/media/F-A9hjyWYAA9iO_?format=jpg&name=4096x4096"]} />
    <SectionFive imageUrl="https://i.imgur.com/3Unjw3j.jpg" />

  </>;
}

export default HomePage;