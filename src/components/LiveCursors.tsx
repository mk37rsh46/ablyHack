import { useMemo, useRef, useEffect } from "react";
import { useMembers, useSpace } from "@ably/spaces/react";
import { mockNames } from "../utils/mockNames";
import { colours } from "../utils/helpers";
import { MemberCursors, YourCursor } from "./Cursors";

import type { Member } from "../utils/types";
import TextBox from "./TextBox";
import Workspace from "../Workspace/Workspace";
import { useParams } from "react-router-dom";
import { Realtime } from "ably";

/** 💡 Select a mock name to assign randomly to a new user that enters the space💡 */
const mockName = () => mockNames[Math.floor(Math.random() * mockNames.length)];

const LiveCursors = () => {
  let {name} = useParams()
  name = name!.charAt(0).toUpperCase() + name!.slice(1);
  const ably = new Realtime.Promise({ key: '3dOKCA.FRENYQ:K1rXvegOdg2Pt4wJF33w29I-gJKvH35QSvS0DbAjLoY', clientId:name });
  const generateTokenForUser = (userId: any) => {
      return ably.auth.createTokenRequest({ clientId: userId });
    };
  /** 💡 Select a color to assign randomly to a new user that enters the space💡 */
  const userColors = useMemo(
    () => colours[Math.floor(Math.random() * colours.length)],
    [],
  );

  /** 💡 Get a handle on a space instance 💡 */
  const { space } = useSpace();

  useEffect(() => {
    space?.enter({ name, userColors });
  }, [space]);

  const { self } = useMembers();

  const liveCursors = useRef(null);

  return (
    <div
      id="live-cursors"
      ref={liveCursors}
      className="live-cursors-container example-container"
    >
            <Workspace/>

      <YourCursor self={self as Member | null} parentRef={liveCursors} />
      <MemberCursors />
      {/* <TextBox></TextBox> */}
    </div>
  );
};

export default LiveCursors;
