import { Module } from "@nestjs/common";
import { ApiIntegrationModuleBase } from "./base/apiIntegration.module.base";
import { ApiIntegrationService } from "./apiIntegration.service";
import { ApiIntegrationController } from "./apiIntegration.controller";
import { ApiIntegrationResolver } from "./apiIntegration.resolver";

@Module({
  imports: [ApiIntegrationModuleBase],
  controllers: [ApiIntegrationController],
  providers: [ApiIntegrationService, ApiIntegrationResolver],
  exports: [ApiIntegrationService],
})
export class ApiIntegrationModule {}
