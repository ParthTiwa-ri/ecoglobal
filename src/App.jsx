import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AllQues from "./Components/Personal/AllQues";
import Dashboard from "./pages/Dashboard";
import HeroPage from "./pages/HeroPage";
import Login from "./pages/Login";
import Reward from "./pages/Reward";
import Signup from "./pages/Signup";
import Upload from "./Components/Image Recognizer/Upload";
import CheckFoot from "./Components/Image Recognizer/CheckFoot";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HeroPage />} />
        <Route path="/reward" element={<Reward />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/test" element={<AllQues />} />
        <Route path="/image" element={<Upload/>}/>
        <Route  path="/recognize" element={<CheckFoot/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
