import React, { HTMLAttributes } from 'react';
import { footerMenu } from '../constants/menu';

type Props = {
  content: {
    copyright: string;
  }
} & HTMLAttributes<HTMLDivElement>;

function Footer(props: Props) {
  const { className='', content, ...restProps } = props;

  return(
    <footer className={`c-footer ${className}`} {...restProps}>
      <p className="c-footer__copyright">
        {content.copyright}
      </p>
      <div>
        {footerMenu.map(m => <a key={m.key} href={m.link} target='_blank' rel='noopener noreferrer'>{m.label}</a>)}
      </div>
    </footer>
  );
}

export default Footer;