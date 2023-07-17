import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import styled from 'styled-components';

function VirtualTour(props) {
  const { virtualTour } = props;

  const [play, setPlay] = useState(false);
  const videoRef = React.useRef(null);
  let url;
  let sourceURL;

  const generateYoutubeURL = url => {
    const params = new URLSearchParams(url.search);
    const videoId = params.get('v');
    return `https://www.youtube.com/embed/${videoId}`;
  };

  const sourceURLMapper = url => {
    let sourceURL;
    switch (true) {
      case url.host.includes('youtu.be'):
        sourceURL = generateYoutubeURL(url);
        break;
      case url.host.includes('dropbox'):
        sourceURL = url.href;
        break;
      default:
        sourceURL = url.href;
    }
    return sourceURL;
  };
  if (virtualTour) {
    url = new URL(virtualTour);
    sourceURL = sourceURLMapper(url);
  }

  return (
    <Wrapper>
      <Section>
        {sourceURL ? (
          <Box sx={{ maxWidth: 500, flexGrow: 1 }}>
            <iframe
              title="VirtualTour video player"
              width="500"
              height="315"
              src={sourceURL}
              style={{ border: 0 }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </Box>
        ) : (
          <ImageEmpty />
        )}
      </Section>
    </Wrapper>
  );
}

export default VirtualTour;
const Wrapper = styled.div`
  padding-bottom: 20px;
  padding-left: 50px;
`;

const Section = styled.section``;

const ImageEmpty = styled.div``;
