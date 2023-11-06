import GalleryCard from "../components/GalleryCard";
import styled from "@emotion/styled";

const Gallery = () => {
  return (<Container>
    {itemData.map(item => {
      return (
        <GalleryCard items={item} />
      )
    })}
  </Container>);
}

export default Gallery;

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`


const itemData = ['https://pbs.twimg.com/media/F9YcEWOWYAEZ-Ah?format=jpg&name=4096x4096',
  'https://pbs.twimg.com/media/F9YcErsWoAA8Z74?format=jpg&name=4096x4096', 'https://pbs.twimg.com/media/F9U6poxbQAADl63?format=jpg&name=medium', 'https://pbs.twimg.com/media/F79AaKXWwAAZm3m?format=jpg&name=large'];