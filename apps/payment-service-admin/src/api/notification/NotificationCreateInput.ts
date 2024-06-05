import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type NotificationCreateInput = {
  message?: string | null;
  notificationType?: "Option1" | null;
  sent?: boolean | null;
  user?: UserWhereUniqueInput | null;
};
