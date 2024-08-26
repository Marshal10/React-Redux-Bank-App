import { useSelector } from "react-redux";

export default function Customer() {
  const customerName = useSelector((store) => store.customer.fullName);

  return <h2>👋 Welcome, {customerName}</h2>;
}
