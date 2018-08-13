>Redux是一种思想，他不依赖任何框架。
>Redux 是 JavaScript 状态容器，提供可预测化的状态管理。
>Redux的中文文档可见[http://www.redux.org.cn](http://www.redux.org.cn)。
>本案例的gitbub地址[https://github.com/josson001/redux.git](https://github.com/josson001/redux.git),希望给个star。

###Redux的基础原理
+ state 作为仓库，保存数据。
+ action 通过 
```
store.dispatch({
   type:"changeName"
 })
```
改变action.type，来改变state仓库里的数据。
+  最后通过
```
//监听state仓库里的数据变化，重新渲染页面。React.store 和store 相同
//因为我将store 绑定到了 React上；
 React.store.subscribe(render);
```

###Redux的开始前准备
本文主要讲解的是在react脚手架中使用；
+ 已经配置node环境。
+ 使用 create-react-app 快速构建 React 开发环境
```
$ cnpm install -g create-react-app
$ create-react-app my-app
$ cd my-app/
$ npm start
````
+ 安装Redux
```
$ npm install --save redux
```

###React 脚手架的目录结构
![create-react-app.jpg](https://upload-images.jianshu.io/upload_images/10474135-ce7a00d81d995080.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

####其中我们主要关注src目录下的内容
我将Redux的引入写在了App.js文件里
 ```
//在组件中引入redux
import { createStore } from 'redux';
//封装函数
var fun=function(obj){
  return function(state,action){
//@@redux/INIT默认状态下的action.type,它加的有随机参数。
//自定义的action.type不要包含@@redux/INIT，否组会影响结果。
    var reg= RegExp("@@redux/INIT")
    if(reg.test(action.type)){
//此处的返回值是第一次执行时的返回值，返回了data的对象
      return obj.data;
    }else{
//Object.assign返回合并数组，并返回新数组，被重新赋值给state仓库。
      return Object.assign({},state,obj.mutations[action.type](state));
    }
  }
}
//createStore是函数执行一次，返回值就是state
let store = createStore(fun({
//data是初始state仓库的值；
    data:{
      name:"jos",
      age:20
    },
//mutations是定义的可以改变state里面的值的方法
    mutations:{
      changeName(){
        return ({
          name :"son"
        })
      },
      changeAge(){
        return ({
          age:"state.age+1"
        })
        
      }
    }
  })
);
console.log(store.getState().name);
function changeName(){
  store.dispatch({
    type:"changeName"
  })
}
function changeAge(){
  store.dispatch({
    type:"changeAge"
  });
}
//此处是通过点击事件触发的改变
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title"><Father /><Child /></h1>
        </header>
        <p className="App-intro" onClick={changeName}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
         <span>{store.getState().name}</span>
      </div>
    );
  }
}
//将store注册到React上，这样就可以在任何组件通过React.store访问了
React.store = store;
```

>特别感谢veblen大神的指点.


