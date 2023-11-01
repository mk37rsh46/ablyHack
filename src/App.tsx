import Spaces from "@ably/spaces";
import { SpaceProvider, SpacesProvider } from "@ably/spaces/react";
import LiveCursors from "./components/LiveCursors";
import TextBox from './components/TextBox.js';
import Topbar from "./titlebar/Topbar";
import Workspace from "./Workspace/Workspace";

const App = ({ spaces }: { spaces: Spaces }) => (
  <div>
    <Topbar></Topbar>
  <SpacesProvider client={spaces}>
    <SpaceProvider name="live-cursors">
      <LiveCursors />
    </SpaceProvider>
  </SpacesProvider>

  </div>
);

export default App;
