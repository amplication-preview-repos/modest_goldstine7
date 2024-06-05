import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UtilityBillWhereUniqueInput } from "../utilityBill/UtilityBillWhereUniqueInput";

export type PaymentWhereInput = {
  amount?: FloatNullableFilter;
  id?: StringFilter;
  paymentDate?: DateTimeNullableFilter;
  paymentMethod?: "Option1";
  utilityBill?: UtilityBillWhereUniqueInput;
};
