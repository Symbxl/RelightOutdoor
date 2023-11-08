import styled from 'styled-components';

const SectionOne = () => {

  return (
    <VideoContainer>
      <Video controls>
        <source type="video/youtube" src="https://www.youtube.com/watch?v=AtptIYsujRg" />
      </Video>
    </VideoContainer>
  );
};

export default SectionOne;

const VideoContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 65vh;
  overflow: hidden;
`;


const Video = styled.video`
  width: 100%;
  height: 100%;
`;
