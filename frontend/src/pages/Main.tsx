import React, { useState, useEffect } from "react";
import axios from "axios";
import Balance from "../components/Balance";
import Button from "../components/Button";
import Card from "../components/Card";
import Toast from "../components/Toast";
import { useDispatch } from "react-redux";

const Main: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [success, setSuccess] = useState(false);
  const [timer, seTimer] = useState<number>();

  const dispatch = useDispatch();

  useEffect(() => {
    getBalance();
    return () => {
      clearTimeout(timer);
    };
  }, []);

  const getBalance = async () => {
    try {
      let response = await axios.get<{ balance: number }>(
        `http://localhost:8000/api/balance`
      );

      dispatch({ type: "GET_BALANCE", payload: response.data.balance });
    } catch (error) {
      console.log(error);
    }
  };

  const updateBalance = async (payload: { amount: number }) => {
    try {
      let response = await axios.post(
        `http://localhost:8000/api/balance`,
        payload
      );

      getBalance();

      setSuccess(true);
      const newTimer: number = window.setTimeout(() => {
        setShowModal(false);
        setSuccess(false);
      }, 20000);

      seTimer(newTimer);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Balance />
      <Button
        disabled={false}
        title="Recharge/Add Balance"
        handleButtonClick={() => setShowModal(true)}
      />

      {showModal && (
        <div className="modal_section" onClick={() => setShowModal(false)}>
          <div onClick={(event) => event.stopPropagation()}>
            <div>
              <Card
                handleCloseModal={() => setShowModal(false)}
                handleBalanceUpdate={updateBalance}
              />
            </div>
          </div>
        </div>
      )}
      {success && <Toast />}
    </div>
  );
};

export default Main;
