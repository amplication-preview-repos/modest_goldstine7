/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { UtilityBillService } from "../utilityBill.service";
import { UtilityBillCreateInput } from "./UtilityBillCreateInput";
import { UtilityBill } from "./UtilityBill";
import { UtilityBillFindManyArgs } from "./UtilityBillFindManyArgs";
import { UtilityBillWhereUniqueInput } from "./UtilityBillWhereUniqueInput";
import { UtilityBillUpdateInput } from "./UtilityBillUpdateInput";
import { PaymentFindManyArgs } from "../../payment/base/PaymentFindManyArgs";
import { Payment } from "../../payment/base/Payment";
import { PaymentWhereUniqueInput } from "../../payment/base/PaymentWhereUniqueInput";

export class UtilityBillControllerBase {
  constructor(protected readonly service: UtilityBillService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: UtilityBill })
  async createUtilityBill(
    @common.Body() data: UtilityBillCreateInput
  ): Promise<UtilityBill> {
    return await this.service.createUtilityBill({
      data: {
        ...data,

        user: data.user
          ? {
              connect: data.user,
            }
          : undefined,
      },
      select: {
        amount: true,
        billNumber: true,
        createdAt: true,
        dueDate: true,
        id: true,
        paid: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [UtilityBill] })
  @ApiNestedQuery(UtilityBillFindManyArgs)
  async utilityBills(@common.Req() request: Request): Promise<UtilityBill[]> {
    const args = plainToClass(UtilityBillFindManyArgs, request.query);
    return this.service.utilityBills({
      ...args,
      select: {
        amount: true,
        billNumber: true,
        createdAt: true,
        dueDate: true,
        id: true,
        paid: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: UtilityBill })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async utilityBill(
    @common.Param() params: UtilityBillWhereUniqueInput
  ): Promise<UtilityBill | null> {
    const result = await this.service.utilityBill({
      where: params,
      select: {
        amount: true,
        billNumber: true,
        createdAt: true,
        dueDate: true,
        id: true,
        paid: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: UtilityBill })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateUtilityBill(
    @common.Param() params: UtilityBillWhereUniqueInput,
    @common.Body() data: UtilityBillUpdateInput
  ): Promise<UtilityBill | null> {
    try {
      return await this.service.updateUtilityBill({
        where: params,
        data: {
          ...data,

          user: data.user
            ? {
                connect: data.user,
              }
            : undefined,
        },
        select: {
          amount: true,
          billNumber: true,
          createdAt: true,
          dueDate: true,
          id: true,
          paid: true,
          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: UtilityBill })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteUtilityBill(
    @common.Param() params: UtilityBillWhereUniqueInput
  ): Promise<UtilityBill | null> {
    try {
      return await this.service.deleteUtilityBill({
        where: params,
        select: {
          amount: true,
          billNumber: true,
          createdAt: true,
          dueDate: true,
          id: true,
          paid: true,
          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/payments")
  @ApiNestedQuery(PaymentFindManyArgs)
  async findPayments(
    @common.Req() request: Request,
    @common.Param() params: UtilityBillWhereUniqueInput
  ): Promise<Payment[]> {
    const query = plainToClass(PaymentFindManyArgs, request.query);
    const results = await this.service.findPayments(params.id, {
      ...query,
      select: {
        amount: true,
        createdAt: true,
        id: true,
        paymentDate: true,
        paymentMethod: true,
        updatedAt: true,

        utilityBill: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/payments")
  async connectPayments(
    @common.Param() params: UtilityBillWhereUniqueInput,
    @common.Body() body: PaymentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      payments: {
        connect: body,
      },
    };
    await this.service.updateUtilityBill({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/payments")
  async updatePayments(
    @common.Param() params: UtilityBillWhereUniqueInput,
    @common.Body() body: PaymentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      payments: {
        set: body,
      },
    };
    await this.service.updateUtilityBill({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/payments")
  async disconnectPayments(
    @common.Param() params: UtilityBillWhereUniqueInput,
    @common.Body() body: PaymentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      payments: {
        disconnect: body,
      },
    };
    await this.service.updateUtilityBill({
      where: params,
      data,
      select: { id: true },
    });
  }
}
