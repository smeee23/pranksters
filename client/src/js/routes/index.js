import React from 'react'
import { Route, Switch } from 'react-router'

import Homepage from './Homepage'
import Audits from './Audits'

import Header from '../components/Header'
import LinkSocial from '../components/LinkSocial'

const routes = (
	<main>
		<Switch>
			<Route exact path={"/"} component={Homepage}/>
			<Route exact path={"/audits"} component={Audits}/>
		</Switch>
		<Header/>
		<LinkSocial/>
	</main>
)


export default routes
