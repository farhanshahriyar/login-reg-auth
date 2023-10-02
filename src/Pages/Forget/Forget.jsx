import { sendPasswordResetEmail } from 'firebase/auth'
import React, { useRef, useState} from 'react'
import toast from 'react-hot-toast'
import auth from '../../firebase/firebase.config'

const Forget = () => {
  const [forgetError, setForgetError] = useState('')
  const emailRef = useRef(null)

  const handleForgetPassword = (e) => {
    e.preventDefault()
    const email = emailRef.current.value;
    // console.log(email)
    if (!email) {
      setForgetError('Please fill up all the fields')
      toast.error('Please fill up all the fields')
      return false
    }

    // send email to reset password
    sendPasswordResetEmail(auth, email)
    .then(() => {
      toast.success('Reset Password Email Sent, check it out')
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage)
      setForgetError(errorMessage)
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
        Fortget Password
      </h2>
    </div>

    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form className="space-y-6" action="#" method="POST">
        <div>
          <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
            Email address
          </label>
          <div className="mt-2">
            <input
              id="email"
              name="email"
              type="email"
              ref={emailRef}
              autoComplete="email"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div>
          <button onClick={handleForgetPassword}
            type="submit"
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Send
          </button>
        </div>
      </form>

      <p className="mt-10 text-center text-sm text-gray-500">
        Done?{' '}
        <a href="/register" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
          Login
        </a>
      </p>
    </div>
  </div>
  )
}

export default Forget
