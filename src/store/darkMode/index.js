// const { ethereum } = window
import { writable } from 'svelte/store'

import { DARK_MODE_SUCCESS } from '../darkMode/model.d'

let data

const classBody = window.localStorage.getItem('dark-mode')

data = {
  type: DARK_MODE_SUCCESS,
  data: {
    darkMode: classBody === 'true' ?? false,
  },
}

const darkMode = writable(data)

export default darkMode
