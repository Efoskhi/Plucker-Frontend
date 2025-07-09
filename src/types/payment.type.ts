export interface Payment {
  id: string;
  userID: string;
  amount: number;
  gatewayReference: string;
  gatewayID: string | null;
  status: 'started' | 'success' | 'failed';
  paymentUrl: string | null;
  currency: string;
  createdAt: string;
  paymentMethod: string;
}
