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
  return (
    <div>
      <h2>Create new customer</h2>
      <div className="inputs">
        <div>
          <label htmlFor="full_name">Customer full name</label>
          <input type="text" id="full_name" />
        </div>
        <div>
          <label htmlFor="national_id">National ID</label>
          <input type="text" id="national_id" />
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
  return (
    <div>
      <h2>Create new customer</h2>
      <div className="inputs">
        <div>
          <label htmlFor="deposit">Deposit</label>
          <input type="number" id="deposit" />
          <select>
            <option value="USD">US Dollar</option>
            <option value="EUR">Euro</option>
            <option value="GBP">British Pound</option>
          </select>
          <button>Deposit</button>
        </div>
        <div>
          <label htmlFor="withdraw">Withdraw</label>
          <input type="number" id="withdraw" />
          <button>Withdraw</button>
        </div>
        <div>
          <label htmlFor="loan">Request loan</label>
          <input type="number" id="loan" placeholder="Loan amount" />
          <input type="text" placeholder="Loan purpose" />
          <button>Request Loan</button>
        </div>
      </div>
    </div>
  );
}

function BalanceDisplay() {
  return <div className="balance">{formatCurrency(1000)}</div>;
}

export default App;
