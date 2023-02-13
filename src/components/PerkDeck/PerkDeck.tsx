import Container from 'components/Container'
import HorizontalBar from 'components/HorizontalBar'
import { ItemContainer } from 'components/Item-Elements'
import perkDecks, { PerkCard } from 'data/abilities/perks'
import useMountEffect from 'hooks/useMountEffect'
import { FC, createRef, useRef, useState } from 'react'
import { useAbilityStore } from 'state/useAbilitiesStore'

import Perk from './Perks'
import PerkTab from './PerkTab/PerkTab'

export type PerkCardIndex = PerkCard & { index: number }

const PerkDeck: FC = () => {

	const perkWrapperRef = useRef<HTMLDivElement>(null)

	const perkRefs = useRef(Array.from({ length: Object.keys(perkDecks).length }, () => createRef<HTMLDivElement>()))

	const scrollToPerk = (i: number, behavior: 'smooth' | 'auto'): void => {
		const container = perkWrapperRef.current
		if (!container) return
		container.scrollTo({
			top: (i * 120) + 8,
			left: 0,
			behavior
		})
	}

	const [hoveredCard, setHoveredCard] = useState<PerkCardIndex | null>(null)

	const equippedPerk = perkDecks[useAbilityStore(state => state.perkDeck)]

	const [selectedPerk, setSelectedPerk] = useState(equippedPerk)

	useMountEffect(() => {
		const currentEquippedIndex = Object.keys(perkDecks).indexOf(equippedPerk.name)
		scrollToPerk(currentEquippedIndex, 'auto')
	})

	return (
		<Container rows='4rem 2rem 7fr 4rem' areas='"title title" "horizontalbar ." "items info" "items back"' title='Perk Deck'>

			<HorizontalBar active={equippedPerk.name} items={Object.values(perkDecks).map((perkDeck, i) => ({
				label: perkDeck.name,
				callback: () => scrollToPerk(i, 'smooth')
			}))} />

			<ItemContainer ref={perkWrapperRef}>
				{
					Object.values(perkDecks).map((perkdeck, i) => {
						return <Perk
							perkref={perkRefs.current[i]}
							key={perkdeck.name}
							perk={perkdeck}
							index={i}
							setHoveredCard={setHoveredCard}
							selectedPerk={selectedPerk}
							setSelectedPerk={setSelectedPerk}
						/>
					})
				}
			</ItemContainer>

			<PerkTab hoveredCard={hoveredCard} />

		</Container>
	)
}

export default PerkDeck
