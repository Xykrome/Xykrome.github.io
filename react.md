# React框架

React 是 Facebook 在 2011 年开发的前端 JavaScript 库。 它遵循基于组件的方法，有助于构建可重用的UI组件。 它用于开发复杂和交互式的 Web 和移动 UI。 尽管它仅在 2015 年开源，但有一个很大的支持社区。

## 第一题  如何将两个或多个组件嵌入到一个组件中？

可以通过以下方式将组件嵌入到一个组件中：

```js 
class MyComponent extends React.Component{
    render(){
        return(          
            <div>
                <h1>Hello</h1>
                <Header/>
            </div>
        );
    }
}
class Header extends React.Component{
    render(){
        return
            <h1>Header Component</h1>   
    };
}
ReactDOM.render(
    <MyComponent/>, document.getElementById('content')
);
```

## 第二题  React组件生命周期的阶段是什么？

React 组件的生命周期有三个不同的阶段：

初始渲染阶段：这是组件即将开始其生命之旅并进入 DOM 的阶段。
更新阶段：一旦组件被添加到 DOM，它只有在 prop 或状态发生变化时才可能更新和重新渲染。这些只发生在这个阶段。
卸载阶段：这是组件生命周期的最后阶段，组件被销毁并从 DOM 中删除。

componentWillMount() – 在渲染之前执行，在客户端和服务器端都会执行。
componentDidMount() – 仅在第一次渲染后在客户端执行。
componentWillReceiveProps() – 当从父类接收到 props 并且在调用另一个渲染器之前调用。
shouldComponentUpdate() – 根据特定条件返回 true 或 false。如果你希望更新组件，请返回true 否则返回 false。默认情况下，它返回 false。
componentWillUpdate() – 在 DOM 中进行渲染之前调用。
componentDidUpdate() – 在渲染发生后立即调用。
componentWillUnmount() – 从 DOM 卸载组件后调用。用于清理内存空间。

## 第三题  Redux遵循的三个原则是什么？

单一事实来源：整个应用的状态存储在单个 store 中的对象/状态树里。单一状态树可以更容易地跟踪随时间的变化，并调试或检查应用程序。
状态是只读的：改变状态的唯一方法是去触发一个动作。动作是描述变化的普通 JS 对象。就像 state 是数据的最小表示一样，该操作是对数据更改的最小表示。
使用纯函数进行更改：为了指定状态树如何通过操作进行转换，你需要纯函数。纯函数是那些返回值仅取决于其参数值的函数。

## 待续