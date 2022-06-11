import { writable } from 'svelte/store'

let data = {}
const connectWallet = writable(data)

export default connectWallet
