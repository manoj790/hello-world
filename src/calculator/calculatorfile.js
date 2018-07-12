import React, { Component } from 'react';

class Calculator extends Component {
	constructor(props) {
		super(props);
		this.state = {
         textvalue: ''
		}
    this.insert = this.insert.bind(this);
    this.evaluate = this.evaluate.bind(this);
    this.backSpace = this.backSpace.bind(this);
    this.allClear = this.allClear.bind(this);
    this.dot = this.dot.bind(this);
	}

    insert(num) {
      const { textvalue } = this.state;
      if(textvalue.length === 1 && (textvalue === '*' || textvalue === '/' ||
       textvalue === '+' || textvalue === '-' || textvalue === '%')) {
        this.setState({textvalue: '0'});
      }
      else{
        this.setState({ textvalue: textvalue === '0' ? String(num) : textvalue + num });
      }
    }

    dot() {
      const operator = ['/','*','+','-','%'];
      const { textvalue } = this.state;
      if(textvalue.indexOf('.') === -1) {
        this.setState({ textvalue: textvalue + '.' });
      }
      else {
        this.setState({ textvalue: textvalue });
      }
    }

    evaluate() {
      const {textvalue} = this.state;
      if(textvalue === 0 || textvalue === '') {
        this.setState({ textvalue: '' })
      }
      let value = eval(this.state.textvalue)
        this.setState({ textvalue: value }); 
    }

    backSpace() {
      let lastResult = this.state.textvalue;
      if(lastResult.length === 0) {
        this.setState({textvalue: ''})
      }
      else {
        let newResult = lastResult.slice(0, lastResult.length - 1);
        this.setState({textvalue: newResult });
      }
    }

    allClear() {
      this.setState({textvalue: ''});
    }

  	render() {
  		return (
        <div className= "main">
          <center>
            <h1> Calculator </h1>
            <form name="form">
              <input className = "textview" value = {this.state.textvalue} />
            </form>
              <input className = "button" type="button" value="C" onClick={() => this.backSpace()} />
              <input className = "button" type="button" value="AC" onClick={() => this.allClear()} />
              <input className = "button" type="button" value="/"  onClick={() => this.insert('/')} />
              <input className = "button" type="button" value="*"  onClick={() => this.insert('*')} /><br/>
          
              <input className = "button" type="button" value="7" onClick={() => this.insert('7')} />
              <input className = "button" type="button" value="8" onClick={() => this.insert('8')} />
              <input className = "button" type="button" value="9" onClick={() => this.insert('9')} />
              <input className = "button" type="button" value="-" onClick={() => this.insert('-')} /><br/>
            
              <input className = "button" type="button" value="4" onClick={() => this.insert('4')} />
              <input className = "button" type="button" value="5" onClick={() => this.insert('5')} />
              <input className = "button" type="button" value="6" onClick={() => this.insert('6')} />
              <input className = "button" type="button" value="+" onClick={() => this.insert('+')} /><br/>
          
              <input className = "button" type="button" value="1" onClick={() => this.insert('1')} />
              <input className = "button" type="button" value="2" onClick={() => this.insert('2')} />
              <input className = "button" type="button" value="3" onClick={() => this.insert('3')} />
              <input className = "button" type="button" value="%" onClick={() => this.insert('%')} /><br/>

              <input className = "button" type="button" value="0" onClick={() => this.insert('0')} />
              <input className = "button" type="button" value="." onClick={() => this.dot('.')} />
              <input className = "eqlbtn" type="button" value="=" onClick={() => this.evaluate()} />
          </center>
        </div>
  		)
  	}
  }
  export default Calculator;