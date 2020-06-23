export type MenuItem = {
  key: string;
} 
& ({
  link: string, to?: never
} | {
  link?: never, to: string
})
& ({
  label: string, icon?: never
} | {
  label?: never, icon: string
});

export const mobilePrimaryMenu: MenuItem[] = [];
export const mobileSecondaryMenu: MenuItem[] = [
  { key: 'ms_home', to: 'main-banner', label: 'Home' },
  { key: 'ms_about', to: 'about', label: 'About' },
  { key: 'ms_projects', to: 'showcase', label: 'Projects' },
  { key: 'ms_contact', to: 'contact', label: 'Contact' },
  { key: 'ms_resume', link: 'https://jnpco-portfolio.s3.amazonaws.com/resume.pdf', label: 'Resume' }
];
export const primaryMenu: MenuItem[] = [];
export const secondaryMenu: MenuItem[] = [
  { key: 's_home', to: 'main-banner', label: 'Home' },
  { key: 's_about', to: 'about', label: 'About' },
  { key: 's_projects', to: 'showcase', label: 'Projects' },
  { key: 's_contact', to: 'contact', label: 'Contact' },
  { key: 's_resume', link: 'https://jnpco-portfolio.s3.amazonaws.com/resume.pdf', label: 'Resume' }
];
export const footerMenu: MenuItem[] = [
  { key: 'f_github', link: 'https://github.com/jnpco98/', label: 'Github' },
  { key: 'f_linkedin', link: 'https://www.linkedin.com/in/john-ortiz-855664189/', label: 'LinkedIn' },
  { key: 'f_resume', link: 'https://jnpco-portfolio.s3.amazonaws.com/resume.pdf', label: 'Resume' },
  { key: 'f_email', link: 'mailto:jnpco.98@gmail.com', label: 'Contact' }
];