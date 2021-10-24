import React, { useContext, useEffect, useState } from "react";
import { StoreContext } from "../../../store/StoreProvider";
import UserInfoInputs from "./UserInfoInputs";

const UserInfo = () => {
  const [editMode, setEditMode] = useState(false);
  const { activeUser, guestData } = useContext(StoreContext);
  const [allValues, setAllValues] = useState({
    userNameAndSurname: "",
    userAdress: "",
    userPostCodeCity: "",
    userPhone: "",
  });

  useEffect(() => {
    if (userData) {
      const { nameAndSurname, adress, postCodeCity, phone } = userData;
      setAllValues({
        userNameAndSurname: nameAndSurname,
        userAdress: adress,
        userPostCodeCity: postCodeCity,
        userPhone: phone,
      });
    }
    if (guestInfoData) {
      const { nameAndSurname, adress, postCodeCity, phone } = guestInfoData;
      setAllValues({
        userNameAndSurname: nameAndSurname,
        userAdress: adress,
        userPostCodeCity: postCodeCity,
        userPhone: phone,
      });
    }
  }, []);

  const userData = activeUser;
  const guestInfoData = guestData;

  const changeHandler = (e) => {
    setAllValues((prevValues) => {
      return { ...prevValues, [e.target.name]: e.target.value };
    });
  };
  const { userNameAndSurname, userAdress, userPostCodeCity, userPhone } =
    allValues;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userNameAndSurname && userAdress && userPostCodeCity && userPhone) {
      setEditMode(!editMode);
      if (userData) {
        let editedUser = activeUser;
        editedUser.nameAndSurname = userNameAndSurname;
        editedUser.adress = userAdress;
        editedUser.postCodeCity = userPostCodeCity;
        editedUser.phone = userPhone;
      }
      if (guestInfoData) {
        let editedUser = guestInfoData;
        editedUser.nameAndSurname = userNameAndSurname;
        editedUser.adress = userAdress;
        editedUser.postCodeCity = userPostCodeCity;
        editedUser.phone = userPhone;
      }
    } else {
      alert("Uzupełnij wszystkie wymagane dane");
    }
  };

  return (
    <form className="d-flex flex-column" onSubmit={handleSubmit}>
      {UserInfoInputs(
        changeHandler,
        editMode,
        userNameAndSurname,
        userAdress,
        userPostCodeCity,
        userPhone
      )}
      {editMode === false && (
        <button
          type="button"
          onClick={() => setEditMode(!editMode)}
          className="btn btn-primary mt-4"
        >
          Edytuj dane
        </button>
      )}
      {editMode === true && (
        <button type="submit" className="btn btn-primary mt-4">
          Zakończ edycję
        </button>
      )}
    </form>
  );
};

export default UserInfo;
