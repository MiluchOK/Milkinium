import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import NavBar from './containers/NavBar';
import PageNotFound from './screens/PageNotFound';
import NavBarRoutes from './routes/navBarRoutes';
import Profile from './screens/Profile';
import { selectProject, getProjects } from './redux/actions/projectsActions';
import { getCurrentUser} from './redux/actions/usersActions';
import ProjectSelector from './components/ProjectSelector';


import './App.css';

class App extends Component {

    componentWillMount(){
        this.props.getCurrentUser();
        this.props.getProjects();
    }

    render() {

        const projects = this.props.allProjects || {};
        console.log("GOT PROJECT " + this.props.currentProject);

        return (
            <div className="App">
                <NavBar
                    projectSelector={<ProjectSelector
                        handleChange={this.props.selectProject}
                        options={projects}
                        currentOption={this.props.currentProject}
                    />}
                >
                    <Switch>
                        {NavBarRoutes.map((route) => (
                            <Route path={route.path} exact component={route.component} />
                        ))}
                        <Route path="/profile" exact component={Profile}/>
                        {/*TODO Fix 404 rendering with NavBar*/}
                        <Route component={PageNotFound}/>
                    </Switch>
                </NavBar>

                <div>
                    {/*{_.map(projects, (value, key) => (*/}
                        {/*<p>{key}</p>*/}
                    {/*))}*/}
                </div>

            </div>
        );
    }
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({
        getCurrentUser: getCurrentUser,
        selectProject: selectProject,
        getProjects: getProjects
    }, dispatch)
}

const mapStateToProps = (state) => {
    const pbid = state.projects.get('projectsById');
    const currentProject = state.projects.get('currentProject');
    console.log("TEsting: " + currentProject);
    return {
        currentProject: currentProject,
        allProjects: pbid
    }
};

export default connect(mapStateToProps, matchDispatchToProps)(App);
