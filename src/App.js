import {Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Articles from './components/Articles';
import Interviews from './components/Interviews';
import Tutorials from './components/Tutorials';
import Philosophie from './components/Philosophie';
import Collaborators from './components/Collaborators';
import Contact from './components/Contact';
import './assets/styles.css';
import Navbar from './utils/Navbar';
import SingleArticle from './components/SingleArticle';




const App = () => { 
    return ( 
        <div>
            <Navbar/>
             <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path = '/Articles' component={Articles}/>
                <Route exact path='/Articles/:topic' component={Articles}/>                    
                <Route exact path='/Interviews' component={Interviews}/>
                <Route exact path='/Interviews/:interviewPage' component={Interviews}/>
                <Route exact path='/Tutorials' component={Tutorials}/>
                <Route exact path='/Tutorials/:tutorialsPage' component={Tutorials}/>
                <Route exact path='/Philosophie' component={Philosophie}/>
                <Route exact path='/Collaborators' component={Collaborators}/>
                <Route exact path='/Collaborators/:authorsPage' component={Collaborators}/>
                <Route exact path='/Contact' component={Contact}/>
                <Route exact path='/articles/:content_type/:slug' component={SingleArticle}/>
            </Switch>
        </div>
    );    
};
    

export default App;