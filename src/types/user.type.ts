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
    bankAccount: BankAccount;
}

export interface BankAccount {
  id: string;
  userID: string;
  accountNumber: string;
  accountName: string;
  bankID: string;
  createdAt: string;
  updatedAt: string;
  bank: {
    bankName: string;
  };
}
