const OrderConsents = (
  missingInput,
  rulesCheckbox,
  handleRulesCheckboxChange,
  handlePlaceCheckboxChange,
  placeCheckbox,
  handleOpinionCheckboxChange
) => {
  return (
    <div className="col-md-5 bg-light m-3 p-4">
      <h4 className="mb-4">4. Zgody formalne</h4>
      <div>
        <label className="d-flex">
          <input
            type="checkbox"
            className="m-2"
            onClick={handleRulesCheckboxChange}
          />
          <p> Akceptuje regulamin sklepu.* </p>
        </label>
        {missingInput && !rulesCheckbox ? (
          <p>
            <small className="text-danger">Pole wymagane</small>
          </p>
        ) : null}
      </div>
      <div>
        <label className="d-flex">
          <input
            type="checkbox"
            className="m-2"
            onClick={handlePlaceCheckboxChange}
          />
          <p>
            {" "}
            Oświadczam, że posiadam stałe miejsce zamieszkania/ siedziby/ pobytu
            na terytorium RP.*
          </p>
        </label>
        {missingInput && !placeCheckbox ? (
          <p>
            <small className="text-danger">Pole wymagane</small>
          </p>
        ) : null}
      </div>
      <div>
        <label className="d-flex">
          <input
            type="checkbox"
            className="m-2"
            onClick={handleOpinionCheckboxChange}
          />
          <p>Chcę podzielic się opinią o satysfakcji z zakupów.</p>
        </label>
      </div>
      <small className="text-muted">*- zgody wymagane</small>
    </div>
  );
};

export default OrderConsents;
