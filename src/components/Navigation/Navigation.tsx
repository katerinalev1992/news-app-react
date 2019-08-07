import React, { Component } from 'react';
import './Navigation.css';
import { Link, withRouter } from "react-router-dom";
import { AuthUserContext } from '../../firebase/AuthUser';
import { AuthRoutes, NonAuthRoutes, Route } from '../../routes/authRoute';
import { SignOutButton } from '../SignOutButton/SignOutButton';

export interface IProps {
  history: any;
}

export interface IState {
  activeLink: number;
}
export  const Navigation = () => (
  <AuthUserContext.Consumer>
    {authUser => (authUser ? <NavigationAuth /> : <NavigationNonAuth />)}
  </AuthUserContext.Consumer>
);

class NavigationAuthC extends Component<IProps, IState> {
  
  constructor(props: IProps, state: IState) {
    super(props, state);
    this.state = {
      activeLink: 0
    }
  }

  handleClick = (id: number): void => {
    this.setState({ activeLink: id });
  }

  render(){
    return(<ul className='Navigation'>
      {AuthRoutes.map((route: Route) => (
      <li className="NavigationLi" key={route.id} onClick={() => this.handleClick(route.id)}>
        <Link to={route.path} 
              className={(route.id === this.state.activeLink ? "active_item" : "")}>
                {route.description}
        </Link>
      </li>
    ))}
    <li className="NavigationLi"><SignOutButton/></li>
  </ul>);
  }
}

export const NavigationAuth = withRouter(NavigationAuthC as any);

export class NavigationNonAuthC extends Component<IProps, IState> {
  constructor(props: IProps, state: IState) {
    super(props, state);
    this.state = {
      activeLink: 0
    }
  }

  handleClick(id: number): void {
    this.setState({ activeLink: id });
  }

  render(){
    return(
      <ul className='Navigation'>
        {NonAuthRoutes.map((route: Route) => (
          <li className="NavigationLi" key={route.id} onClick={() => this.handleClick(route.id)}>
            <Link to={route.path} 
                  className={(route.id === this.state.activeLink ? "active_item" : "")}>
                    {route.description}
            </Link>
          </li>
        ))}
      </ul>
    );
  }
} 

export const NavigationNonAuth = withRouter(NavigationNonAuthC as any);