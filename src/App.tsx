import React from "react";
import MainPage from "./components/MainPage";
import { ThemeProvider } from "@mui/material";
import theme from "./theme";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import BoardPage from "./components/BoardPage";

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Switch>
          <Route path="/board">
            <BoardPage />
          </Route>
          <Route path="/">
            <div style={{ height: "95vh" }}>
              <MainPage />
            </div>
          </Route>
        </Switch>
      </ThemeProvider>
    </Router>
  );
}

export default App;
