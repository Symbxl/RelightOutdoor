import GalleryCard from "../components/GalleryCard";
import styled from "@emotion/styled";

const Animations = () => {
  return (<Container>
    {itemData.map(item => {
      return (
        <GalleryCard items={item} />
      )
    })}
  </Container>);
}

export default Animations;

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`
const itemData = ['https://us.govee.com/cdn/shop/files/Outdoor_Lights_Banner-p_4.jpg?v=1699002142',
  'https://pbs.twimg.com/media/F9YcErsWoAA8Z74?format=jpg&name=4096x4096', 'https://pbs.twimg.com/media/F9U6poxbQAADl63?format=jpg&name=medium', 'https://pbs.twimg.com/media/F79AaKXWwAAZm3m?format=jpg&name=large'];