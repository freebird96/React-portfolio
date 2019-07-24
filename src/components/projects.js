import React, { Component } from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardText, CardTitle, CardActions, Button,CardMenu, IconButton} from 'react-mdl';

class Projects extends Component {
    constructor(props){
        super(props);
        this.state = { activeTab: 0};
    }

    toggleCategories(){
        if(this.state.activeTab === 0){
            return (
                <div className="projects-grid">
                    {/*project 1 */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                   <CardTitle style={{color: 'white', height:'176px', background: 'url(https://workshops.lipsindia.com/wp-content/uploads/2018/04/HTML-Css-600x600.jpg) center/ cover'}}>HTML/CSS Project #1</CardTitle> 
                   <CardText>
                   Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,                   </CardText>
                   <CardActions>
                       <Button colored>Github</Button>
                       <Button colored>Codepen</Button>
                   </CardActions>
                   <CardMenu style={{color: 'white'}}>
                     <IconButton name="share"/>
                   </CardMenu>
                </Card>

                {/*project 3 */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                   <CardTitle style={{color: 'black', height:'176px', background: 'url(https://workshops.lipsindia.com/wp-content/uploads/2018/04/HTML-Css-600x600.jpg) center/ cover'}}>HTML/CSS Project #2</CardTitle> 
                   <CardText>
                   Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,                   </CardText>
                   <CardActions>
                       <Button colored>Github</Button>
                       <Button colored>Codepen</Button>
                   </CardActions>
                   <CardMenu style={{color: 'white'}}>
                     <IconButton name="share"/>
                   </CardMenu>
                </Card>

                {/*project 3 */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                   <CardTitle style={{color: 'white', height:'176px', background: 'url(https://workshops.lipsindia.com/wp-content/uploads/2018/04/HTML-Css-600x600.jpg) center/ cover'}}>HTML/CSS Project #3</CardTitle> 
                   <CardText>
                   Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,                   </CardText>
                   <CardActions>
                       <Button colored>Github</Button>
                       <Button colored>Codepen</Button>
                   </CardActions>
                   <CardMenu style={{color: 'white'}}>
                     <IconButton name="share"/>
                   </CardMenu>
                </Card>
                </div>
            )
        }else if(this.state.activeTab === 1){
            return(
                <div><h1>This is Angular Page</h1></div>
            )
        }else if(this.state.activeTab === 2){
            return(
                <div><h1>This is Android Page</h1></div>
            )
        }else if(this.state.activeTab === 3){
            return(
                <div><h1>This is Javascript Page</h1></div>
            )
        }else if(this.state.activeTab === 4){
            return(
                <div><h1>This is HTML/CSS Page</h1></div>
            )
        }
    }

    render() {
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
                    <Tab>HTML/CSS</Tab>
                    <Tab>React</Tab>
                    <Tab>Angular</Tab>
                    <Tab>Android</Tab>
                    <Tab>Javascript</Tab>
                    
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