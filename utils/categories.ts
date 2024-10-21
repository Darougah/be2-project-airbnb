import { IconType } from 'react-icons';
import { MdCabin } from 'react-icons/md';

import { TbCaravan, TbTent, TbBuildingCottage } from 'react-icons/tb';

import { GiWoodCabin, GiMushroomHouse } from 'react-icons/gi';
import { PiWarehouse, PiLighthouse, PiVan } from 'react-icons/pi';

import { GoContainer } from 'react-icons/go';

type Category = {
  label: CategoryLabel;
  icon: IconType;
};

export type CategoryLabel =
  | 'cabin'
  | 'tent'
  | 'van'
  | 'cottage'
  | 'container'
  | 'caravan'
  | 'lighthouse'
  | 'mushroom'
  | 'warehouse'
  | 'woodCabin';

export const categories: Category[] = [
  {
    label: 'cabin',
    icon: MdCabin,
  },
  {
    label: 'van',
    icon: PiVan,
  },
  {
    label: 'tent',
    icon: TbTent,
  },
  {
    label: 'warehouse',
    icon: PiWarehouse,
  },
  {
    label: 'cottage',
    icon: TbBuildingCottage,
  },
  {
    label: 'mushroom',
    icon: GiMushroomHouse,
  },
  {
    label: 'container',
    icon: GoContainer,
  },
  {
    label: 'caravan',
    icon: TbCaravan,
  },
  {
    label: 'lighthouse',
    icon: PiLighthouse,
  },
  {
    label: 'woodCabin',
    icon: GiWoodCabin,
  },
];
