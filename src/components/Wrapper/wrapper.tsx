import { FC } from 'react';
import { Wrapper as StyledWrapper } from './wrapper.styles';

interface WrapperProps{
	children?: React.ReactNode;
}

const Wrapper: FC<WrapperProps> = (props) => {
	return (
		<StyledWrapper>
			{props.children}
		</StyledWrapper>
	)
}

export default Wrapper