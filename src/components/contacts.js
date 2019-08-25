import React, { Component } from 'react';
import {Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl'

class Contact extends Component {
    render() {
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell className="contact-grid-left" col={6}>
                        <div>
                            <h2>Noble K  Varghese</h2>
                            <img
                                src="https://www.drupal.org/files/user-pictures/picture-2204516-1469808304.png"
                                alt="specs guy"
                                style={{height:'250px'}}
                            />

                            <p style={{width:'75%', margin:'auto', paddingTop: '1em'}}>
                            I am an engineering graduate (7.94 GPA, B-tech in Industrial Engineering) from College of Engineering Trivandrum. I am a self-taught programmer, web developer and a data enthusiast. Throughout my academic career, I was highly passionate about tech and the associated fields and hence spent a great deal of time learning and understanding them. I have worked on several projects that extensively used HTML5/CSS3, JavaScript MVC (ES6) and ReactJS. These passion projects enabled me to write cleaner, efficient and modular codes while leveraging SASS/SCSS as well. I have a strong hold on the aforementioned topics and also have working knowledge and understanding of REST APIs, Redux, Firebase and NodeJS. While working on academic and extracurricular projects, I have also developed analytical skills, problem solving ability and multitasking skills, which I hope to leverage into the Frontend Developer role at your company.  
                            </p>
                        </div>                        
                    </Cell>
                    <Cell className="contact-grid-right" col={6}>
                        <h2>Contact Me</h2>
                        <hr/>
                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{fontSize:'25px', fontFamily: 'Anton'}}>
                                        <i className="fa fa-phone-square" aria-hidden="true"/>
                                        9444439435
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{fontSize:'25px', fontFamily: 'Anton'}}>
                                        <i className="fa fa-envelope" aria-hidden="true"/>
                                        varghese.noble96@gmail.com
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{fontSize:'25px', fontFamily: 'Anton'}}>
                                        <i className="fa fa-skype" aria-hidden="true"/>
                                        my skype id
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{fontSize:'25px', fontFamily: 'Anton'}}>
                                        <i className="fa fa-phone-square" aria-hidden="true"/>
                                        9444439435
                                    </ListItemContent>
                                </ListItem>
                                
                            </List>
                        </div>                        
                    </Cell>
                </Grid>
            </div>
        )
    }
}
export default Contact;