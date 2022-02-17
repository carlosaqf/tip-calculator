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
	onChange?: (e: any) => void;
	value?: number;
}

const Input: FC<InputProps> = ({ type, label, size, id, placeholder, svg, onChange }) => {

	const containerId = `${id}-container`;

	return (
		<InputWrapper id={containerId}>
			{ label ? <label htmlFor={id}>{label}</label> : '' }
			{ svg ? <StyledSVG svg={svg} /> : '' }
			<StyledInput id={id} type={type} placeholder={placeholder} onChange={onChange} />
		</InputWrapper>

	)
}

export default Input