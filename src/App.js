import "./App.css";
import { useState } from "react";

function App() {
  const [invAmount, setInvAmount] = useState(0);
  const [servCotation, setServCotation] = useState(0);

  console.log("invAmount", invAmount);
  console.log("servCotation", servCotation);

  return (
    <div className="App">
      <header className="App-header">
        <h2 className="title">Bill Calculator</h2>
        <Invoice amount={invAmount} onSetAmount={setInvAmount} />
        <Service cotation={servCotation} onSetCotation={setServCotation}>
          How did you like the service{" "}
        </Service>
        {/* <Service>How did your friend like the service </Service> */}
        <Biller invoice={invAmount} service={servCotation}>
          {`You pay $${
            Number(invAmount) + Number(servCotation)
          } ($${invAmount} + $${servCotation} tip)`}
        </Biller>
        <Reset
          amountInv={invAmount}
          resetAmountInv={setInvAmount}
          cotationServ={servCotation}
          resetCotationServ={setServCotation}
        />
      </header>
    </div>
  );
}

export default App;

// Invoice
function Invoice({ amount, onSetAmount }) {
  return (
    <div>
      <label>How much was the bill? </label>
      <input
        type="text"
        id="amount"
        className="text-field"
        value={amount}
        onChange={(e) => onSetAmount(e.target.value)}
      />
    </div>
  );
}

// Service
function Service({ cotation, onSetCotation, children }) {
  return (
    <div className="spacer">
      <label>{children}</label>
      <select
        name="service"
        id="service"
        className="text-field"
        value={cotation}
        onChange={(e) => onSetCotation(Number(e.target.value))}
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
function Biller({ invoice, service, children }) {
  return (
    <div>
      <p className="biller">{children}</p>
    </div>
  );
}

// Reset
function Reset({ resetAmountInv, resetCotationServ }) {
  function handleReset() {
    resetAmountInv(0);
    resetCotationServ(0);
  }
  return (
    <div>
      <button className="reset" onClick={() => handleReset()}>
        Reset
      </button>
    </div>
  );
}
