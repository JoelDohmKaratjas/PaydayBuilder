import content from 'data/source/downloadableContent'
import source from 'data/source/miscSources'

import { WeaponData } from '../weaponTypes'

export interface assaultRiflesList {
	'AMCAR Rifle': WeaponData;
	'Commando 553 Rifle': WeaponData;
	'Eagle Heavy Rifle': WeaponData;
	'Union 5.56 Rifle': WeaponData;
	'AK Rifle': WeaponData;
	'CAR-4 Rifle': WeaponData;
	'UAR Rifle': WeaponData;
	'KETCHNOV Byk-1 Assault Rifle': WeaponData;
	'Cavity 9mm': WeaponData;
	'AK.762': WeaponData;
	'JP36 Rifle': WeaponData;
	'AK17 Rifle': WeaponData;
	'Golden AK.762 Rifle': WeaponData;
	'Bootleg Rifle': WeaponData;
	'Queen\'s Wrath Rifle': WeaponData;
	'Galant Rifle': WeaponData;
	'M308 Rifle': WeaponData;
	'Clarion Rifle': WeaponData;
	'Lion\'s Roar Rifle': WeaponData;
	'Valkyria Rifle': WeaponData;
	'AK5 Rifle': WeaponData;
	'Gecko 7.62 Rifle': WeaponData;
	'Tempest-21 Rifle': WeaponData;
	'AMR-16 Rifle': WeaponData;
	'Little Friend 7.62 Assault Rifle': WeaponData;
	'Falcon Rifle': WeaponData;
	'Gewehr 3 Rifle': WeaponData;
}

