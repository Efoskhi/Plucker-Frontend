import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Pages/Auth/Login";
import Signup from "./Pages/Auth/Signup";
import VerifyEmail from "./Pages/Auth/VerifyEmail";
import Welcome from "./Pages/Auth/Welcome";
import ExploreGames from "./Pages/ExploreGames";
import Navbar from "./components/Layout/Navbar";
import GameDetails from "./Pages/GameDetails";
import LeaderBoard from "./Pages/LeaderBoard";
import TournamentHub from "./Pages/Tournament/TournamentHub";
import SuccessfulSubmission from "./Pages/Tournament/SuccessfulSubmission";
import FailedSubmission from "./Pages/Tournament/FailedSubmission";
import Pricing from "./Pages/Pricing/Monetization";
import Profile from "./Pages/Profile";
import Submissions from "./Pages/Submissions";
import Footer from "./components/Layout/Footer";
import Terms from "./Pages/Legal/Terms";
import Privacy from "./Pages/Legal/Privacy";
import GameRules from "./Pages/Legal/GameRules";
import Support from "./Pages/Legal/Support";
import TournamentSubmission from "./Pages/Tournament/TournamentSubmission";
import MyWallet from "./Pages/WalletFunds/MyWallet";

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

          <Route path="/TournamentHub" element={<TournamentHub />} />

          <Route path="/Pricing" element={<Pricing />} />

          <Route path="/MyWallet" element={<MyWallet />} />

          <Route path="/Profile" element={<Profile />} />

          <Route
            path="/TournamentSubmission"
            element={<TournamentSubmission />}
          />

          <Route
            path="/SuccessfulSubmission"
            element={<SuccessfulSubmission />}
          />

          <Route path="/Submissions" element={<Submissions />} />
          <Route path="/FailedSubmission" element={<FailedSubmission />} />

          <Route path="/Terms" element={<Terms />} />

          <Route path="/Privacy" element={<Privacy />} />

          <Route path="/GameRules" element={<GameRules />} />

          <Route path="/Support" element={<Support />} />
        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;
