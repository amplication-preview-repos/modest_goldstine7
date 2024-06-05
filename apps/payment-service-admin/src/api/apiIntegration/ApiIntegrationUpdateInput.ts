import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ApiIntegrationUpdateInput = {
  apiKey?: string | null;
  apiName?: string | null;
  endpoint?: string | null;
  user?: UserWhereUniqueInput | null;
};
