import React, { Component } from 'react';
import { Link } from "react-router-dom";


class Register extends Component {
    render() {
        return (
        <>
        <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full space-y-8">
            <div>
              <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Create new account</h2>
              <p className="mt-2 text-center text-sm text-gray-600">
                Or{' '}
                <Link to="/signin">
                <span className="font-medium text-gray-600 cursor-pointer hover:text-indigo-500">
                Already A Member? <b className="text-indigo-500">Login</b>
                </span>
                </Link>
              </p>
            </div>
            <div className="bg-white shadow-2xl overflow-hidden sm:rounded-lg">
            <form className="w-10/12 m-9 space-y-6" action="#" method="POST">
              <input type="hidden" name="remember" defaultValue="true" />
              <div className="rounded-md shadow-sm -space-y-px">
                <div>
                First name
                  <input
                    id="first-name"
                    name="fname"
                    autoComplete="fname"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border-b-2 border-gray-400 text-gray-900 focus:outline-none focus:border-indigo-500 focus:z-10 sm:text-sm"
                  />
                </div>  

                <div className="pt-4">
                    Last name
                  <input
                    id="last-name"
                    name="lname"
                    autoComplete="lname"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border-b-2 border-gray-400 text-gray-900 focus:outline-none focus:border-indigo-500 focus:z-10 sm:text-sm"
                  />
                </div>

                <div className="pt-4">
                    Email address
                  <input
                    id="email-address"
                    name="email"
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    autoComplete="email"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border-b-2 border-gray-400 text-gray-900 focus:outline-none focus:border-indigo-500 focus:z-10 sm:text-sm"
                  />
                </div>

                <div className="pt-4">
                    Password
                  <input
                    id="password"
                    name="password"
                    pattern="^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])([a-zA-Z0-9@$!%*?&]{8,})$"
                    autoComplete="current-password"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border-b-2 border-gray-400 text-gray-900 focus:outline-none focus:border-indigo-500 focus:z-10 sm:text-sm"
                  />
                </div>
              </div>  
              
              <div className="flex pt-12 items-center justify-between">
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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


export default Register;