import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from "./pages/Home";
import Users from "./pages/Users";
import Nav from "./pages/Nav";
import ContextApi from "./context/ContextApi";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <ContextApi>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users/:id" element={<Users />} />
        </Routes>
      </ContextApi>
    </BrowserRouter>
  );
}

export default App;
