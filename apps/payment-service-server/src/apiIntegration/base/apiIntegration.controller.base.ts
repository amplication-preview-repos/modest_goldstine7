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
import { ApiIntegrationService } from "../apiIntegration.service";
import { ApiIntegrationCreateInput } from "./ApiIntegrationCreateInput";
import { ApiIntegration } from "./ApiIntegration";
import { ApiIntegrationFindManyArgs } from "./ApiIntegrationFindManyArgs";
import { ApiIntegrationWhereUniqueInput } from "./ApiIntegrationWhereUniqueInput";
import { ApiIntegrationUpdateInput } from "./ApiIntegrationUpdateInput";

export class ApiIntegrationControllerBase {
  constructor(protected readonly service: ApiIntegrationService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: ApiIntegration })
  async createApiIntegration(
    @common.Body() data: ApiIntegrationCreateInput
  ): Promise<ApiIntegration> {
    return await this.service.createApiIntegration({
      data: {
        ...data,

        user: data.user
          ? {
              connect: data.user,
            }
          : undefined,
      },
      select: {
        apiKey: true,
        apiName: true,
        createdAt: true,
        endpoint: true,
        id: true,
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
  @swagger.ApiOkResponse({ type: [ApiIntegration] })
  @ApiNestedQuery(ApiIntegrationFindManyArgs)
  async apiIntegrations(
    @common.Req() request: Request
  ): Promise<ApiIntegration[]> {
    const args = plainToClass(ApiIntegrationFindManyArgs, request.query);
    return this.service.apiIntegrations({
      ...args,
      select: {
        apiKey: true,
        apiName: true,
        createdAt: true,
        endpoint: true,
        id: true,
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
  @swagger.ApiOkResponse({ type: ApiIntegration })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async apiIntegration(
    @common.Param() params: ApiIntegrationWhereUniqueInput
  ): Promise<ApiIntegration | null> {
    const result = await this.service.apiIntegration({
      where: params,
      select: {
        apiKey: true,
        apiName: true,
        createdAt: true,
        endpoint: true,
        id: true,
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
  @swagger.ApiOkResponse({ type: ApiIntegration })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateApiIntegration(
    @common.Param() params: ApiIntegrationWhereUniqueInput,
    @common.Body() data: ApiIntegrationUpdateInput
  ): Promise<ApiIntegration | null> {
    try {
      return await this.service.updateApiIntegration({
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
          apiKey: true,
          apiName: true,
          createdAt: true,
          endpoint: true,
          id: true,
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
  @swagger.ApiOkResponse({ type: ApiIntegration })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteApiIntegration(
    @common.Param() params: ApiIntegrationWhereUniqueInput
  ): Promise<ApiIntegration | null> {
    try {
      return await this.service.deleteApiIntegration({
        where: params,
        select: {
          apiKey: true,
          apiName: true,
          createdAt: true,
          endpoint: true,
          id: true,
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
}
