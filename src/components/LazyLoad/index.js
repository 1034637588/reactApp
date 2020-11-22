import React, { Component, lazy, Suspense } from 'react';

// const Demo = lazy(() => import('./demo'));
//这样引入会import的是promise lazy处理这个promise

export default class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    _renderLazy = () => {
        let Lazy;
        const { component, delay, ...other } = this.props;
        console.log(component)
        if (!component || component.constructor.name != 'Promise') {
            Lazy = import('./error');
        }
        Lazy = lazy(() => {
            return new Promise(resolve => {
                setTimeout(() => {
                    resolve(component)
                }, delay || 1000);
            })
        })
        return <Lazy {...other}></Lazy>
    }

    render() {
        return (
            <div>
                {/* fallback 在子组件为解析之前执行 */}
                <Suspense fallback={<div>loading......</div>}>
                    {this._renderLazy()}
                </Suspense>
            </div>
        );
    }

}
