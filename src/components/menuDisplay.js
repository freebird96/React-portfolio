import React, { Component } from 'react';
import '../App.css';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import {Layout, Header, Navigation, Content, Drawer} from 'react-mdl';
import Main from './main';
import { Link, HashRouter } from 'react-router-dom';

class MenuDisplay extends Component {

    hideToggle() {
        var selectorId = document.querySelector('.mdl-layout');
        selectorId.MaterialLayout.toggleDrawer();
    }

    
    render() {
        return( 
            <HashRouter>
                <Layout>
                    <Header className="header-color" style={{color:"black"}}>
                        <Navigation>
                        <Link to="/">Home</Link>
                        <Link to="/resume">Resume</Link>
                        {/* <Link to="/aboutme">About Me</Link> */}
                        <Link to="/projects">Projects</Link>
                        <Link to="/contact">Contact</Link>
                        </Navigation>
                    </Header>
                    <Drawer>
                        <Navigation>
                        <Link to="/" onClick={()=> this.hideToggle()}>Home</Link>
                        <Link to="/resume" onClick={()=> this.hideToggle()}>Resume</Link>
                        {/* <Link to="/aboutme" onClick={()=> this.hideToggle()}>About Me</Link> */}
                        <Link to="/projects" onClick={()=> this.hideToggle()}>Projects</Link>
                        <Link to="/contact" onClick={()=> this.hideToggle()}>Contact</Link>
                        </Navigation>
                    </Drawer>
                    <Content>
                        <Main/>
                    </Content>
                </Layout>     
            </HashRouter>    
    )
}
}

export default MenuDisplay;