import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ApiIntegrationService } from "./apiIntegration.service";
import { ApiIntegrationControllerBase } from "./base/apiIntegration.controller.base";

@swagger.ApiTags("apiIntegrations")
@common.Controller("apiIntegrations")
export class ApiIntegrationController extends ApiIntegrationControllerBase {
  constructor(protected readonly service: ApiIntegrationService) {
    super(service);
  }
}
