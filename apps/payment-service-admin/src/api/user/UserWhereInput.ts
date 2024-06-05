import { ApiIntegrationListRelationFilter } from "../apiIntegration/ApiIntegrationListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { NotificationListRelationFilter } from "../notification/NotificationListRelationFilter";
import { UtilityBillListRelationFilter } from "../utilityBill/UtilityBillListRelationFilter";

export type UserWhereInput = {
  apiIntegrations?: ApiIntegrationListRelationFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  notifications?: NotificationListRelationFilter;
  username?: StringFilter;
  utilityBills?: UtilityBillListRelationFilter;
};
