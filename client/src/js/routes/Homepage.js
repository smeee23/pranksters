import React, {Component} from "react"
import { Fragment } from "react";

import { connect } from "react-redux";

import { ButtonExtraSmall } from '../components/Button'
import Footer from "../components/Footer";
import Shapes from '../components/Shapes';
import TextLink from '../components/TextLink';

import { updateDaiAddress } from "../actions/daiAddress";

class Homepage extends Component {
	componentDidMount() {
		window.scrollTo(0,0);
	}

	render() {
		return (
			<Fragment>
				<Shapes/>
				<article>
					<section className="page-section page-section--center horizontal-padding">
					<div style={{display:"flex", flexDirection: "wrap", marginBottom: "400px"}}>
						<div style={{display:"flex", flexDirection: "column", textAlign:"left", alignItems:"left", justifyContent:"left"}}>
							<img style={{height:"350px", width: "350px", positition:"absolute"}} src={require("../components/images/0xfoobar_plain_lg.png")} alt={"logo"}/>
						</div>
						<div style={{ display:"flex", flexDirection: "column", textAlign:"left", alignItems:"left", justifyContent:"bottom"}}>

							<h3 style={{marginBottom: "0", fontSize:80}}>Smart</h3>
							<h3 style={{marginBottom: "0", fontSize:80}}>Contract</h3>
							<div style={{marginBottom: "32", display:"flex", flexDirection: "wrap"}}>
								<h3 style={{alignSelf:"flex-end", fontSize:80}} >Audits</h3>
								<h3 style={{marginTop: "auto", paddingBottom:"15px", alignSelf:"flex-end", marginLeft:"15px", fontSize:17}} >by 0xfoobar</h3>
							</div>
							<p style={{marginBottom: "15px", fontSize:13, fontStyle: "italic"}} className="mr">Setting the standard for blockchain security. Our audit portfolio spans non-fungible tokens, distributed payment networks, financial structures, and governance systems.</p>
							<div style={{ fontSize:13 }}  title={"request an audit"} >
								<ButtonExtraSmall text={"Request an audit"} callback={() => {}}/>
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
	updateDaiAddress: (s) => dispatch(updateDaiAddress(s)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Homepage)
