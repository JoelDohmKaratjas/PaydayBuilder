import { type FC } from 'react'
import { FaGithub } from 'react-icons/fa'
import styled from 'styled-components'

const ContactLink = styled.a`
	height: 3rem;
	color: white;
	display: flex;
	flex-flow: column wrap;
	justify-content: center;
	align-content: flex-start;
	text-decoration: none;
`

const ContactIconWrapper = styled.div`
	height: 3rem;
	width: 3rem;
	padding-right: 4px;
`

const ContactText = styled.p`
	font-size: 1.2rem;
`

const Contact: FC = () => {
	return (
		<ContactLink
			href='https://github.com/JoelDohmKaratjas/PaydayBuilder'
			target='_blank'
			rel='noopener noreferrer'
		>
			<ContactIconWrapper>
				<FaGithub size='100%' />
			</ContactIconWrapper>
			<ContactText>This project is open source</ContactText>
			<ContactText>Click here to contribute</ContactText>
		</ContactLink>
	)
}

export default Contact