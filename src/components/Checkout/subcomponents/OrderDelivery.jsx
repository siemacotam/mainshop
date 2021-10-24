import { Accordion, Card } from "react-bootstrap";

const OrderDelivery = () => {
  return (
    <div className="col-md-5 bg-light m-3 p-4">
      <h4 className="mb-3">1.Sposób dostawy</h4>
      <div className="d-flex p-2">
        <Accordion className="flex-grow-1">
          <Card>
            <Accordion.Toggle
              className="d-flex align-items-center"
              as={Card.Header}
            >
              <input type="checkbox" checked className=" m-2" />
              <p className="m-2">Kurier DPD</p>
            </Accordion.Toggle>

            <Accordion.Collapse eventKey="0" className="show">
              <Card.Body>
                <small className="text-muted">( Bezpłatnie )</small>
                <p>Dostawa do 4 dni roboczych</p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    </div>
  );
};

export default OrderDelivery;
