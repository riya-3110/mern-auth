import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { SignIn } from "./Pages/SignIn";
import { SignUp } from "./Pages/SignUp";
import { Profile } from "./Pages/Profile";
import { Header } from "./Components/Header";

function App() {
  return (
    <Router>
      {/* Header */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
        <Route
          path="*"
          element={
            <h1 className="text-6xl text-red-500 font-bold text-center mt-40">
              Not Found
            </h1>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
