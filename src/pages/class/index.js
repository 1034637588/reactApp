import React, { Component, lazy, Suspense } from 'react';
import LazyLoade from '../../components/LazyLoad';
import error from '../../components/LazyLoad/error'
export default class Index extends Component {
    render(){
        return (
            <div>
                <LazyLoade component={import('./demo')}></LazyLoade>
            </div>
        );
    }
    
}
