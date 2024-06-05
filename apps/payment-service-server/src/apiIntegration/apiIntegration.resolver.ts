import * as graphql from "@nestjs/graphql";
import { ApiIntegrationResolverBase } from "./base/apiIntegration.resolver.base";
import { ApiIntegration } from "./base/ApiIntegration";
import { ApiIntegrationService } from "./apiIntegration.service";

@graphql.Resolver(() => ApiIntegration)
export class ApiIntegrationResolver extends ApiIntegrationResolverBase {
  constructor(protected readonly service: ApiIntegrationService) {
    super(service);
  }
}
