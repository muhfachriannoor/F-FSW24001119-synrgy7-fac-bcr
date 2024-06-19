import { useFetchCurrentUser } from "@/features/auth/useFetchCurrentUser";
import { ReactElement, ReactNode } from "react";
import SwalAlertProtected from "./swalAlertProtected";
import { checkRole } from "@/lib/utils";

type TAuthProcted = {
  children: ReactNode;
  role: string[]
}

export default function AuthProtected({ children, role }: TAuthProcted): ReactElement {
  const { dataUsers } = useFetchCurrentUser();

  return (
    <>
      {checkRole(role) ? (
        children
      ) : (
        <SwalAlertProtected />
      )}
    </>
  );
}