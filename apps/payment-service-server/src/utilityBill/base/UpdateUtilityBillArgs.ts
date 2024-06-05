/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { UtilityBillWhereUniqueInput } from "./UtilityBillWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { UtilityBillUpdateInput } from "./UtilityBillUpdateInput";

@ArgsType()
class UpdateUtilityBillArgs {
  @ApiProperty({
    required: true,
    type: () => UtilityBillWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UtilityBillWhereUniqueInput)
  @Field(() => UtilityBillWhereUniqueInput, { nullable: false })
  where!: UtilityBillWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => UtilityBillUpdateInput,
  })
  @ValidateNested()
  @Type(() => UtilityBillUpdateInput)
  @Field(() => UtilityBillUpdateInput, { nullable: false })
  data!: UtilityBillUpdateInput;
}

export { UpdateUtilityBillArgs as UpdateUtilityBillArgs };
