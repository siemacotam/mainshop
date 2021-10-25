import { useContext } from "react";
import { StoreContext } from "../../../store/StoreProvider";

const RegisterPanelHead = () => {
  const { guest } = useContext(StoreContext);
  return (
    <h3 className="text-center m-3">
      {guest
        ? "Wpisz swoje dane potrzebne do wysyłki i przejdź dalej do zamówienia "
        : "Zarejestruj się i zacznij korzystać z przywilejów już dzisiaj !"}
    </h3>
  );
};

export default RegisterPanelHead;
