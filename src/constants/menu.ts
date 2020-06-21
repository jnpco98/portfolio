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
  { key: 'ms_home', link: '/', label: 'Home' },
  { key: 'ms_about', link: '#', label: 'About' },
  { key: 'ms_projects', link: '#', label: 'Projects' },
  { key: 'ms_contact', link: '#', label: 'Contact' },
  { key: 'ms_resume', link: '#', label: 'Resume' }
];
export const primaryMenu: MenuItem[] = [];
export const secondaryMenu: MenuItem[] = [
  { key: 's_home', link: '/', label: 'Home' },
  { key: 's_about', link: '#', label: 'About' },
  { key: 's_projects', link: '#', label: 'Projects' },
  { key: 's_contact', link: '#', label: 'Contact' },
  { key: 's_resume', link: '#', label: 'Resume' }
];
export const footerMenu: MenuItem[] = [
  { key: 'f_github', link: '#', label: 'Github' },
  { key: 'f_linkedin', link: '#', label: 'LinkedIn' },
  { key: 'f_resume', link: '#', label: 'Resume' },
  { key: 'f_email', link: 'mailto:jnpco.98@gmail.com', label: 'Contact' }
];