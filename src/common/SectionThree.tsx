import { styled } from "styled-components";
import Card from "../components/Card";
import { Link } from "react-router-dom";
interface Props {
  props: string[]
}

const SectionThree = ({ props }: Props) => {

  return (<Container>
    <Card items={props} />
    <Link to="gallery">view more photos</Link>
  </Container>);
}

export default SectionThree;

const Container = styled.section`
  height: auto;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin: 2rem 0;

`