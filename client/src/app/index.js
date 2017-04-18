import React, { Component } from 'react';
import './index.css';
import EngagementCard from './components/engagement-card/index.js';

class App extends Component {
    render() {
        return (
            <div className='App'>
                <div className='App-header'>
                    <h2 className='App-header-text'>Apprentice Engagement Dashboard</h2>
                </div>
                <div className='App-main'>
                    <EngagementCard />
                </div>
            </div>
        );
    }
}

export default App;
