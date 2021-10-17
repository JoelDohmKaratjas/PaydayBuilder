import styled from 'styled-components'

export const WeaponTypes = styled.div`
	grid-area: weapontypes;
	display: flex;
	overflow-x: hidden;
	gap: 1.6rem;
`

export const WeaponType = styled.h1`
	font-size: 1.6rem;
	cursor: pointer;
	white-space: nowrap;
	color: ${props => props.color};
	&:last-child {
		padding-right: 0;
	}
`

export const ActionsContainer = styled.div`
	grid-area: actions;
`

export const ActionsText = styled.p`
	font-size: 1.6rem;
	text-align: end;
	cursor: pointer;
	&:hover {
		color: #fff;
	}
`