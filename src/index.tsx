import * as React from "react";
import { render } from "react-dom";
import { initializeIcons } from "@uifabric/icons";
import { FluentCustomizations } from "@uifabric/fluent-theme";
import {
  Pivot,
  PivotItem,
  Customizer,
  Toggle,
  Stack
} from "office-ui-fabric-react";
import { ZeroDriveUI } from "./Examples";

initializeIcons();

function App() {
  const pivotStyles = {
    root: {
      marginBottom: 20
    }
  };

  return (
    <Stack horizontal>
      <Stack.Item grow>
        <ZeroDriveUI />
      </Stack.Item>
    </Stack>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
