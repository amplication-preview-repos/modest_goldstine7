/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { ApiIntegration } from "./ApiIntegration";
import { ApiIntegrationCountArgs } from "./ApiIntegrationCountArgs";
import { ApiIntegrationFindManyArgs } from "./ApiIntegrationFindManyArgs";
import { ApiIntegrationFindUniqueArgs } from "./ApiIntegrationFindUniqueArgs";
import { CreateApiIntegrationArgs } from "./CreateApiIntegrationArgs";
import { UpdateApiIntegrationArgs } from "./UpdateApiIntegrationArgs";
import { DeleteApiIntegrationArgs } from "./DeleteApiIntegrationArgs";
import { User } from "../../user/base/User";
import { ApiIntegrationService } from "../apiIntegration.service";
@graphql.Resolver(() => ApiIntegration)
export class ApiIntegrationResolverBase {
  constructor(protected readonly service: ApiIntegrationService) {}

  async _apiIntegrationsMeta(
    @graphql.Args() args: ApiIntegrationCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [ApiIntegration])
  async apiIntegrations(
    @graphql.Args() args: ApiIntegrationFindManyArgs
  ): Promise<ApiIntegration[]> {
    return this.service.apiIntegrations(args);
  }

  @graphql.Query(() => ApiIntegration, { nullable: true })
  async apiIntegration(
    @graphql.Args() args: ApiIntegrationFindUniqueArgs
  ): Promise<ApiIntegration | null> {
    const result = await this.service.apiIntegration(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => ApiIntegration)
  async createApiIntegration(
    @graphql.Args() args: CreateApiIntegrationArgs
  ): Promise<ApiIntegration> {
    return await this.service.createApiIntegration({
      ...args,
      data: {
        ...args.data,

        user: args.data.user
          ? {
              connect: args.data.user,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => ApiIntegration)
  async updateApiIntegration(
    @graphql.Args() args: UpdateApiIntegrationArgs
  ): Promise<ApiIntegration | null> {
    try {
      return await this.service.updateApiIntegration({
        ...args,
        data: {
          ...args.data,

          user: args.data.user
            ? {
                connect: args.data.user,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => ApiIntegration)
  async deleteApiIntegration(
    @graphql.Args() args: DeleteApiIntegrationArgs
  ): Promise<ApiIntegration | null> {
    try {
      return await this.service.deleteApiIntegration(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => User, {
    nullable: true,
    name: "user",
  })
  async getUser(
    @graphql.Parent() parent: ApiIntegration
  ): Promise<User | null> {
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}