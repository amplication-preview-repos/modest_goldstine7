import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { UTILITYBILL_TITLE_FIELD } from "./UtilityBillTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const UtilityBillShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="amount" source="amount" />
        <TextField label="billNumber" source="billNumber" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="dueDate" source="dueDate" />
        <TextField label="ID" source="id" />
        <BooleanField label="paid" source="paid" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="User" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="Payment"
          target="utilityBillId"
          label="Payments"
        >
          <Datagrid rowClick="show">
            <TextField label="amount" source="amount" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="paymentDate" source="paymentDate" />
            <TextField label="PaymentMethod" source="paymentMethod" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField
              label="UtilityBill"
              source="utilitybill.id"
              reference="UtilityBill"
            >
              <TextField source={UTILITYBILL_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
