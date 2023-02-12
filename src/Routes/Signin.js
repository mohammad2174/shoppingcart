/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { setCurrentUser } from "../actions/index";
import { connect } from "react-redux";
import axios from 'axios';
import { Navigate } from "react-router-dom";


class SignIn extends Component {
  state = {
    id: 0,
    email: '',
    password: '',
    errorMessage: [],
    redirect: false
  }

  handleSubmit = e => {
    e.preventDefault();

    const loginFormData = new FormData();
    loginFormData.append("email", this.state.email)
    loginFormData.append("password", this.state.password)
    axios.post("http://localhost:8000/api/v1/login", loginFormData)
      .then((res) => {
        this.setState({ redirect: true });
        this.props.setCurrentUser({
          currentUser: {
            password: this.state.password,
            email: this.state.email,
            name: res.data.data.name,
            image: res.data.data.image,
            id: res.data.data.id,
            api_token: res.data.data.api_token
          }
        })
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
    if (this.state.redirect) {
      return <Navigate to="/checkout" />
    }

    return (
      <>
        <div className="flex items-center justify-center min-h-full px-4 py-12 sm:px-6 lg:px-8">
          <div className="w-full max-w-md space-y-8">
            <div>
              <h2 className="mt-6 text-3xl font-extrabold text-center text-gray-900">Sign in to your account</h2>
              <p className="mt-2 text-sm text-center text-gray-600">
                Or{' '}
                <Link to="/register">
                  <span className="font-medium text-gray-600 cursor-pointer hover:text-indigo-500">
                    you don't have an any account <b className="text-indigo-500">Register</b>
                  </span>
                </Link>
              </p>
            </div>
            <div className="overflow-hidden bg-white shadow-2xl sm:rounded-lg">
              <form className="w-10/12 space-y-6 m-9" onSubmit={this.handleSubmit}>
                <input type="hidden" name="remember" defaultValue="true" />
                <div className="-space-y-px rounded-md shadow-sm">
                  {this.state.errorMessage.email ? <p className="text-red-500">{this.state.errorMessage.email[0]}</p> : <p className="text-red-500">{this.state.errorMessage.data}</p>}
                  <div>
                    Email address
                    <input
                      id="email-address"
                      name="email"
                      pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                      autoComplete="email"
                      onChange={this.handleChange}
                      className={this.state.errorMessage.email || this.state.errorMessage.data ? "appearance-none rounded-none relative block w-full px-3 py-2 border-b-2 border-red-400 text-gray-900 focus:outline-none focus:border-indigo-500 focus:z-10 sm:text-sm" : "appearance-none rounded-none relative block w-full px-3 py-2 border-b-2 border-gray-400 text-gray-900 focus:outline-none focus:border-indigo-500 focus:z-10 sm:text-sm"}
                    />
                  </div>
                  <div className="pt-12">
                    {this.state.errorMessage.password ? <p className="text-red-500">{this.state.errorMessage.password[0]}</p> : <p className="text-red-500">{this.state.errorMessage.data}</p>}
                    <div>
                      Password
                      <input
                        id="password"
                        name="password"
                        autoComplete="current-password"
                        onChange={this.handleChange}
                        className={this.state.errorMessage.email || this.state.errorMessage.data ? "appearance-none rounded-none relative block w-full px-3 py-2 border-b-2 border-red-400 text-gray-900 focus:outline-none focus:border-indigo-500 focus:z-10 sm:text-sm" : "appearance-none rounded-none relative block w-full px-3 py-2 border-b-2 border-gray-400 text-gray-900 focus:outline-none focus:border-indigo-500 focus:z-10 sm:text-sm"}
                      />
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-12">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                    />
                    <label htmlFor="remember-me" className="block ml-2 text-sm text-gray-900">
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
                  <button
                    type="submit"
                    className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md group hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Sign in
                  </button>
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
