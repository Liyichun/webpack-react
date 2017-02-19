import React from 'react';
import ReactDOM from 'react-dom';

export default class LoginControl extends React.Component {
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {isLoggedIn: false};
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
      }

      handleLoginClick() {
          this.setState({isLoggedIn: true});
      }
      handleLogoutClick() {
          this.setState({isLoggedIn : false});
      }

      render() {
          const isLoggedIn = this.state.isLoggedIn;
          let button = null;
          if(isLoggedIn) {
              button = <LogoutButton onClick={this.handleLogoutClick} />;
          }
          else {
              button = <LoginButton onClick={this.handleLoginClick} />;
          }
          return (
              <div>
                  <Greeting isLoggedIn={isLoggedIn} />
                  {button}
              </div>
          );
      }
}
function UserGreeting(props) {
    return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
    return <h1>Please sign up.</h1>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
  return <UserGreeting />;
}
  return <GuestGreeting />;
}

function LoginButton(props) {
  return (
  <button onClick={props.onClick}>
  Login
  </button>
  );
}

function LogoutButton(props) {
  return (
  <button onClick={props.onClick}>
  Logout
  </button>
  );
}