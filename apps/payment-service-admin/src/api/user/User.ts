import { ApiIntegration } from "../apiIntegration/ApiIntegration";
import { Notification } from "../notification/Notification";
import { JsonValue } from "type-fest";
import { UtilityBill } from "../utilityBill/UtilityBill";

export type User = {
  apiIntegrations?: Array<ApiIntegration>;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  notifications?: Array<Notification>;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
  utilityBills?: Array<UtilityBill>;
};
