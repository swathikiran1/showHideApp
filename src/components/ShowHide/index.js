// Write your code here
import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {
    isFirstNameHide: true,
    isLastNameHide: true,
    clsValue1: 'name-container',
    clsValue2: 'name-container',
  }

  onFirstNameHideOrShow = () => {
    this.setState(prevState => {
      let result
      if (prevState.isFirstNameHide === true) {
        result = {isFirstNameHide: false, clsValue1: 'name-container1'}
      } else {
        result = {isFirstNameHide: true, clsValue1: 'name-container'}
      }

      return result
    })
  }

  onLastNameHideOrShow = () => {
    this.setState(prevState => {
      let result
      if (prevState.isLastNameHide === true) {
        result = {isLastNameHide: false, clsValue2: 'name-container1'}
      } else {
        result = {isLastNameHide: true, clsValue2: 'name-container'}
      }

      return result
    })
  }

  render() {
    const {isFirstNameHide, isLastNameHide, clsValue1, clsValue2} = this.state

    const firstNameTag = isFirstNameHide ? null : <p className="name">Joe</p>
    const lastNameTag = isLastNameHide ? null : <p className="name">Jonas</p>
    return (
      <div className="bg-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="sml-container">
          <div className="container1">
            <button
              className="button1"
              onClick={this.onFirstNameHideOrShow}
              type="button"
            >
              Show/Hide Firstname
            </button>
            <div className={clsValue1}>{firstNameTag}</div>
          </div>
          <div className="container2">
            <button
              className="button2"
              onClick={this.onLastNameHideOrShow}
              type="button"
            >
              Show/Hide Lastname
            </button>
            <div className={clsValue2}>{lastNameTag}</div>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
