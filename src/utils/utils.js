import { onDestroy } from 'svelte'

const onInterval = (callback, milliseconds) => {
  const interval = setInterval(callback, milliseconds)

  onDestroy(() => {
    clearInterval(interval)
  })
}

function onTimeout(callback, milliseconds) {
  const timeout = setTimeout(callback, milliseconds)

  onDestroy(() => {
    clearTimeout(timeout)
  })
}

export { onTimeout, onInterval }
