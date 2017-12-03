import React, { Component } from 'react';
import ReminderList from './ReminderList';
import { connect } from 'react-redux';
import moment from 'moment';
// import { bindActionCreators } from 'redux';
import { addReminder } from './actions/index';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      datetime: null,
      err: '',
    }
    this.onAddClick = this.onAddClick.bind(this);
    this.onTextChange = this.onTextChange.bind(this);
    this.onDatetimeChange = this.onDatetimeChange.bind(this);
  }

  onAddClick(e) {
    // this.boundActionCreators.addReminder(this.state.text);
    if (this.state.text.trim() !== '') {
      this.props.addReminder({text: this.state.text, datetime: Date.parse(this.state.datetime)});
      // console.log(this.state.datetime);
      // console.log(moment(Date.parse(this.state.datetime)).fromNow());
      this.setState(() => ({
        text: '',
        err: ''
      }))
    } else {
      this.setState(() => ({ err: 'Invalid input' }))
    }
  }

  onTextChange(e) {
    e.persist();
    this.setState(() => ({ text: e.target.value }))
  }

  onDatetimeChange(e) {
    e.persist();
    this.setState(() => ({ datetime: e.target.value }));
  }

  render() {
    return (
      <div className="App">
        <h1>Reminder App</h1>
        <div className="form-inline">
          <div className="form-group">
            <input value={this.state.text} onChange={this.onTextChange} className="form-control" />
          </div>
          <div className="form-group">
            <input className="form-control" type="datetime-local" onChange={this.onDatetimeChange}/>
          </div>
          <button onClick={this.onAddClick} className="btn btn-success">Add this one</button>
        </div>
        {this.state.err && <div style={{color: 'red', fontWeight: 'bold'}}>{this.state.err}</div>}
        <ReminderList reminders={this.props.reminders} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    reminders: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addReminder: (text) => dispatch(addReminder(text))
  }
  //return bindActionCreators({addReminder}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
