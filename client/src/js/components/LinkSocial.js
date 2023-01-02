import React, {Component, Fragment} from "react";
import { connect } from "react-redux"

import Logo from "./Logo";
import {Button} from "./Button";
import TextLink from "./TextLink";
import { NavLink } from 'react-router-dom'
import Takeover from "./Takeover";

class LinkSocial extends Component {
	render() {
    const { isMobile } = this.props;

		return (
      <div style={{position: "fixed", top: "200px", marginBottom: "5px", marginLeft: "20px", display:"flex", flexDirection: "column", alignItems:"left", justifyContent:"left"}}>
        <a title="Request an audit" style={{marginLeft: "-18px"}} href="https://docs.justcause.finance/" target="_blank"><Button isLogo="shield"/></a>
        <a title="Github" style={{marginTop: "24px", marginLeft: "-10px"}}  href="https://github.com/smeee23/just_cause" target="_blank" rel="noopener noreferrer"><Button isLogo="github"/></a>
        <a title="Twitter" style={{marginTop: "3px", marginLeft: "-10px"}} href="https://twitter.com/JustCauseDev" target="_blank" rel="noopener noreferrer"><Button isLogo="tweet_d"/></a>
        <a title="Discord" style={{marginTop: "3px", marginLeft: "-10px"}} href="https://docs.justcause.finance/" target="_blank"><Button isLogo="discord"/></a>
        <a title="Facebook" style={{marginTop: "3px", marginLeft: "-10px"}} href="https://docs.justcause.finance/" target="_blank"><Button isLogo="facebook"/></a>
        <a title="LinkedIn" style={{marginTop: "3px", marginLeft: "-10px"}} href="https://docs.justcause.finance/" target="_blank"><Button isLogo="linkedin"/></a>
       
      </div>
		);
	}
}

const mapStateToProps = state => ({
	isMobile: state.isMobile,
})

export default connect(mapStateToProps)(LinkSocial)