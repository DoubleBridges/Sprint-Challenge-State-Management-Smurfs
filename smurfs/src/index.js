import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import 'semantic-ui-css/semantic.min.css'
import { SmurfProvider } from './contexts/index';

ReactDOM.render(
  <SmurfProvider>
    <App />
  </SmurfProvider>,
  document.getElementById("root"));
