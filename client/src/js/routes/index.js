import React from 'react'
import { Route, Switch } from 'react-router'

import Homepage from './Homepage'
import Lobby from './Lobby'

import Header from '../components/Header'
import LinkSocial from '../components/LinkSocial'

const routes = (
	<main>
		<Switch>
			<Route exact path={"/"} component={Homepage}/>
			<Route exact path={"/lobby"} component={Lobby}/>
		</Switch>
		<Header/>
		<LinkSocial/>
	</main>
)


export default routes