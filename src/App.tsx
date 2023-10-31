import Spaces from "@ably/spaces";
import { SpaceProvider, SpacesProvider } from "@ably/spaces/react";
import LiveCursors from "./components/LiveCursors";
import TextBox from './components/TextBox.js';

const App = ({ spaces }: { spaces: Spaces }) => (
  <div>
  <SpacesProvider client={spaces}>
    <SpaceProvider name="live-cursors">
      <LiveCursors />
    </SpaceProvider>
  </SpacesProvider>

  </div>
);

export default App;
