import * as React from 'react';
import { Component } from 'react';
import './About.css';

export interface IProps {
    opts?: string;
}

interface IState {
    opts?: string;
}

export default class About extends Component<IProps, IState> {

    constructor(props: IProps, state: IState){
        super(props, state);
    }

    public render() {
        return (<div>
                <div>
                    <h2>About app:</h2>
                    Application was developed especially for frontend developers to provide 
                    them the most reliable and modern information about popular frameworks.
                </div>

                <div>
                    <h2>Version:</h2>
                    1.0.3
                </div>

                <div>
                    <h2>App Creator:</h2>
                    Kateryna Levytska
                </div>

                <div className="Footer">
                    ® All rights reserved
                </div>
        </div>);
    }
}