import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UtilityBillServiceBase } from "./base/utilityBill.service.base";

@Injectable()
export class UtilityBillService extends UtilityBillServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
