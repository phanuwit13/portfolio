// const { ethereum } = window
import { ethers } from 'ethers'
import { writable } from 'svelte/store'

import { WEB3_CONNECT_SUCCESS } from '../web3/model.d.js'

let data

if (window.ethereum) {
  const provider = new ethers.providers.Web3Provider(window.ethereum)
  data = {
    type: WEB3_CONNECT_SUCCESS,
    data: {
      provider,
    },
  }
} else {
  data = {}
}

const web3 = writable(data)

export default web3
