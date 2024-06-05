import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { PaymentListRelationFilter } from "../payment/PaymentListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UtilityBillWhereInput = {
  amount?: FloatNullableFilter;
  billNumber?: StringNullableFilter;
  dueDate?: DateTimeNullableFilter;
  id?: StringFilter;
  paid?: BooleanNullableFilter;
  payments?: PaymentListRelationFilter;
  user?: UserWhereUniqueInput;
};
