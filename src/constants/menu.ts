export type MenuItem = {
  key: string;
  link?: string;
} & ({
  label: string, icon?: never
} | {
  label?: never, icon: string
});

export const mobilePrimaryMenu: MenuItem[] = [];
export const mobileSecondaryMenu: MenuItem[] = [
  { key: 'ms_about', link: '#', label: 'About' },
  { key: 'ms_projects', link: '#', label: 'Projects' },
  { key: 'ms_contact', link: '#', label: 'Contact' },
  { key: 'ms_resume', link: '#', label: 'Resume' }
];
export const primaryMenu: MenuItem[] = [];
export const secondaryMenu: MenuItem[] = [
  { key: 'ms_about', link: '#', label: 'About' },
  { key: 'ms_projects', link: '#', label: 'Projects' },
  { key: 'ms_contact', link: '#', label: 'Contact' },
  { key: 'ms_resume', link: '#', label: 'Resume' }
];
export const footerMenu: MenuItem[] = [
  { key: '', link: '', label: '' },
  { key: '', link: '', label: '' },
  { key: '', link: '', label: '' },
  { key: '', link: '', label: '' }
];