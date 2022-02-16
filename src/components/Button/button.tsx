import { Button as StyledButton } from './button.styles';
import React, { FC, useState } from 'react';

interface ButtonProps {
	text: string;
	props?: object;
	inverse?: boolean;
	value?: number;
	onClick?: Function;
	handleTipPerPerson: Function;
}
const Button: FC<ButtonProps> = ({ text, ...props }) => {

	const { handleTipPerPerson } = props;
	const [tipPercentage, setTipPercentage] = useState<number>();

	const handleButtonClick = (e: any) => {
		e.preventDefault();
		setTipPercentage(e.target.value);
		handleTipPerPerson(tipPercentage);
	}

	return (
		<StyledButton {...props} onClick={handleButtonClick}>
			{text}
		</StyledButton>
	)
}

export default Button