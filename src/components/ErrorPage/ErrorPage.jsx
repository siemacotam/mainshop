import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ height: "50vh" }}
    >
      <p className="">
        Błąd podczas przesyłania danych. Nie powinieneś się znaleźć na tej
        stronie.
        <Link to="/"> Wróć na stronę główną</Link>
      </p>
    </div>
  );
};

export default ErrorPage;
