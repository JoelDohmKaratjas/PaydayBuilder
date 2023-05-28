import { type ContentData } from 'data/source/downloadableContent'
import { type SourceData } from 'data/source/miscSources'

import { type AmmunitionModificationsList } from './modifications/ammunition'
import { type BarrelModificationsList } from './modifications/barrel'
import { type BarrelExtModificationsList } from './modifications/barrelExt'
import { type BayonetModificationsList } from './modifications/bayonet'
import { type BipodModificationsList } from './modifications/bipod'
import { type BoltModificationList } from './modifications/bolt'
import { type BoostModificationsList } from './modifications/boost'
import { type ChargingHandleList } from './modifications/chargingHandle'
import { type CustomModificationsList } from './modifications/custom'
import { type ExclusiveSetList } from './modifications/exclusiveSet'
import { type ExtraModificationsList } from './modifications/extra'
import { type ForegripModificationsList } from './modifications/foregrip'
import { type GadgetModificationsList } from './modifications/gadget'
import { type GripModificationsList } from './modifications/grip'
import { type LowerReceiverModificationsList } from './modifications/lowerReceiver'
import { type MagazineModificationsList } from './modifications/magazine'
import { type ReceiverModificationsList } from './modifications/receiver'
import { type SecondarySightList } from './modifications/secondarySight'
import { type SightModificationsList } from './modifications/sight'
import { type SlideModificationsList } from './modifications/slide'
import { type StockModificationsList } from './modifications/stock'
import { type UnderbarrelModificationsList } from './modifications/underbarrel'
import { type UpperReceiverModificationsList } from './modifications/upperReceiver'
import { type VerticalGripModificationsList } from './modifications/verticalGrip'
import { type AkimboShotgunsList } from './primary/gunList/akimboShotguns'
import { type AssaultRifleList } from './primary/gunList/assaultRifles'
import { type LightMachineGunList } from './primary/gunList/lightMachineGuns'
import { type ShotgunPrimaryList } from './primary/gunList/shotgunsPrimary'
import { type SniperPrimaryList } from './primary/gunList/snipersPrimary'
import { type SpecialPrimaryList } from './primary/gunList/specialsPrimary'
import { type PistolList } from './secondary/gunList/pistols'
import { type ShotgunSecondaryList } from './secondary/gunList/shotgunsSecondary'
import { type SecondarySniperList } from './secondary/gunList/snipersSecondary'
import { type SpecialSecondaryList } from './secondary/gunList/specialsSecondary'
import { type SubmachineGunList } from './secondary/gunList/submachineGuns'

export type Slot = 'primary' | 'secondary'

export type WeaponType =
	| 'Assault Rifle'
	| 'Shotgun'
	| 'LMG'
	| 'Sniper'
	| 'Akimbo Pistol'
	| 'Akimbo Shotgun'
	| 'Akimbo SMG'
	| 'Special'
	| 'Pistol'
	| 'Submachine Gun'

export interface WeaponModifications {
	ammunition?: Modification<AmmunitionModificationsList>[];
	barrel?: Modification<BarrelModificationsList>[];
	barrelExt?: Modification<BarrelExtModificationsList>[];
	bayonet?: Modification<BayonetModificationsList>[];
	bipod?: Modification<BipodModificationsList>[];
	bolt?: Modification<BoltModificationList>[];
	boost: Modification<BoostModificationsList>[];
	chargingHandle?: Modification<ChargingHandleList>[];
	custom?: Modification<CustomModificationsList>[];
	exclusiveSet?: Modification<ExclusiveSetList>[];
	extra?: Modification<ExtraModificationsList>[];
	foregrip?: Modification<ForegripModificationsList>[];
	gadget?: Modification<GadgetModificationsList>[];
	grip?: Modification<GripModificationsList>[];
	lowerReceiver?: Modification<LowerReceiverModificationsList>[];
	magazine?: Modification<MagazineModificationsList>[];
	receiver?: Modification<ReceiverModificationsList>[];
	secondarySight?: Modification<SecondarySightList>[];
	sight?: Modification<SightModificationsList>[];
	slide?: Modification<SlideModificationsList>[];
	stock?: Modification<StockModificationsList>[];
	underbarrel?: Modification<UnderbarrelModificationsList>[];
	upperReceiver?: Modification<UpperReceiverModificationsList>[];
	verticalGrip?: Modification<VerticalGripModificationsList>[];
}

export type AllWeaponList =
	AssaultRifleList |
	ShotgunPrimaryList |
	ShotgunSecondaryList |
	LightMachineGunList |
	SniperPrimaryList |
	SecondarySniperList |
	AkimboShotgunsList |
	SpecialPrimaryList |
	SpecialSecondaryList |
	PistolList |
	SubmachineGunList

