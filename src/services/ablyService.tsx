// src/services/ablyService.js

import { Realtime } from "ably";
import Spaces from "@ably/spaces";
import { SpacesProvider, SpaceProvider } from "@ably/spaces/react";
const ably = new Realtime.Promise({ key: 'Vitqqg.Evnceg:Z-60FDCVJNiy-qDoItb0_GwsWAByDvLFlLrHl1dTN7Q', clientId: (Math.random() * 9000).toString() });
const generateTokenForUser = (userId: any) => {
    return ably.auth.createTokenRequest({ clientId: userId });
  };
const spaces = new Spaces(ably);

  
  


  export { ably, generateTokenForUser, spaces};
export default ably;
