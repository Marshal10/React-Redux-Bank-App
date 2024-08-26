import { useState } from "react";
import { useDispatch } from "react-redux";
import { createCustomer } from "./CustomerSlice";

export default function CreateCustomer() {
  const [fullName, setFullName] = useState("");
  const [nationalId, setNationalId] = useState("");

  const dispatch = useDispatch();

  function handleClick() {
    if (!fullName && !nationalId) return;

    dispatch(createCustomer(fullName, nationalId));
  }

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
        <button onClick={handleClick}>Create new customer</button>
      </div>
    </div>
  );
}
