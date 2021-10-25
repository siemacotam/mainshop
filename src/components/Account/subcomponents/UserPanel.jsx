import { useContext, useState } from "react";
import { StoreContext } from "../../../store/StoreProvider";
import Mail from "../../Contact/subcomponents/Mail";
import UserInfo from "./UserInfo";
import UserPanelButtons from "./UserPanelButtons";

const UserPanel = () => {
  const { activeUser, setActiveUser, setIsLoggedIn, orders } =
    useContext(StoreContext);
  const [showUserData, setShowUserData] = useState(true);
  const [showUserOrders, setShowUserOrders] = useState(false);
  const [showContact, setShowContact] = useState(false);

  const userOrders = orders.filter((i) => {
    if (i.user.email === activeUser.email) {
      return i;
    }
  });

  const handleShowUserOrders = () => {
    setShowUserOrders(!showUserOrders);
    if (showUserData) {
      setShowUserData(false);
    }
    if (showContact) {
      setShowContact(false);
    }
  };

  const handleShowData = () => {
    setShowUserData(!showUserData);
    if (showContact) {
      setShowContact(false);
    }
    if (showUserOrders) {
      setShowUserOrders(false);
    }
  };

  const handleShowContact = () => {
    setShowContact(!showContact);
    if (showUserOrders) {
      setShowUserOrders(false);
    }
    if (showUserData) {
      setShowUserData(false);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setActiveUser("");
  };

  const userOrdersElements = () => {
    return userOrders.map((i, index) => {
      return (
        <tr>
          <th scope="row">{index + 1}</th>
          <td>
            {i.items.map((i) => {
              return <p>{i.title}</p>;
            })}
          </td>
          <td>{i.dateOfOrder}</td>
          <td>{i.price}$</td>
          <td className="text-success">Zrealizowano</td>
        </tr>
      );
    });
  };

  const orderEl = (
    <div className="table-responsive-sm">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Zamówione produkty</th>
            <th scope="col">Data</th>
            <th scope="col">Kwota</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>{userOrdersElements()}</tbody>
      </table>
    </div>
  );

  return (
    <div style={{ minHeight: "50vh" }}>
      <h3>Witaj, {activeUser.nameAndSurname}</h3>
      <div className="mt-4 row">
        {UserPanelButtons(handleShowData, "Dane użytkownika")}
        {UserPanelButtons(
          handleShowUserOrders,
          `Twoje zamówienia (${userOrders.length})`
        )}
        {UserPanelButtons(handleShowContact, "Napisz do nas")}
        {UserPanelButtons(handleLogout, "Wyloguj")}
      </div>
      {showUserData && <UserInfo />}
      {showUserOrders && orderEl}
      {showContact && <Mail inAccount={true} />}
    </div>
  );
};

export default UserPanel;
