import { UtilityBillWhereInput } from "./UtilityBillWhereInput";
import { UtilityBillOrderByInput } from "./UtilityBillOrderByInput";

export type UtilityBillFindManyArgs = {
  where?: UtilityBillWhereInput;
  orderBy?: Array<UtilityBillOrderByInput>;
  skip?: number;
  take?: number;
};
