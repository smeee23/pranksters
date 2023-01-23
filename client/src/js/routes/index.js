import React from 'react'
import { Route, Switch } from 'react-router'

import Homepage from './Homepage'
import Mint from './Mint'

import Header from '../components/Header'
import LinkSocial from '../components/LinkSocial'

const routes = (
	<main>
		<Switch>
			<Route exact path={"/"} component={Homepage}/>
			<Route exact path={"/mint"} component={Mint}/>
		</Switch>
		<Header/>
		<LinkSocial/>
	</main>
)


export default routes