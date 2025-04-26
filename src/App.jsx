import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import VerifyEmail from "./Pages/VerifyEmail";
import Welcome from "./Pages/Welcome";
import ExploreGames from "./Pages/ExploreGames";
import Navbar from "./components/Navbar";
import GameDetails from "./Pages/GameDetails";
import LeaderBoard from "./Pages/LeaderBoard";
import Tournaments from "./Pages/Tournaments";
import TournamentHub from "./Pages/TournamentHub";

function App() {
  return (
    <>
      <Router>
        <div className="z-0">
          <Navbar />
        </div>

        <Routes>
          <Route path="/" element={<ExploreGames />} />

          <Route path="/GameDetails" element={<GameDetails />} />

          <Route path="/LeaderBoard" element={<LeaderBoard />} />

          <Route path="/Tournaments" element={<Tournaments />} />

          <Route path="/TournamentHub" element={<TournamentHub />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
