import React, {Component} from "react"
import classNames from "classnames";

import { ButtonExtraSmall } from "../components/Button";
import Football from "../components/logos/Football";

import Logo from "../components/Logo"
import { displayLogo } from "../func/ancillaryFunctions"

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

	displaySportIcon = (title) => {
		return (
			<div style={{display: "flex", flexDirection: "wrap", gap: "10px"}}>
				<Football/>
				<h3>
					{ title }
				</h3>
			</div>
		);
	}

	displayCryptoIcon = () => {
		let acceptedLogos = []
		this.props.tokensAccepted.forEach( (value) => {
			console.log("key", value)
			acceptedLogos.push(displayLogo(value));
		  });
		return acceptedLogos;
	}

	displayBeginsDateTime = () => {
		if(this.props.begins === 0){
			return "SUN 12:00pm"
		}
		else if(this.props.begins=== 1){
			return "SUN 4:00pm"
		}
		else if(this.props.begins=== 2){
			return "SUN 7:30pm"
		}
		else if(this.props.begins=== 3){
			return "MON 7:30pm"
		}
		else if(this.props.begins=== 4){
			return "THU 7:30pm"
		}
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

	getNumberEntrants = () => {
		
	}
	render() {
		const { title, cost, numberEntrants, maxEntrants, tokensAccepted, begins, style} = this.props;

		const classnames = classNames({
      "card": true,
      "card--open": this.state.open,
    })

	const gridSpacing = "158px 1fr"


		return (
      <div className={classnames}>
        <div className="card__header">
			<div style={{display:"flex", flexDirection: "column"}}>
			{this.displaySportIcon(title)}
			<div style={{display:"grid", gridRows: "7", width: "100%", overflowWrap: "normal"}}>

				<div style={{marginTop: "-15px", gridRow: 2}}>
					<div title="current entries" style={{display: "grid", gridTemplateColumns: gridSpacing}}>
						<div style={{gridColumn: 1}}>
							<p>{"Entrants"}</p>
						</div>
						<div style={{gridColumn: 2, width: "250px"}}>
							<p >{numberEntrants}</p>
						</div>
					</div>
				</div>
				<div style={{marginTop: "-20px", gridRow: 3}}>
					<div title="entry fee" style={{display: "grid", gridTemplateColumns:gridSpacing}}>
							<div style={{gridColumn: 1}}>
								<p>{"Fee"}</p>
							</div>
							<div style={{gridColumn: 2, width: "250px"}}>
								<p >{"$1.00"}</p>
							</div>
					</div>
				</div>
				<div style={{marginTop: "-20px",gridRow: 4}}>
					<div title={"entry paid in "+tokensAccepted} style={{display: "grid", gridTemplateColumns:gridSpacing}}>
							<div style={{gridColumn: 1}}>
								<p>{"Tokens Accepted"}</p>
							</div>
							<div style={{gridColumn: 2, width: "250px", display:"flex", flexDirection:"wrap"}}>
								{this.displayCryptoIcon()}
							</div>
					</div>
				</div>
				<div style={{marginTop: "-20px",gridRow: 5}}>
				<div title="user balance" style={{display: "grid", gridTemplateColumns:gridSpacing}}>
							<div style={{gridColumn: 1}}>
								<p>{"Style"}</p>
							</div>
							<div style={{gridColumn: 2, width: "250px"}}>
								<p >{style}</p>
							</div>
					</div>
				</div>
				<div style={{marginTop: "-20px", gridRow: 6}}>
				<div title="user balance" style={{display: "grid", gridTemplateColumns:gridSpacing}}>
							<div style={{gridColumn: 1}}>
								<p>{"Registration Ends"}</p>
							</div>
							<div style={{gridColumn: 2, width: "250px"}}>
								<p >{this.displayBeginsDateTime()}</p>
							</div>
					</div>
				</div>
				<div style={{ gridRow: 7}}>
					<ButtonExtraSmall text="Join Contest"/>
				</div>	
			</div>
			</div>
        </div>
        <div className="card__bar"/>
      </div>
		);
	}
}

export default Card
