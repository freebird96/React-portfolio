import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';

class Education extends Component {
    render() {
        return(
            <Grid>
                <Cell className="education-left-col" col={4}>
                    <div className="education-year">
                        <p>{this.props.startYear}-{this.props.endYear}</p>                
                    </div>
                </Cell>            
                <Cell className="education-right-col" col={8}>
                    <div className="education-details">
                        <h4>{this.props.schoolName}</h4>
                        <p>{this.props.schoolDescription}</p>
                    </div>
                </Cell>
            </Grid>
        )
    }
}

export default Education;