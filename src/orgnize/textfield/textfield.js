import React,{Component}from "react"
import Mock from "mockjs"
import TextField from 'material-ui/TextField'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar';
import ReactDOM from 'react-dom';

class Field extends Component{

componentWillMount(){
  var data = Mock.mock({
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    'list|1-10': [{
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'id|+1': 1
    }]
})
// 输出结果
console.log("ssss",JSON.stringify(data, null, 4))}

  render(){
    let [foo,[[boo],baz]]=[1,[[2],3]]
    let [head,...tail]=[1,2,3,4]
    let [x,y,...z]=['a','b']
    let [x2,y2,...z2]=new Set(['3','5','6'])
    function log(y){
      y = y || 'World'
      console.log(y);
    }
    return(
      <div>
      <MuiThemeProvider>
      <AppBar
      title="Title"
      iconClassNameRight="muidocs-icon-navigation-expand-more"
      />
      <TextField/>
      </MuiThemeProvider>
      {foo}
      {boo}
      {baz}
      {log(false)}
      <br/>
      {head}
      <br/>
      {tail}
      <br/>
      {x}
      <br/>
      {y}
      <br/>
      {z}
      <br/>
      {x2}
      <br/>
      {y2}
      <br/>
      {z2}
     </div>
   );
  }
}

export default Field;
