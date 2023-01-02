import React, {Component} from "react"
import classNames from "classnames";

import Charity from "../components/icons/Charity";
import UsdcLogo from "../components/cryptoLogos/UsdcLogo";
import AaveLogo from "../components/cryptoLogos/AaveLogo";
import Shield from "../components/logos/Shield";
import WEthLogo from "../components/cryptoLogos/WEthLogo";
import LinkLogo from "../components/cryptoLogos/LinkLogo";

import Logo from "../components/Logo"

class Card extends Component {

	constructor(props) {
		super(props);

		this.state = {
			open: false
		}
	}

  componentDidMount() {
		window.scrollTo(0,0);
	}

	displayLogo = (title) => {
		let logo = '';
		if(title === 'JustCause'){
		  logo = <Logo/>;
		}
		else if (title === 'USDC Circle'){
		  logo = <UsdcLogo/>;
		}
		else if (title === 'AAVE'){
		  logo = <AaveLogo/>;
		}
		else if(title === 'Chainlink Labs'){
		  logo = <LinkLogo/>;
		}
		else {
			logo = <Shield/>;
		}
		return logo
	  }

	precise = (x) => {
		//return Number.parseFloat(x).toPrecision(4);
		return Number.parseFloat(x).toPrecision(6);
	}

	toggleCardOpen = () => {
		this.setState({
			open: !this.state.open
		})
	}

	render() {
		const { title, logo, description} = this.props;

		const classnames = classNames({
      "card": true,
      "card--open": this.state.open,
    })


		return (
      <div className={classnames}>
        <div className="card__header">
			<div style={{display:"grid", gridRows: "2", width: "100%"}}>
				<div style={{gridRow: 1, gap: "5px"}}>
				{this.displayLogo(title)}
				<h3>
						{ title }
					</h3>
				</div>
				<div style={{gridRow: 2}}>
					{description}
				</div>
			</div>
        </div>
        <div className="card__bar"/>
      </div>
		);
	}
}

export default Card
