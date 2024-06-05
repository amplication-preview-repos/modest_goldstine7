import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { UTILITYBILL_TITLE_FIELD } from "../utilityBill/UtilityBillTitle";

export const PaymentList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Payments"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
