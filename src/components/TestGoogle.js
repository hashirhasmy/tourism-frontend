import { useState } from 'react';
import { GoogleLogin } from 'react-google-login';

function TestGoogle() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [url, setUrl] = useState('');

  const responseGoogle = (response) => {
    setName(response.profileObj.name);
    setEmail(response.profileObj.email);
    setUrl(response.profileObj.imageUrl);
  };

  return (
    <div
      className="App"
      style={{
        marginTop: '15rem',
      }}
    >
      <h1 style={{ color: '#697e3e' }}>Login with Google</h1>
      <hr className="divider light my-4" />
      <h6>Welcome: {name}</h6>
      <h6>Email: {email}</h6>
      <img src={url} alt={name} />

      <GoogleLogin
        clientId="262497595819-7r35ccuv0nr9mra10lilq841oob01ai1.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  );
}

export default TestGoogle;
