import { styled } from "styled-components";
import Card from "../components/Card";

const SectionThree = () => {
  const items = ["https://pbs.twimg.com/media/F-A9gwkXcAABZlu?format=jpg&name=4096x4096", "https://pbs.twimg.com/media/F-A9hPrXsAA_ucm?format=jpg&name=4096x4096", "https://pbs.twimg.com/media/F-A9hjyWYAA9iO_?format=jpg&name=4096x4096"]

  return (<Container>
    <Card items={items} />
  </Container>);
}

export default SectionThree;

const Container = styled.section`
  height: auto;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin-bottom: 1rem;

`