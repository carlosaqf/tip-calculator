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
		<div id={id}>
			{ label ? <label htmlFor={id}>{label}</label> : '' }
			<StyledButtonGroup>
				{ children }
			</StyledButtonGroup>		
		</div>
	)
}

export default ButtonGroup