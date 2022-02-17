import Wrapper from './components/Wrapper/wrapper';
import Logo from './components/Logo/logo';
import  Button  from './components/Button/button';
import Input from './components/Input/input';
import ButtonGroup from './components/ButtonGroup/button-group';
import Form from './components/Form/form';
import Amount from './components/Amount/amount';
import Footer from './components/Footer/footer';
import { ThemeProvider } from 'styled-components';
import { myTheme } from './my-theme';
import { useState } from 'react';

const App = () => {
  
  const [billValue, setBillValue] = useState<number>(0);
  const [numPeople, setNumPeople] = useState<number>(5);
  const [tipPercentage, setTipPercentage] = useState<number>();

  const handleButtonClick = (e: any) => {
    e.preventDefault();
    setTipPercentage(Number(e.target.value));

    const allButtons = document.querySelectorAll('#tip-button');

    allButtons.forEach((button: any) => {
      if (e.target === button){
        e.target.classList.add('active');
      }else if (button.classList.contains('active')){
        button.classList.remove('active');
      }
    })

  }

  const handleResetClick = (e: any) => {
    e.preventDefault();
    setTipPercentage(0);
    setNumPeople(0);
    setBillValue(0);
    (document.getElementById('people-count') as HTMLInputElement).value = '';
    (document.getElementById('bill') as HTMLInputElement).value = '';
    (document.getElementById('custom-tip') as HTMLInputElement).value = '';
    

    const allButtons = document.querySelectorAll('#tip-button');
    allButtons.forEach((button: any) => {
      button.classList.remove('active'); 
    })

  }

  const handleInputChange = (e: any) => {
    if (e.target.id === 'bill'){
      setBillValue(Number(e.target.value));
    }else if (e.target.id === 'people-count'){
      setNumPeople(Number(e.target.value));
    }else if (e.target.id === 'custom-tip'){
      setTipPercentage(Number(e.target.value));
      const allButtons = document.querySelectorAll('#tip-button');
      allButtons.forEach((button: any) => {
        button.classList.remove('active');
      })
    }
  }

	return (
		<ThemeProvider theme={myTheme}>
			<Wrapper>
				<Logo />
				<Form>
					<Input 
						type="number"
						id="bill"
						label="Bill"
						svg="iconDollar"
						placeholder="0"
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
						placeholder="0"
						onChange={(e: any) => handleInputChange(e)}
					/>

					<Amount billValue={billValue} numPeople={numPeople} tipPercentage={tipPercentage} id="amount-container">
						<Button text="Reset" value="reset" inverse onClick={(e) => handleResetClick(e)} />
					</Amount>
				</Form>		
				<Footer />
			</Wrapper>
		</ThemeProvider>
  );
}

export default App;