import React, {Component} from "react"
import { Fragment } from "react";

import { connect } from "react-redux";

import { ButtonSmall, ButtonLarge, Button } from '../components/Button'
import Footer from "../components/Footer";
import Shapes from '../components/Shapes';
import TextLink from '../components/TextLink';
import { Client } from 'espn-fantasy-football-api';

class Homepage extends Component {
	componentDidMount() {
		window.scrollTo(0,0);
	}

	render() {
		const myClient = new Client({ leagueId: 432132 });
		console.log("client", myClient);
		return (
			<Fragment>
				<Shapes/>
				<article>
					<section className="page-section page-section--center horizontal-padding">
					<div style={{display:"flex", flexDirection: "wrap", marginBottom: "400px", paddingLeft: "20px", gap:"8px"}}>
						<div style={{ display:"flex", position: "relative", left: "0px", width: "400px", flexDirection: "column", textAlign:"left", alignItems:"left", justifyContent:"bottom"}}>
							<h3 style={{marginBottom: "-32px", fontSize:120}}>DubSportz</h3>
							<div style={{marginLeft: "-32px", marginBottom: "32", display:"flex", flexDirection: "wrap", gap:"8px"}}>
								<h3 style={{fontSize:160}} >LEAGUES</h3>
								<h3 style={{marginTop: "auto", paddingBottom:"20px", alignSelf:"flex-end", marginLeft:"2px", fontSize:17}} >by DubSportz</h3>
							</div>
								<p style={{marginLeft:"16px", fontSize:17, fontStyle: "italic"}} className="mr">The premier destination for onchain fantasy sports.</p>
								<div style={{marginRight: "auto", marginLeft: "auto"}}><ButtonSmall text="Launch App"/></div>						
						</div>
						<div style={{marginTop:"-64px", marginLeft: "-32px", display:"flex", flexDirection: "column", textAlign:"left", alignItems:"left", justifyContent:"left"}}>
							<div className="cf">
								<img style={{height:"500px", width: "600px", positition:"absolute"}} src={require("../../images/dubsportz_black.png")} alt={"logo"}/>
								<img className="top" style={{height:"500px", width: "600px", positition:"absolute"}} src={require("../../images/dubsportz_blue.png")} alt={"logo"}/>
							</div>
						</div>
					</div>
					</section>
					<section className="page-section horizontal-padding">
						<h3 style={{marginTop: "400px", marginBottom: "5px", fontSize:80}}>Our Process</h3>
						<div className="grid">
							<div className="grid__item--col-6 grid__item--col-12-medium">
								<p style={{ fontSize:21 }} className="mr">Our proprietary security review verifies that your distributed systems and contracts work as intended. Our engineers fully review your system’s architecture and codebase, and then write a thorough report that includes actionable feedback for every issue found.</p>
							</div>
							<div className="grid__item--col-6 grid__item--col-12-medium">
								<p  style={{ fontSize:21 }} className="mr">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
							</div>
						</div>
					</section>
				</article>
			</Fragment>
		);
	}
}

const mapStateToProps = state => ({
	daiAddress: state.daiAddress,
})

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(Homepage)
