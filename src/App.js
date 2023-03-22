import React, {useState } from "react";
import CartProvider from "./store/CartProvider";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Notification from "./components/Notification/Notification"
function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const [notificationIsShown, setNotificationIsShown] = useState(false);

  const showChartHandler = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  const showNotificationHandler = () => {
    setCartIsShown(false);
    setNotificationIsShown(true);
  };
  const hideNotificationHandler = () => {
    setNotificationIsShown(false);
  };
  return (
    <CartProvider>
      {cartIsShown && <Cart onOrder={showNotificationHandler} onClose={hideCartHandler} />}
      {notificationIsShown&& <Notification onClose={hideNotificationHandler}/>}
      <Header onShowCart={showChartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
