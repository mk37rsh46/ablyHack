import ReactDOM from "react-dom/client";
import { AblyProvider } from "ably/react";
import Spaces from "@ably/spaces";
import { nanoid } from "nanoid";
import { Realtime } from "ably";

import App from "./App";

import "./styles/container.css";
import "./styles/tailwind.css";

const client = new Realtime.Promise({
  clientId: nanoid(),
  key: "Vitqqg.Evnceg:Z-60FDCVJNiy-qDoItb0_GwsWAByDvLFlLrHl1dTN7Q",
});

const spaces = new Spaces(client);

ReactDOM.createRoot(document.getElementById("root")!).render(
  // Mismatch between react-router-dom and latest react
  // See https://github.com/remix-run/remix/issues/7514
  // @ts-ignore
  <AblyProvider client={client}>
    <App spaces={spaces} />
  </AblyProvider>,
);
