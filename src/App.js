import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Home from "./pages/Home";
import Users from "./pages/Users";
import Nav from "./pages/Nav";

function App() {
  return (
<BrowserRouter>
<Nav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users/:id" element={<Users />} />
      </Routes>
    </BrowserRouter>  );
}

export default App;
