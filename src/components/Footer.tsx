import React from 'react';
import { footerMenu } from '../constants/menu';

function Footer() {
  return(
    <footer className="c-footer">
      <p className="c-footer__copyright">
        copyright@2020 John Ortiz
      </p>
      <div>
        {footerMenu.map(m => <a key={m.key} href={m.link}>{m.label}</a>)}
      </div>
    </footer>
  );
}

export default Footer;