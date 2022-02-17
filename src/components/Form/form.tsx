import React, { FC } from 'react';
import { Form as StyledForm, FormContainer as StyledFormContainer } from './form.styles';

interface FormProps {
	children?: React.ReactNode;
}

const Form: FC<FormProps> = (props) => {
	return (
		<StyledFormContainer>
			<StyledForm>
				{props.children}
			</StyledForm>
		</StyledFormContainer>
	)
}

export default Form