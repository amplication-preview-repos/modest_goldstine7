import { ApiIntegrationCreateNestedManyWithoutUsersInput } from "./ApiIntegrationCreateNestedManyWithoutUsersInput";
import { NotificationCreateNestedManyWithoutUsersInput } from "./NotificationCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { UtilityBillCreateNestedManyWithoutUsersInput } from "./UtilityBillCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  apiIntegrations?: ApiIntegrationCreateNestedManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  notifications?: NotificationCreateNestedManyWithoutUsersInput;
  password: string;
  roles: InputJsonValue;
  username: string;
  utilityBills?: UtilityBillCreateNestedManyWithoutUsersInput;
};
