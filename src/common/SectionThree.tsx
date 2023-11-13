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
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin-bottom: 1rem;

`