import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { StoreContext } from "../../../store/StoreProvider";
import UserInfo from "../../Account/subcomponents/UserInfo";
import OrderConsents from "./OrderConsents";
import OrderDelivery from "./OrderDelivery";
import OrderPayment from "./OrderPayment";
import SummaryPanel from "./SummaryPanel";

const Order = () => {
  const [rulesCheckbox, setRulesCheckbox] = useState(false);
  const [placeCheckbox, setPlaceCheckbox] = useState(false);
  const [opinionCheckbox, setOpinionCheckbox] = useState(false);
  const [missingInput, setMissingInput] = useState(false);
  const {
    activeUser,
    cartStatus,
    paymentMethod,
    guestData,
    setCheckoutStep,
    totalPrice,
  } = useContext(StoreContext);
  const history = useHistory();

  useEffect(() => {
    window.scrollTo(0, 0);
    setCheckoutStep(2);
  }, []);

  const handleRulesCheckboxChange = (e) => {
    const data = e.target.checked;
    setRulesCheckbox(data);
  };
  const handlePlaceCheckboxChange = (e) => {
    const data = e.target.checked;
    setPlaceCheckbox(data);
  };
  const handleOpinionCheckboxChange = (e) => {
    const data = e.target.checked;
    setOpinionCheckbox(data);
  };

  const userData = activeUser;
  const guestInfoData = guestData;

  useEffect(() => {
    if (Boolean(!guestInfoData) && Boolean(!activeUser)) {
      history.push("/error");
    }
  }, []);

  const handleCompleteOrder = () => {
    if (rulesCheckbox && placeCheckbox) {
      let newOrder = {
        id: Math.random() * 1000000000,
        dateOfOrder: new Date().toLocaleString(),
        items: cartStatus,
        user: userData || guestInfoData,
        price: totalPrice,
        delivery: "Kurier DPD",
        payment: paymentMethod,
        acceptOpinionRequest: opinionCheckbox,
      };
      history.push({
        pathname: "/checkout/summary",
        state: {
          order: newOrder,
        },
      });
    } else {
      setMissingInput(true);
      alert("uzupelnij wszystkie dane oraz checkboxy");
    }
  };

  return (
    <>
      <div>
        <h3 className="bg-light p-3 rounded">Dostawa i płatność</h3>
        <div className="row justify-content-center ">
          {OrderDelivery()}
          {OrderPayment()}
          <div className="col-md-5 bg-light m-3 p-4">
            <h4 className="mb-3">3. Dane odbiorcy</h4>
            <UserInfo />
          </div>
          {OrderConsents(
            missingInput,
            rulesCheckbox,
            handleRulesCheckboxChange,
            handlePlaceCheckboxChange,
            placeCheckbox,
            handleOpinionCheckboxChange
          )}
        </div>
      </div>
      <SummaryPanel buttonFn={handleCompleteOrder} />
    </>
  );
};

export default Order;
