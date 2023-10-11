import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2 className="title">Bill Calculator</h2>
        <Invoice />
        <Service />
        <Service />
        <Biller />
        <Reset />
      </header>
    </div>
  );
}

export default App;

// Invoice
function Invoice() {
  return (
    <div>
      <label>How much was the bill? </label>
      <input type="text" id="amount" className="text-field" />
    </div>
  );
}

// Service
function Service() {
  return (
    <div className="spacer">
      <label>How did you like the service </label>
      <input type="text" id="amount" className="text-field" />
    </div>
  );
}

// Biller
function Biller() {
  return (
    <div>
      <p className="biller">You pay $92 ($80 + $12 tip)</p>
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
