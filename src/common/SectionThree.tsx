import { styled } from "styled-components";
import Card from "../components/Card";
interface Props {
  props: string[]
}

const SectionThree = ({ props }: Props) => {

  return (<Container>
    <Card items={props} />
  </Container>);
}

export default SectionThree;

const Container = styled.section`
  height: auto;
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin: 2rem 0;

`