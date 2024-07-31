import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Notifications.css';
import { getLatestNotification } from '../utils';
import closeIcon from '../close-icon.png';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';

export default function Notifications({ listNotifications }) {
    const [displayDrawer, setDisplayDrawer] = useState(true);
    
    const handleButtonClick = () => {
        console.log('Close button has been clicked');
        setDisplayDrawer(!displayDrawer);
    };

    return (
        <>
            <div className='menuItem'>
                <button><p>Your notifications</p></button>
            </div>

            {displayDrawer ? (
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
                    {listNotifications.length === 0 ? (
                            <NotificationItem type="default" value="No new notification for now" />
                        ) : (
                            listNotifications.map((notification) => (
                                <NotificationItem
                                    key={notification.id}
                                    type={notification.type}
                                    value={notification.value}
                                    html={notification.html}
                                />
                            ))
                        )}
                    </ul>
                </div>
            ) : null}
        </>
       
    );
}

Notifications.propTypes = {
    listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
    listNotifications: [],
};

Notifications.propTypes = {
    displayDrawer: PropTypes.bool.isRequired,
  };