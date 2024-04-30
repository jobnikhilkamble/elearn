import { MdDashboard, MdWeb, MdRadioButtonChecked } from 'react-icons/md';

export const navComponentsStudent = [
  {
    to: '/invitations',
    name: 'Invitations',
    exact: false,
    Icon: MdRadioButtonChecked,
  },
  {
    to: '/add_student',
    name: 'Add Student',
    exact: false,
    Icon: MdRadioButtonChecked,
  },
];

export const navComponentsResource = [
  {
    to: '/resource',
    name: 'All Resources ',
    exact: false,
    Icon: MdRadioButtonChecked,
  },
  {
    to: '/add_resource',
    name: 'Add Resource',
    exact: false,
    Icon: MdRadioButtonChecked,
  },
];
export const navComponentsCategory = [
  {
    to: '/categories',
    name: 'Categories',
    exact: false,
    Icon: MdRadioButtonChecked,
  },
  {
    to: '/add_catrgory',
    name: 'Add Category',
    exact: false,
    Icon: MdRadioButtonChecked,
  },
];

export const navItems = [
  { to: '/', name: 'dashboard', exact: true, Icon: MdDashboard },
];
