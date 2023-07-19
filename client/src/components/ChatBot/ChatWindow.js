// import React, { useMemo } from 'react';
// import ReactWebChat, { createDirectLine } from 'botframework-webchat';
// import axios from 'axios';
// import { CHATBOT_SECRET } from '../../config';

// export default async function () {
//   const generateDirectLineToken = async () => {
//     const url =
//       'https://directline.botframework.com/v3/directline/tokens/generate';
//     // const secret = CHATBOT_SECRET;

//     try {
//       const response = await axios.post(
//         url,
//         {},
//         {
//           headers: {
//             Authorization: `Bearer ${secret}`,
//           },
//         }
//       );

//       const { token } = response.data;
//       console.log('Direct Line token:', token);
//       // You can return the token or perform any other necessary actions here
//       return token;
//     } catch (error) {
//       console.error('Error generating Direct Line token:', error.response.data);
//       // Handle the error appropriately
//       return error;
//     }
//   };

//   const token = await generateDirectLineToken();

//   // const directLine = createDirectLine({
//   //   token,
//   // });
//   const directLine = useMemo(() => createDirectLine({ token }), []);

//   return <ReactWebChat directLine={directLine} />;
// }

import React, { useEffect, useMemo, useState } from 'react';
import ReactWebChat, { createDirectLine } from 'botframework-webchat';
import axios from 'axios';
import { CHATBOT_SECRET } from '../../config';

export default function ChatWindow() {
  const [directLine, setDirectLine] = useState(null);

  useEffect(() => {
    const generateDirectLineToken = async () => {
      const url =
        'https://directline.botframework.com/v3/directline/tokens/generate';
      const secret = CHATBOT_SECRET; //(JY) env var not working

      try {
        const response = await axios.post(
          url,
          {},
          {
            headers: {
              Authorization: `Bearer ${secret}`,
            },
          }
        );

        const { token } = response.data;
        console.log('Direct Line token:', token);
        return token;
      } catch (error) {
        console.error(
          'Error generating Direct Line token:',
          error.response.data
        );
        return null;
      }
    };

    const initializeDirectLine = async () => {
      const token = await generateDirectLineToken();
      if (token) {
        const dl = createDirectLine({ token });
        console.log('GOT HERE w/ ', token);
        setDirectLine(dl);
      } else {
        // Handle the error condition appropriately
      }
    };

    initializeDirectLine();
  }, []);

  return <ReactWebChat directLine={directLine} />;
}
