import React, {Component} from "react"
import { Fragment } from "react";

import { connect } from "react-redux";

import { ButtonSmall, ButtonLarge, Button } from '../components/Button'
import Footer from "../components/Footer";
import Shapes from '../components/Shapes';
import TextLink from '../components/TextLink';

class Homepage extends Component {
	componentDidMount() {
		window.scrollTo(0,0);
	}

	render() {
		return (
			<Fragment>
				<Shapes/>
				<article>
					<div style={{position: "absolute", left: "-400px", top: "150px", display:"flex", flexDirection: "wrap", marginBottom: "400px", paddingLeft: "20px", gap:"8px", marginLeft: "400px"}}>
						<div style={{ display:"flex", position: "relative", left: "0px", width: "600px", flexDirection: "column", textAlign:"center", alignItems:"center", justifyContent:"center"}}>
							<h3 style={{marginBottom: "-32px", fontSize:120}}>DubSportz</h3>
							<h3 style={{fontSize:160}} >LEAGUES</h3>
							<h3 style={{fontSize:32, marginRight: "0px"}} className="mr">premier destination for onchain fantasy sports</h3>
							<div style={{alignItems:"center", justifyContent:"center"}}>
								<ButtonSmall text="Launch App"/>
							</div>					
						</div>
						<div style={{marginTop:"-64px", marginLeft: "-124px", display:"flex", flexDirection: "column", textAlign:"left", alignItems:"left", justifyContent:"left"}}>
							<div className="cf">
								<img style={{height:"500px", width: "600px", positition:"absolute"}} src={require("../../images/dubsportz_black.png")} alt={"logo"}/>
								<img className="top" style={{height:"500px", width: "600px", positition:"absolute"}} src={require("../../images/dubsportz_blue.png")} alt={"logo"}/>
							</div>
						</div>
					</div>
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
