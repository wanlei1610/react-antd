import React, {Component} from "react";
import { observable } from 'mobx';
import { observer , computed } from 'mobx-react';
import { Button , Input ,Checkbox} from  'antd'
import classNames from 'classnames';
import styles from './AllStudent.css'


@observer
class TodoList extends React.Component {
  @observable updateCounter = 0;
  addTodo(e) {
    let name = window.prompt()
    let newObj ={task:name,completed:false}
    this.props.store.todo.push(newObj)
    console.log(this.props.store.todo)
    this.updateCounter ++;
  }
  render() {
    console.log(this.updateCounter)
    const store =this.props.store;
    const updateCounter = this.updateCounter;
    return  (
      <div>
        <ul>
          {
            store.todo.map(
              (todo,idx) => <TodoView todo={todo} key={idx}/>
            )
          }
        </ul>
        <Button type="primary" onClick={this.addTodo.bind(this)}>add</Button>
      </div>
    )
  }
}
@observer
class TodoView extends React.Component {
  @observable updateCounter = 0;
  onToggleCompleted() {
    const todo = this.props.todo;
    todo.completed = !todo.completed;
    this.updateCounter++;
  }

  onRename()  {
    const todo =this.props.todo;
    console.log(todo)
    todo.task = prompt('Task name', todo.task) || todo.task;
    console.log(todo.task)
    console.log(todo)
    this.updateCounter++;
  }
  render()  {
    const todo =this.props.todo;
    const updateCounter = this.updateCounter;
    return (
      <li onDoubleClick={this.onRename.bind(this)}>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={this.onToggleCompleted.bind(this)}
        />
        {todo.task}
      </li>
    )
  }
}

class TextAreaBox extends React.Component {

  render() {
    const {TextArea} = Input;
    return (
      <div className={styles['textareaBox']}>
        <span>电话沟通记录：</span>
        <TextArea className={styles['textarea']} row ={4}/>
      </div>
    )
  }
}


@observer
class AppointmentTime extends React.Component {
  @observable  updateCounter = 0;
 
  constructor(props) {
    super(props);
    this.state = {
      checked:false,
      value:""
    }
    let modules = [
      {name:"第一组的数据",listTime:[0,1,2,3,4,5,6,7,8]},
      {name:"第二组的数据",listTime:[0,1,2,3,4,5,6,7,8]},
      {name:"第三组的数据",listTime:[0,1,2,3,4,5,6,7,8]},
      {name:"第四组的数据",listTime:[0,1,2,3,4,5,6,7,8]},
      {name:"第五组的数据",listTime:[0,1,2,3,4,5,6,7,8]},
      {name:"第六组的数据",listTime:[0,1,2,3,4,5,6,7,8]},
      {name:"第七组的数据",listTime:[0,1,2,3,4,5,6,7,8]},
      {name:"第八组的数据",listTime:[0,1,2,3,4,5,6,7,8]},
    ]
  }
  componentDidMount(e) {
  }
  handleChange(e) {
    // console.log(e.target.checked = true )
    this.setState((prevState,props) => ({
      // checked:!prevState.checked
    }))
    this.updateCounter++;
  }
  render() {
     const updateCounter = this.updateCounter;
    let modules = [
      {name:"第一组的数据",listTime:[{num:0,checked:true},{num:2,checked:true},{num:3,checked:false},{num:4,checked:false},{num:5,checked:false},{num:6,checked:false},{num:8,checked:false}]},
      // {name:"第二组的数据",listTime:[0,1,2,3,4,5,6]},
      // {name:"第三组的数据",listTime:[0,1,2,3,4,5,6]},
      // {name:"第四组的数据",listTime:[0,1,2,3,4,5,6]},
      // {name:"第五组的数据",listTime:[0,1,2,3,4,5,6]},
      // {name:"第六组的数据",listTime:[0,1,2,3,4,5,6]},
      // {name:"第七组的数据",listTime:[0,1,2,3,4,5,6]},
      // {name:"第八组的数据",listTime:[0,1,2,3,4,5,6]},
      // {name:"第九组的数据",listTime:[0,1,2,3,4,5,6]},
    ]
    let _this = this;
    let newArr = modules.map(function(trArr,tridx){
      return (<tr key={'tr'+tridx}>
        {
          trArr.listTime.map(function (tdArr,tdidx) {
            return(
              <td key={'td'+tdidx}>
                <Checkbox dataKey={'tr'+tridx+'td'+tdidx} checked={trArr.checked} disabled={false} onChange={_this.handleChange.bind(_this)}/>
                <span className={styles['appointmentNum']}>已约{tdArr.num}人</span>
              </td>
            )
          })
        }
      </tr>)
    })
    return (
      <div className={styles['appointmentTimebox']}>
        <div className={styles['title']}>
          <span>请预约数学课下次测试时间</span>
          <div className={styles['calendar']}></div>
        </div>
        <div className={styles['tableBox']}>
          <ul>
            <li></li>
            <li>08:00-10:00</li>
            <li>09:00-11:00</li>
            <li>10:00-12:00</li>
            <li>11:00-13:00</li>
            <li>12:00-14:00</li>
            <li>13:00-15:00</li>
            <li>14:00-16:00</li>
            <li>15:00-17:00</li>
            <li>16:00-18:00</li>
          </ul>
          <table className={styles["table1"]}>
            <tbody>
              <tr>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td>08:00-10:00</td>
              </tr>
              <tr>
                <td>09:00-11:00</td>
              </tr>
              <tr>
                <td>10:00-12:00</td>
              </tr>
              <tr>
                <td>11:00-13:00</td>
              </tr>
              <tr>
                <td>12:00-14:00</td>
              </tr>
              <tr>
                <td>13:00-15:00</td>
              </tr>
              <tr>
                <td>14:00-16:00</td>
              </tr>
              <tr>
                <td>15:00-17:00</td>
              </tr>
              <tr>
                <td>16:00-18:00</td>
              </tr>
            </tbody>
          </table>
          <table className={styles["table2"]}>
            <tbody>
            <tr>
              <td>
                <div className={styles['tdWeek']}>
                  <span>周一</span>
                  <span>11月13日</span>
                </div>
              </td>
              <td>
                <div className={styles['tdWeek']}>
                  <span>周二</span>
                  <span>11月13日</span>
                </div>
              </td>
              <td>
                <div className={styles['tdWeek']}>
                  <span>周三</span>
                  <span>11月13日</span>
                </div>
              </td>
              <td>
                <div className={styles['tdWeek']}>
                  <span>周四</span>
                  <span>11月13日</span>
                </div>
              </td>
              <td>
                <div className={styles['tdWeek']}>
                  <span>周五</span>
                  <span>11月13日</span>
                </div>
              </td>
              <td>
                <div className={styles['tdWeek']}>
                  <span>周六</span>
                  <span>11月13日</span>
                </div>
              </td>
              <td>
                <div className={styles['tdWeek']}>
                  <span>周日</span>
                  <span>11月13日</span>
                </div>
              </td>
            </tr>
            {newArr}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

class AllStudent extends React.Component {
  render() {
    const store = {
      todo: [
        {task:'北京',computed:false},
        {task:'上海',computed:false},
        {task:'武汉',computed:false},
        {task:'广州',computed:false},
        {task:'杭州',computed:false}
      ]};

    return (
      <div className={styles['This']}>
        {/*<h1>全部学员!</h1>*/}
        {/*<TodoList store={store}/>*/}
        {/*<TextAreaBox/>*/}
        <AppointmentTime/>
      </div>

    );
  }
}

export default AllStudent;
