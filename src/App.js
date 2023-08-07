import "./styles.css";
import { Route, Routes } from "react-router-dom";
import { Navigator } from "./components/Navigator";
import Home from "./pages/Home";
import Data from "./pages/Data";

export default function App() {
  return (
    <div className="App">
      <h1>SWR cache</h1>
      <Routes>
        {/* <Route element={<Navigator />}>
          
        </Route> */}
        <Route path="/" element={<Home />} />
        <Route path="/data" element={<Data />} />
      </Routes>
    </div>
  );
}
