function App() {
  return (
    <div>
      <h1>🏦 The React-Redux Bank ⚛️</h1>
      <CreateCustomer />
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

export default App;
