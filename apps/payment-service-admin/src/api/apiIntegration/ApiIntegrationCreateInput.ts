import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ApiIntegrationCreateInput = {
  apiKey?: string | null;
  apiName?: string | null;
  endpoint?: string | null;
  user?: UserWhereUniqueInput | null;
};
