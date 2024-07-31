import React from 'react';
import './Notifications.css';
import { getLatestNotification } from '../utils';
import closeIcon from '../close-icon.png';
import NotificationItem from './NotificationItem';

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
                <NotificationItem type="default" value="New course available" />
                <NotificationItem type="urgent"  value="New resume available" />
                <NotificationItem html={{ __html: getLatestNotification() }} />
            </ul>
        </div>
    )
}