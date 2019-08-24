import React, { Component } from 'react';
import './App.css';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import Scroll from 'react-scroll';
import {Layout, Header, Navigation, Content, Drawer} from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';


class App extends Component {


  
    hideToggle() {
        var selectorId = document.querySelector('.mdl-layout');
        selectorId.MaterialLayout.toggleDrawer();
    }

  render() {
    return (
        
        <div className="demo-big-content" >
            <Layout>
                <Header className="header-color" style={{color:"black"}}>
                    <Navigation>
                      <Link to="/home">Home</Link>
                      <Link to="/resume">Resume</Link>
                      {/* <Link to="/aboutme">About Me</Link> */}
                      <Link to="/projects">Projects</Link>
                      <Link to="/contact">Contact</Link>
                    </Navigation>
                </Header>
                <Drawer>
                    <Navigation>
                      <Link to="/home" onClick={()=> this.hideToggle()}>Home</Link>
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
        </div>  
    );
  }
}

export default App;
