import { useContext, useEffect, useState } from "react";
import { StoreContext } from "../../store/StoreProvider";
import { Col, Row, Toast } from "react-bootstrap";
import { Link } from "react-router-dom";

const ToastContainer = () => {
  const { newToast, cartStatus } = useContext(StoreContext);
  const [showA, setShowA] = useState(true);
  const toggleShowA = () => setShowA(!showA);
  const [itemTitle, setItemTitle] = useState("");

  useEffect(() => {
    showToast();
    setItemTitle(newToast.name);
  }, [newToast]);
  useEffect(() => {
    const id = setTimeout(() => {
      setShowA(false);
    }, 3000);
    return () => clearTimeout(id);
  }, [newToast]);

  let today = new Date();
  let minutes = today.getMinutes();
  const getMinutes = () => {
    if (minutes < 10) {
      return "0" + minutes;
    } else {
      return minutes;
    }
  };
  let time = today.getHours() + ":" + getMinutes();

  const showToast = () => {
    if (newToast) {
      setShowA(true);
    } else {
      toggleShowA(false);
    }
  };

  const toastLink = () => {
    const { destination } = newToast;
    if (destination === "cart") {
      return <Link to="/shopping-cart">Przejdź do sklepu</Link>;
    } else if (destination === "fav") {
      return <Link to="/favourites">Przejdź do listy ulubionych</Link>;
    }
  };

  const toastMsg = () => {
    const { option, destination } = newToast;

    if (option === "add" && destination === "cart") {
      return `Produkt ${itemTitle}
        został dodany do koszyka. Aktualnie w koszyku :
        ${cartStatus.length} rzeczy.`;
    } else if (option === "remove" && destination === "cart") {
      return `Produkt ${itemTitle}
          został usunięty z koszyka. Aktualnie w koszyku :
          ${cartStatus.length} rzeczy.`;
    } else if (option === "add" && destination === "fav") {
      return `Produkt ${itemTitle}
            został dodany do listy ulubionych.`;
    } else if (option === "remove" && destination === "fav") {
      return `Produkt ${itemTitle}
              został usunięty z listy ulubionych.`;
    }
  };

  return (
    <div
      id="toastContainer"
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        width: "300px",
      }}
    >
      <Row>
        <Col md={12} className="mb-2">
          <Toast show={showA} onClose={toggleShowA}>
            <Toast.Header className="d-flex">
              <i className="fa fa-check-circle flex-grow-1"></i>
              <small>{time}</small>
            </Toast.Header>
            <Toast.Body>
              {toastMsg()} {toastLink()}
            </Toast.Body>
          </Toast>
        </Col>
      </Row>
    </div>
  );
};

export default ToastContainer;
