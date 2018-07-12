import React, { Component } from 'react';
import './Stopwatch.css';
class Stopwatch extends Component {
  state = {
    status: false,
    runningTime: 0,
    secs: 0
  };

  handleClick = () => {
    const {secs}=this.state
    this.setState(state => {
      if (state.status) {
        clearInterval(this.timer);
      } else {
        const startTime = Date.now() - this.state.runningTime;
        this.timer = setInterval(() => {
          let rs = this.setState({ runningTime: Date.now() - startTime });
            if(this.state.runningTime>=1000) {
              this.setState({secs: this.state.runningTime/1000 });
              if(this.state.secs >= 1){
                secs:secs;
              }
              this.setState({runningTime: this.state.runningTime%1000});
              
            }
        });
      }
      return { status: !state.status };
    });
  };

  handleReset = () => {
  	clearInterval(this.timer);
    this.setState({ runningTime: 0, status: false });
    this.setState({ secs: 0, status: false });
  };
  render() {
    const { status, runningTime, secs } = this.state;
    return (
      <div>
        <p>{secs}sec:{runningTime}ms</p>
        <div className = "button">
        <button className = "btn" onClick={this.handleClick}>{status ? 'Stop' : 'Start'}</button>
        <button className = "btn1" onClick={this.handleReset}>Reset</button>
        </div>
      </div>
    );
  }
}
export default Stopwatch;