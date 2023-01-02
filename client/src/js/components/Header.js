import React, {Component, Fragment} from "react";
import { connect } from "react-redux"

import Logo from "./Logo";
import {Button} from "./Button";
import TextLink from "./TextLink";
import { NavLink } from 'react-router-dom'
import Takeover from "./Takeover";

class Header extends Component {
	render() {
    const { isMobile } = this.props;

    const nav = (
      <Fragment>
        <NavLink exact to={"/audits"}>
          <TextLink text="Security Audits"/>
        </NavLink>
        <NavLink exact to={"/"}>
          <TextLink text="Home"/>
        </NavLink>
      </Fragment>
    )
		return (
      <header className="app-bar horizontal-padding">
        <Takeover>
          { nav }
        </Takeover>
        <NavLink exact to={"/"} className="app-bar__left tdn">
					<img style={{height: "40px"}} src={require("../components/images/0xfoobar_white.png")} alt={"logo"}/>
            <p style={{fontSize:21}}  className="mb0">0xfoobar</p>
        </NavLink>
        <nav className="app-bar__items">
          { nav }
        </nav>
      </header>
		);
	}
}

const mapStateToProps = state => ({
	isMobile: state.isMobile,
})

export default connect(mapStateToProps)(Header)