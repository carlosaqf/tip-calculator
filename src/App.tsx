import './App.css';
import { ReactComponent as SplitterLogo } from './images/logo.svg';
import  Button  from './components/Button/button';
import Input from './components/Input/input';
import ButtonGroup from './components/ButtonGroup/button-group';
import Amount from './components/Amount/amount';
import { ThemeProvider } from 'styled-components';
import { myTheme } from './my-theme';
import React, { useState } from 'react';

const App = () => {
  
  const [value, setValue] = useState();

  const [billValue, setBillValue] = useState<number>(200);
  const [numPeople, setNumPeople] = useState<number>(5);
  const [tipPerPerson, setTipPerPerson] = useState<number>(0);
  const [totalPerPerson, setTotalPerPerson] = useState<number>(0);

  const handleTipPerPerson = (tipPercentage: number) => {
    const tipAmount = billValue * (tipPercentage / 100);
    console.log(tipAmount);
    setTipPerPerson(tipAmount);
  }

  return (
    <ThemeProvider theme={myTheme}>
      
      
      <div className="app-container">
        <div className="app-logo">
          <SplitterLogo />
        </div>


        <div className="app-form-container">
          
          <form className="app-form">

            <Input 
              type="number"
              id="bill"
              label="Bill"
              svg="iconDollar"
            />

            <ButtonGroup label="Select Tip %" id="tip-button-group">
              <Button 
                text="5%" 
                value={5}
                handleTipPerPerson={handleTipPerPerson}
              />

              <Button text="10%" value={10} handleTipPerPerson={handleTipPerPerson}/>
              <Button text="15%" value={15} handleTipPerPerson={handleTipPerPerson}/>
              <Button text="25%" value={25} handleTipPerPerson={handleTipPerPerson}/>
              <Button text="50%" value={50} handleTipPerPerson={handleTipPerPerson}/>
              <Input 
                type="number"
                placeholder="Custom"
                />
            </ButtonGroup>

            <Input 
              type="number"
              label="Number of People"
              id="people-count"
              svg="iconPerson"
            />

            <Amount 
              tipPerPerson={tipPerPerson}
              totalPerPerson={totalPerPerson}
            >
              <Button text="Reset" inverse handleTipPerPerson={handleTipPerPerson}/>
            </Amount>
          </form>
        </div>
      </div> 

      <footer className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>. 
        Coded by <a href="https://www.github.com/carlosaqf" target="_blank" rel="noreferrer">Carlos Fegurgur</a>.
      </footer>
    </ThemeProvider>
  );
}

export default App;