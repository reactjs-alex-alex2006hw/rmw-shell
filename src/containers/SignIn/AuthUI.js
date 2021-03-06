import React, { Component } from 'react'
import firebaseui from 'firebaseui'
import firebase from 'firebase/auth'

export class AuthUI extends Component {
  constructor(props) {
    super(props)
    this.state = {
      authUi: false
    }
  }

  componentDidMount() {
    const { firebaseApp, uiConfig } = this.props

    let authUi = null

    try {
      authUi = new firebaseui.auth.AuthUI(firebaseApp.auth())
      this.setState({ authUi }, () => {
        authUi.start('#firebaseui-auth', uiConfig)
      })
    } catch (err) {
      console.warn(err)
    }
  }

  componentWillUnmount() {
    this.state.authUi.delete()
  }

  render() {
    return (
      <div style={{ paddingTop: 35, width: '100%' }}>
        <div id='firebaseui-auth' style={{ width: '100%' }} />
      </div>

    )
  }
}

export default AuthUI
