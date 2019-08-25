import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';

class Landing extends Component {
    render() {
        return(            
            <Grid className= "landing-grid" >
                <Cell col={12}>
                    <div className="intro">
                        <div className="intro-img">
                            <img
                                src="https://www.drupal.org/files/user-pictures/picture-2204516-1469808304.png"
                                alt="male"
                                className="avatar-img">
                            </img>
                        </div>
                        <div className="intro-text">
                            Hi! <br/>Iam Noble K Varghese.
                        </div>                         
                            
                    </div>  
                    <div className="banner-text">
                        <div className="banner-heading">
                            <h1>Full Stack <br></br >Web Developer</h1>
                            <hr/>
                            <p>HTML | CSS | Javascript | React JS </p>
                        </div>
                        <div className="social-links">

                            {/* linkedin */}
                            <a href="https://www.linkedin.com/in/noble-k-varghese-749bb448/" rel="noopener noreferrer" target="blank">
                                <i className="fa fa-linkedin-square" title="LinkedIn" aria-hidden="true"/>
                            </a>

                            {/* github */}
                            <a href="https://www.google.com/" rel="noopener noreferrer" target="blank">
                                <i className="fa fa-github-square" title="Github" aria-hidden="true"/>                                    
                            </a>

                            {/* freecodecamp */}
                            <a href="https://www.freecodecamp.org/varghese.noble96" rel="noopener noreferrer" target="blank">
                                <i className="fa fa-free-code-camp" title="Freecodecamp" aria-hidden="true"/>
                            </a> 
                        </div>
                    </div>
                </Cell>
            </Grid>         
        )
    }
}
export default Landing;