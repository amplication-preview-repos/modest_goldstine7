import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  DateTimeInput,
  SelectInput,
  ReferenceInput,
} from "react-admin";

import { UtilityBillTitle } from "../utilityBill/UtilityBillTitle";

export const PaymentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
