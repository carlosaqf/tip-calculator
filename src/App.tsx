import './App.css';

const App = () => {
  return (
    <>
      <div className="app-container">
        <h1 className="app-title">
          <span className="app-title-top">S P L I</span>
          <br />
          <span className="app-title-bottom">T T E R</span>
        </h1>

        <div className="app-form-container">
          <form className="app-form">

            <label htmlFor="bill">Bill</label>
            <input type="number" id="bill" />

            <label htmlFor="tip-button-group">Select Tip %</label>
            <div className="tip-button-group" id="tip-button-group">
              <button>5%</button>
              <button>10%</button>
              <button>15%</button>
              <button>25%</button>
              <button>50%</button>
              <input type="number" />
            </div>

            <label htmlFor="people-count">Number of People</label>
            <input type="number" id="people-count" />

            <div className="amount-total-container">
              <p>Tip Amount / person</p>
              <h4>$4.27</h4>
              <p>Total / person</p>
              <h4>$32.79</h4>
              <button className="reset-button">Reset</button>
            </div>
          </form>
        </div>
      </div> 

      <footer className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>. 
        Coded by <a href="https://www.github.com/carlosaqf" target="_blank" rel="noreferrer">Carlos Fegurgur</a>.
      </footer>
    </>
  );
}

export default App;