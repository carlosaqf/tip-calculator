import { AmountContainer } from './amount.styles';
import React, { FC } from 'react';

interface AmountProps {
	children?: React.ReactNode;
	billValue?: number;
	numPeople?: number;
	tipPercentage?: number;
	id?: string;
}

const Amount: FC<AmountProps> = (props) => {
	const { children } = props;
	const { billValue, numPeople, tipPercentage, id } = props;

	let tipAmountPerPerson;
	let totalPerPerson;

	if (billValue && numPeople && tipPercentage){
		tipAmountPerPerson = Number(((billValue * (tipPercentage / 100)) / numPeople).toFixed(2));
		totalPerPerson = Number((((billValue * (tipPercentage / 100)) + billValue) / numPeople).toFixed(2));
	}

	return (
		<AmountContainer id={id}>
			<div className='tip-amount'>
				<p>Tip Amount</p>
				<p className='person'>/ person</p>
			</div>
			<h2 className='price-one'>${tipAmountPerPerson ? tipAmountPerPerson : `0.00`}</h2>

			<div className='total'>
				<p>Total</p>
				<p className='person'>/ person</p>
			</div>
			<h2 className='price-two'>${totalPerPerson ? totalPerPerson : `0.00`}</h2>
			{ children }
		</AmountContainer>
	)
}

export default Amount