import content from 'data/source/downloadableContent'

import ammunition from '../../modifications/ammunition'
import sight from '../../modifications/sight'
import stock from '../../modifications/stock'
import { type WeaponData } from '../../weaponTypes'
import { specialBoost } from '../commonModifications/specialModifications'

const airbow: WeaponData = {
	name: 'Airbow',
	image: 'ecp',
	source: content['h3h3 Character Pack'],
	inventorySlot: 'primary',
	reputation: 0,
	weaponType: 'Special',
	firingMode: 'Semi-Automatic',
	cost: 372e3,
	stats: {
		magazine: 6,
		totalAmmo: 30,
		rateOfFire: 120,
		damage: 700,
		accuracy: 84,
		stability: 84,
		concealment: 5,
		threat: 10,
		reload: 3.0
	},
	extraStats: {
		tacticalReload: 3.0,
		equipDelays: [0.5, 0.7],
		ammoPickup: null,
		recoilHorizontal: [-0.9, 0.9],
		recoilVertical: [-0.18, 0.36],
		spread: 0.67,
		damageModifier: null
	},
	modifications: {
		ammunition: [
			ammunition['Explosive Arrow (Airbow)'],
			ammunition['Poison Arrow (Airbow)']
		],
		boost: specialBoost,
		sight: [
			sight['Holographic Sight x1.5'],
			sight['The Professional\'s Choice Sight x1.5'],
			sight['Surgeon Sight x1.25'],
			sight['Acough Optic Scope x3.25'],
			sight['Military Red Dot Sight x2'],
			sight['Military Red Dot Sight Special x2'],
			sight['Milspec Scope x2'],
			sight['See More Sight x1.5'],
			sight['Combat Sight x2'],
			sight['Compact Holosight x1.5'],
			sight['Speculator Sight x1.5'],
			sight['Trigonom Sight x1.5'],
			sight['Solar Sight x1.5'],
			sight['Compact Tactical Box Sight x2.5'],
			sight['Compact Profile Sight x1.5'],
			sight['Maelstrom Sight x1.5'],
			sight['CASSIAN Elite Score x4.5'],
			sight['Biometric Analyzer x1.25'],
			sight['Advanced Combat Sight x3.25'],
			sight['CASSIAN Sharp Sight x3.25'],
			sight['Z5 Owl Glass Universal Scope x2.5']
		],
		stock: [
			stock['Light Stock (Airbow)']
		]
	}
}

export default airbow