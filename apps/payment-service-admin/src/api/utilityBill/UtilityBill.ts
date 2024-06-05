import { Payment } from "../payment/Payment";
import { User } from "../user/User";

export type UtilityBill = {
  amount: number | null;
  billNumber: string | null;
  createdAt: Date;
  dueDate: Date | null;
  id: string;
  paid: boolean | null;
  payments?: Array<Payment>;
  updatedAt: Date;
  user?: User | null;
};
