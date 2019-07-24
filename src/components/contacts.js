import React, { Component } from 'react';
import {Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl'

class Contact extends Component {
    render() {
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Noble K  Varghese</h2>
                        <img
                            src="https://www.drupal.org/files/user-pictures/picture-2204516-1469808304.png"
                            alt="specs guy"
                            style={{height:'250px'}}
                        />

                        <p style={{width:'75%', margin:'auto', paddingTop: '1em'}}>
                        Final year B-tech student and an aspiring web developer / data scientist offering enthusiasm and understanding of various programming languages. Looking to join organization where opportunity for growth and professional development is embraced. 
                        </p>
                    </Cell>
                    <Cell col={6}>
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