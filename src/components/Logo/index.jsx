import { createElement } from 'rax';
import Image from 'rax-image';

import './index.css';

export default () => {
  const source = {
    uri: 'images/icon.png',
  };
  return (
    <Image
      className="logo"
      source={source}
    />
  );
};
