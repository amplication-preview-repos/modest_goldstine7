import { PaymentCreateNestedManyWithoutUtilityBillsInput } from "./PaymentCreateNestedManyWithoutUtilityBillsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UtilityBillCreateInput = {
  amount?: number | null;
  billNumber?: string | null;
  dueDate?: Date | null;
  paid?: boolean | null;
  payments?: PaymentCreateNestedManyWithoutUtilityBillsInput;
  user?: UserWhereUniqueInput | null;
};
