import { PaymentUpdateManyWithoutUtilityBillsInput } from "./PaymentUpdateManyWithoutUtilityBillsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UtilityBillUpdateInput = {
  amount?: number | null;
  billNumber?: string | null;
  dueDate?: Date | null;
  paid?: boolean | null;
  payments?: PaymentUpdateManyWithoutUtilityBillsInput;
  user?: UserWhereUniqueInput | null;
};
