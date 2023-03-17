import { useState } from "react";
import { GuestPage } from "./guests/containers/GuestPage";
import { OrdersPage } from "./orders/containers/OrdersPage";

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);


  function handleSignIn() {
    setIsSignedIn(true);
  }

  function handleSignOut() {
    setIsSignedIn(false)
  }

  return (
    <div>
      {!isSignedIn && <GuestPage onSignIn={handleSignIn} />}
      {isSignedIn && <OrdersPage onSignOut={handleSignOut} />}
    </div>
  );
}

export default App;
