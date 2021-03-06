import React from 'react';
import Screen from './Screen';
import Button from './Button';

class Frame extends React.Component {
  constructor() {
    super();
    this.state = {
      question: '',
      answer: ''
    }
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    return (
      <div className="frame">
        <div className="calculator-title">
          Reactulator
        </div>
        <Screen question={this.state.question} answer={this.state.answer}/>
        <div className="button-row">
          <Button className="calcbutton" label={'1'} handleClick={this.handleClick} type='input' />
          <Button className="calcbutton" label={'2'} handleClick={this.handleClick} type='input' />
          <Button className="calcbutton" label={'3'} handleClick={this.handleClick} type='input' />
          <Button className="calcbutton" label={'4'} handleClick={this.handleClick} type='input' />
          <Button className="calcbutton" label={'-'} handleClick={this.handleClick} type='action' />
          <Button className="calcbutton" label={'+'} handleClick={this.handleClick} type='action' />
        </div>
        <div className="button-row">
          <Button className="calcbutton" label={'5'} handleClick={this.handleClick} type='input' />
          <Button className="calcbutton" label={'6'} handleClick={this.handleClick} type='input' />
          <Button className="calcbutton" label={'7'} handleClick={this.handleClick} type='input' />
          <Button className="calcbutton" label={'8'} handleClick={this.handleClick} type='input' />
          <Button className="calcbutton" label={'*'} handleClick={this.handleClick} type='action' />
          <Button className="calcbutton" label={'/'} handleClick={this.handleClick} type='action' />
        </div>
        <div className="button-row">
          <Button className="calcbutton" label={'9'} handleClick={this.handleClick} type='input' />
          <Button className="calcbutton" label={'. '} handleClick={this.handleClick} type='input' />
          <Button className="calcbutton" label={'0'} handleClick={this.handleClick} type='input' />
          <Button className="calcbutton" label={'Cls'} handleClick={this.handleClick} type='action' />
          <Button className="calcbutton" label={'='} handleClick={this.handleClick} type='action' />
        </div>
      </div>
    );
  }

  handleClick(event){
    const value = event.target.value;
    switch (value) {
      case '=': {
        const answer = eval(this.state.question).toString();
        this.setState({ answer });
        break;
      }
      case 'Cls': {
        this.setState({ question: '', answer: '' });
        break;
      }
      default: {
        this.setState({ question: this.state.question += value})
        break;
      }
    }
  }
}

export default Frame;
