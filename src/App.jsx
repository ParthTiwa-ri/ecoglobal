import { Route, Routes } from "react-router-dom";
import "./App.css";
import HeroPage from "./pages/HeroPage";
import Reward from "./pages/Reward";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AllQues from "./Components/Personal/AllQues";

function App() {
  return (
    <Routes>
      <Route index element={<HeroPage />} />
      <Route path="reward" element={<Reward />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="test" element={<AllQues />} />
    </Routes>
  );
}

export default App;
