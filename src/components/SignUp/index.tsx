import { History } from "history";
import * as React from "react";
import { Link, withRouter } from "react-router-dom";
import { SignUpForm } from "./SignUpForm";
import { SIGN_UP } from "../../constants/routes";

interface IHistory {
  history: History;
}

const SignUpComponent = (props: IHistory) => (
  <div>
    <h1>SignUp</h1>
    <SignUpForm history={props.history} />
  </div>
);

export const SignUpLink = () => (
  <p>
    Don't have an account? <Link to={SIGN_UP}>Sign Up</Link>
  </p>
);

export const SignUp = withRouter(SignUpComponent);