import React, { Component } from "react";
import { Link } from "react-router-dom";
import { setCurrentUser } from "../actions/index";
import { connect } from "react-redux";
import axios from 'axios';

class SignIn extends Component {
  state = {
    email: '',
    password: '',
    errorMessage: []
  }

  handleSubmit = e => {
    e.preventDefault();

    const loginFormData = new FormData();
    loginFormData.append("email", this.state.email)
    loginFormData.append("password", this.state.password)
    axios.post("http://localhost:8000/api/v1/login", loginFormData)
    .then((response) => {
      this.props.setCurrentUser(response.data.data)
    })
    .catch((err) => {
      this.setState({ errorMessage: err.response.data });
      console.log(err.response.data);
    });
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const { setCurrentUser, user } = this.props;
    // console.log(user.currentUser.api_token);
    return (
      <>
        <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full space-y-8">
            <div>
              <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
              <p className="mt-2 text-center text-sm text-gray-600">
                Or{' '}
                <Link to="/register">
                <span className="font-medium text-gray-600 cursor-pointer hover:text-indigo-500">
                you don't have an any account <b className="text-indigo-500">Register</b>
                </span>
                </Link>
              </p>
            </div>
            <div className="bg-white shadow-2xl overflow-hidden sm:rounded-lg">
            <form className="w-10/12 m-9 space-y-6" onSubmit={this.handleSubmit}>
              <input type="hidden" name="remember" defaultValue="true" />
              <div className="rounded-md shadow-sm -space-y-px">
                {this.state.errorMessage.email ? <p className="text-red-500">{this.state.errorMessage.email[0]}</p> : <p className="text-red-500">{this.state.errorMessage.data}</p>}
                <div>
                    Email address
                  <input
                    id="email-address"
                    name="email"
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    autoComplete="email"
                    required
                    onChange={this.handleChange}
                    className={this.state.errorMessage.email || this.state.errorMessage.data ? "appearance-none rounded-none relative block w-full px-3 py-2 border-b-2 border-red-400 text-gray-900 focus:outline-none focus:border-indigo-500 focus:z-10 sm:text-sm" : "appearance-none rounded-none relative block w-full px-3 py-2 border-b-2 border-gray-400 text-gray-900 focus:outline-none focus:border-indigo-500 focus:z-10 sm:text-sm"}
                  />
                </div>
                <div className="pt-12">
                    Password
                  <input
                    id="password"
                    name="password"
                    autoComplete="current-password"
                    required
                    onChange={this.handleChange}
                    className={this.state.errorMessage.email || this.state.errorMessage.data ? "appearance-none rounded-none relative block w-full px-3 py-2 border-b-2 border-red-400 text-gray-900 focus:outline-none focus:border-indigo-500 focus:z-10 sm:text-sm" : "appearance-none rounded-none relative block w-full px-3 py-2 border-b-2 border-gray-400 text-gray-900 focus:outline-none focus:border-indigo-500 focus:z-10 sm:text-sm"}
                  />
                </div>
              </div>
  
              <div className="flex pt-12 items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                    Remember me
                  </label>
                </div>
  
                <div className="text-sm">
                  <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                    Forgot your password?
                  </a>
                </div>
              </div>
              <div>
              {user.currentUser === undefined || !user.currentUser.api_token ? 
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  onClick={() => setCurrentUser({currentUser: {
                    password: this.state.password,
                    email: this.state.email,
                  }})}
                >
                  Sign in
                </button>
              :
              <Link
                  to="/checkout"
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  onClick={() => setCurrentUser({currentUser: {
                    password: this.state.password,
                    email: this.state.email,
                  }})}
                >
                  Sign in
                </Link>  
              }
              </div>
            </form>
            </div>
          </div>
        </div>
      </>
    )
  }
}

const getUser = state => state.user

const mapStateToProps = state => ({
  user: getUser(state)
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: currentUser => dispatch(setCurrentUser(currentUser))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
