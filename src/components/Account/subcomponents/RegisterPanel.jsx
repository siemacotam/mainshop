import React, { useContext, useState } from "react";
import { useHistory } from "react-router";
import { StoreContext } from "../../../store/StoreProvider";
import { validateEmail } from "../../../utils/validateEmail";
import RegistePanelAdressInfo from "./RegisterPanelAdressInfo";
import RegisterPanelContactInfo from "./RegisterPanelContactInfo";
import RegisterPanelGuestInfo from "./RegisterPanelGuestInfo";
import RegisterPanelHead from "./RegisterPanelHead";
import RegisterPanelLoginInfo from "./RegisterPanelLoginInfo";
import RegisterPanelLoyal from "./RegisterPanelLoyal";

const RegisterPanel = () => {
  const [allValues, setAllValues] = useState({
    userEmail: "",
    userPassword: "",
    userNameAndSurname: "",
    userAdress: "",
    userPostcodeCity: "",
    userPhone: "",
  });
  const [validateMessage, setValidateMessage] = useState(false);

  const {
    users,
    inCheckout,
    setUsers,
    setActiveUser,
    setIsLoggedIn,
    guest,
    setGuestData,
  } = useContext(StoreContext);
  const history = useHistory();

  const changeHandler = (e) => {
    setAllValues((prevValues) => {
      return { ...prevValues, [e.target.name]: e.target.value };
    });
  };
  const {
    userEmail,
    userPassword,
    userNameAndSurname,
    userAdress,
    userPostcodeCity,
    userPhone,
  } = allValues;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userAdress && userPostcodeCity && userPhone && userNameAndSurname) {
      if (!guest && userEmail && userPassword) {
        if (validateEmail(userEmail)) {
          const newUser = {
            nameAndSurname: userNameAndSurname,
            email: userEmail,
            phone: userPhone,
            adress: userAdress,
            postCodeCity: userPostcodeCity,
            password: userPassword,
          };
          // alternatywa przy problemie z fetchem users
          setUsers([...users, newUser]);
          setActiveUser(newUser);
          setIsLoggedIn(true);
          !inCheckout && history.push("/account");
          inCheckout && history.push("/checkout/order");
        } else {
          alert("niepoprawny adres email");
        }
      } else if (guest) {
        const temporaryUser = {
          nameAndSurname: userNameAndSurname,
          phone: userPhone,
          adress: userAdress,
          postCodeCity: userPostcodeCity,
          items: [],
          orders: [],
        };
        setGuestData(temporaryUser);
        history.push({
          pathname: "/checkout/order",
          state: {
            userData: temporaryUser,
          },
        });
      } else {
        alert("uzupelnij wszystkie dane");
      }
    } else {
      setValidateMessage(true);
    }
  };

  return (
    <div className="container">
      {RegisterPanelHead()}
      <form className="row justify-content-around" onSubmit={handleSubmit}>
        {RegisterPanelLoginInfo(
          changeHandler,
          userEmail,
          userPassword,
          validateMessage
        )}
        {RegistePanelAdressInfo(
          changeHandler,
          userAdress,
          userPostcodeCity,
          validateMessage
        )}
        {RegisterPanelContactInfo(
          changeHandler,
          userNameAndSurname,
          userPhone,
          validateMessage
        )}
        {RegisterPanelLoyal()}
        {RegisterPanelGuestInfo()}
        <div className="col-md-12">
          {validateMessage && (
            <small id="emailHelp" className="form-text text-danger text-center">
              Uzupełnij brakujące pola.
            </small>
          )}
        </div>
        <div className="col-md-3 d-flex justify-content-center">
          <button type="submit" className="btn btn-success mt-3 w-100">
            {guest ? "Przejdź dalej" : "Zarejestruj"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterPanel;
