import React, {Component} from 'react';
import classNames from 'classnames';
import {Icon} from 'antd';
import styles from './Header.css';

class Header extends React.Component {
  render () {
    return (
      <div className={styles['This']}>
        <div className={styles['Logo']}>定制名师客户端</div>
        <div className={styles['SetBox']}>
          <span><Icon type="setting" /></span>
          <span><Icon type="minus" /></span>
          <span><Icon type="close" /></span>
        </div>
      </div>
    )
  }
}
export default Header;