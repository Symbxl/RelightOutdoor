import styled from "styled-components";
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

const SectionTwo = () => {

  const Title = styled.h2`
  font-size: 20px;
  color: #007FFF;
`

  return <Article>
    <Title>SEE THE CHANGE: BEFORE & AFTER</Title>
    <ReactCompareSlider
      itemOne={<ReactCompareSliderImage src="https://www.gemstonelights.com/wp-content/uploads/2021/10/Final-104-copy-2-scaled-1.jpg" />}
      itemTwo={<ReactCompareSliderImage src="https://www.gemstonelights.com/wp-content/uploads/2021/10/Final-92-scaled-1.jpg" />}
    />
  </Article>
}

export default SectionTwo;

const Article = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: auto;
  width: 100vw;
  margin-bottom: 2rem;
`