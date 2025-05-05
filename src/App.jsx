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
import Submissions from "./Pages/Submission/Submissions";
import Footer from "./components/Layout/Footer";
import Terms from "./Pages/Legal/Terms";
import Privacy from "./Pages/Legal/Privacy";
import GameRules from "./Pages/Legal/GameRules";
import Support from "./Pages/Legal/Support";
import TournamentSubmission from "./Pages/Tournament/TournamentSubmission";
import MyWallet from "./Pages/WalletFunds/MyWallet";
import Layout from "./components/Layout/Layout";
import EmptySubmissions from "./Pages/Submission/EmptySubmissions";
import UpgrdeAccount from "./Pages/WalletFunds/Upgrade";

import UpgradeSuccessful from "./Pages/WalletFunds/UpgradeSuccessful";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />

          <Route path="/Signup" element={<Signup />} />

          <Route path="/VerifyEmail" element={<VerifyEmail />} />
          <Route path="/Welcome" element={<Welcome />} />

          <Route element={<Layout />}>
            <Route path="/Explore" element={<ExploreGames />} />

            <Route path="/GameDetails" element={<GameDetails />} />

            <Route path="/LeaderBoard" element={<LeaderBoard />} />

            <Route path="/TournamentHub" element={<TournamentHub />} />

            <Route path="/Pricing" element={<Pricing />} />

            <Route path="/MyWallet" element={<MyWallet />} />

            <Route path="/UpgradeAccount" element={<UpgrdeAccount />} />

            <Route path="/UpgradeSuccessful" element={<UpgradeSuccessful />} />
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

            <Route path="/EmptySubmissions" element={<EmptySubmissions />} />
            <Route path="/FailedSubmission" element={<FailedSubmission />} />

            <Route path="/Terms" element={<Terms />} />

            <Route path="/Privacy" element={<Privacy />} />

            <Route path="/GameRules" element={<GameRules />} />

            <Route path="/Support" element={<Support />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
