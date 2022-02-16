import { 
	Input as StyledInput,
	SVG as StyledSVG,
	InputWrapper
} from './input.styles';
import { FC } from 'react';

interface InputProps {
	type?: string;
	label?: string;
	size?: string;
	id?: string;
	placeholder?: string;
	svg?: string;
	onChange?: Function;
	value?: number;
}

const Input: FC<InputProps> = ({ type, label, size, id, placeholder, svg }) => {
	return (
		<InputWrapper>
			{ label ? <label htmlFor={id}>{label}</label> : '' }
			{ svg ? <StyledSVG svg={svg} /> : '' }
			<StyledInput type={type} id={id} placeholder={placeholder} {...size} />
		</InputWrapper>

	)
}

export default Input