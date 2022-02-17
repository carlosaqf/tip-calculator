import styled from "styled-components";
import iconDollar from '../../images/icon-dollar.svg'
import iconPerson from '../../images/icon-person.svg'

export const Input = styled.input`
	color: ${props => props.theme.colors.neutral_100};
	border: none;
  	background-color: ${props => props.theme.colors.neutral_10};
  	height: 2.5rem;
	text-align: right;
	font-family: "Space Mono";
	font-weight: 700;
	padding-right: 1rem;
	border-radius: 0.25rem;

	-moz-appearance: textfield;
	
	&::-webkit-outer-spin-button,
	&::-webkit-inner-spin-button {
		-webkit-appearance: none;
	}

	&:focus{
		outline: none;
		border: 0.125rem solid ${props => props.theme.colors.primary};
		cursor: pointer;
	}
`

export const SVG = styled.div<{ svg: string }>`
	position: absolute;
  	top: 2.25rem;
  	left: 0.75rem;
	background-image: ${props => props.svg === 'iconDollar' ? `url(${iconDollar})` : ''};
	background-image: ${props => props.svg === 'iconPerson' ? `url(${iconPerson})` : ''};
	background-repeat: no-repeat;
	height: 1.25rem;
	width: 0.85rem;
`

export const InputWrapper = styled.div`
	display: flex;
	flex-direction: column;
	position: relative;
`