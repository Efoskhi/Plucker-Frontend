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
import SuccessfulSubmission from "./Pages/Tournament/SuccessfulSubmission";
import FailedSubmission from "./Pages/Tournament/FailedSubmission";
import Pricing from "./Pages/Pricing/Pricing";
import Profile from "./Pages/Profile";

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

          <Route path="/Pricing" element={<Pricing />} />

          <Route path="/Profile" element={<Profile />} />

          <Route path="/TournamentHub" element={<TournamentHub />} />

          <Route
            path="/SuccessfulSubmission"
            element={<SuccessfulSubmission />}
          />
          <Route path="/FailedSubmission" element={<FailedSubmission />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
