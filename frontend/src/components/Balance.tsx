import React from "react";
import { useSelector } from "react-redux";
import { currency } from "../constant";

const Balance: React.FC = () => {
  const balance = useSelector((state: { balance: number }) => state.balance);
  return (
    <div className="balance__content">
      <p>Your balance is:</p>
      <h2>{currency.format(balance)}</h2>
    </div>
  );
};

export default Balance;
