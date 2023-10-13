import "./App.css";
import { useState } from "react";

function App() {
  const [invAmount, setInvAmount] = useState(0);

  console.log("invAmount", invAmount);

  return (
    <div className="App">
      <header className="App-header">
        <h2 className="title">Bill Calculator</h2>
        <Invoice onSetAmount={setInvAmount} />
        <Service>How did you like the service </Service>
        {/* <Service>How did your friend like the service </Service> */}
        <Biller>You pay $92 ($80 + $12 tip)</Biller>
        <Reset />
      </header>
    </div>
  );
}

export default App;

// Invoice
function Invoice() {
  const [amount, setAmount] = useState(0);

  console.log("amount :>> ", amount);

  return (
    <div>
      <label>How much was the bill? </label>
      <input
        type="text"
        id="amount"
        className="text-field"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
    </div>
  );
}

// Service
function Service({ children }) {
  const [cotation, setCotation] = useState(0);

  console.log("cotation :>> ", cotation);
  return (
    <div className="spacer">
      <label>{children}</label>
      <select
        name="service"
        id="service"
        className="text-field"
        value={cotation}
        onChange={(e) => setCotation(Number(e.target.value))}
      >
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing (20%)</option>
      </select>
    </div>
  );
}

// Biller
function Biller({ children }) {
  return (
    <div>
      <p className="biller">{children}</p>
    </div>
  );
}

// Reset
function Reset() {
  return (
    <div>
      <button className="reset">Reset</button>
    </div>
  );
}
