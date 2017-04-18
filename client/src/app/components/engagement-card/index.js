import React, { Component } from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import Paper from 'material-ui/Paper';
import PrereqsTable from '../prereqs-table';
import './style.css'

class EngagementCard extends Component {
    constructor(props) {
        super(props)
        this.state = { currentTab: 'prereqs' };
    }

    switchTab = (value) => {
        console.log('Doing switch', value)
        this.setState({ currentTab: value });
    }

    componentDidUpdate() {
        console.log('updated new state', this.state);
    }

    render() {
        return (
            <Paper className='engagement-card-container'>
                <Tabs value={this.state.currentTab} onChange={this.switchTab}>
                    <Tab label='Prereqs' value='prereqs'>
                        <PrereqsTable />
                    </Tab>
                    <Tab label='Apprentices' value='apprentices'>
                    </Tab>
                </Tabs>
            </Paper>
        );
    }
}

export default EngagementCard;