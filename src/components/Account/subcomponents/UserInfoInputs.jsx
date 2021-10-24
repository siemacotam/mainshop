const UserInfoInputs = (
  changeHandler,
  editMode,
  userNameAndSurname,
  userAdress,
  userPostCodeCity,
  userPhone
) => {
  const formInput = (value, name) => {
    return (
      <input
        onChange={changeHandler}
        type="text"
        disabled={!editMode}
        value={value}
        name={name}
        className="form-control"
      />
    );
  };
  return (
    <>
      {" "}
      <small className="text-muted py-1">Imię i nazwisko</small>
      {formInput(userNameAndSurname, "userNameAndSurname")}
      <small className="text-muted py-1">Adres</small>
      {formInput(userAdress, "userAdress")}
      <small className="text-muted py-1">Miejscowość</small>
      {formInput(userPostCodeCity, "userPostCodeCity")}
      <small className="text-muted py-1">Numer telefonu</small>
      {formInput(userPhone, "userPhone")}{" "}
    </>
  );
};

export default UserInfoInputs;
