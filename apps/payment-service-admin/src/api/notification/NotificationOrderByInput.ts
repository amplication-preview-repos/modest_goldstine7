import { SortOrder } from "../../util/SortOrder";

export type NotificationOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  message?: SortOrder;
  notificationType?: SortOrder;
  sent?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
