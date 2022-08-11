import perkDecks, { PerkDeckList } from 'data/abilities/perks'
import skills, { TreeNames } from 'data/abilities/skills'
import armours, { ArmourList } from 'data/character/armours'
import characters, { CharacterList } from 'data/character/characters'
import equipments, { EquipmentList } from 'data/character/equipment'
import { CategoryList, MaskList, allMasks } from 'data/character/masks'
import primary from 'data/weapons/guns/primary'
import secondary from 'data/weapons/guns/secondary'
import { AllWeaponList, Modification, ModificationSlot, WeaponData, WeaponFind, WeaponType } from 'data/weapons/guns/weaponTypes'
import melees, { MeleeList } from 'data/weapons/melees'
import throwables, { ThrowableData, ThrowableList } from 'data/weapons/throwables'
import { useAppDispatch } from 'hooks/reduxHooks'
import { SetStateAction, useCallback, useEffect, useState } from 'react'
import { Dispatch } from 'react'
import { addBuild } from 'slices/buildsSlice'
import { changeSkillState, resetSkills } from 'slices/skillsSlice'
import { useAbilityStore } from 'state/useAbilitiesStore'
import { useArmouryStore } from 'state/useArmouryStore'
import { useCharacterStore } from 'state/useCharacterStore'
import { useWeaponsStore } from 'state/useWeaponsStore'
import findWeapon from 'utils/findWeapon'

export const charString = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ.,@'

const decodeValues = (value: string): number => {
	if (value.length === 2) {
		const [firstValue, secondValue] = value.split('')
		return (decodeValues(firstValue) * charString.length) + decodeValues(secondValue)
	}
	return charString.indexOf(value)
}

const decompressData = (data: string): string => {
	let decompressed = ''
	for (let i = 0; i < data.length; i++) {
		if (data.charAt(i + 1) === '-') {
			decompressed += data.charAt(i).repeat(parseInt(data.charAt(i + 2)))
			i += 2
			continue
		}
		decompressed += data.charAt(i)
	}
	return decompressed
}

const decodePerkDeck = (value: string): PerkDeckList => {
	const perkIndex = decodeValues(value)
	return Object.values(perkDecks)[perkIndex].name
}

const decodeArmour = (value: string): ArmourList => {
	const armourIndex = decodeValues(value)
	const armoursList = Object.values(armours);
	[armoursList[1], armoursList[2]] = [armoursList[2], armoursList[1]]
	return armoursList[armourIndex].name
}

const decodeThrowable = (value: string): ThrowableList => {
	const throwableIndex = decodeValues(value)
	let sortedThrowables: Record<string, ThrowableData> = { ...throwables }
	delete sortedThrowables['X1-ZAPer']
	sortedThrowables = {
		...sortedThrowables,
		'X1-ZAPer': throwables['X1-ZAPer']
	}
	return Object.keys(sortedThrowables)[throwableIndex] as ThrowableList
}

const decodeEquipment = (value: string): [EquipmentList, EquipmentList | null] => {
	const primaryIndex = decodeValues(value.substring(0, 1))
	const secondaryIndex = value.length > 1 ? decodeValues(value.substring(1, 2)) : null
	const equipmentList = Object.keys(equipments)
	return [equipmentList[primaryIndex], secondaryIndex ? equipmentList[secondaryIndex] : null]
}

const decodeMelee = (value: string): MeleeList => {
	const meleeIndex = decodeValues(value)
	return Object.keys(melees)[meleeIndex]
}

const decodeMask = (value: string): MaskList => {
	const [categoryIndex, encodedCollection, encodedMaskId] = value.split('')

	const category = Object.keys(allMasks)[+categoryIndex] as CategoryList

	const collectionId = decodeValues(encodedCollection)
	const collections = Object.values(allMasks[category])
	const collection = collections.find(col => col.id === collectionId) ?? collections[0]

	const maskId = decodeValues(encodedMaskId)

	return Object.keys(collection.masks)[maskId] as MaskList
}

const decodeCharacter = (value: string): CharacterList => {
	const characterIndex = decodeValues(value)
	return Object.keys(characters)[characterIndex]
}

interface DecodeArmoury {
	weapon: WeaponData;
	mods?: Partial<Record<ModificationSlot, string>>;
}

export const decodeArmoury = (value: string, data: Record<string, Record<string, WeaponData>>): DecodeArmoury[] => {
	if (value === '_') return []

	const slot = Object.values(Object.values(data)[0])[0].inventorySlot
	const weaponBytes = decompressData(value).split('_')

	const weapons: DecodeArmoury[] = weaponBytes.map(weaponValues => {
		const [typeValue, gunValue, ...modsValue] = weaponValues.split('')
		const type = Object.keys(data)[decodeValues(typeValue)]
		const weaponName = Object.keys(data[type as keyof typeof data])[decodeValues(gunValue)]
		const weaponFind: WeaponFind = {
			slot,
			type: type as WeaponType,
			name: weaponName as AllWeaponList
		}
		const weaponData = findWeapon(weaponFind)

		const mods: Partial<Record<ModificationSlot, string>> = Object.fromEntries(modsValue.map((modValue, i): [string, string] => {
			if (modValue === '0') return ['', '']
			const weaponMods = Object.entries(weaponData.modifications)
			const modType = weaponMods[i][0]
			const modData = weaponMods[i][1][decodeValues(modValue) - 1]
			return [modType, (modData as Modification).name]
		}).filter(v => v[0].length))

		return {
			weapon: weaponData,
			mods
		}
	})

	return weapons
}

