import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import pink from "@material-ui/core/colors/pink";

function App() {
  const theme = createMuiTheme({
    palette: {
      primary: pink,
      secondary: {
        main: "#2979ff",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <h1>teste</h1>
      </div>
    </ThemeProvider>
  );
}

export default App;
