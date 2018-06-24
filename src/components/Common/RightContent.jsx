import React, {Component} from 'react';
import {BrowserRouter, Route,} from 'react-router-dom';
import TodayCustomization from '../TeacherIndex/TodayCustomization'
import AllStudent from '../TeacherIndex/AllStudent'
import TheFirstTest from '../TeacherIndex/TheFirstTest'
import WeekSpotTest from '../TeacherIndex/WeekSpotTest'

import styles from './RightContent.css';

class RightContent extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <div className={styles["This"]}>
          <Route className={styles["route"]} path="/wsc" component={TheFirstTest}/>
          <Route className={styles["route"]} path="/jd" component={TodayCustomization}/>
          <Route className={styles["route"]} path="/qb" component={AllStudent}/>
          <Route className={styles["route"]} path="/zc" component={WeekSpotTest}/>
        </div>
      </BrowserRouter>
    )
  }
}
export default RightContent;