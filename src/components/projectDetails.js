import React, { Component } from 'react';
import { Card, CardText, CardTitle, CardActions, Button,CardMenu, IconButton, Grid,} from 'react-mdl';
import Link from 'react-router-dom/Link';

class ProjectDetails extends Component {
    
    render() {
        return( 
            <Card className="project-card">
                <img src={this.props.bg_img} className="card-title-img"/>                            
                <h4>{this.props.projectname}</h4>
                <CardText className="project-cardDesc">
                    <p>{this.props.cardDesc}</p>                   
                </CardText>                
                <a className="project-cardActions" href={this.props.link} target="_blank">
                    <Button className="cardButton">{this.props.site}</Button>
                </a>
                <CardMenu style={{color: 'white'}}>
                    <IconButton name="share"/>
                </CardMenu>
            </Card>         
    )
}
}

export default ProjectDetails;







