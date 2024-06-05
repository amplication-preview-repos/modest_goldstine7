import * as graphql from "@nestjs/graphql";
import { UtilityBillResolverBase } from "./base/utilityBill.resolver.base";
import { UtilityBill } from "./base/UtilityBill";
import { UtilityBillService } from "./utilityBill.service";

@graphql.Resolver(() => UtilityBill)
export class UtilityBillResolver extends UtilityBillResolverBase {
  constructor(protected readonly service: UtilityBillService) {
    super(service);
  }
}
