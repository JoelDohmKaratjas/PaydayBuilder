import content from 'data/source/downloadableContent'
import source from 'data/source/miscSources'

import { WeaponData } from '../weaponTypes'

interface snipersList {
	'Rattlesnake Sniper Rifle': WeaponData;
	'R700 Sniper Rifle': WeaponData;
	'Bernetti Rangehitter Sniper Rifle': WeaponData;
	'Káng Arms X1 Sniper Rifle': WeaponData;
	'Platypus 70 Sniper Rifle': WeaponData;
	'Lebensauger .308 Sniper Rifle': WeaponData;
	'Desertfox Sniper Rifle': WeaponData;
	'Contractor .308 Sniper Rifle': WeaponData;
	'R93 Sniper Rifle': WeaponData;
	'Repeater 1874 Sniper Rifle': WeaponData;
	'Grom Sniper Rifle': WeaponData;
	'Nagant Sniper Rifle': WeaponData;
	'Thanatos .50 cal Sniper Rifle': WeaponData;
}

const snipers: snipersList = {
	'Rattlesnake Sniper Rifle': {
		name: 'Rattlesnake Sniper Rifle',
		image: 'msr',
		source: content['Gage Sniper Pack'],
		inventorySlot: 'primary',
		reputation: 15,
		weaponType: 'Sniper',
		firingMode: 'Bolt action',
		cost: 327e3,
		stats: {
			magazine: 10,
			totalAmmo: 40,
			rateOfFire: 60,
			damage: 246,
			accuracy: 88,
			stability: 28,
			concealment: 5,
			threat: 26
		},
		extraStats: {
			tacticalReload: 2.6,
			reload: 3.7,
			equipDelays: [0.7, 0.6],
			ammoPickup: [2.0, 3.0],
			recoilHorizontal: [-0.69, 0.69],
			recoilVertical: [6.9, 11.04],
			spread: 0.72,
			damageModifier: [1.0, 1.5]
		}
	},
	'R700 Sniper Rifle': {
		name: 'R700 Sniper Rifle',
		image: 'r700',
		source: content['Fugitive Weapon Pack'],
		inventorySlot: 'primary',
		reputation: 23,
		weaponType: 'Sniper',
		firingMode: 'Bolt action',
		cost: 510e3,
		stats: {
			magazine: 10,
			totalAmmo: 40,
			rateOfFire: 75,
			damage: 246,
			accuracy: 92,
			stability: 28,
			concealment: 10,
			threat: 28
		},
		extraStats: {
			tacticalReload: 3.35,
			reload: 4.7,
			equipDelays: [0.75, 0.45],
			ammoPickup: [2.0, 3.0],
			recoilHorizontal: [-0.69, 0.69],
			recoilVertical: [6.9, 11.04],
			spread: 0.48,
			damageModifier: [1.0, 1.5]
		}
	},
	'Bernetti Rangehitter Sniper Rifle': {
		name: 'Bernetti Rangehitter Sniper Rifle',
		image: 'sbl',
		source: content['Gunslinger Weapon Pack'],
		inventorySlot: 'primary',
		reputation: 26,
		weaponType: 'Sniper',
		firingMode: 'Lever Action',
		cost: 581e3,
		stats: {
			magazine: 10,
			totalAmmo: 50,
			rateOfFire: 120,
			damage: 196,
			accuracy: 68,
			stability: 20,
			concealment: 19,
			threat: 28
		},
		extraStats: {
			tacticalReload: [2.27, 0.57],
			reload: 7.73,
			equipDelays: [0.6, 0.6],
			ammoPickup: [2.5, 3.75],
			recoilHorizontal: [-0.75, 0.75],
			recoilVertical: [5.0, 7.5],
			spread: 1.92,
			damageModifier: [1.0, 1.1]
		}
	},
	'Káng Arms X1 Sniper Rifle': {
		name: 'Káng Arms X1 Sniper Rifle',
		image: 'qbu88',
		source: content['Jiu Feng Smuggler Pack 2'],
		inventorySlot: 'primary',
		reputation: -1,
		weaponType: 'Sniper',
		firingMode: 'Bolt action',
		cost: 628e3,
		stats: {
			magazine: 10,
			totalAmmo: 40,
			rateOfFire: 150,
			damage: 160,
			accuracy: 80,
			stability: 48,
			concealment: 12,
			threat: 12
		},
		extraStats: {
			tacticalReload: 2.3,
			reload: 3.3,
			equipDelays: [0.9, 0.9],
			ammoPickup: [2.0, 3.0],
			recoilHorizontal: [-0.72, 0.72],
			recoilVertical: [2.7, 3.6],
			spread: 1.2,
			damageModifier: [1.0, 1.1]
		}
	},
	'Platypus 70 Sniper Rifle': {
		name: 'Platypus 70 Sniper Rifle',
		image: 'model70',
		source: source['Base Game'],
		inventorySlot: 'primary',
		reputation: 32,
		weaponType: 'Sniper',
		firingMode: 'Bolt action',
		cost: 725e3,
		stats: {
			magazine: 5,
			totalAmmo: 30,
			rateOfFire: 60,
			damage: 480,
			accuracy: 92,
			stability: 12,
			concealment: 6,
			threat: 28
		},
		extraStats: {
			tacticalReload: 3.35,
			reload: 4.5,
			equipDelays: [0.75, 0.45],
			ammoPickup: [0.7, 1.0],
			recoilHorizontal: [-0.81, 0.81],
			recoilVertical: [8.1, 12.96],
			spread: 0.48,
			damageModifier: [1.0, 1.8]
		}
	},
	'Lebensauger .308 Sniper Rifle': {
		name: 'Lebensauger .308 Sniper Rifle',
		image: 'wa2000',
		source: content['Gage Ninja Pack'],
		inventorySlot: 'primary',
		reputation: 33,
		weaponType: 'Sniper',
		firingMode: 'Semi-Automatic',
		cost: 749e3,
		stats: {
			magazine: 10,
			totalAmmo: 40,
			rateOfFire: 150,
			damage: 160,
			accuracy: 92,
			stability: 20,
			concealment: 16,
			threat: 12
		},
		extraStats: {
			tacticalReload: 4.64,
			reload: 6.2,
			equipDelays: [0.9, 0.9],
			ammoPickup: [2.0, 3.0],
			recoilHorizontal: [-0.5, 0.5],
			recoilVertical: [5.0, 6.25],
			spread: 0.48,
			damageModifier: [1.0, 1.1]
		}
	},
	'Desertfox Sniper Rifle': {
		name: 'Desertfox Sniper Rifle',
		image: 'desertfox',
		source: content['John Wick Weapon Pack'],
		inventorySlot: 'primary',
		reputation: 34,
		weaponType: 'Sniper',
		firingMode: 'Bolt action',
		cost: 773e3,
		stats: {
			magazine: 5,
			totalAmmo: 30,
			rateOfFire: 60,
			damage: 480,
			accuracy: 76,
			stability: 12,
			concealment: 19,
			threat: 28
		},
		extraStats: {
			tacticalReload: 2.72,
			reload: 3.86,
			equipDelays: [0.75, 0.45],
			ammoPickup: [0.7, 1.0],
			recoilHorizontal: [-0.81, 0.81],
			recoilVertical: [8.1, 12.96],
			spread: 1.44,
			damageModifier: [1.0, 1.8]
		}
	},
	'Contractor .308 Sniper Rifle': {
		name: 'Contractor .308 Sniper Rifle',
		image: 'tti',
		source: content['John Wick Heists'],
		inventorySlot: 'primary',
		reputation: 34,
		weaponType: 'Sniper',
		firingMode: 'Semi-Automatic',
		cost: 773e3,
		stats: {
			magazine: 20,
			totalAmmo: 40,
			rateOfFire: 150,
			damage: 160,
			accuracy: 60,
			stability: 4,
			concealment: 16,
			threat: 12
		},
		extraStats: {
			tacticalReload: 2.3,
			reload: 3.3,
			equipDelays: [0.9, 0.9],
			ammoPickup: [2.0, 3.0],
			recoilHorizontal: [-0.87, 0.87],
			recoilVertical: [4.35, 5.8],
			spread: 2.4,
			damageModifier: [1.0, 1.1]
		}
	},
	'R93 Sniper Rifle': {
		name: 'R93 Sniper Rifle',
		image: 'r93',
		source: content['Gage Sniper Pack'],
		inventorySlot: 'primary',
		reputation: 35,
		weaponType: 'Sniper',
		firingMode: 'Bolt action',
		cost: 798e3,
		stats: {
			magazine: 6,
			totalAmmo: 30,
			rateOfFire: 50,
			damage: 480,
			accuracy: 92,
			stability: 12,
			concealment: 5,
			threat: 31
		},
		extraStats: {
			tacticalReload: 2.82,
			reload: 3.82,
			equipDelays: [0.65, 0.7],
			ammoPickup: [0.7, 1.0],
			recoilHorizontal: [-0.27, 0.27],
			recoilVertical: [8.1, 10.26],
			spread: 0.48,
			damageModifier: [1.0, 1.8]
		}
	},
	'Repeater 1874 Sniper Rifle': {
		name: 'Repeater 1874 Sniper Rifle',
		image: 'winchester1874',
		source: content['The Butcher\'s Western Pack'],
		inventorySlot: 'primary',
		reputation: 36,
		weaponType: 'Sniper',
		firingMode: 'Lever Action',
		cost: 822e3,
		stats: {
			magazine: 15,
			totalAmmo: 45,
			rateOfFire: 86,
			damage: 246,
			accuracy: 92,
			stability: 20,
			concealment: 12,
			threat: 28
		},
		extraStats: {
			tacticalReload: [2.27, 0.57],
			reload: 10.57,
			equipDelays: [0.9, 0.9],
			ammoPickup: [2.25, 3.38],
			recoilHorizontal: [-0.75, 0.75],
			recoilVertical: [7.5, 12.0],
			spread: 0.48,
			damageModifier: [1.0, 1.5]
		}
	},
	'Grom Sniper Rifle': {
		name: 'Grom Sniper Rifle',
		image: 'siltstone',
		source: content['Gage Russian Weapon Pack'],
		inventorySlot: 'primary',
		reputation: 46,
		weaponType: 'Sniper',
		firingMode: 'Semi-Automatic',
		cost: 920e3,
		stats: {
			magazine: 10,
			totalAmmo: 40,
			rateOfFire: 150,
			damage: 160,
			accuracy: 72,
			stability: 4,
			concealment: 16,
			threat: 12
		},
		extraStats: {
			tacticalReload: 2.3,
			reload: 3.3,
			equipDelays: [0.9, 0.9],
			ammoPickup: [2.0, 3.0],
			recoilHorizontal: [-1.16, 1.16],
			recoilVertical: [4.35, 5.8],
			spread: 1.68,
			damageModifier: [1.0, 1.1]
		}
	},
	'Nagant Sniper Rifle': {
		name: 'Nagant Sniper Rifle',
		image: 'mosin',
		source: content['Gage Historical Pack'],
		inventorySlot: 'primary',
		reputation: 54,
		weaponType: 'Sniper',
		firingMode: 'Bolt action',
		cost: 920e3,
		stats: {
			magazine: 5,
			totalAmmo: 25,
			rateOfFire: 60,
			damage: 480,
			accuracy: 92,
			stability: 12,
			concealment: 6,
			threat: 28
		},
		extraStats: {
			tacticalReload: 3.85,
			reload: 3.85,
			equipDelays: [0.5, 0.6],
			ammoPickup: [0.7, 1.0],
			recoilHorizontal: [-0.81, 0.81],
			recoilVertical: [8.1, 12.96],
			spread: 0.48,
			damageModifier: [1.0, 1.8]
		}
	},
	'Thanatos .50 cal Sniper Rifle': {
		name: 'Thanatos',
		image: 'm95',
		source: content['Gage Sniper Pack'],
		inventorySlot: 'primary',
		reputation: 65,
		weaponType: 'Sniper',
		firingMode: 'Bolt action',
		cost: 920e3,
		stats: {
			magazine: 5,
			totalAmmo: 15,
			rateOfFire: 40,
			damage: 3500,
			accuracy: 92,
			stability: 4,
			concealment: 1,
			threat: 37
		},
		extraStats: {
			tacticalReload: 3.96,
			reload: 5.23,
			equipDelays: [0.9, 0.9],
			ammoPickup: [0.05, 0.65],
			recoilHorizontal: [-1.45, 1.45],
			recoilVertical: [8.7, 11.02],
			spread: 0.48,
			damageModifier: [1.0, 1.3]
		}
	}
}

export default snipers