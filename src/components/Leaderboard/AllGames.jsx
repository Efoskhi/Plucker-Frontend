const leaderboard = [
  {
    player: "@NaijaSharpGuy",
    level: "Level 3",
    winnings: "₦50,500",
    streak: "8 Wins 🔥",
    badge: "🥇 Gold Champion",
    color: "bg-green-400",
  },
  {
    player: "@BaddestPlucker",
    level: "Level 3",
    winnings: "₦40,000",
    streak: "5 Wins 🔥",
    badge: "🥈 Silver Contender",
    color: "bg-green-400",
  },
  {
    player: "@QuikBaba",
    level: "Level 3",
    winnings: "₦37,500",
    streak: "3 Wins 🔥",
    badge: "🥉 Bronze Winner",
    color: "bg-green-400",
  },
  {
    player: "@GidiGuru",
    level: "Level 2",
    winnings: "₦31,000",
    streak: "5 Wins",
    badge: "💪 Consistent Climber",
    color: "bg-green-300",
  },
  {
    player: "@BetaWiz",
    level: "Level 1",
    winnings: "₦25,000",
    streak: "2 Wins",
    badge: "🟢 Rookie",
    color: "bg-purple-300",
  },
  {
    player: "@PluckQueen",
    level: "Level 2",
    winnings: "₦20,500",
    streak: "2 Wins",
    badge: "🎯 Steady Player",
    color: "bg-green-300",
  },
  {
    player: "@TacticMaster",
    level: "Level 3",
    winnings: "₦18,000",
    streak: "1 Win",
    badge: "🆕 New Entry",
    color: "bg-green-400",
  },
  {
    player: "@WeWakaDey",
    level: "Level 1",
    winnings: "₦5,500",
    streak: "0 Wins",
    badge: "🛠 Needs Boost",
    color: "bg-purple-300",
  },
  {
    player: "@SharpShooter",
    level: "Level 1",
    winnings: "₦20,000",
    streak: "1 Win",
    badge: "🚀 Rising Talent",
    color: "bg-green-200",
  },
];

const AllGames = () => {
  return (
    <div className="overflow-x-auto text-white bg-[#0F0F0F] text-sm border border-cyan-400  shadow-2xl  rounded-md shadow-[#00DAE4]">
      <table className="w-full min-w-[700px] border border-white/20 rounded-lg overflow-hidden">
        <thead className="bg-white/10 text-left uppercase text-xs">
          <tr>
            <th className="px-4 py-2">#</th>
            <th className="px-4 py-2">👤 Player</th>
            <th className="px-4 py-2">🏆 Level</th>
            <th className="px-4 py-2">💰 Total Winnings</th>
            <th className="px-4 py-2">🔥 Streak</th>
            <th className="px-4 py-2">📛 Status Badge</th>
          </tr>
        </thead>
        <tbody>
          {leaderboard.map((user, i) => (
            <tr
              key={i}
              className="border-t border-white/10 hover:bg-white/5 transition"
            >
              <td className="px-4 py-3 font-semibold">{i + 1}</td>
              <td className="px-4 py-3">{user.player}</td>
              <td className="px-4 py-3">
                <span
                  className={`text-xs px-2 py-1 rounded-full text-black font-semibold ${user.color}`}
                >
                  {user.level}
                </span>
              </td>
              <td className="px-4 py-3">{user.winnings}</td>
              <td className="px-4 py-3">{user.streak}</td>
              <td className="px-4 py-3">{user.badge}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllGames;
