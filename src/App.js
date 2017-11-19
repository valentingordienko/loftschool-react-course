import React, {Component} from 'react';//
import './App.css';//
import {addListener, removeListener, isAuthorized} from './AuthorizeApi';//
import {Link, Route, Switch, Redirect} from 'react-router-dom';//

import Home from './Home';
import Auth from './Auth';
import Private from './Private';
import Public from './Public';

class App extends Component {
	state = {
		isAuthorized
	};

	componentDidMount() {
		addListener(this.handleAuthorize);
	}

	componentWillUnmount() {
		removeListener(this.handleAuthorize);
	}

	handleAuthorize = isAuthorized => {
		this.setState({isAuthorized});
	};

	render() {

		return (
			<div>
				<nav>
					<ul>
						<li>
							<Link to="/">Home page</Link>
						</li>
						<li>
							<Link to="/auth">Auth page</Link>
						</li>
						<li>
							<Link to="/private">Private page</Link>
						</li>
						<li>
							<Link to="/public">Public page</Link>
						</li>
					</ul>
					<Switch>
						<Route exact path="/" component={Home}/>
						<Route path="/auth" component={Auth}/>
						<Route path="/public" component={Public}/>
						{
							this.state.isAuthorized
								?
								<Route path="/private" component={Private}/>
								:
								<Switch>
									<Redirect from="/private" to="/auth"/>
									<Redirect to="/"/>
								</Switch>
						}
					</Switch>
				</nav>
			</div>
		);
	}
}

export default App;
