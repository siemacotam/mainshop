import { useContext } from "react";
import { Accordion, Card } from "react-bootstrap";
import { StoreContext } from "../../../store/StoreProvider";

const OrderPayment = () => {
  const { paymentMethod, setPaymentMethod } = useContext(StoreContext);
  return (
    <div className="col-md-5 bg-light m-3 p-4">
      <h4 className="mb-3">2. Metoda płatności</h4>
      <Accordion defaultActiveKey="0">
        <Card>
          <Accordion.Toggle
            as={Card.Header}
            eventKey="0"
            className="d-flex align-items-center"
            onClick={() => setPaymentMethod(1)}
          >
            <input
              type="checkbox"
              checked={paymentMethod === 1}
              className="m-2"
            />
            <p className="m-2">
              BLIK <small className="text-muted"> (bezpłatnie)</small>
            </p>
          </Accordion.Toggle>

          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <p>Sfinalizuj tranzakcje używając kodu BLIK.</p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle
            as={Card.Header}
            eventKey="1"
            className="d-flex align-items-center"
            onClick={() => setPaymentMethod(2)}
          >
            <input
              type="checkbox"
              checked={paymentMethod === 2}
              className="m-2"
            />
            <p className="m-2">
              Karta płatnicza online{" "}
              <small className="text-muted"> (bezpłatnie)</small>
            </p>
          </Accordion.Toggle>

          <Accordion.Collapse eventKey="1">
            <Card.Body>
              <p>
                Zostaniesz przeniesiony na stronę swojego banku gdzie
                sfinalizujesz tranzakcję.
              </p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle
            as={Card.Header}
            eventKey="2"
            className="d-flex align-items-center"
            onClick={() => setPaymentMethod(3)}
          >
            <input
              type="checkbox"
              checked={paymentMethod === 3}
              className="m-2"
            />
            <p className="m-2">
              Przelew gotówkowy{" "}
              <small className="text-muted"> (bezpłatnie)</small>
            </p>
          </Accordion.Toggle>

          <Accordion.Collapse eventKey="2">
            <Card.Body>
              <p>Zamówienie wyślemy, kiedy otrzymamy od Ciebie wpłatę.</p>
              <p>Pamiętaj, żeby w tytule przelewu wpisać numer zamówienia</p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle
            as={Card.Header}
            eventKey="3"
            className="d-flex align-items-center"
            onClick={() => setPaymentMethod(4)}
          >
            <input
              type="checkbox"
              checked={paymentMethod === 4}
              className="m-2"
            />
            <p className="m-2">
              Przy odbiorze <small className="text-muted"> (bezpłatnie)</small>
            </p>
          </Accordion.Toggle>

          <Accordion.Collapse eventKey="3">
            <Card.Body>
              <p>Płatność realizowania przy odbiorze towaru.</p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
};

export default OrderPayment;
