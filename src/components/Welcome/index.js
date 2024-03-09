// Write your code here
import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {
    text: 'subscribe',
  }
  change = () => {
    // let word
    this.setState(prevState => ({
      text: prevState.text === 'subscribe' ? 'subscribed' : 'subscribe',
    }))
  }

  render() {
    const {text} = this.state
    return (
      <div className="box">
        <h1 className="header">Welcome</h1>
        <p className="p"> Thank You! Happy Learning</p>
        <button className="btn" onClick={this.change}>
          {text}
        </button>
      </div>
    )
  }
}

export default Welcome
