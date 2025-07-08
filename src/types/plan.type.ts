interface PlanFeatures {
  id: string;
  gamesPerDay: number;
  getVerifiedBadge: boolean;
  showAds: boolean;
  earlyTournamentInvite: boolean;
  priorityLeaderboardPlacement: boolean;
  planID: string;
}

export interface SubscriptionPlan {
  id: string;
  planName: string;
  amountPerMonth: number;
  createdAt: string; // ISO string — you can use `Date` if parsing
  updatedAt: string;
  features: PlanFeatures;
}
