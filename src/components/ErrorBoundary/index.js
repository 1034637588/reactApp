import React, { Component } from 'react'

export default class ErroeBoundray extends Component {
    constructor() {
        super();
        this.state = {
            flage: false
        }
    }
    //点击事件内部的错误 或者settimeout等异步操作的错误等都是无法检测的
    static getDerivedStateFromError(){
        // 更新 state 使下一次渲染能够显示降级后的 UI
        return  {
            flage:true
        }
    }
    componentDidCatch(error, errorInfo) {
        console.log(error, errorInfo);
    }
    render() {
        return (
            <div>
                {this.state.flage ? <h1> 发生错误，请稍后再试！</h1> : this.props.children}
            </div>
        )
    }
}
