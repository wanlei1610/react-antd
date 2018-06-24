import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from '../Common/Header';
import LeftNav from '../Common/LeftNav'
import RightContent from '../Common/RightContent';
// import Footer from '../Common/Footer';

import classNames from 'classnames';
import 'antd/dist/antd.css';
import styles from './App.css';

class App extends React.Component {
  render() {
    return (
      <div className={styles['container']}>
        <div className={classNames(styles["Window"])}>
          <header className={classNames(styles['Window_Header'])}>
            <Header/>
          </header>
          <article className={classNames(styles['Window_Body'])}>
            <LeftNav/>
            <RightContent/>
          </article>
          <footer className={classNames(styles['Window_footer'])}>
          </footer>
        </div>
      </div>
    )
  }
}
export default App;
