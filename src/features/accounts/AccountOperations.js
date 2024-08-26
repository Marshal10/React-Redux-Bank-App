import { useState } from "react";

export default function AccountOperations() {
  const [depositAmt, setDepositAmt] = useState("");
  const [currency, setCurrency] = useState("USD");
  const [withdrawAmt, setWithdrawAmt] = useState("");
  const [loanAmt, setLoanAmt] = useState("");
  const [loanPurpose, setLoanPurpose] = useState("");

  return (
    <div>
      <h2>Create new customer</h2>
      <div className="inputs">
        <div>
          <label htmlFor="deposit">Deposit</label>
          <input
            type="number"
            id="deposit"
            value={depositAmt}
            onChange={(e) => setDepositAmt((da) => e.target.value)}
          />
          <select
            value={currency}
            onChange={(e) => setCurrency((c) => e.target.value)}
          >
            <option value="USD">US Dollar</option>
            <option value="EUR">Euro</option>
            <option value="GBP">British Pound</option>
          </select>
          <button>Deposit {depositAmt}</button>
        </div>
        <div>
          <label htmlFor="withdraw">Withdraw</label>
          <input
            type="number"
            id="withdraw"
            value={withdrawAmt}
            onChange={(e) => setWithdrawAmt((wa) => e.target.value)}
          />
          <button>Withdraw {withdrawAmt}</button>
        </div>
        <div>
          <label htmlFor="loan">Request loan</label>
          <input
            type="number"
            id="loan"
            placeholder="Loan amount"
            value={loanAmt}
            onChange={(e) => setLoanAmt((la) => e.target.value)}
          />
          <input
            type="text"
            placeholder="Loan purpose"
            value={loanPurpose}
            onChange={(e) => setLoanPurpose((lp) => e.target.value)}
          />
          <button>Request Loan</button>
        </div>
        <div>
          <span>
            Pay back ${"loan"} {"Purpose"}
          </span>
          <button>Pay Loan</button>
        </div>
      </div>
    </div>
  );
}
