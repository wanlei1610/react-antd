import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import classNames from 'classnames';
import styles from './TodayCustomozation.css'

class TodayCustomization extends React.Component {
  constructor(props){
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
        () => this.tick(),
        1000
    )
  };

  componentWillUnmount() {
    clearInterval(this.timerID);
  };

  tick() {
    this.setState({
        date: new Date()
    })
  };

  render() {
      return (
        <div className={styles['This']}>
          <h1>Hello,world!</h1>
          <h1>It is {this.state.date.toLocaleTimeString()}</h1>
        </div>
    );

  }
}
export default TodayCustomization;
