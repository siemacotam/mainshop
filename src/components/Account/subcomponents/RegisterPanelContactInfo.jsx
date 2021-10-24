const RegisterPanelContactInfo = (
  changeHandler,
  userNameAndSurname,
  userPhone,
  validateMessage
) => {
  return (
    <div className="col-md-5 bg-light m-2 p-4">
      <p className="text-center font-weight-bold">Dane do kontaktu</p>
      <div className="form-group">
        <label for="exampleInputEmail1">Imię i nazwisko</label>
        <input
          placeholder="Podaj imię i nazwisko"
          onChange={changeHandler}
          name="userNameAndSurname"
          type="text"
          className="form-control"
          aria-describedby="emailHelp"
        />
        {!userNameAndSurname && validateMessage ? (
          <small id="emailHelp" className="form-text text-danger">
            Nie podano danych osobowych
          </small>
        ) : null}
      </div>
      <div className="form-group">
        <label for="exampleInputPassword1">Numer telefonu komórkowego </label>
        <input
          placeholder="Podaj numer telefonu"
          onChange={changeHandler}
          name="userPhone"
          type="text"
          className="form-control"
        />
        {!userPhone && validateMessage ? (
          <small id="emailHelp" className="form-text text-danger">
            Nie podano numeru telefonu.
          </small>
        ) : null}
      </div>
    </div>
  );
};

export default RegisterPanelContactInfo;