type FiringMode =
	| 'Selective firing'
	| 'Semi-Automatic'
	| 'Lever Action'
	| 'Pump action'
	| 'Break Action'
	| 'Fully automatic'
	| 'Bolt action'
	| 'Single Shot'
	| 'Double action'
	| 'Single action'

export interface WeaponData {
	name: AllWeaponList;
	image: string;
	source: SourceData | ContentData;
	inventorySlot: 'primary' | 'secondary';
	reputation: number;
	weaponType: WeaponType;
	firingMode: FiringMode;
	cost: number;
	stats: WeaponStats;
	extraStats: WeaponExtraStats;
	modifications: WeaponModifications;
}

export interface WeaponStats {
	magazine: number;
	totalAmmo: number;
	rateOfFire: number;
	damage: number;
	accuracy: number;
	stability: number;
	concealment: number;
	threat: number;
	reload: number;
}

export interface WeaponExtraStats {
	tacticalReload: number | [number, number] | null;
	equipDelays: [number, number];
	ammoPickup: [number, number] | null;
	recoilHorizontal: [number, number];
	recoilVertical: [number, number];
	spread: number | null;
	damageModifier: [number, number] | null;
}

export interface ModificationStats {
	totalAmmo?: number;
	magazine?: number;
	reload?: number;
	damage?: number;
	accuracy?: number;
	stability?: number;
	concealment?: number;
	threat?: number;
}

export type ModificationSlot = keyof WeaponModifications

export interface CompatibleWeapons {
	assaultRifle?: readonly AssaultRifleList[];
	shotgun?: readonly (ShotgunPrimaryList | ShotgunSecondaryList)[];
	lightMachineGun?: readonly LightMachineGunList[];
	sniper?: readonly (SniperPrimaryList | SecondarySniperList)[];
	// akimboPistol?: null[];
	akimboShotgun?: readonly AkimboShotgunsList[];
	// akimboSubmachineGun?: null[];
	special?: readonly (SpecialPrimaryList | SpecialSecondaryList)[];
	pistol?: readonly PistolList[];
	submachineGun?: readonly SubmachineGunList[];
}

export type ModIcon =
	| 'inv_mod_ammo_custom'
	| 'inv_mod_ammo_dragons_breath'
	| 'inv_mod_ammo_explosive'
	| 'inv_mod_ammo_piercing'
	| 'inv_mod_ammo_slug'
	| 'inv_mod_ammo_poison'
	| 'inv_mod_autofire'
	| 'inv_mod_barrel'
	| 'inv_mod_barrel_ext'
	| 'inv_mod_bayonet'
	| 'inv_mod_bipod'
	| 'inv_mod_bolt'
	| 'inv_mod_bonus'
	| 'inv_mod_bonus_stats'
	| 'inv_mod_bonus_team'
	| 'inv_mod_custom'
	| 'inv_mod_extra'
	| 'inv_mod_flashlight'
	| 'inv_mod_foregrip'
	| 'inv_mod_grip'
	| 'inv_mod_laser'
	| 'inv_mod_lower_receiver'
	| 'inv_mod_magazine'
	| 'inv_mod_receiver'
	| 'inv_mod_scope'
	| 'inv_mod_second_sight'
	| 'inv_mod_silencer'
	| 'inv_mod_singlefire'
	| 'inv_mod_slide'
	| 'inv_mod_stock'
	| 'inv_mod_underbarrel'
	| 'inv_mod_upper_receiver'
	| 'inv_mod_vertical_grip'
	| 'inv_mod_weapon_cosmetics'

export interface Modification<ModificationName extends string = string> {
	name: ModificationName;
	image: string;
	icon: ModIcon;
	slot: ModificationSlot;
	source: SourceData | ContentData;
	cost: number;
	acquisition?: {
		package?: 'Green Mantis' | 'Yellow Bull' | 'Red Spider' | 'Blue Eagle' | 'Purple Snake';
		achievement?: string;
		sideJob?: string;
		bonus?: number;
		infinite?: true;
		coins?: number;
	};
	specialEffect?: string[];
	stats: ModificationStats;
	compatibleWeapons: CompatibleWeapons;
	incompatibleSlot?: ModificationSlot[];
}

export type ModificationList<T extends string = string> = Record<T, Modification<T>>;

export interface WeaponFind {
	name: AllWeaponList;
	type: WeaponType;
	slot: Slot;
}

export interface Weapon {
	id: number;
	weaponFind: WeaponFind;
	modifications: Partial<Record<ModificationSlot, string>>;
	name?: string;
}