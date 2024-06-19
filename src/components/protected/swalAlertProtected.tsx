import { ReactElement, ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

type TSwalAlertProtected = {
  children: ReactNode;
};

export default function SwalAlertProtected(): ReactElement {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    Swal.fire({
      title: "You cannnot acces this feature!",
      icon: "warning",
      timer: 2000,
      timerProgressBar: true,
    }).then(() => {
      handleGoBack();
    });
  }, []);

  return (
    <></>
  );
}