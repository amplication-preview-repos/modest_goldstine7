import { SortOrder } from "../../util/SortOrder";

export type UtilityBillOrderByInput = {
  amount?: SortOrder;
  billNumber?: SortOrder;
  createdAt?: SortOrder;
  dueDate?: SortOrder;
  id?: SortOrder;
  paid?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
