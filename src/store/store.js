import { writable } from 'svelte/store'
import connectWallet from './connectWallet'
import web3 from './web3'
import darkMode from './darkMode'

const store = {
  connectWallet,
  web3,
  darkMode
}

export default store
