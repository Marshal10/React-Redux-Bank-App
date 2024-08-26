function formatCurrency(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

export default function BalanceDisplay() {
  return <div className="balance">{formatCurrency(1000)}</div>;
}
