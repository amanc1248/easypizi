import "./App.css";
import { Routes, Route } from "react-router-dom";
import GetStartedPage from "./containers/GetStartedPage/GetStartedPage";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<GetStartedPage></GetStartedPage>}></Route>
      </Routes>
    </div>
  );
}

export default App;
