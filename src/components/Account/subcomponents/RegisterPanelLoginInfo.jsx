import { useContext } from "react";
import { StoreContext } from "../../../store/StoreProvider";

const RegisterPanelLoginInfo = (
  changeHandler,
  userEmail,
  userPassword,
  validateMessage
) => {
  const { guest } = useContext(StoreContext);
  return (
    !guest && (
      <div className="col-md-5 bg-light m-2 p-4">
        <p className="text-center font-weight-bold">Dane do logowania</p>
        <div className="form-group">
          <label for="exampleInputEmail1">Email</label>
          <input
            placeholder="Wpisz swój adres email"
            onChange={changeHandler}
            name="userEmail"
            type="email"
            className="form-control"
            aria-describedby="emailHelp"
          />
          {!userEmail && validateMessage ? (
            <small id="emailHelp" className="form-text text-danger">
              Nie podano adresu Email
            </small>
          ) : null}
        </div>
        <div className="form-group">
          <label>Hasło</label>
          <input
            placeholder="Podaj swoje hasło"
            onChange={changeHandler}
            name="userPassword"
            type="password"
            className="form-control"
          />
          {!userPassword && validateMessage ? (
            <small id="emailHelp" className="form-text text-danger">
              Nie wpisano hasła!
            </small>
          ) : null}
        </div>
      </div>
    )
  );
};

export default RegisterPanelLoginInfo;
