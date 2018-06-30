import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import classNames from 'classnames';
import {Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd';
import styles from './TodayCustomozation.css'

function LoginButton(props) {
  return  (
    <Button type='primary' onClick={props.onClick}>Login</Button>
  )
}

function LogoutButton(props) {
  return  (
    <Button type='danger' onClick={props.onClick}>Logout</Button>
  )
}

class TypeNew extends React.Component {
  constructor(props){
    super(props);
  }
  handleAdd(e) {
    e.preventDefault();
    console.log(this)
    console.log(e)
    var inputDom = this.refs.inputnew;
    var newthing = inputDom.value.trim();
    var rows = this.props.todo;
    if(newthing !== ""){
      rows.push(newthing);
      this.props.onAdd(rows);
    }
    inputDom.value = "";
  }
  render() {
    return(
      <form className={styles['form']} onSubmit={this.handleAdd.bind(this)}>
        <input type="text" ref='inputnew' placeholder="请输入内容"  autoComplete="off"/>
        <button type="submit">add</button>
      </form>
    )
  }
}
class ListTodo extends React.Component {
  constructor(props){
    super(props)
  }
  handleDel(e) {
    var delIndex =e.target.getAttribute('data-key');
    this.props.todo.splice(delIndex,1);
    this.props.onDel(this.props.todo);

  }
  render() {
    return(
      <ul>
        {
          this.props.todo.map(function (item,i) {
            return(
              <li key={i}>
                <label>{item}</label>
                <a data-key={i} onClick={this.handleDel.bind(this)} href="javascript:void(0);">Detele</a>
              </li>
            )
          }.bind(this))
        }
      </ul>
    )
  }
}

class Son extends React.Component {
  constructor (props){
    super(props)
    this.state = {
      "A":this.props.A
    }
    console.log("son constructor")
  }
  componentDidMount() {
    this.setState({
      "A":this.props.A
    })
  }

  componentWillReceiveProps(nextProps) {
    this.setState({"A":nextProps.A})

  }

  handleAdd() {
    let A = ++this.state.A;
    this.setState({A}, () => this.props.onChange(A))
    console.log("son handleAdd")
  }
  render() {
    console.log("son render")
    return (
      <div>
        <button onClick={this.handleAdd.bind(this)}>Son累加</button>
        <h1>{this.state.A}</h1>
      </div>
    )
  }
}

class TodayCustomization extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      date: new Date(),
      value:"星期三",
      isLoggedIn:true,
      todolist:[],
      SA:0
    };
    const s =[...new Set([1,2,2,2,2,2,33,6,6,5,9,1,1,7,5,8,5,2,4,6,0])]
    console.log(s.length)
    let set = new Set(['red','green','blue'])
    for(let item of set.keys()){
      console.log(item)
    }

  }
  handleChange(rows) {
    this.setState({
      todolist:rows
    })
  }

  handleLoginClick() {
    this.setState({
      isLoggedIn:false
    })
  };
  handleLogoutClick() {
    this.setState({
      isLoggedIn:true
    })
  };
  handleChangeA() {
    this.setState({SA : Math.random()})
    console.log("fu handleChangeA")
    console.log(this.state.SA)
  }

  render() {
    console.log("fu render")
      return (
        <div className={styles['This']}>
          <h1>Hello,world!</h1>

          <Son A={this.state.SA} onChange={val => this.setState({SA:val})}/>
          <button onClick={this.handleChangeA.bind(this)}>修改基础值</button>

          {
            // isLoggedIn ?
            // <LoginButton ype='Primary' onClick={this.handleLoginClick.bind(this)} /> :
            // <LogoutButton type="Danger" onClick={this.handleLogoutClick.bind(this)}/>
          }
          <div className={styles['formBox']}>
            <TypeNew onAdd={this.handleChange.bind(this)} todo={this.state.todolist}/>
            <ListTodo onDel={this.handleChange.bind(this)} todo={this.state.todolist}/>
          </div>
        </div>

    );

  }
}
export default TodayCustomization;
