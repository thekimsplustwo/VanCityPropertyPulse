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
    const pathParams = url.pathParam;
    const videoId = params.get('v') || url.pathname;
    return `https://www.youtube.com/embed/${videoId}` || url.href;
  };

  const sourceURLMapper = url => {
    let sourceURL;
    switch (true) {
      case url.host.includes('youtu.be'):
        sourceURL = { url: generateYoutubeURL(url), label: 'youtube' };
        break;
      case url.host.includes('dropbox'):
        sourceURL = { url: url.href, label: 'dropbox' };
        break;
      case url.host.includes('matterport'):
        sourceURL = { url: url.href, label: 'matterport' };
        break;
      default:
        sourceURL = { url: url.href, label: 'unknonw' };
    }
    return sourceURL;
  };
  if (virtualTour) {
    url = new URL(virtualTour);
    console.log('url ', virtualTour);
    console.log('url ', url);
    sourceURL = sourceURLMapper(url);
  }
  console.log('sourceURL ', sourceURL);
  return (
    <Wrapper>
      <Section>
        {sourceURL ? (
          <Box sx={{ maxWidth: 500, flexGrow: 1 }}>
            <iframe
              title="VirtualTour video player"
              width="500"
              height="315"
              src={sourceURL.url}
              label={sourceURL.label}
              style={{
                border: '1px solid #ececec',
                transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
                boxShadow: '0px 2px 4px -1px rgba(0, 1, 1, 0.3)',
              }}
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
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
