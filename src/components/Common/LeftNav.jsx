import React, {Component} from 'react';
import classNames from 'classnames';
import {Badge} from 'antd';
import styles from './LeftNav.css';

class LeftNav extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      active : false,
      isToggleOn: true
    }

  };
  componentDidMount() {
    const numbers = [1,2,3,4,5];
    const doubled = numbers.map((numbers) => numbers*2);
    console.log(doubled);

  };
  clickAddActive() {

  };
  handleClick(num) {
    this.setState(prevState => ({
        isToggleOn : !prevState.isToggleOn
    }));
      console.log(num);
  }
  render () {
      const numbers = [1,2,3,4,5];
      const listItems = numbers.map((number,index) =>
        <span key={index}>{number}</span>
      )
    return (

      <div className={styles["This"]}>
        <div className={styles["menuList"]}>
          <a className={styles["current"]} href="/wsc">
            <div className={styles["menuLi"]}>
              <div className={styles["icon"]}></div>
              <span>未首测学员</span>
              <div className={styles["insignia"]}>
                <div><Badge className={styles['none']} count={200}></Badge></div>
                <div><Badge count={0} showZero  style={{background:"#1890ff"}}></Badge></div>
              </div>
            </div>
          </a>
          <a href="/jd">
            <div className={styles["menuLi"]}>
              <div className={styles["icon"]}></div>
              <span>今日定制学员</span>
              <div className={styles["insignia"]}>
                <div><Badge count={200}></Badge></div>
                <div><Badge count={0} showZero  style={{background:"#1890ff"}}></Badge></div>
              </div>
            </div>
          </a>
          <a href="/qb">
            <div className={styles["menuLi"]}>
              <div className={styles["icon"]}></div>
              <span>全部学员</span>
              <div className={styles["insignia"]}>
                <div><Badge count={200}></Badge></div>
                <div><Badge count={0} showZero  style={{background:"#1890ff"}}></Badge></div>
              </div>
            </div>
          </a>
          <a href="/zc">
            <div className={styles["menuLi"]}>
              <div className={styles["icon"]}></div>
              <span>周抽查任务</span>
              <div className={styles["insignia"]}>
                <div><Badge count={99} showZero  style={{background:"#1890ff"}}></Badge></div>
              </div>
            </div>
          </a>
        </div>
        <div>{listItems}</div>
        <div className={styles["logo"]} onClick={this.handleClick.bind(this,333)}>
          {this.state.isToggleOn?'ON':"OFF"}
          这里是logo图片地方
        </div>
      </div>
    )
  }
}
export default LeftNav;