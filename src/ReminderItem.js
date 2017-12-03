import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { removeReminder } from './actions/index';
import moment from 'moment';

class ReminderItem extends Component {
    constructor(props) {
        super(props);
        this.onDeleteClick = this.onDeleteClick.bind(this);
    }

    onDeleteClick() {
        this.props.removeReminder(parseInt(this.props.id)); 
    }

    render() {
        return (
            <li>
                {this.props.text} = {moment(this.props.datetime).fromNow()}
                <button onClick={this.onDeleteClick}>Delete</button>
            </li>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ removeReminder }, dispatch);
}

export default connect(undefined, mapDispatchToProps)(ReminderItem);