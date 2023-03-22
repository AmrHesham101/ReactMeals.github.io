import { useContext } from "react";
import CartContext from "../../store/cart-context";
import classes from "./Notification.module.css";
import Modal from "../UI/Modal";
const Notification = (props) => {
  const cartCtx = useContext(CartContext);
  const cartItemsRemoveHandler = () => {
    cartCtx.clearItems();
  };
  const closeHandlerEvent = () => {
    cartItemsRemoveHandler();
    props.onClose();
  };
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  return (
    <Modal onClose={closeHandlerEvent}>
        <h1>Thank you for purchasing </h1>
      <div className={classes.total}>
        <span>Your Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={closeHandlerEvent}>
          Close
        </button>
      </div>
    </Modal>
  );
};

export default Notification;