const decodeWeapons = (value: string): [number, number] => {
	const [primaryValue, secondaryValue] = value.split('-')
	return [decodeValues(primaryValue), decodeValues(secondaryValue)]
}

export interface LoadedBuild {
	data: string;
	addNewBuild: boolean;
}

const useBuildURLImport = (): Dispatch<SetStateAction<LoadedBuild>> => {

	const [{ data, addNewBuild }, setData] = useState<LoadedBuild>({ data: '', addNewBuild: false })

	const dispatch = useAppDispatch()

	const changePerkDeck = useAbilityStore(state => state.changePerkDeck)
	const changeMask = useCharacterStore(state => state.changeMask)
	const changeCharacter = useCharacterStore(state => state.changeCharacter)
	const changeArmour = useCharacterStore(state => state.changeArmour)
	const changeEquipment = useCharacterStore(state => state.changeEquipment)
	const resetArmoury = useArmouryStore(state => state.resetArmoury)
	const addWeapon = useArmouryStore(state => state.addWeapon)
	const changeThrowable = useWeaponsStore(state => state.changeThrowable)
	const changeMelee = useWeaponsStore(state => state.changeMelee)
	const changeWeapon = useWeaponsStore(state => state.changeWeapon)

	const loadSkills = useCallback((skillsValue: string): void => {

		dispatch(resetSkills())

		const trees: TreeNames[] = ['mastermind', 'enforcer', 'technician', 'ghost', 'fugitive']

		trees.forEach(treeName => {
			Object.values(skills[treeName].subtrees).forEach(subtree => {

				const subtreeBasicChar = decodeValues(skillsValue.substring(0, 1))
				const subtreeAcedChar = decodeValues(skillsValue.substring(1, 2))
				let mask = 1

				const upgrades = [...Object.values(subtree.upgrades)];
				[upgrades[1], upgrades[2]] = [upgrades[2], upgrades[1]]; // semicolons needed
				[upgrades[3], upgrades[4]] = [upgrades[4], upgrades[3]]

				upgrades.forEach(skill => {

					const skillBasicBit = subtreeBasicChar & mask
					const skillAcedBit = subtreeAcedChar & mask

					if (skillBasicBit !== 0 || skillAcedBit !== 0) {
						dispatch(changeSkillState({
							tree: treeName,
							subtree: subtree.name,
							skill,
							oldLevel: 'available',
							direction: 'upgrade'
						}))

						if (skillAcedBit !== 0) {
							dispatch(changeSkillState({
								tree: treeName,
								subtree: subtree.name,
								skill,
								oldLevel: 'basic',
								direction: 'upgrade'
							}))
						}
					}
					mask <<= 1
				})

				skillsValue = skillsValue.slice(2)
			})
		})
	}, [dispatch])

	const loadBuildFromIterable = useCallback((input: string): void => {
		if (!input) return

		const split = input.split('/?')
		const parameters = new URLSearchParams(split[split.length - 1])
		if (!parameters.toString().length) return

		if (addNewBuild) {
			dispatch(addBuild({ changeToNewBuild: true }))
		}

		const decodeAndDispatch: Record<string, (value: string) => void> = {
			s: value => loadSkills(decompressData(value)),
			p: value => {
				const perkDeck = decodePerkDeck(value)
				changePerkDeck(perkDeck)
			},
			a: value => {
				const armour = decodeArmour(value)
				changeArmour(armour)
			},
			t: value => {
				const throwable = decodeThrowable(value)
				changeThrowable(throwable)
			},
			d: value => {
				const [primary, secondary] = decodeEquipment(value)
				changeEquipment('primary', primary)
				changeEquipment('secondary', secondary)
			},
			m: value => {
				const melee = decodeMelee(value)
				changeMelee(melee)
			},
			k: value => {
				const mask = decodeMask(value)
				changeMask(mask)
			},
			c: value => {
				const character = decodeCharacter(value)
				changeCharacter(character)
			},
			ap: value => {
				const weapons = decodeArmoury(value, primary)
				resetArmoury('primary')
				changeWeapon('primary', 0)
				weapons.forEach(({ weapon, mods }) => {
					addWeapon(weapon, mods)
				})
			},
			as: value => {
				const weapons = decodeArmoury(value, secondary)
				resetArmoury('secondary')
				changeWeapon('secondary', 0)
				weapons.forEach(({ weapon, mods }) => {
					addWeapon(weapon, mods)
				})
			},
			w: value => {
				const [primaryIndex, secondaryIndex] = decodeWeapons(value)
				changeWeapon('primary', primaryIndex)
				changeWeapon('secondary', secondaryIndex)
			}
		}

		parameters.forEach((value, key) => decodeAndDispatch[key](value))
	}, [addNewBuild, addWeapon, changeArmour, changeCharacter, changeEquipment, changeMask, changeMelee, changePerkDeck, changeThrowable, changeWeapon, dispatch, loadSkills, resetArmoury])

	useEffect(() => {
		loadBuildFromIterable(data)
	}, [data, loadBuildFromIterable])

	return setData
}

export default useBuildURLImport