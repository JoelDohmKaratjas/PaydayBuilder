import content from 'data/source/downloadableContent'
import source from 'data/source/miscSources'

import { type CompatibleWeapons, type ModificationList } from '../weaponTypes'

const AKRifles: CompatibleWeapons = {
	assaultRifle: [
		'AK',
		'AK.762',
		'Golden AK.762',
		'AK17'
	],
	submachineGun: [
		'Krinkov'
	]
}

export type MagazineModificationsList =
	// AK Rifles
	| 'AK Quadstacked Mag'
	| 'Low Drag Magazine'
	| 'Speed Pull Magazine'

	// AMCAR, AMR-16, Para
	| 'Milspec Mag.'

	// Random Guns One
	| 'Vintage Mag.'
	| 'Tactical Mag.'
	| 'CAR Quadstacked Mag'
	| 'Expert Mag'
	| 'L5 Magazine'

	// Falcon
	| 'Extended Magazine (Falcon)'

	// Rodion 3B
	| 'Siberian Speed Pull Magazine'

	// Akron HC
	| 'Large Magazine'
	| 'Standard Magazine'

	// Reinfeld 880
	| 'Extended Mag. (Reinfeld 880)'

	// Grimm 12G, Brothers Grimm 12G, IZHMA 12G
	| 'Big Brother Magazine'

	// Steakout 12G
	| 'Drum Mag'

	// OVE9000
	| 'Durable Blade'
	| 'Sharp Blade'

	// Flamethrower Mk.1
	| 'Rare'
	| 'Well Done'

	// Interceptor .45
	| 'Extended Mag. (Interceptor)'
	| 'I want more Magazine!'

	// STRYK 18c, Chimano 88, Chimano Custom, Chimano Compact
	| 'Extended Mag. (Chimano)'

	// Signature .40
	| 'Extended Mag. (Signature .40)'

	// Crosskill
	| '12rnd Mag.'
	| 'Magazine with Ameritude!'

	// Bernetti 9
	| 'Extended Mag. (Bernetti 9)'

	// Crosskill Chunky Compact
	| 'Crosskill Long Mag'

	// White Streak
	| 'Extended Magazine (White Streak)'

	// Broomstick
	| 'High Capacity Mag'

	// 5/7 AP
	| 'Extended Magazine (5/7 AP)'

	// Contractor
	| 'Extended Magazine (Contractor)'

	// Chimano Compact
	| 'Striking Mag'

	// Crosskill Guard
	| 'Extended Mag (Crosskill Guard)'

	// LEO
	| 'Extended Mag (LEO)'

	// Bernetti Auto
	| 'Extended Magazine (Bernetti Auto)'

	// Igor Automatik
	| 'Extended Magazine (Igor)'

	// HOLT 9mm
	| 'Extended Magazine (HOLT)'

	// Deagle
	| 'Extended Mag. (Deagle)'

	// Swedish K
	| 'Extended Mag. (Swedish)'

	// SpecOps
	| 'Extended Mag. (SpecOps)'

	// Mark 10
	| 'Extended Mag. (Mark 10)'

	// Compact-5
	| 'Straight Magazine'

	// Cobra
	| 'Extended Mag (Cobra)'

	// CMP
	| 'Extended Mag. (CMP)'

	// Signature
	| 'Extended Magazine (Signature)'

	// Jackal
	| 'Extended Magazine (Jackal)'
	| 'Short Magazine (Jackal)'

	// Blaster 9mm
	| 'Extended Mag (Blaster)'

	// Patchett L2A1
	| 'Extended Mag (Patchett)'
	| 'Short Mag (Patchett)'

	// Locomotive 12G
	| 'Extended Mag. (Locomotive)'

	// MA-17 Flamethrower
	| 'High Temperature Mixture'
	| 'Low Temperature Mixture'

	// Pronghorn
	| 'Standoff Extended Magazine'

	// Wasp-DS
	| 'Celerity X9 Magazine'

	// Gecko M2
	| 'Stack S3 Magazine'

	// Káng Arms Model 54
	| 'KA54 Extended Magazine'

	// KETCHNOV BYK-1
	| 'K-B1 Speedmag'

	// Káng Arms X1
	| 'KA-ZDM2 Extended Magazine'

	// Miyaka 10 Special
	| 'MS10 Speedmag'

	// Deimos
	| 'Eris Magazine Extender'

	// Campbell 74
	| 'Perkins Soft Case'

	// Amaroq 900
	| 'Akhlut Magazine'

