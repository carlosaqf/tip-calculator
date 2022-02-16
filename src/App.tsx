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

  const [billValue, setBillValue] = useState<number>(0);
  const [numPeople, setNumPeople] = useState<number>(5);
  const [tipPerPerson, setTipPerPerson] = useState<number>(0);
  const [totalPerPerson, setTotalPerPerson] = useState<number>(0);
  const [tipPercentage, setTipPercentage] = useState<number>();

  const handleButtonClick = (e: any) => {
    e.preventDefault();
    setTipPercentage(Number(e.target.value));

    const allButtons = e.target.parentElement.querySelectorAll('#tip-button');

    allButtons.forEach((button: any) => {
      if (e.target === button){
        e.target.classList.add('active');
      }else if (button.classList.contains('active')){
        button.classList.remove('active');
      }
    })

  }

  const handleInputChange = (e: any) => {
    if (e.target.id === 'bill'){
      setBillValue(Number(e.target.value));
    }else if (e.target.id === 'people-count'){
      setNumPeople(Number(e.target.value));
    }else if (e.target.id === 'custom-tip'){
      setTipPercentage(Number(e.target.value));
    }
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
              onChange={(e: any) => handleInputChange(e)}
            />

            <ButtonGroup label="Select Tip %" id="tip-button-group">
              <Button text="5%" value={5} onClick={(e) => handleButtonClick(e)} id="tip-button" />
              <Button text="10%" value={10} onClick={(e) => handleButtonClick(e)} id="tip-button" />
              <Button text="15%" value={15} onClick={(e) => handleButtonClick(e)} id="tip-button" />
              <Button text="25%" value={25} onClick={(e) => handleButtonClick(e)} id="tip-button" />
              <Button text="50%" value={50} onClick={(e) => handleButtonClick(e)} id="tip-button" />
              <Input 
                type="number"
                placeholder="Custom"
                id="custom-tip"
                onChange={(e: any) => handleInputChange(e)}
                />
            </ButtonGroup>

            <Input 
              type="number"
              label="Number of People"
              id="people-count"
              svg="iconPerson"
              onChange={(e: any) => handleInputChange(e)}
            />

            <Amount
              billValue={billValue}
              numPeople={numPeople}
              tipPercentage={tipPercentage}
            >
              <Button text="Reset" inverse onClick={(e) => handleButtonClick(e)} />
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