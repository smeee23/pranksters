import Web3 from "web3";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import CoinbaseWalletSDK from '@coinbase/wallet-sdk';
import React, { Component } from "react"
import { connect } from "react-redux"
import { ConnectedRouter } from 'connected-react-router'
import { createHashHistory} from 'history'

import routes from './routes'
import { detectMobile } from "./actions/mobile"

import { getPlayerDataFromEspn } from "./func/priceFeeds";

//import { load } from "dotenv";

const providerOptions = {
	injected: {
		options: {
			rpc: {
			  80001: "https://polygon-mumbai.infura.io/v3/c6e0956c0fb4432aac74aaa7dfb7687e",
			  137: "https://polygon-mainnet.infura.io/v3/c6e0956c0fb4432aac74aaa7dfb7687e",
			},
		  }
	},
    walletconnect: {
        package: WalletConnectProvider,
        options: {
          rpc: {
            80001: "https://polygon-mumbai.infura.io/v3/c6e0956c0fb4432aac74aaa7dfb7687e",
			137: "https://polygon-mainnet.infura.io/v3/c6e0956c0fb4432aac74aaa7dfb7687e",
          },
        }
    },
	coinbasewallet: {
		package: CoinbaseWalletSDK,
		options: {
		  appName: "JustCause",
		  infuraId: "c6e0956c0fb4432aac74aaa7dfb7687e",
		}
	},
};

export const web3Modal = new Web3Modal({
	cacheProvider: true, // optional
    disableInjectedProvider: false,
	providerOptions, // required
	theme: "dark",
});

class App extends Component {

	componentDidMount = async() => {
		try {
			window.addEventListener('resize', this.props.detectMobile);

			console.log('data', getPlayerDataFromEspn())
		}
		catch (error) {
			// Catch any errors for any of the above operations.
			alert(
				`Failed to load web3, accounts, or contract. Check console for details.`,
			);
			console.error(error);
		}
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.props.detectMobile);
	}

	render() {
		let history;
		if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") {
			history = this.props.history;
		} else {
			history = createHashHistory({ basename: '/just_cause' })
		}

		return (
    	<ConnectedRouter history={history}>
        	{ routes }
			</ConnectedRouter>
		)
	}
}

const mapStateToProps = state => ({
	isMobile: state.isMobile,
})

const mapDispatchToProps = dispatch => ({
	detectMobile: () => dispatch(detectMobile()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)