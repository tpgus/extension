import React from 'react';
import classNames from 'classnames/bind';

import styles from './styles/App.module.scss';

const cx = classNames.bind(styles);

function App() {
  return <div className={cx('container')}>init</div>;
}

export default App;
