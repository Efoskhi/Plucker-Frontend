export interface Withdrawal {
  id: string;
  userID: string;
  amount: number;
  status: string; // You can narrow this to 'pending' | 'success' | 'failed' if applicable
  createdAt: string; 
  updatedAt: string; 
}
