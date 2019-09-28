import React from 'react';
import GoogleLogin from 'react-google-login';
import { login } from '../../api/googleAuth';

import './googleLogin.css';

export default props => {
  const responseGoogle = async authResult => {
    try {
      if (authResult['code']) {
        const result = await login(authResult['code']);
        console.log(authResult);
        props.login(result);
      } else {
        // There was an error.
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="login-page">
      <GoogleLogin
        // use your client id here -- this client id would not work
        clientId="222646766650-gqnkmntgaf988iqc2adh61rnge1310q8.apps.googleusercontent.com"
        buttonText="Login with google"
        responseType="code"
        /**
         * To get access_token and refresh_token in server side,
         * the data for redirect_uri should be postmessage.
         * postmessage is magic value for redirect_uri to get credentials without actual redirect uri.
         */
        redirectUri="postmessage"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  );
};
