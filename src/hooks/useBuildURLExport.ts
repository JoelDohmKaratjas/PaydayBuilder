import perkDecks from 'data/abilities/perks'
import { TreeNames } from 'data/abilities/skills'
import armours, { ArmourData } from 'data/character/armours'
import characters from 'data/character/characters'
import equipments from 'data/character/equipment'
import masks from 'data/character/masks'
import melees from 'data/weapons/melees'
import throwables, { ThrowableData } from 'data/weapons/throwables'
import { useAppSelector } from 'hooks/reduxHooks'
import { getCollectionList } from 'pages/Mask/Mask'

interface UseBuildURLExportProps {
	simple: boolean;
}

const useBuildURLExport = ({ simple }: UseBuildURLExportProps): string => {

	const state = useAppSelector(state => state)

	const charString = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ.,@'

	const buildToString = (): string => {
		const parameters = new URLSearchParams()
		parameters.set('s', encodeSkills())
		parameters.set('p', encodeString(perkDecks, state.abilities.perkdeck))
		parameters.set('a', encodeString(sortedArmour(), state.character.armour))
		parameters.set('t', encodeString(sortedThrowables(), state.weapons.throwable))
		parameters.set('d', encodeEquipment())
		if (!simple) {
			parameters.set('m', encodeMelee())
			parameters.set('k', encodeMask())
			parameters.set('c', encodeString(characters, state.character.character))
		}
		return parameters.toString()
	}

	const encodeSkills = (): string => {
		let skillsString = ''

		const trees: TreeNames[] = ['mastermind', 'enforcer', 'technician', 'ghost', 'fugitive']

		trees.forEach(treeNames => {
			Object.values(state.skills.trees[treeNames]).forEach(subtree => {
				let subtreeBasicChar = 0
				let subtreeAcedChar = 0

				const upgrades = [...Object.values(subtree.upgrades)];
				[upgrades[1], upgrades[2]] = [upgrades[2], upgrades[1]]; // semicolons needed
				[upgrades[3], upgrades[4]] = [upgrades[4], upgrades[3]]

				upgrades.reverse().forEach((skill, i) => {
					if (skill === 'basic') {
						subtreeBasicChar = subtreeBasicChar | 1
					}
					else if (skill === 'aced') {
						subtreeAcedChar = subtreeAcedChar | 1
					}
					if (i !== 5) {
						subtreeBasicChar = subtreeBasicChar << 1
						subtreeAcedChar = subtreeAcedChar << 1
					}
				})

				skillsString += charString[subtreeBasicChar] + charString[subtreeAcedChar]
			})
		})

		return compressData(skillsString)
	}

	const compressData = (data: string): string => {
		let count = 1
		let currentChar = data.charAt(0)
		let compressed = ''

		for (let i = 1; i < data.length + 1; i++) {
			const value = data.charAt(i)
			if (value === currentChar) {
				if (count > 8) {
					compressed += `${currentChar}-${count}`
					count = 0
				}
				count++
				continue
			}
			compressed += count > 3 ? `${currentChar}-${count}` : currentChar.repeat(count)
			currentChar = value
			count = 1
		}

		return compressed
	}

	const encodeString = (data: object, equipped: string): string => {
		const index = Object.keys(data).findIndex(value => value === equipped)
		return charString[index]
	}

	const sortedArmour = (): Record<string, ArmourData> => {
		return Object.fromEntries(Object.entries(armours).sort((a, b) => {
			return a[1].stats.armour - b[1].stats.armour
		}))
	}

	const sortedThrowables = (): Record<string, ThrowableData> => {
		let newData = { ...throwables }
		delete newData['X1-ZAPer']
		newData = {
			...newData,
			'X1-ZAPer': throwables['X1-ZAPer']
		}
		return newData
	}

	const encodeEquipment = (): string => {
		const primaryValue = encodeString(equipments, state.character.equipment.primary)
		const equippedSecondary = state.character.equipment.secondary
		return equippedSecondary ? primaryValue + encodeString(equipments, equippedSecondary) : primaryValue
	}

	const encodeMelee = (): string => {
		const index = Object.keys(melees).findIndex(value => value === state.weapons.melee)
		return index > charString.length ? `0${charString[index - charString.length]}` : charString[index]
	}

	const encodeMask = (): string => {
		const collections = getCollectionList(),
			maskCollection = masks[state.character.mask].collection,
			collectionIndex = Object.keys(collections).findIndex(value => value === maskCollection),
			firstValue = ~~(collectionIndex / charString.length),
			secondValue = collectionIndex - (charString.length * firstValue),
			thirdValue = collections[maskCollection].findIndex(value => value.name === state.character.mask)
		return charString[firstValue] + charString[secondValue] + charString[thirdValue]
	}

	return buildToString()
}

export default useBuildURLExport