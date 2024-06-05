import { UtilityBillWhereUniqueInput } from "../utilityBill/UtilityBillWhereUniqueInput";

export type PaymentCreateInput = {
  amount?: number | null;
  paymentDate?: Date | null;
  paymentMethod?: "Option1" | null;
  utilityBill?: UtilityBillWhereUniqueInput | null;
};
