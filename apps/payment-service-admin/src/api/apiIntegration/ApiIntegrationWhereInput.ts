import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ApiIntegrationWhereInput = {
  apiKey?: StringNullableFilter;
  apiName?: StringNullableFilter;
  endpoint?: StringNullableFilter;
  id?: StringFilter;
  user?: UserWhereUniqueInput;
};
