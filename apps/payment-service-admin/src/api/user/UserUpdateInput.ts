import { ApiIntegrationUpdateManyWithoutUsersInput } from "./ApiIntegrationUpdateManyWithoutUsersInput";
import { NotificationUpdateManyWithoutUsersInput } from "./NotificationUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { UtilityBillUpdateManyWithoutUsersInput } from "./UtilityBillUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  apiIntegrations?: ApiIntegrationUpdateManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  notifications?: NotificationUpdateManyWithoutUsersInput;
  password?: string;
  roles?: InputJsonValue;
  username?: string;
  utilityBills?: UtilityBillUpdateManyWithoutUsersInput;
};
