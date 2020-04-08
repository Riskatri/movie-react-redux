import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import store from "./store/store";
import Movies from "./component/movie";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Movies />
      </div>
    </Provider>
  );
}

export default App;
