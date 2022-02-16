import styled from "styled-components";

export const AmountContainer = styled.div`
	background-color: ${props => props.theme.colors.neutral_100};
	padding: 2rem;
	display: grid;
	margin-top: 1rem;

	border-radius: 1rem;

	grid-template-columns: 1fr 1fr;
	grid-template-rows: auto;

	grid-template-areas: 
		"tipAmount priceOne"
		"total priceTwo"
		"reset reset"
	;
	grid-gap: 1rem;

	.tip-amount{
		color: ${props => props.theme.colors.neutral_00};
		grid-area: tipAmount;

		.person{
			color: ${props => props.theme.colors.neutral_50};
		}
	}

	.price-one{
		color: ${props => props.theme.colors.primary};
		grid-area: priceOne;
		justify-self: end;
	}

	.total{
		color: ${props => props.theme.colors.neutral_00};
		grid-area: total;

		.person{
			color: ${props => props.theme.colors.neutral_50};
		}
	}

	.price-two{
		color: ${props => props.theme.colors.primary};
		grid-area: priceTwo;
		justify-self: end;
	}

	button{
		margin-top: 2rem;
		grid-area: reset;
		font-size: 1.5rem;
		padding: 0.5rem;
		text-transform: uppercase;
	}

`