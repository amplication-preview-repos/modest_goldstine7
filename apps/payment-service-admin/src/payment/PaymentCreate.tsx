import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  DateTimeInput,
  SelectInput,
  ReferenceInput,
} from "react-admin";

import { UtilityBillTitle } from "../utilityBill/UtilityBillTitle";

export const PaymentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="amount" source="amount" />
        <DateTimeInput label="paymentDate" source="paymentDate" />
        <SelectInput
          source="paymentMethod"
          label="PaymentMethod"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceInput
          source="utilityBill.id"
          reference="UtilityBill"
          label="UtilityBill"
        >
          <SelectInput optionText={UtilityBillTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
