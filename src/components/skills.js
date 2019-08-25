import React, {Component} from 'react';
import {Grid, Cell, ProgressBar} from 'react-mdl';

class Skills extends Component {
    render() {
        return(
            <Grid style={{display:"flex"}}>
                <Cell col={2}>
                    <div >{this.props.skill}</div>
                </Cell> 
                <Cell col={10}>
                    <ProgressBar className="skills-progressbar" progress={this.props.progress}></ProgressBar>
                </Cell>
            </Grid>    
        )
    }
}

export default Skills;