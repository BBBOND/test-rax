import { createElement } from 'rax';
import Image from 'rax-image';
import icon from '../../static/images/icon.png';

import './index.css';

export default () => {
  const source = {
    uri: icon,
  };
  return (
    <Image
      className="logo"
      source={source}
    />
  );
};
