import React, { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import auth from '../../firebase/firebase.config';
import { toast } from 'react-hot-toast';

const Register = () => {

  const [registerError, setRegisterError] = useState('')
  const [showPassword, setShowPassword] = useState(false)


  // Handle Register
  const handleRegister = (e) => {
    e.preventDefault()
    // console.log('Register hoise re mama')
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password)
    // reset error
    setRegisterError('')

    // if (!email || !password) {
    //   setRegisterError('Please fill up all the fields')
    //   toast.error('Please fill up all the fields')
    //   return false
    // }

    if (password.length < 6) {
      setRegisterError('Password must be at least 6 characters long')
      toast.error('Password must be at least 6 characters long')
      return false
    } else if (/[A-Z]/.test(password) === false) {
      setRegisterError('Password must contain at least one uppercase letter')
      toast.error('Password must contain at least one uppercase letter')
      return false
    }

    // create user with email and password
    createUserWithEmailAndPassword(auth, email, password)
    .then(result => {
      console.log(result.user)
      toast.success('Register Successfully Done')
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage)
      setRegisterError(errorMessage)
      toast.error(errorMessage)
    });
  }

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      <img
        className="mx-auto h-10 w-auto"
        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
        alt="Your Company"
      />
      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        Register your account
      </h2>
    </div>

    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form className="space-y-6" action="#" method="POST" onSubmit={handleRegister} >
        <div>
          <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
            Email address
          </label>
          <div className="mt-2">
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
              Password
            </label>
            <div className="text-sm">
              <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                Forgot password?
              </a>
            </div>
          </div>
          <div className="mt-2">
            <input
              id="password"
              name="password"
              type={showPassword ? 'text' : 'password'} // show password
              autoComplete="current-password"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
            <span onClick={()=> setShowPassword(!showPassword)} className="text-xs text-blue-500 cursor-pointer">Show</span>
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Register
          </button>
        </div>
      </form>

      <p className="mt-10 text-center text-sm text-gray-500">
        a member?{' '}
        <a href="/login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
          Click here to login
        </a>
      </p>
    </div>
  </div>
  )
}

export default Register
