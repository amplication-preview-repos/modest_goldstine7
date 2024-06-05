import { User } from "../user/User";

export type Notification = {
  createdAt: Date;
  id: string;
  message: string | null;
  notificationType?: "Option1" | null;
  sent: boolean | null;
  updatedAt: Date;
  user?: User | null;
};
