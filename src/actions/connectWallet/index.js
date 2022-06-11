import { ethers } from 'ethers'
import store from '../../store/store.js'

// Redux Constants
import {
  CONNECT_WALLET_SUCCESS,
  CONNECT_WALLET_FAIL,
} from '../../store/connectWallet/model.d.js'

import {
  WEB3_CONNECT_CLEAR_MESSAGE,
  WEB3_CONNECT_SUCCESS,
} from '../../store/web3/model.d.js'

const xxaConnectWallet = {
  ConnectWallet: async () => {
    if (window.ethereum) {
      const { ethereum } = window
      const provider = new ethers.providers.Web3Provider(ethereum)
      const chainId = (await provider.getNetwork()).chainId
      if (chainId === 56) {
        const accounts = await ethereum.request({
          method: 'eth_requestAccounts',
        })
        const networkConnect = chainId === 56
        console.log('set metamask')
        window.localStorage.setItem('metamask', 'metamask')
        store.web3.set({
          type: WEB3_CONNECT_SUCCESS,
          data: {
            provider,
          },
        })
        store.connectWallet.set({
          type: CONNECT_WALLET_SUCCESS,
          data: {
            accountAddress: accounts[0],
            chainId,
            networkConnect,
          },
        })
      } else {
        store.connectWallet.set({
          type: CONNECT_WALLET_FAIL,
          data: {
            accountAddress: '',
            chainId,
            networkConnect: false,
          },
        })
      }
    } else {
      window.open(
        `https://metamask.app.link/dapp/${window.location.hostname}`,
        '_blank' // <- This is what makes it open in a new window.
      )
    }
  },
}

export default xxaConnectWallet
