import styled from "styled-components";

export const Footer = styled.footer`
	font-size: 0.75rem;
	text-align: center;

	margin: 2rem 0 1rem 0;

	a{
		color: ${props => props.theme.colors.primary};
		text-decoration: none;
	}
`