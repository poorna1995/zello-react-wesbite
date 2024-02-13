import "./App.css";
import {
  BrowserRouter, //as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={"*"} key={"/"} element={<Home />} />

          {/* <Route path="*" element={<NoMatchPath />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
