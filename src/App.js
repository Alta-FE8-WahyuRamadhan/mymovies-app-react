import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DetailMovie from "./pages/DetailMovie";
import Favourite from "./pages/Favourite";
import Homepage from "./pages/HomePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/details/:idd" element={<DetailMovie />} />
        <Route path="/favourite" element={<Favourite />} />
      </Routes>
    </Router>
  );
}

export default App;
