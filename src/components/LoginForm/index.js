import Cookie from 'js-cookie'
import { Component } from "react";

import './index.css'

class LoginForm extends Component{
    state={username:'',
    password:'',
    showErrorMsg:false,
    errorMsg:''
}

    onSubmitSuccess=(jwtToken)=>{
       Cookie.set('jwt_token',jwtToken,{expires:45})
    }

    onChangeUsername=(event)=>{
        this.setState({username:event.target.value})
    }
    onChangePassword=(event)=>{
        this.setState({password:event.target.value})
    }

    
    submitForm= async event=>{
        event.preventDefault()
        const {username,password}=this.state
        const userDetails={username,password}
        const url='https://apis.ccbp.in/login'
        const options={
            method:'POST',
            body:JSON.stringify(userDetails)
        }
        const response=await fetch(url,options)
        const data=await response.json()
        if (response.ok === true) {
            this.onSubmitSuccess(data.jwt_token)
          } else {
            this.onSubmitFailure(data.error_msg)
          }
    }

    renderPasswordField = () => {
        const {password} = this.state
        return (
          <>
            <label className="input-label" htmlFor="password">
              PASSWORD
            </label>
            <input
              type="password"
              id="password"
              className="password-input-field"
              value={password}
              onChange={this.onChangePassword}
            />
          </>
        )
      }
      renderUsernameField = () => {
        const {username} = this.state
        return (
          <>
            <label className="input-label" htmlFor="username">
              USERNAME
            </label>
            <input
              type="text"
              id="username"
              className="username-input-field"
              value={username}
              onChange={this.onChangeUsername}
            />
          </>
        )
      }

    render(){
        const {showErrorMsg,errorMsg}=this.state
        return (
            <div className="login-form-bg-cont">
                <div className="card">
                <form className="form-container" onSubmit={this.submitForm}>
                    <img src="https://img.freepik.com/free-photo/green-background-with-square-with-circle-middle_1340-35512.jpg?t=st=1716011360~exp=1716014960~hmac=1112863e3428e187faefd20ab0b33415b1043561d4d61fa835f790e4fd381ea8&w=740"
                     className="login-website-logo-mobile-image "
                     alt='website'/>
                <div className="input-container">{this.renderUsernameField()}</div>
                <div className="input-container">{this.renderPasswordField()}</div>
                <button type="submit" className="login-button">
                    Login
                </button>
                {showErrorMsg && <p>*{errorMsg}</p>}
                </form>
                </div>
            </div>
        )
    }
}

export default LoginForm