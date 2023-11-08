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
const itemData = ['https://media.discordapp.net/attachments/1154098807483682867/1171537689917538364/IMG_0491.gif?ex=655d0a7f&is=654a957f&hm=42f440e5a5e43688366635a72ca03d19ff89dbdc426645215f49bc37616b2b24&=&width=852&height=480',
  'https://pbs.twimg.com/media/F9YcErsWoAA8Z74?format=jpg&name=4096x4096', 'https://pbs.twimg.com/media/F9U6poxbQAADl63?format=jpg&name=medium', 'https://pbs.twimg.com/media/F79AaKXWwAAZm3m?format=jpg&name=large'];