import { ButtonGroup as StyledButtonGroup } from './button-group.styles';
import React, { FC } from 'react';

interface ButtonGroupProps {
	children?: React.ReactNode;
	label?: string;
	id?: string;
}
const ButtonGroup: FC<ButtonGroupProps> = (props) => {
	const { children, label, id } = props;
	return (
		<>
			{ label ? <label htmlFor={id}>{label}</label> : '' }
			<StyledButtonGroup id={id}>
				{ children }
			</StyledButtonGroup>		
		</>
	)
}

export default ButtonGroup