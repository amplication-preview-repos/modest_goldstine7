import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { UtilityBillService } from "./utilityBill.service";
import { UtilityBillControllerBase } from "./base/utilityBill.controller.base";

@swagger.ApiTags("utilityBills")
@common.Controller("utilityBills")
export class UtilityBillController extends UtilityBillControllerBase {
  constructor(protected readonly service: UtilityBillService) {
    super(service);
  }
}
