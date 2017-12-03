import React from 'react';
import ReminderItem from './ReminderItem';

class ReminderList extends React.Component {
    render() {
        return (
            <div>
                <h2>List of reminders</h2>
                <ul style={{listStyle: 'none'}}>
                    {this.props.reminders.map((ele) => 
                        <ReminderItem 
                            key={ele.id} 
                            id={ele.id}
                            text={ele.text}
                            datetime={ele.datetime}
                    />) }
                </ul>
            </div>
        )
    }
}

export default ReminderList;