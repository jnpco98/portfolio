import React, { HTMLAttributes } from 'react';
import { footerMenu } from '../constants/menu';

type Props = HTMLAttributes<HTMLDivElement>;

function Footer(props: Props) {
  const { className='', ...restProps } = props;

  return(
    <footer className={`c-footer ${className}`} {...restProps}>
      <p className="c-footer__copyright">
        Copyright@2020 John Ortiz
      </p>
      <div>
        {footerMenu.map(m => <a key={m.key} href={m.link}>{m.label}</a>)}
      </div>
    </footer>
  );
}

export default Footer;