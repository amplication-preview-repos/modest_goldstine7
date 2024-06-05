import { Module } from "@nestjs/common";
import { UtilityBillModuleBase } from "./base/utilityBill.module.base";
import { UtilityBillService } from "./utilityBill.service";
import { UtilityBillController } from "./utilityBill.controller";
import { UtilityBillResolver } from "./utilityBill.resolver";

@Module({
  imports: [UtilityBillModuleBase],
  controllers: [UtilityBillController],
  providers: [UtilityBillService, UtilityBillResolver],
  exports: [UtilityBillService],
})
export class UtilityBillModule {}
