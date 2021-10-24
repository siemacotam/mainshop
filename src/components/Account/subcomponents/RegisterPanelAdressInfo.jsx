const RegistePanelAdressInfo = (
  changeHandler,
  userAdress,
  userPostcodeCity,
  validateMessage
) => {
  return (
    <div className="col-md-5 bg-light m-2 p-4">
      <p className="text-center font-weight-bold">Dane adresowe</p>
      <div className="form-group">
        <label>Ulica i numer</label>
        <input
          placeholder="Podaj nazwę ulicy i numer domu/mieszkania"
          onChange={changeHandler}
          name="userAdress"
          type="text"
          className="form-control"
          aria-describedby="emailHelp"
        />
        {!userAdress && validateMessage ? (
          <small id="emailHelp" className="form-text text-danger">
            Nie podano adresu do dostawy
          </small>
        ) : null}
      </div>
      <div className="form-group">
        <label for="exampleInputPassword1">Kod pocztowy i miejscowość</label>
        <input
          placeholder="Podaj kod pocztowy oraz miejscowość"
          onChange={changeHandler}
          name="userPostcodeCity"
          type="text"
          className="form-control"
        />
        {!userPostcodeCity && validateMessage ? (
          <small id="emailHelp" className="form-text text-danger">
            Nie podano nazwy miejscowości ani kodu pocztowego.
          </small>
        ) : null}
      </div>
    </div>
  );
};

export default RegistePanelAdressInfo;
