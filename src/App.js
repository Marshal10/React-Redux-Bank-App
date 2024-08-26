import { useState } from "react";

function formatCurrency(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

function App() {
  return (
    <div>
      <h1>🏦 The React-Redux Bank ⚛️</h1>
      <CreateCustomer />
      <Customer />
      <AccountOperations />
      <BalanceDisplay />
    </div>
  );
}

function CreateCustomer() {
  const [fullName, setFullName] = useState("");
  const [nationalId, setNationalId] = useState("");
  return (
    <div>
      <h2>Create new customer</h2>
      <div className="inputs">
        <div>
          <label htmlFor="full_name">Customer full name</label>
          <input
            type="text"
            id="full_name"
            value={fullName}
            onChange={(e) => setFullName((n) => e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="national_id">National ID</label>
          <input
            type="text"
            id="national_id"
            value={nationalId}
            onChange={(e) => setNationalId((i) => e.target.value)}
          />
        </div>
        <button>Create new customer</button>
      </div>
    </div>
  );
}

function Customer() {
  return <h2>👋 Welcome, xyz</h2>;
}

function AccountOperations() {
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

function BalanceDisplay() {
  return <div className="balance">{formatCurrency(1000)}</div>;
}

export default App;
