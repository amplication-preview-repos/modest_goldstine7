import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { UTILITYBILL_TITLE_FIELD } from "../utilityBill/UtilityBillTitle";

export const PaymentShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