const magazine: ModificationList<MagazineModificationsList> = {
	'AK Quadstacked Mag': {
		name: 'AK Quadstacked Mag',
		image: 'wpn_fps_upg_ak_m_quad',
		icon: 'inv_mod_magazine',
		slot: 'magazine',
		source: content['Gage Mod Courier'],
		cost: 0,
		acquisition: {
			package: 'Blue Eagle'
		},
		stats: {
			magazine: 30,
			accuracy: -4,
			stability: 4,
			concealment: -3
		},
		compatibleWeapons: AKRifles
	},
	'Low Drag Magazine': {
		name: 'Low Drag Magazine',
		image: 'wpn_fps_upg_ak_m_uspalm',
		icon: 'inv_mod_magazine',
		slot: 'magazine',
		source: content['The Butcher\'s AK/CAR Mod Pack'],
		cost: 9e3,
		acquisition: {
			achievement: 'Here Comes the Pain Train'
		},
		stats: {
			magazine: 4,
			stability: 4,
			concealment: 1
		},
		compatibleWeapons: AKRifles
	},
	'Speed Pull Magazine': {
		name: 'Speed Pull Magazine',
		/*
			wpn_fps_ass_g36_m_quick (JP36)
			wpn_fps_ass_aug_m_quick (UAR)
			wpn_fps_upg_ak_m_quick (AKs)
			wpn_fps_m4_upg_m_quick (CARs)
			wpn_fps_smg_sr2_m_quick (Heather)
			wpn_fps_smg_mac10_m_quick (Mark 10)
			wpn_fps_smg_p90_m_strap (Kobus 90)
		*/
		image: 'wpn_fps_upg_ak_m_quick',
		icon: 'inv_mod_magazine',
		slot: 'magazine',
		source: content['Gage Spec Ops Pack'],
		cost: 14e3,
		acquisition: {
			infinite: true
		},
		stats: {
			reload: -1.9 // Different for different guns?
		},
		compatibleWeapons: {
			assaultRifle: [
				'JP36',
				'UAR',
				'AK',
				'AK.762',
				'Golden AK.762',
				'AK17',
				'CAR-4',
				'AMCAR',
				'AMR-16',
				'AK5',
				'Queen\'s Wrath',
				'Union 5.56'
			],
			submachineGun: [
				'Krinkov',
				'CR 805B',
				'Para',
				'Heather',
				'Mark 10',
				'Kobus 90'
			]
		}
	},
	'Milspec Mag.': {
		name: 'Milspec Mag.',
		image: 'wpn_fps_m4_uupg_m_std',
		icon: 'inv_mod_magazine',
		slot: 'magazine',
		source: source['Base Game'],
		cost: 9e3,
		stats: {
			magazine: 8,
			concealment: -1
		},
		compatibleWeapons: {
			assaultRifle: [
				'AMCAR',
				'AMR-16'
			],
			submachineGun: [
				'Para'
			]
		}
	},
	'Vintage Mag.': {
		name: 'Vintage Mag.',
		image: 'wpn_fps_upg_m4_m_straight',
		icon: 'inv_mod_magazine',
		slot: 'magazine',
		source: source['Base Game'],
		cost: 14e3,
		stats: {
			magazine: -8,
			concealment: 1
		},
		compatibleWeapons: {
			assaultRifle: [
				'CAR-4',
				'AK5',
				'Queen\'s Wrath'
			],
			submachineGun: [
				'CR 805B'
			]
		}
	},
	'Tactical Mag.': {
		name: 'Tactical Mag.',
		image: 'wpn_fps_upg_m4_m_pmag',
		icon: 'inv_mod_magazine',
		slot: 'magazine',
		source: source['Base Game'],
		cost: 21e3,
		stats: {
			magazine: 4
		},
		compatibleWeapons: {
			assaultRifle: [
				'CAR-4',
				'AK5',
				'AMR-16',
				'Queen\'s Wrath'
			],
			submachineGun: [
				'Para',
				'CR 805B'
			]
		}
	},
	'CAR Quadstacked Mag': {
		name: 'CAR Quadstacked Mag',
		image: 'wpn_fps_upg_m4_m_quad',
		icon: 'inv_mod_magazine',
		slot: 'magazine',
		source: content['Gage Mod Courier'],
		cost: 0,
		acquisition: {
			package: 'Purple Snake'
		},
		stats: {
			magazine: 30,
			accuracy: -4,
			stability: 4,
			concealment: -3
		},
		compatibleWeapons: {
			assaultRifle: [
				'AMCAR',
				'CAR-4',
				'AK5',
				'AMR-16',
				'Queen\'s Wrath'
			],
			submachineGun: [
				'Para',
				'CR 805B'
			]
		}
	},
	'Expert Mag': {
		name: 'Expert Mag',
		image: 'wpn_fps_ass_l85a2_m_emag',
		icon: 'inv_mod_magazine',
		slot: 'magazine',
		source: content['Clover Character Pack'],
		cost: 9e3,
		stats: {
			magazine: 4,
			stability: 4
		},
		compatibleWeapons: {
			assaultRifle: [
				'CAR-4',
				'AK5',
				'AMR-16',
				'Queen\'s Wrath'
			],
			submachineGun: [
				'Para',
				'CR 805B'
			]
		}
	},
	'L5 Magazine': {
		name: 'L5 Magazine',
		image: 'wpn_fps_upg_m4_m_l5',
		icon: 'inv_mod_magazine',
		slot: 'magazine',
		source: content['The Butcher\'s AK/CAR Mod Pack'],
		cost: 9e3,
		acquisition: {
			achievement: 'Private Party'
		},
		stats: {
			magazine: 4,
			stability: 4
		},
		compatibleWeapons: {
			assaultRifle: [
				'AMCAR',
				'CAR-4',
				'AK5',
				'AMR-16',
				'Queen\'s Wrath'
			],
			submachineGun: [
				'Para',
				'CR 805B'
			]
		}
	},
	'Extended Magazine (Falcon)': {
		name: 'Extended Magazine (Falcon)',
		image: 'wpn_fps_ass_fal_m_01',
		icon: 'inv_mod_magazine',
		slot: 'magazine',
		source: content['The Big Bank Heist'],
		cost: 11200,
		acquisition: {
			achievement: 'It Takes a Pig to Kill a Pig'
		},
		stats: {
			magazine: 20,
			accuracy: -4,
			stability: 4,
			concealment: -2
		},
		compatibleWeapons: {
			assaultRifle: [
				'Falcon'
			]
		}
	},
	'Siberian Speed Pull Magazine': {
		name: 'Siberian Speed Pull Magazine',
		image: 'wpn_fps_ass_tkb_m_bakelite',
		icon: 'inv_mod_magazine',
		slot: 'magazine',
		source: content['McShay Weapon Pack 3'],
		cost: 9e3,
		stats: {
			stability: 4,
			concealment: -2,
			reload: -0.6
		},
		compatibleWeapons: {
			assaultRifle: [
				'Rodion 3B'
			]
		}
	},
	'Large Magazine': {
		name: 'Large Magazine',
		image: 'wpn_fps_lmg_hcar_m_drum',
		icon: 'inv_mod_magazine',
		slot: 'magazine',
		source: content['McShay Weapon Pack 3'],
		cost: 21e3,
		stats: {
			magazine: 50,
			concealment: -4
		},
		compatibleWeapons: {
			lightMachineGun: [
				'Akron HC'
			]
		}
	},
	'Standard Magazine': {
		name: 'Standard Magazine',
		image: 'wpn_fps_lmg_hcar_m_stick',
		icon: 'inv_mod_magazine',
		slot: 'magazine',
		source: content['McShay Weapon Pack 3'],
		cost: 21e3,
		stats: {
			magazine: 20,
			concealment: -2
		},
		compatibleWeapons: {
			lightMachineGun: [
				'Akron HC'
			]
		}
	},
	'Extended Mag. (Reinfeld 880)': {
		name: 'Extended Mag. (Reinfeld 880)',
		image: 'wpn_fps_shot_r870_m_extended',
		icon: 'inv_mod_magazine',
		slot: 'magazine',
		source: source['Base Game'],
		cost: 44e3,
		stats: {
			magazine: 2,
			concealment: -1
		},
		compatibleWeapons: {
			shotgun: [
				'Reinfeld 880'
			]
		}
	},
	'Big Brother Magazine': {
		name: 'Big Brother Magazine',
		image: 'wpn_fps_sho_basset_m_extended',
		icon: 'inv_mod_magazine',
		slot: 'magazine',
		source: source['Base Game'],
		cost: 10800,
		stats: {
			magazine: 8,
			concealment: -2
		},
		compatibleWeapons: {
			shotgun: [
				'Grimm 12G',
				'IZHMA 12G'
			],
			akimboShotgun: [
				'Brothers Grimm 12G'
			]
		}
	},
	'Drum Mag': {
		name: 'Drum Mag',
		image: 'wpn_fps_sho_aa12_mag_drum',
		icon: 'inv_mod_magazine',
		slot: 'magazine',
		source: content['The Butcher\'s BBQ Pack'],
		cost: 9e3,
		acquisition: {
			bonus: 1
		},
		stats: {
			magazine: 12,
			concealment: -4
		},
		compatibleWeapons: {
			shotgun: [
				'Steakout 12G'
			]
		}
	},
	'Durable Blade': {
		name: 'Durable Blade',
		image: 'wpn_fps_saw_m_blade_durable',
		icon: 'inv_mod_magazine',
		slot: 'magazine',
		source: content['The Butcher Mod Pack 2'],
		cost: 9e3,
		acquisition: {
			bonus: 1
		},
		stats: {
			totalAmmo: 150,
			magazine: 50
		},
		compatibleWeapons: {
			special: [
				'OVE9000'
			]
		}
	},
	'Sharp Blade': {
		name: 'Sharp Blade',
		image: 'wpn_fps_saw_m_blade_sharp',
		icon: 'inv_mod_magazine',
		slot: 'magazine',
		source: content['The Butcher Mod Pack 2'],
		cost: 9e3,
		acquisition: {
			bonus: 1
		},
		stats: {
			damage: 3
		},
		compatibleWeapons: {
			special: [
				'OVE9000'
			]
		}
	},
	'Rare': {
		name: 'Rare',
		image: 'wpn_fps_fla_mk2_mag_rare',
		icon: 'inv_mod_magazine',
		slot: 'magazine',
		source: content['The Butcher\'s BBQ Pack'],
		cost: 9e3,
		acquisition: {
			bonus: 1
		},
		stats: {
			totalAmmo: 450,
			damage: -4
		},
		compatibleWeapons: {
			special: [
				'Flamethrower Mk.1'
			]
		}
	},
	'Well Done': {
		name: 'Well Done',
		image: 'wpn_fps_fla_mk2_mag_welldone',
		icon: 'inv_mod_magazine',
		slot: 'magazine',
		source: content['The Butcher\'s BBQ Pack'],
		cost: 9e3,
		acquisition: {
			bonus: 1
		},
		stats: {
			totalAmmo: -450,
			damage: 7
		},
		compatibleWeapons: {
			special: [
				'Flamethrower Mk.1'
			]
		}
	},
	'Extended Mag. (Interceptor)': {
		name: 'Extended Mag. (Interceptor)',
		image: 'wpn_fps_pis_usp_m_extended',
		icon: 'inv_mod_magazine',
		slot: 'magazine',
		source: source.Community,
		cost: 14e3,
		stats: {
			magazine: 8,
			concealment: -1
		},
		compatibleWeapons: {
			pistol: [
				'Interceptor .45'
			]
		}
	},
	'I want more Magazine!': {
		name: 'I want more Magazine!',
		image: 'wpn_fps_pis_usp_m_big',
		icon: 'inv_mod_magazine',
		slot: 'magazine',
		source: content['Gage Spec Ops Pack'],
		cost: 14e3,
		acquisition: {
			infinite: true
		},
		stats: {
			magazine: 12,
			stability: 8,
			concealment: -2
		},
		compatibleWeapons: {
			pistol: [
				'Interceptor .45'
			]
		}
	},
	'Extended Mag. (Chimano)': {
		name: 'Extended Mag. (Chimano)',
		image: 'wpn_fps_pis_g18c_m_mag_33rnd',
		icon: 'inv_mod_magazine',
		slot: 'magazine',
		source: source['Base Game'],
		cost: 44e3,
		stats: {
			magazine: 12,
			concealment: -2
		},
		compatibleWeapons: {
			pistol: [
				'STRYK 18c',
				'Chimano 88',
				'Chimano Custom',
				'Chimano Compact'
			]
		}
	},
	'Extended Mag. (Signature .40)': {
		name: 'Extended Mag. (Signature .40)',
		image: 'wpn_fps_pis_p226_m_extended',
		icon: 'inv_mod_magazine',
		slot: 'magazine',
		source: content['Gage Weapon Pack #01'],
		cost: 14e3,
		stats: {
			magazine: 8
		},
		compatibleWeapons: {
			pistol: [
				'Signature .40'
			]
		}
	},
	'12rnd Mag.': {
		name: '12rnd Mag.',
		image: 'wpn_fps_pis_1911_m_extended',
		icon: 'inv_mod_magazine',
		slot: 'magazine',
		source: source['Base Game'],
		cost: 21e3,
		stats: {
			magazine: 6,
			concealment: -1
		},
		compatibleWeapons: {
			pistol: [
				'Crosskill'
			]
		}
	},
	'Magazine with Ameritude!': {
		name: 'Magazine with Ameritude!',
		image: 'wpn_fps_pis_1911_m_big',
		icon: 'inv_mod_magazine',
		slot: 'magazine',
		source: content['Gage Spec Ops Pack'],
		cost: 14e3,
		acquisition: {
			infinite: true
		},
		stats: {
			magazine: 12,
			stability: 8,
			concealment: -2
		},
		compatibleWeapons: {
			pistol: [
				'Crosskill'
			]
		}
	},
	'Extended Mag. (Bernetti 9)': {
		name: 'Extended Mag. (Bernetti 9)',
		image: 'wpn_fps_pis_beretta_m_extended',
		icon: 'inv_mod_magazine',
		slot: 'magazine',
		source: source['Base Game'],
		cost: 14e3,
		stats: {
			magazine: 12,
			concealment: -2
		},
		compatibleWeapons: {
			pistol: [
				'Bernetti 9'
			]
		}
	},
	'Crosskill Long Mag': {
		name: 'Crosskill Long Mag',
		image: 'wpn_fps_pis_m1911_m_extended',
		icon: 'inv_mod_magazine',
		slot: 'magazine',
		source: content['Jiu Feng Smuggler Pack'],
		cost: 9e3,
		stats: {
			magazine: 2,
			concealment: -1
		},
		compatibleWeapons: {
			pistol: [
				'Crosskill Chunky Compact'
			]
		}
	},
	'Extended Magazine (White Streak)': {
		name: 'Extended Magazine (White Streak)',
		image: 'wpn_fps_pis_pl14_m_extended',
		icon: 'inv_mod_magazine',
		slot: 'magazine',
		source: source['Base Game'],
		cost: 9e3,
		acquisition: {
			bonus: 1
		},
		stats: {
			magazine: 2,
			concealment: -1
		},
		compatibleWeapons: {
			pistol: [
				'White Streak'
			]
		}
	},
	'High Capacity Mag': {
		name: 'High Capacity Mag',
		image: 'wpn_fps_pis_c96_m_extended',
		icon: 'inv_mod_magazine',
		slot: 'magazine',
		source: content['Gage Historical Pack'],
		cost: 9e3,
		acquisition: {
			achievement: 'So Uncivilized'
		},
		stats: {
			magazine: 10,
			concealment: -2
		},
		compatibleWeapons: {
			pistol: [
				'Broomstick'
			]
		}
	},
	'Extended Magazine (5/7 AP)': {
		name: 'Extended Magazine (5/7 AP)',
		image: 'wpn_fps_pis_lemming_m_ext',
		icon: 'inv_mod_magazine',
		slot: 'magazine',
		source: source.Community,
		cost: 9e3,
		stats: {
			magazine: 4
		},
		compatibleWeapons: {
			pistol: [
				'5/7 AP'
			]
		}
	},
	'Extended Magazine (Contractor)': {
		name: 'Extended Magazine (Contractor)',
		image: 'wpn_fps_pis_packrat_m_extended',
		icon: 'inv_mod_magazine',
		slot: 'magazine',
		source: content['John Wick Weapon Pack'],
		cost: 9e3,
		acquisition: {
			infinite: true
		},
		stats: {
			magazine: 10,
			concealment: -1
		},
		compatibleWeapons: {
			pistol: [
				'Contractor'
			]
		}
	},
	'Striking Mag': {
		name: 'Striking Mag',
		image: 'wpn_fps_pis_g26_m_contour',
		icon: 'inv_mod_magazine',
		slot: 'magazine',
		source: source.Community,
		cost: 53e3,
		stats: {
			stability: 8,
			concealment: -1
		},
		compatibleWeapons: {
			pistol: [
				'Chimano Compact'
			]
		}
	},
	'Extended Mag (Crosskill Guard)': {
		name: 'Extended Mag (Crosskill Guard)',
		image: 'wpn_fps_pis_shrew_m_extended',
		icon: 'inv_mod_magazine',
		slot: 'magazine',
		source: source['Base Game'],
		cost: 9e3,
		stats: {
			magazine: 4,
			concealment: -2
		},
		compatibleWeapons: {
			pistol: [
				'Crosskill Guard'
			]
		}
	},
	'Extended Mag (LEO)': {
		name: 'Extended Mag (LEO)',
		image: 'wpn_fps_pis_hs2000_m_extended',
		icon: 'inv_mod_magazine',
		slot: 'magazine',
		source: content['The Bomb Heists'],
		cost: 9e3,
		acquisition: {
			achievement: 'Breaking Dead' // also from drops
		},
		stats: {
			magazine: 8
		},
		compatibleWeapons: {
			pistol: [
				'LEO'
			]
		}
	},
	'Extended Magazine (Bernetti Auto)': {
		name: 'Extended Magazine (Bernetti Auto)',
		image: 'wpn_fps_pis_beer_m_extended',
		icon: 'inv_mod_magazine',
		slot: 'magazine',
		source: content['Federales Weapon Pack'],
		cost: 21e3,
		acquisition: {
			bonus: 1
		},
		stats: {
			magazine: 6,
			concealment: -1
		},
		compatibleWeapons: {
			pistol: [
				'Bernetti Auto'
			]
		}
	},
	'Extended Magazine (Igor)': {
		name: 'Extended Magazine (Igor)',
		image: 'wpn_fps_pis_stech_m_extended',
		icon: 'inv_mod_magazine',
		slot: 'magazine',
		source: content['Federales Weapon Pack'],
		cost: 36e3,
		stats: {
			magazine: 14,
			concealment: -2
		},
		compatibleWeapons: {
			pistol: [
				'Igor Automatik'
			]
		}
	},
	'Extended Magazine (HOLT)': {
		name: 'Extended Magazine (HOLT)',
		image: 'wpn_fps_pis_holt_m_extended',
		icon: 'inv_mod_magazine',
		slot: 'magazine',
		source: content['Fugitive Weapon Pack'],
		cost: 14e3,
		stats: {
			magazine: 10,
			concealment: -1
		},
		compatibleWeapons: {
			pistol: [
				'HOLT 9mm'
			]
		}
	},
	'Extended Mag. (Deagle)': {
		name: 'Extended Mag. (Deagle)',
		image: 'wpn_fps_pis_deagle_m_extended',
		icon: 'inv_mod_magazine',
		slot: 'magazine',
		source: source['Base Game'],
		cost: 53e3,
		stats: {
			magazine: 6,
			concealment: -2
		},
		compatibleWeapons: {
			pistol: [
				'Deagle'
			]
		}
	},
	'Extended Mag. (Swedish)': {
		name: 'Extended Mag. (Swedish)',
		image: 'wpn_fps_smg_m45_m_extended',
		icon: 'inv_mod_magazine',
		slot: 'magazine',
		source: content['Armored Transport'],
		cost: 33600,
		stats: {
			magazine: 12,
			concealment: -2
		},
		compatibleWeapons: {
			submachineGun: [
				'Swedish K'
			]
		}
	},
	'Extended Mag. (SpecOps)': {
		name: 'Extended Mag. (SpecOps)',
		image: 'wpn_fps_smg_mp7_m_extended',
		icon: 'inv_mod_magazine',
		slot: 'magazine',
		source: content['Gage Weapon Pack #01'],
		cost: 12600,
		stats: {
			magazine: 12,
			concealment: -3
		},
		compatibleWeapons: {
			submachineGun: [
				'SpecOps'
			]
		}
	},
	'Extended Mag. (Mark 10)': {
		name: 'Extended Mag. (Mark 10)',
		image: 'wpn_fps_smg_mac10_m_extended',
		icon: 'inv_mod_magazine',
		slot: 'magazine',
		source: source['Base Game'],
		cost: 14e3,
		stats: {
			magazine: 8,
			stability: 4,
			concealment: -2
		},
		compatibleWeapons: {
			submachineGun: [
				'Mark 10'
			]
		}
	},
	'Straight Magazine': {
		name: 'Straight Magazine',
		image: 'wpn_fps_smg_mp5_m_straight',
		icon: 'inv_mod_magazine',
		slot: 'magazine',
		source: content['The Butcher Mod Pack 2'],
		cost: 9e3,
		acquisition: {
			bonus: 1
		},
		stats: {
			stability: 8,
			concealment: -1
		},
		compatibleWeapons: {
			submachineGun: [
				'Compact-5'
			]
		}
	},
	'Extended Mag (Cobra)': {
		name: 'Extended Mag (Cobra)',
		image: 'wpn_fps_smg_scorpion_m_extended',
		icon: 'inv_mod_magazine',
		slot: 'magazine',
		source: content['Hotline Miami'],
		cost: 9e3,
		acquisition: {
			achievement: 'Phew!'
		},
		stats: {
			magazine: 20,
			stability: 8,
			concealment: -3
		},
		compatibleWeapons: {
			submachineGun: [
				'Cobra'
			]
		}
	},
	'Extended Mag. (CMP)': {
		name: 'Extended Mag. (CMP)',
		image: 'wpn_fps_smg_mp9_m_extended',
		icon: 'inv_mod_magazine',
		slot: 'magazine',
		source: source['Base Game'],
		cost: 28e3,
		stats: {
			magazine: 12,
			concealment: -2
		},
		compatibleWeapons: {
			submachineGun: [
				'CMP'
			]
		}
	},
	'Extended Magazine (Signature)': {
		name: 'Extended Magazine (Signature)',
		image: 'wpn_fps_smg_shepheard_mag_extended',
		icon: 'inv_mod_magazine',
		slot: 'magazine',
		source: source['Base Game'],
		cost: 9e3,
		stats: {
			magazine: 30
		},
		compatibleWeapons: {
			submachineGun: [
				'Signature'
			]
		}
	},
	'Extended Magazine (Jackal)': {
		name: 'Extended Magazine (Jackal)',
		image: 'wpn_fps_smg_schakal_m_long',
		icon: 'inv_mod_magazine',
		slot: 'magazine',
		source: content['John Wick Weapon Pack'],
		cost: 9e3,
		acquisition: {
			infinite: true
		},
		stats: {
			magazine: 20,
			concealment: -2
		},
		compatibleWeapons: {
			submachineGun: [
				'Jackal'
			]
		}
	},
	'Short Magazine (Jackal)': {
		name: 'Short Magazine (Jackal)',
		image: 'wpn_fps_smg_schakal_m_short',
		icon: 'inv_mod_magazine',
		slot: 'magazine',
		source: content['John Wick Weapon Pack'],
		cost: 9e3,
		acquisition: {
			infinite: true
		},
		stats: {
			magazine: -10,
			concealment: 2
		},
		compatibleWeapons: {
			submachineGun: [
				'Jackal'
			]
		}
	},
	'Extended Mag (Blaster)': {
		name: 'Extended Mag (Blaster)',
		image: 'wpn_fps_smg_tec9_m_extended',
		icon: 'inv_mod_magazine',
		slot: 'magazine',
		source: content['Hotline Miami'],
		cost: 28e3,
		acquisition: {
			achievement: 'Overdose'
		},
		stats: {
			magazine: 12,
			stability: 8,
			concealment: -2
		},
		compatibleWeapons: {
			submachineGun: [
				'Blaster 9mm'
			]
		}
	},
	'Extended Mag (Patchett)': {
		name: 'Extended Mag (Patchett)',
		image: 'wpn_fps_smg_sterling_m_long',
		icon: 'inv_mod_magazine',
		slot: 'magazine',
		source: content['Gage Historical Pack'],
		cost: 9e3,
		acquisition: {
			achievement: 'Wind of Change'
		},
		stats: {
			magazine: 10,
			concealment: -2
		},
		compatibleWeapons: {
			submachineGun: [
				'Patchett L2A1'
			]
		}
	},
	'Short Mag (Patchett)': {
		name: 'Short Mag (Patchett)',
		image: 'wpn_fps_smg_sterling_m_short',
		icon: 'inv_mod_magazine',
		slot: 'magazine',
		source: content['Gage Historical Pack'],
		cost: 9e3,
		acquisition: {
			achievement: 'Special Operations Execution'
		},
		stats: {
			magazine: -10,
			concealment: 2
		},
		compatibleWeapons: {
			submachineGun: [
				'Patchett L2A1'
			]
		}
	},
	'Extended Mag. (Locomotive)': {
		name: 'Extended Mag. (Locomotive)',
		image: 'wpn_fps_shot_shorty_m_extended_short',
		icon: 'inv_mod_magazine',
		slot: 'magazine',
		source: source['Base Game'],
		cost: 9e3,
		stats: {
			magazine: 2
		},
		compatibleWeapons: {
			shotgun: [
				'Locomotive 12G'
			]
		}
	},
	'High Temperature Mixture': {
		name: 'High Temperature Mixture',
		image: 'wpn_fps_fla_system_m_high',
		icon: 'inv_mod_magazine',
		slot: 'magazine',
		source: source['Base Game'],
		cost: 9e3,
		stats: {
			totalAmmo: -350,
			damage: 7
		},
		compatibleWeapons: {
			special: [
				'MA-17 Flamethrower'
			]
		}
	},
	'Low Temperature Mixture': {
		name: 'Low Temperature Mixture',
		image: 'wpn_fps_fla_system_m_low',
		icon: 'inv_mod_magazine',
		slot: 'magazine',
		source: source['Base Game'],
		cost: 9e3,
		stats: {
			totalAmmo: 350,
			damage: -4
		},
		compatibleWeapons: {
			special: [
				'MA-17 Flamethrower'
			]
		}
	},
	'Standoff Extended Magazine': {
		name: 'Standoff Extended Magazine',
		image: 'wpn_fps_snp_scout_m_extended',
		icon: 'inv_mod_magazine',
		slot: 'magazine',
		source: content['McShay Weapon Pack'],
		cost: 9e3,
		stats: {
			totalAmmo: 2,
			concealment: -1
		},
		compatibleWeapons: {
			sniper: [
				'Pronghorn'
			]
		}
	},
	'Celerity X9 Magazine': {
		name: 'Celerity X9 Magazine',
		image: 'wpn_fps_smg_fmg9_m_speed',
		icon: 'inv_mod_magazine',
		slot: 'magazine',
		source: content['Jiu Feng Smuggler Pack 4'],
		cost: 7200,
		stats: {
			reload: -0.7,
			accuracy: 4,
			stability: 4,
			concealment: -2
		},
		compatibleWeapons: {
			submachineGun: [
				'Wasp-DS SMG'
			]
		}
	},
	'Stack S3 Magazine': {
		name: 'Stack S3 Magazine',
		image: 'wpn_fps_pis_maxim9_m_ext',
		icon: 'inv_mod_magazine',
		slot: 'magazine',
		source: content['Jiu Feng Smuggler Pack 4'],
		cost: 7200,
		stats: {
			magazine: 4,
			concealment: -1
		},
		compatibleWeapons: {
			pistol: [
				'Gecko M2'
			]
		}
	},
	'KA54 Extended Magazine': {
		name: 'KA54 Extended Magazine',
		image: 'wpn_fps_pis_type54_m_ext',
		icon: 'inv_mod_magazine',
		slot: 'magazine',
		source: content['Jiu Feng Smuggler Pack 3'],
		cost: 9e3,
		stats: {
			magazine: 4,
			concealment: -1
		},
		compatibleWeapons: {
			pistol: [
				'Káng Arms Model 54'
			]
		}
	},
	'K-B1 Speedmag': {
		name: 'K-B1 Speedmag',
		image: 'wpn_fps_ass_groza_m_speed',
		icon: 'inv_mod_magazine',
		slot: 'magazine',
		source: content['Jiu Feng Smuggler Pack 2'],
		cost: 14e3,
		stats: {
			magazine: 10,
			accuracy: -4,
			concealment: -3,
			reload: -1.1
		},
		compatibleWeapons: {
			assaultRifle: [
				'KETCHNOV Byk-1'
			]
		}
	},
	'KA-ZDM2 Extended Magazine': {
		name: 'KA-ZDM2 Extended Magazine',
		image: 'wpn_fps_snp_qbu88_m_extended',
		icon: 'inv_mod_magazine',
		slot: 'magazine',
		source: content['Jiu Feng Smuggler Pack 2'],
		cost: 14e3,
		stats: {
			magazine: 10,
			concealment: -1
		},
		compatibleWeapons: {
			sniper: [
				'Káng Arms X1'
			]
		}
	},
	'MS10 Speedmag': {
		name: 'MS10 Speedmag',
		image: 'wpn_fps_smg_pm9_m_quick',
		icon: 'inv_mod_magazine',
		slot: 'magazine',
		source: content['Jiu Feng Smuggler Pack 2'],
		cost: 14e3,
		stats: {
			concealment: -1,
			reload: -1
		},
		compatibleWeapons: {
			submachineGun: [
				'Miyaka 10 Special'
			]
		}
	},
	'Eris Magazine Extender': {
		name: 'Eris Magazine Extender',
		image: 'wpn_fps_sho_supernova_m_extender',
		icon: 'inv_mod_magazine',
		slot: 'magazine',
		source: content['McShay Weapon Pack 4'],
		cost: 44e3,
		stats: {
			magazine: 2,
			concealment: -2
		},
		compatibleWeapons: {
			shotgun: [
				'Deimos'
			]
		}
	},
	'Perkins Soft Case': {
		name: 'Perkins Soft Case',
		image: 'wpn_fps_lmg_kacchainsaw_mag_b',
		icon: 'inv_mod_magazine',
		slot: 'magazine',
		source: content['McShay Weapon Pack 4'],
		cost: 9e3,
		stats: {
			magazine: 50,
			stability: -8,
			concealment: -2
		},
		compatibleWeapons: {
			lightMachineGun: [
				'Campbell 74'
			]
		}
	},
	'Akhlut Magazine': {
		name: 'Akhlut Magazine',
		image: 'wpn_fps_snp_awp_m_speed',
		icon: 'inv_mod_magazine',
		slot: 'magazine',
		source: content['McShay Weapon Pack 4'],
		cost: 9e3,
		stats: {
			magazine: -2,
			accuracy: -4,
			stability: -4,
			concealment: -1,
			reload: -0.7
		},
		compatibleWeapons: {
			sniper: [
				'Amaroq 900'
			]
		}
	}
}

export default magazine