import { Routes, Route } from "react-router-dom";
import Main from "./components/main";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Trending from "./pages/trending";
import Explore from "./pages/explore";
import Nopage from "./pages/404";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Main />}>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="trending" element={<Trending />} />
            <Route path="explore" element={<Explore />} />
          </Route>
          <Route path="*" element={<Nopage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
