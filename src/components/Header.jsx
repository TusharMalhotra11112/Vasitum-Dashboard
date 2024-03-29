import React, { useState } from 'react'
import search from '../images/search.png'
import notification from '../images/Notification.png'
import messages from '../images/Messages.png'
import pfp from '../images/pfp.png'
import downarrow from '../images/downarrow.png'
import lines from '../images/3Lines.png'

export default function Header({drop,setDrop}) {
  const show = ()=>{
    setDrop((prev)=>{
        return(!prev)
    })
  }
  const [s,sS] = useState(false)

  const change = ()=>{
    console.log(s)
    sS((s)=>{return(true)})
  }
    return (
    <div className='header'>
        <img src={lines} alt="3Lines" className='dropdown' onClick={show}/>
        <div className={"searchTab"}>
            <input type='text' className={"searchField"+ (s?" showS":" dropS")} placeholder='Search'></input>
            <img src={search} alt="search" className='searchIcon' onClick={change}/>
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
