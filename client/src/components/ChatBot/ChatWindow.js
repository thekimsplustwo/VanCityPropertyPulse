import React, { useMemo } from 'react';
import ReactWebChat, { createDirectLine } from 'botframework-webchat';
import { CHATBOT_SECRET } from '../../config';

export default function () {
  const directLine = useMemo(
    () =>
      createDirectLine({
        secret: CHATBOT_SECRET,
      }),
    []
  );

  return <ReactWebChat directLine={directLine} />;
}