const assaultRifles: assaultRiflesList = {
	'AMCAR Rifle': {
		name: 'AMCAR Rifle',
		image: 'amcar',
		source: source['Base Game'],
		inventorySlot: 'primary',
		reputation: 0,
		weaponType: 'Assault Rifle',
		firingMode: 'Selective firing',
		cost: 42e3,
		stats: {
			magazine: 20,
			totalAmmo: 220,
			rateOfFire: 545,
			damage: 42,
			accuracy: 36,
			stability: 76,
			concealment: 21,
			threat: 14
		},
		extraStats: {
			tacticalReload: 2.25,
			reload: 3.0,
			equipDelays: [0.55, 0.6],
			ammoPickup: [6.6, 12.1],
			recoilHorizontal: [-1.1, 1.1],
			recoilVertical: [0.66, 0.88],
			spread: 3.84,
			damageModifier: [1.0, 1.0]
		}
	},
	'Commando 553 Rifle': {
		name: 'Commando 553 Rifle',
		image: 's552',
		source: content['Armored Transport'],
		inventorySlot: 'primary',
		reputation: 0,
		weaponType: 'Assault Rifle',
		firingMode: 'Selective firing',
		cost: 42e3,
		stats: {
			magazine: 30,
			totalAmmo: 240,
			rateOfFire: 714,
			damage: 42,
			accuracy: 36,
			stability: 56,
			concealment: 22,
			threat: 12
		},
		extraStats: {
			tacticalReload: 1.65,
			reload: 2.4,
			equipDelays: [0.7, 0.55],
			ammoPickup: [7.2, 13.2],
			recoilHorizontal: [-1.6, 1.6],
			recoilVertical: [0.96, 1.28],
			spread: 3.84,
			damageModifier: [1.0, 1.0]
		}
	},
	'Eagle Heavy Rifle': {
		name: 'Eagle Heavy Rifle',
		image: 'scar',
		source: content['Gage Weapon Pack #01'],
		inventorySlot: 'primary',
		reputation: 0,
		weaponType: 'Assault Rifle',
		firingMode: 'Selective firing',
		cost: 42e3,
		stats: {
			magazine: 30,
			totalAmmo: 100,
			rateOfFire: 612,
			damage: 98,
			accuracy: 72,
			stability: 44,
			concealment: 8,
			threat: 22
		},
		extraStats: {
			tacticalReload: 2.2,
			reload: 3.15,
			equipDelays: [0.5, 0.6],
			ammoPickup: [3.0, 4.5],
			recoilHorizontal: [-1.9, 1.9],
			recoilVertical: [1.14, 1.52],
			spread: 1.68,
			damageModifier: [1.0, 1.0]
		}
	},
	'Union 5.56 Rifle': {
		name: 'Union 5.56 Rifle',
		image: 'corgi',
		source: source['Reservoir Dogs'],
		inventorySlot: 'primary',
		reputation: 0,
		weaponType: 'Assault Rifle',
		firingMode: 'Selective firing',
		cost: 42e3,
		stats: {
			magazine: 30,
			totalAmmo: 150,
			rateOfFire: 857,
			damage: 58,
			accuracy: 68,
			stability: 68,
			concealment: 20,
			threat: 12
		},
		extraStats: {
			tacticalReload: 2.1,
			reload: 2.9,
			equipDelays: [0.6, 0.6],
			ammoPickup: [4.5, 8.25],
			recoilHorizontal: [-1.3, 1.3],
			recoilVertical: [0.78, 1.04],
			spread: 1.92,
			damageModifier: [1.0, 1.0]
		}
	},
	'AK Rifle': {
		name: 'AK Rifle',
		image: 'ak74',
		source: source['Base Game'],
		inventorySlot: 'primary',
		reputation: 1,
		weaponType: 'Assault Rifle',
		firingMode: 'Selective firing',
		cost: 42e3,
		stats: {
			magazine: 30,
			totalAmmo: 150,
			rateOfFire: 652,
			damage: 56,
			accuracy: 48,
			stability: 60,
			concealment: 16,
			threat: 14
		},
		extraStats: {
			tacticalReload: 2.8,
			reload: 3.87,
			equipDelays: [0.5, 0.5],
			ammoPickup: [4.5, 8.25],
			recoilHorizontal: [-1.5, 1.5],
			recoilVertical: [0.9, 1.2],
			spread: 3.12,
			damageModifier: [1.0, 1.0]
		}
	},
	'CAR-4 Rifle': {
		name: 'CAR-4 Rifle',
		image: 'new_m4',
		source: source['Base Game'],
		inventorySlot: 'primary',
		reputation: 4,
		weaponType: 'Assault Rifle',
		firingMode: 'Selective firing',
		cost: 95e3,
		stats: {
			magazine: 30,
			totalAmmo: 150,
			rateOfFire: 600,
			damage: 52,
			accuracy: 44,
			stability: 60,
			concealment: 20,
			threat: 14
		},
		extraStats: {
			tacticalReload: 2.67,
			reload: 3.34,
			equipDelays: [0.6, 0.6],
			ammoPickup: [4.5, 8.25],
			recoilHorizontal: [-1.5, 1.5],
			recoilVertical: [0.9, 1.2],
			spread: 3.36,
			damageModifier: [1.0, 1.0]
		}
	},
	'UAR Rifle': {
		name: 'UAR Rifle',
		image: 'aug',
		source: source['Base Game'],
		inventorySlot: 'primary',
		reputation: 8,
		weaponType: 'Assault Rifle',
		firingMode: 'Selective firing',
		cost: 176e3,
		stats: {
			magazine: 30,
			totalAmmo: 150,
			rateOfFire: 750,
			damage: 55,
			accuracy: 64,
			stability: 40,
			concealment: 20,
			threat: 14
		},
		extraStats: {
			tacticalReload: 2.5,
			reload: 3.3,
			equipDelays: [0.5, 0.5],
			ammoPickup: [4.5, 8.25],
			recoilHorizontal: [-2.0, 2.0],
			recoilVertical: [1.2, 1.6],
			spread: 2.16,
			damageModifier: [1.0, 1.0]
		}
	},
	'KETCHNOV Byk-1 Assault Rifle': {
		name: 'KETCHNOV Byk-1 Assault Rifle',
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
			threat: 12
		},
		extraStats: {
			tacticalReload: 2.16,
			reload: 2.9,
			equipDelays: [0.55, 0.55],
			ammoPickup: [2.4, 4.4],
			recoilHorizontal: [-1.02, 1.02],
			recoilVertical: [1.19, 1.53],
			spread: 1.68,
			damageModifier: [1.0, 1.0]
		}
	},
	'Cavity 9mm': {
		name: 'Cavity 9mm',
		image: 'sub2000',
		source: content['The Golden Grin Casino Heist'],
		inventorySlot: 'primary',
		reputation: 15,
		weaponType: 'Assault Rifle',
		firingMode: 'Semi-Automatic',
		cost: 327e3,
		stats: {
			magazine: 33,
			totalAmmo: 66,
			rateOfFire: 706,
			damage: 160,
			accuracy: 72,
			stability: 32,
			concealment: 27,
			threat: 31
		},
		extraStats: {
			tacticalReload: 2.3,
			reload: 3.3,
			equipDelays: [0.9, 0.9],
			ammoPickup: [1.19, 2.64],
			recoilHorizontal: [-2.2, 2.2],
			recoilVertical: [1.32, 1.76],
			spread: 1.68,
			damageModifier: [1.0, 1.0]
		}
	},
	'AK.762': {
		name: 'AK.762',
		image: 'akm',
		source: source['Base Game'],
		inventorySlot: 'primary',
		reputation: 16,
		weaponType: 'Assault Rifle',
		firingMode: 'Selective firing',
		cost: 349e3,
		stats: {
			magazine: 30,
			totalAmmo: 90,
			rateOfFire: 561,
			damage: 97,
			accuracy: 60,
			stability: 44,
			concealment: 13,
			threat: 22
		},
		extraStats: {
			tacticalReload: 2.8,
			reload: 3.87,
			equipDelays: [0.5, 0.5],
			ammoPickup: [2.7, 4.05],
			recoilHorizontal: [-1.9, 1.9],
			recoilVertical: [1.14, 1.52],
			spread: 2.4,
			damageModifier: [1.0, 1.0]
		}
	},
	'JP36 Rifle': {
		name: 'JP36',
		image: 'g36',
		source: source['Base Game'],
		inventorySlot: 'primary',
		reputation: 16,
		weaponType: 'Assault Rifle',
		firingMode: 'Selective firing',
		cost: 349e3,
		stats: {
			magazine: 3,
			totalAmmo: 240,
			rateOfFire: 706,
			damage: 44,
			accuracy: 40,
			stability: 64,
			concealment: 19,
			threat: 13
		},
		extraStats: {
			tacticalReload: 2.85,
			reload: 3.85,
			equipDelays: [0.6, 0.6],
			ammoPickup: [7.2, 13.2],
			recoilHorizontal: [-1.4, 1.4],
			recoilVertical: [0.84, 1.12],
			spread: 3.6,
			damageModifier: [1.0, 1.0]
		}
	},
	'AK17 Rifle': {
		name: 'AK17 Rifle',
		image: 'flint',
		source: content['Gage Russian Weapon Pack'],
		inventorySlot: 'primary',
		reputation: 16,
		weaponType: 'Assault Rifle',
		firingMode: 'Selective firing',
		cost: 350e3,
		stats: {
			magazine: 35,
			totalAmmo: 105,
			rateOfFire: 652,
			damage: 99,
			accuracy: 60,
			stability: 60,
			concealment: 16,
			threat: 14
		},
		extraStats: {
			tacticalReload: 2.26,
			reload: 3.37,
			equipDelays: [0.5, 0.5],
			ammoPickup: [3.15, 4.72],
			recoilHorizontal: [-1.5, 1.5],
			recoilVertical: [0.9, 1.2],
			spread: 2.4,
			damageModifier: [1.0, 1.0]
		}
	},
	'Golden AK.762 Rifle': {
		name: 'Golden AK.762 Rifle',
		image: 'akm_gold',
		source: source.Community,
		inventorySlot: 'primary',
		reputation: 17,
		weaponType: 'Assault Rifle',
		firingMode: 'Selective firing',
		cost: 372e3,
		stats: {
			magazine: 30,
			totalAmmo: 90,
			rateOfFire: 561,
			damage: 97,
			accuracy: 60,
			stability: 44,
			concealment: 11,
			threat: 22
		},
		extraStats: {
			tacticalReload: 2.8,
			reload: 3.87,
			equipDelays: [0.5, 0.5],
			ammoPickup: [2.7, 4.05],
			recoilHorizontal: [-1.9, 1.9],
			recoilVertical: [1.14, 1.52],
			spread: 2.4,
			damageModifier: [1.0, 1.0]
		}
	},
	'Bootleg Rifle': {
		name: 'Bootleg Rifle',
		image: 'tecci',
		source: content['Sydney Character Pack'],
		inventorySlot: 'primary',
		reputation: 21,
		weaponType: 'Assault Rifle',
		firingMode: 'Selective firing',
		cost: 464e3,
		stats: {
			magazine: 100,
			totalAmmo: 200,
			rateOfFire: 667,
			damage: 40,
			accuracy: 24,
			stability: 52,
			concealment: 20,
			threat: 14
		},
		extraStats: {
			tacticalReload: 3.8,
			reload: 4.7,
			equipDelays: [0.6, 0.6],
			ammoPickup: [6, 11],
			recoilHorizontal: [-1.7, 1.7],
			recoilVertical: [1.02, 1.36],
			spread: 4.56,
			damageModifier: [1.0, 1.0]
		}
	},
	'Queen\'s Wrath Rifle': {
		name: 'Queen\'s Wrath Rifle',
		image: 'l85a2',
		source: content['Clover Character Pack'],
		inventorySlot: 'primary',
		reputation: 24,
		weaponType: 'Assault Rifle',
		firingMode: 'Selective firing',
		cost: 534e3,
		stats: {
			magazine: 30,
			totalAmmo: 150,
			rateOfFire: 723,
			damage: 58,
			accuracy: 64,
			stability: 60,
			concealment: 16,
			threat: 12
		},
		extraStats: {
			tacticalReload: 3.5,
			reload: 4.5,
			equipDelays: [0.75, 0.45],
			ammoPickup: [4.5, 8.25],
			recoilHorizontal: [-1.8, 1.8],
			recoilVertical: [1.2, 1.65],
			spread: 2.16,
			damageModifier: [1.0, 1.0]
		}
	},
	'Galant Rifle': {
		name: 'Galant Rifle',
		image: 'ching',
		source: source['Base Game'],
		inventorySlot: 'primary',
		reputation: 25,
		weaponType: 'Assault Rifle',
		firingMode: 'Semi-Automatic',
		cost: 557e3,
		stats: {
			magazine: 8,
			totalAmmo: 72,
			rateOfFire: 600,
			damage: 160,
			accuracy: 84,
			stability: 36,
			concealment: 20,
			threat: 31
		},
		extraStats: {
			tacticalReload: 2.56,
			reload: 1.52,
			equipDelays: [0.55, 0.6],
			ammoPickup: [1.3, 2.88],
			recoilHorizontal: [-2.1, 2.1],
			recoilVertical: [1.26, 1.68],
			spread: 0.96,
			damageModifier: [1.0, 1.0]
		}
	},
	'M308 Rifle': {
		name: 'M308 Rifle',
		image: 'new_m14',
		source: source['Base Game'],
		inventorySlot: 'primary',
		reputation: 26,
		weaponType: 'Assault Rifle',
		firingMode: 'Selective firing',
		cost: 581e3,
		stats: {
			magazine: 10,
			totalAmmo: 70,
			rateOfFire: 706,
			damage: 160,
			accuracy: 84,
			stability: 36,
			concealment: 8,
			threat: 31
		},
		extraStats: {
			tacticalReload: 2.65,
			reload: 3.15,
			equipDelays: [0.55, 0.6],
			ammoPickup: [1.26, 2.8],
			recoilHorizontal: [-2.1, 2.1],
			recoilVertical: [1.26, 1.68],
			spread: 0.96,
			damageModifier: [1.0, 1.0]
		}
	},
	'Clarion Rifle': {
		name: 'Clarion Rifle',
		image: 'famas',
		source: content['Gage Assault Pack'],
		inventorySlot: 'primary',
		reputation: 27,
		weaponType: 'Assault Rifle',
		firingMode: 'Selective firing',
		cost: 605e3,
		stats: {
			magazine: 30,
			totalAmmo: 240,
			rateOfFire: 1000,
			damage: 41,
			accuracy: 36,
			stability: 68,
			concealment: 24,
			threat: 14
		},
		extraStats: {
			tacticalReload: 2.72,
			reload: 3.78,
			equipDelays: [0.6, 0.55],
			ammoPickup: [7.2, 13.2],
			recoilHorizontal: [-1.3, 1.3],
			recoilVertical: [0.78, 1.04],
			spread: 3.84,
			damageModifier: [1.0, 1.0]
		}
	},
	'Lion\'s Roar Rifle': {
		name: 'Lion\'s Roar Rifle',
		image: 'vhs',
		source: content['Dragan Character Pack'],
		inventorySlot: 'primary',
		reputation: 28,
		weaponType: 'Assault Rifle',
		firingMode: 'Selective firing',
		cost: 628e3,
		stats: {
			magazine: 30,
			totalAmmo: 150,
			rateOfFire: 857,
			damage: 58,
			accuracy: 60,
			stability: 64,
			concealment: 17,
			threat: 12
		},
		extraStats: {
			tacticalReload: 3.2,
			reload: 4.75,
			equipDelays: [0.6, 0.6],
			ammoPickup: [4.5, 8.25],
			recoilHorizontal: [-1.4, 1.4],
			recoilVertical: [0.84, 1.12],
			spread: 2.4,
			damageModifier: [1.0, 1.0]
		}
	},
	'Valkyria Rifle': {
		name: 'Valkyria Rifle',
		image: 'asval',
		source: content['Sokol Character Pack'],
		inventorySlot: 'primary',
		reputation: 29,
		weaponType: 'Assault Rifle',
		firingMode: 'Selective firing',
		cost: 652e3,
		stats: {
			magazine: 30,
			totalAmmo: 220,
			rateOfFire: 896,
			damage: 41,
			accuracy: 56,
			stability: 64,
			concealment: 26,
			threat: 0
		},
		extraStats: {
			tacticalReload: 2.6,
			reload: 3.7,
			equipDelays: [0.5, 0.5],
			ammoPickup: [6.6, 12.1],
			recoilHorizontal: [-1.4, 1.4],
			recoilVertical: [0.84, 1.12],
			spread: 2.64,
			damageModifier: [1.0, 1.0]
		}
	},
	'AK5 Rifle': {
		name: 'AK5 Rifle',
		image: 'ak5',
		source: source['Base Game'],
		inventorySlot: 'primary',
		reputation: 33,
		weaponType: 'Assault Rifle',
		firingMode: 'Selective firing',
		cost: 749e3,
		stats: {
			magazine: 30,
			totalAmmo: 150,
			rateOfFire: 706,
			damage: 56,
			accuracy: 60,
			stability: 60,
			concealment: 18,
			threat: 14
		},
		extraStats: {
			tacticalReload: 2.05,
			reload: 3.08,
			equipDelays: [0.45, 0.6],
			ammoPickup: [4.5, 8.25],
			recoilHorizontal: [-1.5, 1.5],
			recoilVertical: [0.9, 1.2],
			spread: 2.4,
			damageModifier: [1.0, 1.0]
		}
	},
	'Gecko 7.62 Rifle': {
		name: 'Gecko 7.62 Rifle',
		image: 'galil',
		source: content['Gage Assault Pack'],
		inventorySlot: 'primary',
		reputation: 34,
		weaponType: 'Assault Rifle',
		firingMode: 'Selective firing',
		cost: 773e3,
		stats: {
			magazine: 30,
			totalAmmo: 150,
			rateOfFire: 845,
			damage: 57,
			accuracy: 48,
			stability: 68,
			concealment: 15,
			threat: 24
		},
		extraStats: {
			tacticalReload: 3.0,
			reload: 4.2,
			equipDelays: [0.6, 0.6],
			ammoPickup: [4.5, 8.25],
			recoilHorizontal: [-1.3, 1.3],
			recoilVertical: [0.78, 1.04],
			spread: 3.12,
			damageModifier: [1.0, 1.0]
		}
	},
	'Tempest-21 Rifle': {
		name: 'Tempest-21 Rifle',
		image: 'komodo',
		source: source['Base Game'],
		inventorySlot: 'primary',
		reputation: 38,
		weaponType: 'Assault Rifle',
		firingMode: 'Selective firing',
		cost: 871e3,
		stats: {
			magazine: 30,
			totalAmmo: 150,
			rateOfFire: 800,
			damage: 58,
			accuracy: 60,
			stability: 52,
			concealment: 26,
			threat: 12
		},
		extraStats: {
			tacticalReload: 2.35,
			reload: 3.35,
			equipDelays: [0.6, 0.65],
			ammoPickup: [4.5, 8.25],
			recoilHorizontal: [-1.02, 1.02],
			recoilVertical: [0.68, 1.02],
			spread: 2.4,
			damageModifier: [1.0, 1.0]
		}
	},
	'AMR-16 Rifle': {
		name: 'AMR-16 Rifle',
		image: 'm16',
		source: source['Base Game'],
		inventorySlot: 'primary',
		reputation: 39,
		weaponType: 'Assault Rifle',
		firingMode: 'Selective firing',
		cost: 896e3,
		stats: {
			magazine: 30,
			totalAmmo: 90,
			rateOfFire: 857,
			damage: 94,
			accuracy: 56,
			stability: 32,
			concealment: 17,
			threat: 14
		},
		extraStats: {
			tacticalReload: 2.75,
			reload: 3.73,
			equipDelays: [0.6, 0.6],
			ammoPickup: [2.7, 4.05],
			recoilHorizontal: [-1.32, 1.32],
			recoilVertical: [0.88, 1.32],
			spread: 2.64,
			damageModifier: [1.0, 1.0]
		}
	},
	'Little Friend 7.62 Assault Rifle': {
		name: 'Little Friend 7.62 Assault Rifle',
		image: 'contraband',
		source: content['Scarface Character Pack'],
		inventorySlot: 'primary',
		reputation: 41,
		weaponType: 'Assault Rifle',
		firingMode: 'Selective firing',
		cost: 920e3,
		stats: {
			magazine: 20,
			totalAmmo: 60,
			rateOfFire: 612,
			damage: 160,
			accuracy: 72,
			stability: 44,
			concealment: 8,
			threat: 22
		},
		extraStats: {
			tacticalReload: 2.55,
			reload: 3.2,
			equipDelays: [0.5, 0.6],
			ammoPickup: [1.08, 2.4],
			recoilHorizontal: [-1.9, 1.9],
			recoilVertical: [1.14, 1.52],
			spread: 1.68,
			damageModifier: [1.0, 1.0]
		}
	},
	'Falcon Rifle': {
		name: 'Falcon Rifle',
		image: 'fal',
		source: content['The Big Bank Heist'],
		inventorySlot: 'primary',
		reputation: 42,
		weaponType: 'Assault Rifle',
		firingMode: 'Selective firing',
		cost: 920e3,
		stats: {
			magazine: 20,
			totalAmmo: 100,
			rateOfFire: 698,
			damage: 98,
			accuracy: 68,
			stability: 44,
			concealment: 10,
			threat: 22
		},
		extraStats: {
			tacticalReload: 2.2,
			reload: 3.28,
			equipDelays: [0.6, 0.6],
			ammoPickup: [3.0, 4.5],
			recoilHorizontal: [-1.9, 1.9],
			recoilVertical: [1.14, 1.52],
			spread: 1.92,
			damageModifier: [1.0, 1.0]
		}
	},
	'Gewehr 3 Rifle': {
		name: 'Gewehr 3 Rifle',
		image: 'g3',
		source: content['Gage Assault Pack'],
		inventorySlot: 'primary',
		reputation: 52,
		weaponType: 'Assault Rifle',
		firingMode: 'Selective firing',
		cost: 920e3,
		stats: {
			magazine: 30,
			totalAmmo: 100,
			rateOfFire: 652,
			damage: 99,
			accuracy: 68,
			stability: 48,
			concealment: 12,
			threat: 26
		},
		extraStats: {
			tacticalReload: 1.4,
			reload: 2.0,
			equipDelays: [0.65, 0.6],
			ammoPickup: [3.0, 4.5],
			recoilHorizontal: [-1.8, 1.8],
			recoilVertical: [1.08, 1.44],
			spread: 1.92,
			damageModifier: [1.0, 1.0]
		}
	}
}

export default assaultRifles