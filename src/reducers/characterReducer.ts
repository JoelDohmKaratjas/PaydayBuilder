import actions from 'actions/characterAction'
import { armourData } from 'data/character/armours'
import { characterData } from 'data/character/characters'
import { equipmentData } from 'data/character/equipment'
import { maskData } from 'data/character/masks'
import defaultstate from 'defaultStates/characterDefaultState'
import { getType } from 'typesafe-actions'

const characterReducer = (state = defaultstate, action: Record<'type' | 'payload', any>) => {
	switch (action.type) {
		case getType(actions.changeMask):
			const mask: maskData = action.payload
			return {
				...state,
				mask
			}
		case getType(actions.changeCharacter):
			const character: characterData = action.payload
			return {
				...state,
				character
			}
		case getType(actions.changeArmour):
			const armour: armourData = action.payload
			return {
				...state,
				armour
			}
		case getType(actions.changeEquipment):
			const [equipment, slot]: [equipmentData, 'primary' | 'secondary'] = action.payload
			return {
				...state,
				equipment: {
					...state.equipment,
					[slot]: equipment
				}
			}
		case getType(actions.resetCharacter):
			return defaultstate
		default:
			return state
	}
}

export default characterReducer