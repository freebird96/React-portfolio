import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './landingpage';
import AboutMe from './aboutme';
import Contact from './contacts';
import Projects from './projects';
import Resume from './resume';
import HashRouter from 'react-router-dom/HashRouter';

const Main = () => (
    <HashRouter>
        <Switch>
            <Route exact path= "/" component={LandingPage}/>
            {/* <Route path= "/aboutme" component={AboutMe}/> */}
            <Route path= "/contact" component={Contact}/>
            <Route path= "/projects" component={Projects}/>
            <Route path= "/resume" component={Resume}/>
        </Switch>
    </HashRouter>
)

export default Main;