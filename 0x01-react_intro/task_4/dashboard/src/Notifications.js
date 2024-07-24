import React from 'react';
import './Notifications.css';
import { getLatestNotification } from './utils';
import closeIcon from './close-icon.png';

export default function Notifications() {
    const handleButtonClick = () => {
        console.log('Close button has been clicked');
    };

    return (
        <div className='Notifications'>
            <p>Here is the list of notifications</p>

            <button style={{ position: 'absolute', right: '0px', top: '0px' }}
            aria-label='Close'
            onClick={handleButtonClick}
            >
                <img src={closeIcon} alt='close' width={10}/>
            </button>
            {/* Unordered list */}
            <ul>
                <li data-priority="default">New course available</li>
                <li data-priority="urgent">New resume available</li>
                <li dangerouslySetInnerHTML={{ __html: getLatestNotification() }} />
            </ul>
        </div>
    )
}