// src/services/ablyService.js

import { Realtime } from "ably";
import Spaces from "@ably/spaces";
import { SpacesProvider, SpaceProvider } from "@ably/spaces/react";
const ably1 = new Realtime.Promise({ key: '3dOKCA.FRENYQ:K1rXvegOdg2Pt4wJF33w29I-gJKvH35QSvS0DbAjLoY', clientId: (Math.random() * 9000).toString() });
const generateTokenForUser = (userId: any) => {
    return ably1.auth.createTokenRequest({ clientId: userId });
  };
const spaces = new Spaces(ably1);

  
   


  export { ably1, generateTokenForUser, spaces};
export default ably1;
