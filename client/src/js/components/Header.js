import React, {Component, Fragment} from "react";
import { connect } from "react-redux"
import Web3 from "web3";

import Logo from "./Logo";
import { Button, ButtonSmall } from "./Button";
import TextLink from "./TextLink";
import { NavLink } from 'react-router-dom'
import Takeover from "./Takeover";

import { updateActiveAccount } from "../actions/activeAccount"
import { updateConnect } from "../actions/connect"
import { checkLocationForAppDeploy, displayTVL, getConnection, redirectWindowBlockExplorer } from "../func/ancillaryFunctions"

import { web3Modal } from "../App"

class Header extends Component {

  constructor(props) {
		super(props);

    const loc = window.location.href;
    let index;
    if(loc.includes("dashboard")) index = 0;
    if(loc.includes("search")) index = 1;

    this.state = {
      index: this.getNavIndex(index),
    }
	}

  getNavIndex = (index) => {
    let i;
    if("inApp" === checkLocationForAppDeploy()){
      const loc = window.location.href;
      console.log("loc", loc, loc.includes("dashboard"));
      if(loc.includes("search") && index === 1){
        console.log("search", loc);
        i = 1;
      }
      else if (loc.includes("dashboard") && index === 0){
        i = 0;
      }
    }
    return i;
  }

  resetNavDash = ()=> {
    this.setState({
      index: 0,
    })
  }

  resetNavSearch = () => {
    this.setState({
      index: 1,
    })
  }

  connectToWeb3 = async() => {
		let provider;
		try {
			// Will open the MetaMask UI
			// You should disable this button while the request is pending!

			provider = await web3Modal.connect();
			//addresses = await provider.request({ method: 'eth_requestAccounts' });
		}
		catch (error) {
			console.error(error);
		}
		//return {addresses, provider};
    return provider;
	}

	connectButtonHit = async() => {
    if(this.props.activeAccount === "Connect"){
      const provider = await this.connectToWeb3();
      const web3 = new Web3(provider);
		  const addresses = await web3.eth.getAccounts();
      if(addresses){
        this.props.updateActiveAccount(addresses[0]);
        this.props.updateConnect(true);
      }

      window.location.reload(false);
    }
    else{
        redirectWindowBlockExplorer(this.props.activeAccount, 'address', this.props.networkId);
    }
	}
  disconnectButtonHit = async() => {
    await web3Modal.clearCachedProvider();
    localStorage.setItem("ownerPoolInfo", "");
    localStorage.setItem("userDepositPoolInfo", "");
    window.location.reload(false);
  }

  generateNav = () => {
      return (
        <Fragment>
          <NavLink className="theme--white" exact to={"/lobby"}>
            <TextLink className="theme--white" text="Lobby"/>
          </NavLink>
          <NavLink className="theme--white" exact to={"/howitworks"}>
            <TextLink className="theme--white" text="How it works"/>
          </NavLink>
          <a className="theme--white" href="https://docs.justcause.finance/" target="_blank" rel="noopener noreferrer">
            <TextLink text="Docs"/>
          </a>
        </Fragment>
      )
  }

  getHomeLink = () => {
      return (
        <NavLink exact to={"/"} className="app-bar__left tdn theme--white">
          <h3 style={{fontSize:40}} className="mb0">DubSportz</h3>
        </NavLink>
      );
  }

  getAccountButtons = () => {
    if(this.props.activeAccount === "Connect"){
      return(
        <div title={"connect wallet"}>
          <ButtonSmall text={this.displayAddress(this.props.activeAccount)} icon={"people"} callback={this.connectButtonHit}/>
        </div>
      );
    }
    else{
      return(
        <div style={{display: "flex", flexDirection: "wrap", gap: "2px"}}>
          <div title={"view address on block explorer"} >
            <ButtonSmall text={this.displayAddress(this.props.activeAccount)} icon={"wallet"} callback={this.connectButtonHit}/>
          </div>
            <div title={"disconnect wallet"} style={{marginTop: "-5px"}}>
              <Button isLogo="close" callback={this.disconnectButtonHit}/>
            </div>
        </div>
      );
    }
  }
  displayAddress = (address) => {
    if(address === 'Connect')
      return address;

    return address.slice(0, 6) + "..."+address.slice(-4);
  }

  displayInfo= (address) => {
    if(address === 'Connect')
      return "connect wallet";

    return "disconnect wallet";
  }

	render() {
    const { isMobile } = this.props;

    const nav = this.generateNav();

		return (
      <header className="app-bar horizontal-padding theme--white">
        <Takeover>
          { nav }
        </Takeover>
        {this.getHomeLink()}
        <nav className="app-bar__items">
          { nav }
        </nav>
      </header>
		);
	}
}

const mapStateToProps = state => ({
	isMobile: state.isMobile,
  activeAccount: state.activeAccount,
  tokenMap: state.tokenMap,
  networkId: state.networkId,
})

const mapDispatchToProps = dispatch => ({
	updateActiveAccount: (s) => dispatch(updateActiveAccount(s)),
  updateConnect: (bool) => dispatch(updateConnect(bool)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)