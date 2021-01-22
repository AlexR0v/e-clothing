import React, { Component } from 'react'
import Button from '../button/Button'
import { signInWithGoogle } from '../firebase/utils'
import FormInput from '../form-input/FormInput'
import './sign-in.scss'

class SignIn extends Component {
  constructor (props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange = e => {
    this.setState({ [ e.target.name ]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.setState({ email: '', password: '' })
    console.log(this.state)
  }

  render () {
    return (
      <div className='sign-in'>
        <h2 className='title'>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            handleChange={this.handleChange}
            type='text'
            name='email'
            label='Email'
            value={this.state.email}
            required
          />
          <FormInput
            handleChange={this.handleChange}
            type='password'
            name='password'
            label='Password'
            value={this.state.password}
            required
          />
          <div className='buttons'>
            <Button
              type='submit'
            >Submit</Button>
            <Button
              onClick={signInWithGoogle}
              isGoogleSignIn
            >Sign in with Google</Button>
          </div>
        </form>
      </div>
    )
  }
}

export default SignIn
