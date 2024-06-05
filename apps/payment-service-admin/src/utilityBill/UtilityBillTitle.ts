import { UtilityBill as TUtilityBill } from "../api/utilityBill/UtilityBill";

export const UTILITYBILL_TITLE_FIELD = "billNumber";

export const UtilityBillTitle = (record: TUtilityBill): string => {
  return record.billNumber?.toString() || String(record.id);
};
