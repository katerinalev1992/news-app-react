import * as React from 'react';
import { Component } from 'react';

export default class Account extends Component{
    
    public render() {
        return (
            <div>
                Account: {localStorage.getItem('authUser')}
            </div>
        );
    }
}