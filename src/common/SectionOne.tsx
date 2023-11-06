import React, { useRef } from 'react';
import styled from 'styled-components';
import sectionOne from '../assets/sectionOne.mp4';

const SectionOne = () => {
  const videoRef = useRef(null);

  const handlePlayVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  return (
    <VideoContainer>
      <PlayButton onClick={handlePlayVideo} />
      <Video ref={videoRef} controls>
        <source src={sectionOne} />
      </Video>
    </VideoContainer>
  );
};

export default SectionOne;

const VideoContainer = styled.div`
  position: relative;
  width: 100vw;
  height: auto;
  overflow: hidden;
`;

const PlayButton = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: transparent;
  border: none;
  font-size: 48px;
  color: #fff;
  cursor: pointer;
  z-index: 1;
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
`;
