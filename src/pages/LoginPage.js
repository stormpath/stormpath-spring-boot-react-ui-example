import React from 'react';
import DocumentTitle from 'react-document-title';
import { LoginForm } from 'react-stormpath';

var LoginPage = React.createClass({

  render() {
    return (
      <DocumentTitle title={`Login`}>
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <h3>Login</h3>
              <hr />
              <a className="pull-right" href="/register">Register</a>
            </div>
          </div>
          <LoginForm />
        </div>
      </DocumentTitle>
    );
  }
});

export default LoginPage;