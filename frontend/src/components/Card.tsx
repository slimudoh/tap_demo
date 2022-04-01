import React, { useState, useEffect } from "react";
import Button from "../components/Button";

const Card: React.FC<{
  handleCloseModal: () => void;
  handleBalanceUpdate: (payload: { amount: number }) => void;
}> = ({ handleCloseModal, handleBalanceUpdate }) => {
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [cardCvv, setCardCvv] = useState("");
  const [cardNameError, setCardNameError] = useState("");
  const [cardNumberError, setCardNumberError] = useState("");
  const [cardExpiryError, setCardExpiryError] = useState("");
  const [cardCvvError, setCardCvvError] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(true);

  useEffect(() => {
    if (
      cardNumber.trim() !== "" &&
      /^[0-9]+$/g.test(cardNumber.trim()) === false
    ) {
      setCardNumberError("Should be numbers.");
    }

    if (cardCvv.trim() !== "" && /^[0-9]+$/g.test(cardCvv.trim()) === false) {
      setCardCvvError("Should be numbers.");
    }

    let validateData =
      cardName.trim() !== "" &&
      cardNumber.trim() !== "" &&
      cardExpiry.trim() !== "" &&
      cardCvv.trim() !== "" &&
      /^[0-9]+$/g.test(cardNumber.trim()) !== false &&
      /^[0-9]+$/g.test(cardCvv.trim()) !== false;

    if (validateData) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [cardName, cardNumber, cardExpiry, cardCvv]);

  const handleFormSubmit = async (): Promise<void> => {
    setCardNameError("");
    setCardNumberError("");
    setCardExpiryError("");
    setCardCvvError("");

    if (/^[0-9]+$/g.test(cardNumber.trim()) === false) {
      setCardNumberError("Should be numbers.");
    }

    if (/^[0-9]+$/g.test(cardCvv.trim()) === false) {
      setCardCvvError("Should be numbers.");
    }

    if (cardName.trim() === "") {
      setCardNameError("Enter card name.");
    }

    if (cardNumber.trim() === "") {
      setCardNumberError("Enter card number.");
    }

    if (cardExpiry.trim() === "") {
      setCardExpiryError("Enter card expiry date.");
    }

    if (cardCvv.trim() === "") {
      setCardCvvError("Enter card cvv.");
    }

    let validateData =
      cardName.trim() !== "" &&
      cardNumber.trim() !== "" &&
      cardExpiry.trim() !== "" &&
      cardCvv.trim() !== "" &&
      /^[0-9]+$/g.test(cardNumber.trim()) !== false &&
      /^[0-9]+$/g.test(cardCvv.trim()) !== false;

    if (!validateData) {
      return;
    }

    let payload = {
      amount: 10,
    };
    handleBalanceUpdate(payload);
  };

  return (
    <>
      <div className="card_container">
        {/* <p>
          <span onClick={handleCloseModal}>Close</span>
        </p> */}

        <h3>Card Details</h3>
        <div className="card_container_full form_div">
          <label htmlFor="card name">Card Name</label>
          <input
            type="text"
            value={cardName}
            onChange={(e) => {
              setCardName(e.target.value);
            }}
            placeholder="Uwem Udoh"
          />
          <p>{cardNameError}</p>
        </div>

        <div className="card_container_full form_div">
          <label htmlFor="card number">Card number</label>
          <input
            type="text"
            value={cardNumber}
            onChange={(e) => {
              setCardNumber(e.target.value);
            }}
            placeholder="00000000000000"
          />
          <p>{cardNumberError}</p>
        </div>

        <div className="card_container_short">
          <div className="card_container_expiry form_div">
            <label htmlFor="card expiry date">Card expiry date</label>
            <input
              type="text"
              value={cardExpiry}
              onChange={(e) => {
                setCardExpiry(e.target.value);
              }}
              placeholder="01/1970"
            />
            <p>{cardExpiryError}</p>
          </div>
          <div className="card_container_cvv form_div">
            <label htmlFor="card cvv">Card CVV</label>
            <input
              type="text"
              value={cardCvv}
              onChange={(e) => {
                setCardCvv(e.target.value);
              }}
              placeholder="000"
            />
            <p>{cardCvvError}</p>
          </div>
        </div>
      </div>

      <Button
        title="Charge 10$"
        disabled={buttonDisabled}
        handleButtonClick={handleFormSubmit}
      />
    </>
  );
};

export default Card;
