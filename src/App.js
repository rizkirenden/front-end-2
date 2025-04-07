import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./landingpage/index";
import LoginPage from "./login/index";
import RegisterPage from "./register/index";
import MovieAdmin from "./admin/MovieAdmin";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/admin/movies" element={<MovieAdmin />} />
      </Routes>
    </Router>
  );
}

export default App;
