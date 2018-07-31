import React , { Component} from 'react';
import { Select, Input, InputNumber} from 'antd';
import classNames from 'classnames';
import styles from './WeekSpotTest.css';
const Option = Select.Option;

class WeekSpotTest extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      value:"",
      OptionHtml:[],
      isverify:'',
      arr:[{name:"学生手机",number:123},{name:"家长手机",number:110},{name:"家长常用",number:112},{name:"验证手机",number:111},{name:"学生常用",number:119}]
    }
  }
  componentWillMount() {
    this.setOptionHTML(0);
  }
  componentDidMount() {
    console.log(this.state)
  }

  setOptionHTML(k) {
    let OptionHtml = []
    this.state.arr.map(function (value,index) {
      OptionHtml.push(<Option key={index} value={value.number}>{value.name}</Option>)
    })
    this.setState({
      OptionHtml:OptionHtml,
      value:this.state.arr[k].number,
      isverify:this.state.arr[k].name
    })
  }
  componentWillReceiveProps(nextProps) {
  }

  handleChange(value,option) {
    this.setState({
      value:value,
      isverify:option.props.children
    })
  }
  handleBlur(val) {
    var _this =this;
    let newArr=this.state.arr;
    let k = '';
    newArr.map(function(o,index) {
      if(o.name === _this.state.isverify){
        o.number=val
        k = index;
      }
    })

    // console.log(this.state)
    // for(var i =0 ;i<newArr.length;i++){
    //   if(newArr[i].name ===_this.state.isverify){
    //     newArr[i].number= val;
    //     k = i;
    //   }
    // }
    this.setState({
      arr:newArr
    })
    this.setOptionHTML(k);
  }

  render () {
    return (
      <div className={styles['This']}>
        <h1>周抽查任务！</h1>
        <div className={styles['selectBox']}>
          <Select
            style={{width:"200px"}}
            defaultValue={this.state.arr[0].name}
            dropdownMatchSelectWidth={true}
            onChange={this.handleChange.bind(this)}
          >
            {this.state.OptionHtml}
          </Select>
          <InputNumber disabled={this.state.isverify === '验证手机'?true:false} ref='inputNumber' className={styles['input']} value={this.state.value}  onChange={this.handleBlur.bind(this)} />
        </div>
      </div>
    )
  }
}
export default WeekSpotTest;