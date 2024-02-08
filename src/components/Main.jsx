import React from 'react'
import Header from './Header'
import p2 from '../images/+2.png'
import p5 from '../images/+5.png'
import pin from '../images/pin.png'
import dots from '../images/3dots.png'

export default function Main({drop,setDrop}) {
  return (
    <div className='main'>
        <Header drop={drop} setDrop={setDrop}/>
        <div className='dashboard'>Dashboard</div>
        <div className="content">
            <div className="leftContent">
                <div className="contentData">
                    <div className="availablePosition">
                        <p className="top">Available Position</p>
                        <p className="middle">24</p>
                        <p className="bottom">4 urgently needed</p>
                    </div>
                    <div className="jobOpen">
                        <p className="top">Job Open</p>
                        <p className="middle">10</p>
                        <p className="bottom">4 Active hiring</p>
                    </div>
                    <div className="newEmployee">
                        <p className="top">New Employee</p>
                        <p className="middle">24</p>
                        <p className="bottom">4 Department</p>
                    </div>
                </div>

                <div className="totalContent">
                    <div className="totalEmployee">
                        <div className="totalLeft">
                            <div className="totalLeftTop">
                                <div className="totalLeftTopTop">Total Employees</div>
                                <div className="totalLeftTopBottom">216</div>
                            </div>
                            <div className="totalLeftBottom">
                                <div className="totalLeftBottomTop">120 Men</div>
                                <div className="totalLeftBottomBottom">96 Women</div>
                            </div>
                        </div>
                        <div className="totalRight">
                            <img src={p2} alt="+2" />
                        </div>
                    </div>
                    <div className="talentRequest">
                        <div className="totalLeft">
                            <div className="totalLeftTop">
                                <div className="totalLeftTopTop">Talent Request</div>
                                <div className="totalLeftTopBottom">16</div>
                            </div>
                            <div className="totalLeftBottom">
                                <div className="totalLeftBottomTop">6 Men</div>
                                <div className="totalLeftBottomBottom">10 Women</div>
                            </div>
                        </div>
                        <div className="totalRight">
                            <img src={p5} alt="+2" />
                        </div>
                    </div>
                </div>

                <div className="announcement">
                    <div className="announcementHead">
                        <p className='announcementText'>Announcement</p>
                        <input type="date" defaultValue="2021-09-02" max="2021-09-02" className='announcementCalander'/>
                    </div>
                    <div className="announcementSection">
                        <div className="announcementTab">
                            <div className="announcementData">
                                <p className="announcementDataHead">Outing schedule for every departement</p>
                                <p className="announcementTime">5 Minutes ago</p>
                            </div>
                            <div className="announcementImg">
                                <img src={pin} alt="pins" />
                                <img src={dots} alt="dots" />
                            </div>
                        </div>
                        <div className="announcementTab">
                            <div className="announcementData">
                                <p className="announcementDataHead">Meeting HR Department</p>
                                <p className="announcementTime">Yesterday, 12:30 PM</p>
                            </div>
                            <div className="announcementImg">
                                <img src={pin} alt="pins" />
                                <img src={dots} alt="dots" />
                            </div>
                        </div>
                        <div className="announcementTab">
                            <div className="announcementData">
                                <p className="announcementDataHead">IT Department need two more talents for UX/UI Designer position</p>
                                <p className="announcementTime">Yesterday, 09:15 AM</p>
                            </div>
                            <div className="announcementImg">
                                <img src={pin} alt="pins" />
                                <img src={dots} alt="dots" />
                            </div>
                        </div>
                    </div>
                    <div className="announcementAll">See All Announcement</div>
                </div>
            </div>


            <div className="rightContent">
                
                <div className="recentActivity">
                    <div className="recentHead">Recent Activity</div>
                    <div className="recentContent">
                        <div className="recentTime">10.40 AM, Fri 10 Sept 2021</div>
                        <div className="recentContentHead">You Posted a New Job</div>
                        <div className="recentContentDetail">Kindly check the requirements and terms of work and make sure everything is right.</div>
                    </div>
                    <div className="recentFooter">
                        <p className="recentFooterText">Today you makes 12 Activity</p>
                        <p className="recentFooterButton">See All Activity</p>
                    </div>
                </div>

                <div className="upcomingSchedule">
                    <div className="upcomingHead">
                        <p className='upComingText'>Upcoming Schedule</p>
                        <input type="date" defaultValue="2021-09-02" max="2021-09-02" className='announcementCalander' /> 
                    </div>
                    <p className="upcomingPriorityText">Priority</p>

                    <div className="scheduleTab">
                        <div className="scheduleData">
                            <div className="scheduleDataHead">Review candidate applications</div>
                            <div className="scheduleDataTime">Today - 11.30 AM</div>
                        </div>
                        <img src={dots} alt="3dots" className='upcomingDots'/>
                    </div>

                    <p className="upcomingPriorityText">Other</p>
                    <div className="scheduleTab">
                        <div className="scheduleData">
                            <div className="scheduleDataHead">Interview with candidates</div>
                            <div className="scheduleDataTime">Today - 10.30 AM</div>
                        </div>
                        <img src={dots} alt="3dots" className='upcomingDots'/>
                    </div>
                    <div className="scheduleTab">
                        <div className="scheduleData">
                            <div className="scheduleDataHead">Short meeting with product designer from IT Departement</div>
                            <div className="scheduleDataTime">Today - 09.15 AM</div>
                        </div>
                        <img src={dots} alt="3dots" className='upcomingDots'/>
                    </div>
                    <div className="scheduleFooter">Create a new Schedule</div>
                </div>
            </div>
        </div>
    </div>
  )
}
