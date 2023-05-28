import content from 'data/source/downloadableContent'

import barrel from '../../modifications/barrel'
import grip from '../../modifications/grip'
import magazine from '../../modifications/magazine'
import sight from '../../modifications/sight'
import underbarrel from '../../modifications/underbarrel'
import { type WeaponData } from '../../weaponTypes'
import { assaultRifleBarrelExtPlus, assaultRifleBoost, assaultRifleCustom, assaultRifleGadget } from '../commonModifications/assaultRifleModifications'

const ketchnovByk1: WeaponData = {
	name: 'KETCHNOV Byk-1',
	image: 'groza',
	source: content['Jiu Feng Smuggler Pack 2'],
	inventorySlot: 'primary',
	reputation: 12,
	weaponType: 'Assault Rifle',
	firingMode: 'Selective firing',
	cost: 261e3,
	stats: {
		magazine: 20,
		totalAmmo: 80,
		rateOfFire: 698,
		damage: 88,
		accuracy: 72,
		stability: 52,
		concealment: 8,
		threat: 12,
		reload: 2.9
	},
	extraStats: {
		tacticalReload: 2.16,
		equipDelays: [0.55, 0.55],
		ammoPickup: [2.4, 4.4],
		recoilHorizontal: [-1.02, 1.02],
		recoilVertical: [1.19, 1.53],
		spread: 1.68,
		damageModifier: [1.0, 1.0]
	},
	modifications: {
		barrel: [
			barrel['K-B100 Suppressor']
		],
		barrelExt: assaultRifleBarrelExtPlus,
		boost: assaultRifleBoost,
		custom: assaultRifleCustom,
		gadget: assaultRifleGadget,
		grip: [
			grip['AK Rubber Grip'],
			grip['AK Plastic Grip'],
			grip['AK Wood Grip'],
			grip['Aluminum Grip'],
			grip['Verge AK Grip'],
			grip['Ergonomic AK Grip'],
			grip['Ultimatum AK Grip']
		],
		magazine: [
			magazine['K-B1 Speedmag']
		],
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
			sight['CASSIAN Sharp Sight x3.25'],
			sight['Z5 Owl Glass Universal Scope x2.5']
		],
		underbarrel: [
			underbarrel['Sting Grenade'],
			underbarrel['Frag Round'],
			underbarrel['Viper Grenade']
		]
	}
}

export default ketchnovByk1