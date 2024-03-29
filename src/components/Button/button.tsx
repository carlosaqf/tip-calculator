import { Button as StyledButton } from './button.styles';
import React, { FC } from 'react';

interface ButtonProps {
	text: string;
	props?: object;
	inverse?: boolean;
	value?: number | string;
	onClick?: (e: any) => void;
	className?: string;
}
const Button: FC<ButtonProps> = ({ text, ...props }) => {
	return (
		<StyledButton {...props} onClick={props.onClick}>
			{text}
		</StyledButton>
	)
}

export default Button