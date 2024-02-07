import React from 'react'
import logo from '../images/logo.png'
import dashboard from '../images/dashboard.svg'
import recruitement from '../images/Recruitement.png'
import schedule from '../images/Schedule.png'
import employee from '../images/Employee.png'
import Department from '../images/Department.png'
import support from '../images/Support.png'
import Settings from '../images/Setting.png'

export default function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebarLogo">
            <img src={logo} alt="Vasitum" className='logo'/>
        </div>
        
        <div className="mainMenu">
            <div className='sideBarText'>MAIN MENU</div>
            <div>
              <img src={dashboard} alt="dashboard" className='sidebarImg active'/>
              <p className='sidebarText active'>DashBoard</p>
            </div>
            <div>
              <img src={recruitement} alt="Recritement"  className='sidebarImg'/>
              <p className='sidebarText'>Recruitement</p>
            </div>
            <div>
              <img src={schedule} alt="scedule"  className='sidebarImg'/>
              <p className='sidebarText'>Schedule</p>
            </div>
            <div>
              <img src={employee} alt="employee"  className='sidebarImg'/>
              <p className='sidebarText'>Employee</p>
            </div>
            <div>
              <img src={Department} alt="department"  className='sidebarImg'/>
              <p className='sidebarText'>Department</p>
            </div>
        </div>
        
        <div className="other">
            <div className='sideBarText'>OTHER</div>
            <div>
              <img src={support} alt="support"  className='sidebarImg'/>
              <p className='sidebarText'>Support</p>
            </div>
            <div>
              <img src={Settings} alt="settings"  className='sidebarImg'/>
              <p className='sidebarText'>Settings</p>
            </div>
        </div>
    </div>
  )
}
