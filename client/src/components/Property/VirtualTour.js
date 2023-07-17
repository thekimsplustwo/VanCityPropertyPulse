import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

function VirtualTour(props) {
  const { virtualTour } = props;

  let url;
  let sourceURL;

  const generateYoutubeURL = url => {
    const params = new URLSearchParams(url.search);
    const pathParams = url.pathParam;
    const videoId = params.get('v') || url.pathname;
    return `https://www.youtube.com/embed/${videoId}` || url.href;
  };

  const generateDropBoxURL = url => {
    const newURL = url;
    newURL.hostname = 'dl.dropboxusercontent.com';
    newURL.search = '';
    return `https://docs.google.com/viewer?url=${encodeURIComponent(
      newURL.toString()
    )}&embedded=true`;
  };
  const sourceURLMapper = url => {
    let sourceURL;
    switch (true) {
      case url.host.includes('youtu.be'):
      case url.host.includes('youtube'):
        sourceURL = { url: generateYoutubeURL(url), label: 'youtube' };
        break;
      case url.host.includes('dropbox'):
        sourceURL = { url: generateDropBoxURL(url), label: 'dropbox' };
        break;
      case url.host.includes('matterport'):
        sourceURL = { url: url.href, label: 'matterport' };
        break;
      default:
        sourceURL = { url: url.href, label: 'unknown' };
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
