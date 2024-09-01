import CreateCustomer from "./features/customers/CreateCustomer";
import Customer from "./features/customers/Customer";
import AccountOperations from "./features/accounts/AccountOperations";
import BalanceDisplay from "./features/accounts/BalanceDisplay";
import { useSelector } from "react-redux";
import { useState } from "react";
import Popup from "./Popup";

function App() {
  const [errors, setError] = useState("");
  const customerName = useSelector((store) => store.customer.fullName);

  function closePopup() {
    setError((e) => "");
  }

  return (
    <>
      {errors && <Popup handleClose={closePopup}>{errors}</Popup>}
      <div>
        <h1>🏦 The React-Redux Bank ⚛️</h1>
        {!customerName ? (
          <CreateCustomer />
        ) : (
          <>
            <Customer />
            <AccountOperations errors={errors} setError={setError} />
            <BalanceDisplay />
          </>
        )}
      </div>
    </>
  );
}

export default App;
