import source from 'data/source/miscSources'

import barrelExt from '../../modifications/barrelExt'
import magazine from '../../modifications/magazine'
import slide from '../../modifications/slide'
import { type WeaponData } from '../../weaponTypes'
import { pistolBoost, pistolGadget, pistolSight } from '../commonModifications/pistolModifications'

const interceptor45: WeaponData = {
	name: 'Interceptor .45',
	image: 'usp',
	source: source.Community,
	inventorySlot: 'secondary',
	reputation: 0,
	weaponType: 'Pistol',
	firingMode: 'Semi-Automatic',
	cost: 42e3,
	stats: {
		magazine: 13,
		totalAmmo: 91,
		rateOfFire: 480,
		damage: 80,
		accuracy: 68,
		stability: 52,
		concealment: 29,
		threat: 8,
		reload: 2.2
	},
	extraStats: {
		tacticalReload: 1.47,
		equipDelays: [0.35, 0.5],
		ammoPickup: [2.27, 3.19],
		recoilHorizontal: [-0.85, 0.85],
		recoilVertical: [2.04, 3.06],
		spread: 1.92,
		damageModifier: [1.0, 0.7]
	},
	modifications: {
		barrelExt: [
			barrelExt['Ventilated .45'],
			barrelExt['IPSC Compensator'],
			barrelExt['Roctec Suppressor'],
			barrelExt['Velocity .45'],
			barrelExt['Champion\'s Suppressor'],
			barrelExt['Facepunch Compensator'],
			barrelExt['Standard Issue Suppressor'],
			barrelExt['Medved R4 Suppressor'],
			barrelExt['Size Doesn\'t Matter Suppressor'],
			barrelExt['Monolith Suppressor'],
			barrelExt['Asepsis Suppressor'],
			barrelExt['Flash Hider'],
			barrelExt['Budget Suppressor'],
			barrelExt['Jungle Ninja Suppressor'],
			barrelExt['Hurricane Compensator']
		],
		boost: pistolBoost,
		gadget: pistolGadget,
		magazine: [
			magazine['Extended Magazine (Interceptor)'],
			magazine['I want more Magazine!']
		],
		sight: pistolSight,
		slide: [
			slide['Expert Slide'],
			slide['Match Slide']
		]
	}
}

export default interceptor45