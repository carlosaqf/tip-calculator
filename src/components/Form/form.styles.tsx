import styled from "styled-components";

export const Form = styled.form`
	display: grid;
	font-family: var(--font-family);
	font-size: var(--font-size);
	font-weight: var(--weight-light);
	color: ${props => props.theme.colors.neutral_80};
	grid-gap: 0.5rem;
	grid-template-columns: 1fr;

	@media(min-width: 1024px){
		grid-gap: 2rem;
		grid-template-columns: 1fr 1fr;
		
		#amount-container{
			grid-row: 1 / 4;
			grid-column: 2 / 3;
		}
	}

`

export const FormContainer = styled.div`
	background-color: ${props => props.theme.colors.neutral_00};
	border-radius: 1rem 1rem 1rem 1rem;	
	padding: 2rem;
	max-width: 80rem;
	margin: 0 auto;
`  