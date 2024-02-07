import React from 'react'
import search from '../images/search.png'
import notification from '../images/Notification.png'
import messages from '../images/Messages.png'
import pfp from '../images/pfp.png'
import downarrow from '../images/downarrow.png'

export default function Header() {
  return (
    <div className='header'>
        <div className="searchTab">
            <input type='text' className='searchField' placeholder='Search'></input>
            <img src={search} alt="search" className='searchIcon'/>
        </div>
        <div className="profile">
            <img src={notification} alt="notification" className='icon'/>
            <img src={messages} alt="messages" className='icon'/>
            <div className="user">
                <img src={pfp} alt="pfp" className='pfp'/>
                <div className="userData">
                    <p className="userName">Admirra John</p>
                    <img src={downarrow} alt="downarrow" className='icon'/>
                </div>
            </div>
        </div>
    </div>
  )
}
