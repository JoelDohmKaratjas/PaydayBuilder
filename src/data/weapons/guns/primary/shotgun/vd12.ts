import content from 'data/source/downloadableContent'

import barrel from '../../modifications/barrel'
import exclusiveSet from '../../modifications/exclusiveSet'
import foregrip from '../../modifications/foregrip'
import grip from '../../modifications/grip'
import sight from '../../modifications/sight'
import stock from '../../modifications/stock'
import { type WeaponData } from '../../weaponTypes'
import { shotgunAmmunition, shotgunBarrelExt, shotgunBoost, shotgunCustom, shotgunGadget, shotgunSecondarySight } from '../commonModifications/shotgunModifications'

const vd12: WeaponData = {
	name: 'VD-12',
	image: 'sko12',
	source: content['McShay Weapon Pack 2'],
	inventorySlot: 'primary',
	reputation: 24,
	weaponType: 'Shotgun',
	firingMode: 'Selective firing',
	cost: 270e3,
	stats: {
		magazine: 28,
		totalAmmo: 56,
		rateOfFire: 273,
		damage: 65,
		accuracy: 28,
		stability: 44,
		concealment: 6,
		threat: 28,
		reload: 3.6
	},
	extraStats: {
		tacticalReload: 3.1,
		equipDelays: [0.6, 0.6],
		ammoPickup: [2.8, 4.2],
		recoilHorizontal: [-0.38, 0.38],
		recoilVertical: [3.61, 3.8],
		spread: 4.32,
		damageModifier: [1.0, 0.5]
	},
	modifications: {
		ammunition: shotgunAmmunition,
		barrel: [
			barrel['Long Barrel (VD-12)'],
			barrel['Short Barrel (VD-12)']
		],
		barrelExt: shotgunBarrelExt,
		boost: shotgunBoost,
		custom: shotgunCustom,
		exclusiveSet: [
			exclusiveSet.Stateside
		],
		foregrip: [
			foregrip['Front Mounting Rail']
		],
		gadget: shotgunGadget,
		grip: [
			grip['Ergo Grip (Main)'],
			grip['Pro Grip'],
			grip['Rubber Grip'],
			grip['Straight Grip'],
			grip['Contractor Grip'],
			grip['Titanium Skeleton Grip'],
			grip['VD-12 Grip'],
			grip['Ursa Minor Grip']
		],
		secondarySight: shotgunSecondarySight,
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
			stock['Tactical Stock (Main)'],
			stock['Wide Stock'],
			stock['War-Torn Stock'],
			stock['2 Piece Stock'],
			stock['Contractor Stock'],
			stock['VD-12 Stock'],
			stock['Ursa Minor Stock'],
			stock['Starlight Stock']
		]
	}
}

export default vd12