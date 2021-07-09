import { CHANGECREWABILITY, CHANGECREWBOOST, CHANGECREWCHARACTER, CHANGECREWMASK, CHANGECREWOUTFIT, CHANGECREWWEAPON, CHANGEPERKDECK, RESETABILITIES } from 'constants/abilitiesConstant'
import { perk } from 'data/abilities/perks'
import { characterData } from 'data/character/characters'
import { maskData } from 'data/character/masks'
import { WeaponData } from 'data/weapons/guns/weaponTypes'
import { createAction } from 'typesafe-actions'

export const changePerkdeck = createAction(CHANGEPERKDECK)<perk>()

export const changeCrewMask = createAction(CHANGECREWMASK)<[number, maskData]>()
export const changeCrewCharacter = createAction(CHANGECREWCHARACTER)<[number, characterData]>()
export const changeCrewOutfit = createAction(CHANGECREWOUTFIT)<[number, null]>()
export const changeCrewWeapon = createAction(CHANGECREWWEAPON)<[number, WeaponData]>()
export const changeCrewAbility = createAction(CHANGECREWABILITY)<[number, null]>()
export const changeCrewBoost = createAction(CHANGECREWBOOST)<[number, null]>()

export const resetAbilities = createAction(RESETABILITIES)<void>()

export default {
	changePerkdeck,
	changeCrewMask,
	changeCrewCharacter,
	changeCrewOutfit,
	changeCrewWeapon,
	changeCrewAbility,
	changeCrewBoost,
	resetAbilities
}