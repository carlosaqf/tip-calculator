import styled, { css } from "styled-components";

interface Props{
	inverse?: boolean
}

export const Button = styled.button`
	color: ${props => props.theme.colors.neutral_00};
	background-color: ${props => props.theme.colors.neutral_100};
	font-family: "Space Mono";
	font-weight: 600;
	padding: 0.25rem 2rem 0.25rem 2rem;
	border: none;
	margin: 0.25rem;
	border-radius: ${props => props.theme.borderRadius};

	&:active, &:hover{
		background-color: ${props => props.theme.colors.primary};
		color: ${props => props.theme.colors.neutral_100};
	}

	${(props: Props) => props.inverse && css`
		background-color: ${props => props.theme.colors.primary};
		color: ${props => props.theme.colors.neutral_100};
	`}

	&.active{
		background-color: ${props => props.theme.colors.primary};
		color: ${props => props.theme.colors.neutral_100};
	}
`