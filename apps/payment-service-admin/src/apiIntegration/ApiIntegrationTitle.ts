import { ApiIntegration as TApiIntegration } from "../api/apiIntegration/ApiIntegration";

export const APIINTEGRATION_TITLE_FIELD = "apiName";

export const ApiIntegrationTitle = (record: TApiIntegration): string => {
  return record.apiName?.toString() || String(record.id);
};
