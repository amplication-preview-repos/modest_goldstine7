import { UtilityBillWhereUniqueInput } from "../utilityBill/UtilityBillWhereUniqueInput";

export type PaymentUpdateInput = {
  amount?: number | null;
  paymentDate?: Date | null;
  paymentMethod?: "Option1" | null;
  utilityBill?: UtilityBillWhereUniqueInput | null;
};
