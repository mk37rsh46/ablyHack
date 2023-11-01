import Spaces from "@ably/spaces";
import { SpaceProvider, SpacesProvider } from "@ably/spaces/react";
import LiveCursors from "./components/LiveCursors";
import TextBox from './components/TextBox.js';
import Topbar from "./titlebar/Topbar";
import Workspace from "./Workspace/Workspace";
import Login from "./components/Login";
import { BrowserRouter as Router, Route, Routes, Link, BrowserRouter } from 'react-router-dom';
import Do from "./do";

const App = ({ spaces }: { spaces: Spaces }) => { return (

  <BrowserRouter>
    <Topbar></Topbar>

    <Routes>
          <Route path="" element={<Login></Login>}></Route>
             <Route path="/home" element={<Do></Do>}></Route>
           <Route path="twosum/:name" element={
  <SpacesProvider client={spaces}>
  <SpaceProvider name="live-cursors">
    <LiveCursors />
  </SpaceProvider>
</SpacesProvider> 
          } ></Route>
    </Routes>
     {/* <Topbar></Topbar>
     <Route path="/" exact component={Home} />

 */}
  </BrowserRouter>
)};

export default App;
