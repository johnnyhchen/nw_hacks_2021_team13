import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import ProjectListing from './components/ProjectListing';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
import Profile from './components/Profile';
import ProfileEdit from './components/ProfileEdit';
import CreateProject from './components/CreateProject';
import SpecificProject from './components/SpecificProject';
import ProjectInfo from './components/SpecificProject/ProjectInfo';

function App() {
	return (
		<div className='App'>
			<Router>
				<Switch>
					<Route exact path='/'>
						<Home />
					</Route>
					<Route exact path='/projects'>
						<ProjectListing />
					</Route>
					<Route exact path='/signup'>
						<SignUp />
					</Route>
					<Route exact path='/login'>
						<LogIn />
					</Route>
					<Route exact path='/profile'>
						<Profile />
					</Route>
					<Route exact path='/edit/profile'>
						<ProfileEdit />
					</Route>
					<Route exact path='/createproject'>
						<CreateProject />
					</Route>
					<Route path='/projects/:projectId'>
						<ProjectInfo />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
