import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';

class Facebook extends Component {
  state = {
    isLoggedIn: false,
    userID: '',
    name: '',
    email: '',
    picture: '',
  };

  componentClicked = () => {
    console.log('clicked');
  };
  responseFacebook = (response) => {
    this.setState({
      isLoggedIn: true,
      userId: response.userId,
      name: response.name,
      email: response.email,
      picture: response.picture.data.url,
    });
  };

  render() {
    let fbContent;

    if (this.state.isLoggedIn) {
      fbContent = (
        <div
          style={{
            width: '700px',
            margin: 'auto',
            background: '#f4f4f4',
            padding: '20px',
          }}
        >
          <img src={this.state.picture} alt={this.state.name} />
          <h5>Welcome: {this.state.name}</h5>
          <h5>Email: {this.state.email}</h5>
        </div>
      );
    } else {
      fbContent = (
        <FacebookLogin
          appId="309920220016490"
          autoLoad={true}
          fields="name,email,picture"
          onClick={this.componentClicked}
          callback={this.responseFacebook}
        ></FacebookLogin>
      );
    }

    return (
      <div
        className="App"
        style={{
          marginTop: '15rem',
        }}
      >
        <h2 style={{ color: '#697e3e' }}>
          {' '}
          To get started Login with Facebook
        </h2>
        <hr className="divider light my-4" />
        {fbContent}
      </div>
    );
  }
}
export default Facebook;
