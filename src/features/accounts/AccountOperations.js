import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deposit, payLoan, requestLoan, withdraw } from "./AccountSlice";

export default function AccountOperations() {
  const [depositAmt, setDepositAmt] = useState("");
  const [currency, setCurrency] = useState("USD");
  const [withdrawAmt, setWithdrawAmt] = useState("");
  const [loanAmt, setLoanAmt] = useState("");
  const [loanPurpose, setLoanPurpose] = useState("");

  const dispatch = useDispatch();
  const {
    loan: currentLoan,
    balance,
    isLoading,
    loanPurpose: currentPurpose,
  } = useSelector((store) => store.account);

  function handleDeposit() {
    if (!depositAmt) return;
    dispatch(deposit(depositAmt, currency));
    setDepositAmt("");
    setCurrency("USD");
  }

  function handleWithdraw() {
    if (!withdrawAmt) return;

    if (withdrawAmt > balance) {
      alert(`You only have $${balance} in your account.`);
    } else {
      dispatch(withdraw(withdrawAmt));
      setWithdrawAmt("");
    }
  }

  function handleLoanReq() {
    if (!loanAmt && !loanPurpose) return;
    dispatch(requestLoan(loanAmt, loanPurpose));
    setLoanAmt("");
    setLoanPurpose("");
  }

  function handlePayLoan() {
    dispatch(payLoan());
  }

  return (
    <div>
      <h2>Your Account Operations</h2>
      <div className="inputs">
        <div>
          <label htmlFor="deposit">Deposit</label>
          <input
            type="number"
            id="deposit"
            value={depositAmt}
            onChange={(e) => setDepositAmt((da) => +e.target.value)}
          />
          <select
            value={currency}
            onChange={(e) => setCurrency((c) => e.target.value)}
          >
            <option value="USD">US Dollar</option>
            <option value="EUR">Euro</option>
            <option value="GBP">British Pound</option>
          </select>
          <button onClick={handleDeposit} disabled={isLoading}>
            {isLoading ? "Converting..." : `Deposit ${depositAmt}`}
          </button>
        </div>
        <div>
          <label htmlFor="withdraw">Withdraw</label>
          <input
            type="number"
            id="withdraw"
            value={withdrawAmt}
            onChange={(e) => setWithdrawAmt((wa) => +e.target.value)}
          />
          <button onClick={handleWithdraw}>Withdraw {withdrawAmt}</button>
        </div>
        <div>
          <label htmlFor="loan">Request loan</label>
          <input
            type="number"
            id="loan"
            placeholder="Loan amount"
            value={loanAmt}
            onChange={(e) => setLoanAmt((la) => +e.target.value)}
          />
          <input
            type="text"
            placeholder="Loan purpose"
            value={loanPurpose}
            onChange={(e) => setLoanPurpose((lp) => e.target.value)}
          />
          <button onClick={handleLoanReq}>Request Loan</button>
        </div>
        {currentLoan > 0 && (
          <div>
            <span>
              Pay back ${currentLoan} ({currentPurpose})
            </span>
            <button onClick={handlePayLoan}>Pay Loan</button>
          </div>
        )}
      </div>
    </div>
  );
}
