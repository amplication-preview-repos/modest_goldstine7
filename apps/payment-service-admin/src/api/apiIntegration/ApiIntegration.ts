import { User } from "../user/User";

export type ApiIntegration = {
  apiKey: string | null;
  apiName: string | null;
  createdAt: Date;
  endpoint: string | null;
  id: string;
  updatedAt: Date;
  user?: User | null;
};
