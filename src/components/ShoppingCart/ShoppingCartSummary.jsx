import { useContext } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "store/StoreProvider";

const ShoppingCartSummary = () => {
  const { totalPrice, isLoggedIn, setInCheckout, setGuest } =
    useContext(StoreContext);
  return (
    <div className="col-md-12 border border-dark mx-auto p-4 bg-light">
      <div className="d-flex align-items-center">
        <p className="card-title font-weight-bold mb-0 flex-grow-1 p-2">
          Łączna kwota <span>{totalPrice}</span> $
        </p>
        <Link
          to={isLoggedIn ? "/checkout/order" : "/welcome"}
          className="btn btn-success"
          onClick={() => {
            !isLoggedIn && setGuest(true);
            setInCheckout(true);
          }}
        >
          Przejdź do dostawy
        </Link>
      </div>
    </div>
  );
};

export default ShoppingCartSummary;
