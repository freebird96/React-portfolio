import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component {
    render() {
        return(
                <Grid>
                    <Cell col={4}>
                        <div className="profile-img">
                            <img
                                src="https://www.drupal.org/files/user-pictures/picture-2204516-1469808304.png"
                                alt="avatar"
                                style={{height: '280px'}}
                            />
                        </div>
                        
                        <div className="profile-heading">
                            <h2 style={{paddingTop: '.5em',textAlign:"center"}}>Noble K Varghese</h2>
                            <h4 style={{color: 'grey', textAlign:"center"}}>Full Stack Web Developer</h4>
                            <hr className="line"/>
                        </div>
                        
                        <div className="summary">
                            <p>B-tech graduate and an aspiring web developer/data enthusiast with a significant understanding of various programming languages. Looking to join an organization where opportunity for learning and professional development is embraced.</p>
                            <a href="https://freebird96.github.io/portfolio/">https://freebird96.github.io/portfolio/</a>
                        </div>
                        
                        <hr className="line"/>
                        
                        <div className="address">
                            <h5>Address</h5>
                            <p>E-403, Santha Towers, Ph Road Paruthipattu, Avadi, Chennai</p>
                            <h5>Phone</h5>
                            <p>9444439435</p>
                            <h5>Email</h5>
                            <p>varghese.noble96@gmail.com</p>
                            <hr className="line"/>
                        </div>

                        <div className="add-details">
                            <h4>ADDITIONAL DETAILS</h4>
                            <li style={{fontSize:'16px'}}>Participated and completed the workshops conducted by NIT Calicut.</li>
                            <li style={{fontSize:'16px'}}>Participated in the E-yantra Competition conducted by IIT Mumbai.</li>
                            <li style={{fontSize:'16px'}}>Event Promoter at TEDxCET a CET chapter of TEDx.</li>
                            <li style={{fontSize:'16px'}}>Played Basketball in the sub-district level at school.</li>
                            <li style={{fontSize:'16px'}}>Self-taught guitarist.</li>                        
                        </div>
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>
                        <Education
                            startYear={2015}
                            endYear={2019}
                            schoolName="College of Engineering Trivandum"
                            // schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown"
                        />
                        <Education
                            startYear={2011}
                            endYear={2014}
                            schoolName="Maharishi International Residential School"
                            // schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown"
                        />
                        
                        <Education
                            startYear={2010}
                            endYear={2011}
                            schoolName="Kendriya Vidyalaya Airforce Station, Avadi"
                            // schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown"
                        />                        
                        <hr className="line line-exp"/>
                        <h2>Experience</h2>
                        <Experience
                             startYear="Feb 10 "
                             endYear=" May 10, 2019"
                             jobName="Indian Institute Of Space Science And Technology: Project Intern"
                             jobDescription="Worked on Image Segmentation using Tensor-Flow.
                             Produced professional reports, documents and presentations for project needs.
                             Verified data integrity and accuracy.
                             Validated schematic designs working alongside hardware engineers."
                        />
                        <hr className="line line-exp"/>
                        <h2>Acheivements</h2>
                        <Experience
                             startYear={2015}
                             endYear={2019}
                             jobName="Responsive Web design Certification"
                             jobDescription="Succenssfully Completed the resposive web design course on FreeCodeCamp."
                        />
                        <Experience
                             startYear={2015}
                             endYear={2019}
                             jobName="JavaScript Algorithms and Data Structures"
                             jobDescription=""
                        />
                        <Experience
                             startYear={2015}
                             endYear={2019}
                             jobName="Responsive websites using HTML5 and CSS3"
                             jobDescription="Completed an online course offered by Udemy mentored by Jonas Schmeidtman."
                        />
                        <Experience
                             startYear={2015}
                             endYear={2019}
                             jobName="Machine Learning A-Z™: Hands-On Python & R In Data Science"
                             jobDescription="Completed an online course offered by Udemy mentored by Kirill Eremenko."
                        />
                        <Experience
                             startYear={2015}
                             endYear={2019}
                             jobName="Introduction to Modern Application Developement"
                             jobDescription="NPTEL course conducted by IIT Madras."
                        />
                        <hr className="line line-exp"/>
                        <h2>Skills</h2>
                        <Skills
                            skill="HTML/CSS"
                            progress={100}
                        />
                        <Skills
                            skill="Javascript"
                            progress={75}
                        />
                        <Skills
                            skill="Nodejs"
                            progress={30}
                        />
                        <Skills
                            skill="React"
                            progress={50}
                        />
                    </Cell>
                </Grid>
        )
    }
}
export default Resume;