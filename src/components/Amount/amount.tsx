import { AmountContainer } from './amount.styles';
import React, { FC } from 'react';

interface AmountProps {
	children?: React.ReactNode;
	billValue?: number;
	numPeople?: number;
	tipPercentage?: number;
}

const Amount: FC<AmountProps> = (props) => {
	const { children } = props;
	const { billValue, numPeople, tipPercentage } = props;

	let tipAmountPerPerson = 0;
	let totalPerPerson = 0;

	if (billValue && numPeople && tipPercentage){
		tipAmountPerPerson = Number(((billValue * (tipPercentage / 100)) / numPeople).toFixed(2));
		totalPerPerson = Number((((billValue * (tipPercentage / 100)) + billValue) / numPeople).toFixed(2));
	}

	return (
		<AmountContainer>
			<div className='tip-amount'>
				<p>Tip Amount</p>
				<p className='person'>/ person</p>
			</div>
			<h2 className='price-one'>${tipAmountPerPerson}</h2>

			<div className='total'>
				<p>Total</p>
				<p className='person'>/ person</p>
			</div>
			<h2 className='price-two'>${totalPerPerson}</h2>
			{ children }
		</AmountContainer>
	)
}

export default Amount