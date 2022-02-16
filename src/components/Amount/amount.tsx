import { AmountContainer } from './amount.styles';
import React, { FC } from 'react';

interface AmountProps {
	children?: React.ReactNode
	tipPerPerson?: number;
	totalPerPerson?: number;
}
const Amount: FC<AmountProps> = (props) => {
	const { children } = props;
	const { tipPerPerson, totalPerPerson } = props;

	return (
		<AmountContainer>
			<div className='tip-amount'>
				<p>Tip Amount</p>
				<p className='person'>/ person</p>
			</div>
			<h2 className='price-one'>${tipPerPerson}</h2>

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