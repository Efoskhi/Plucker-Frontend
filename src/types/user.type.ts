export interface User {
    fullname: string;
    username: string;
    phoneNumber: string;
    email: string;
    role: string;
    level: number;
    profilePhoto: string;
    accountBalance: number;
    planID: string;
    hasSetPassword: boolean;
    totalGamesPlayed: number;
    totalGamesWon: number;
    totalWinningAmount: number;
}