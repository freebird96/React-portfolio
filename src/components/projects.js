import React, { Component } from 'react';
import {Tabs, Tab, Grid, Cell,} from 'react-mdl';
import ProjectDetails from './projectDetails';
import logo from '../images/react-logo.png'

class Projects extends Component {
    constructor(props){
        super(props);
        this.state = { 
            activeTab: 0,
            site: 'github',
            bg_img:'https://workshops.lipsindia.com/wp-content/uploads/2018/04/HTML-Css-600x600.jpg'
        };
    }

    toggleCategories(){
        if(this.state.activeTab === 0){
            return (                
                <Grid className="projects-grid">
                    <Cell col={4} >
                        <ProjectDetails
                        projectname = "Bakery website"
                        cardDesc ="A responsive bakery website from scratch using HTML/CSS and JavaScript. This is
                        a simple website designed for an imaginary bakery store that shows the kinds of food
                        available. The website is not linked to any back end and its just front end that was
                        created."
                        site = {this.state.site}
                        bg_img = {this.state.bg_img}
                        // link = "#"
                        />
                    </Cell>
                    <Cell col={4}>
                        <ProjectDetails
                        projectname= "Restaurant website"
                        cardDesc="Responsive restaurant website using HTML/CSS and JavaScript. This is a simple
                        website designed for an imaginary restaurant. The website is not linked to any back-
                        end and its just front end that was created."
                        site={this.state.site}
                        bg_img = {this.state.bg_img}
                        />
                    </Cell>
                    <Cell col={4}>
                        <ProjectDetails
                        projectname= "Portfolio Site"
                        cardDesc="A portfolio site using HTML/CSS/JS was prepared. The styling was done entirely using CSS and the site was also made responsive so that it works even in mobile phones."
                        site={this.state.site}
                        bg_img = {this.state.bg_img}
                        />
                    </Cell>
                    <Cell col={4}>
                        <ProjectDetails
                        projectname= "Resume"
                        cardDesc="A Basic HTML/CSS resume page made for strenthening the basics of grid in CSS. The included the details such as education, experience, skills and acheivements."
                        site={this.state.site}
                        bg_img = {this.state.bg_img}
                        />
                    </Cell>
                </Grid>
            )
        }else if(this.state.activeTab === 1){
            return(
                <Grid className="projects-grid-js">
                    <Cell col={4}>
                        <ProjectDetails
                            projectname= "Diet App"
                            cardDesc="A Basic HTML/CSS resume page made for strenthening the basics of grid in CSS. The included the details such as education, experience, skills and acheivements."
                            site={this.state.site}
                            bg_img = {logo}
                        />
                    </Cell>
                    <Cell col={4}>
                        <ProjectDetails
                            projectname= "Weather reporting App"
                            cardDesc="A Basic HTML/CSS resume page made for strenthening the basics of grid in CSS. The included the details such as education, experience, skills and acheivements."
                            site={this.state.site}
                            bg_img = {logo}
                        />
                    </Cell>
                    <Cell col={4}>
                        <ProjectDetails
                            projectname= "Portfolio App"
                            cardDesc="A Basic HTML/CSS resume page made for strenthening the basics of grid in CSS. The included the details such as education, experience, skills and acheivements."
                            site={this.state.site}
                            bg_img = {logo}
                        />
                    </Cell>
                </Grid>
            )
        }
    }

    render() {
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
                    <Tab>HTML/CSS/js</Tab>
                    <Tab>React</Tab>  
                </Tabs>
                <Grid>
                    <Cell col={12}>
                        <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}
export default Projects;