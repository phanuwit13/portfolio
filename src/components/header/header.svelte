<script>
  import { useLocation, Link } from 'svelte-navigator'
  import { onMount } from 'svelte'
  import store from '../../store/store.js'
  import Switch from 'svelte-switch'
  //action
  import xxaConnectWallet from '../../actions/connectWallet'

  //icon img
  const pk = 'image/pk.png'

  //store
  let connectWallet = store.connectWallet

  //variable
  const location = useLocation()

  const handleConnectWallet = async () => {
    xxaConnectWallet.ConnectWallet()
  }

  $: if ($connectWallet) {
    if ($connectWallet.type === 'CONNECT_WALLET_SUCCESS') {
      userAddress = $connectWallet.data.accountAddress
    }
  }
  let checkedValue =
    window.localStorage.getItem('dark-mode') === 'true' ?? false

  onMount(() => {
    // checkedValue = window.localStorage.getItem('dark-mode')
    // console.log('checkedValue',checkedValue)
    checkedValue === true
      ? window.document.body.classList.add('dark-mode')
      : window.document.body.classList.remove('dark-mode')
  })

  function handleChange(e) {
    const { checked } = e.detail
    checkedValue = checked
    window.localStorage.setItem('dark-mode', checkedValue)
    checkedValue === true
      ? window.document.body.classList.add('dark-mode')
      : window.document.body.classList.remove('dark-mode')

    store.darkMode.set({
      type: 'DARK_MODE_SUCCESS',
      data: {
        darkMode: checked,
      },
    })
  }
</script>

<main>
  <nav class="navbar navbar-expand-sm navbar-light header">
    <div class="container-sm">
      <div class="w-100 row m-0 p-0">
        <a class="navbar-brand col-2 col-md-1" href="#"
          ><img height="60px" width="60px" src={pk} alt="" /></a
        >
        <div class="col-7 d-flex d-md-none gap-2" />
        <div class="col-2 d-flex d-md-none gap-2">
          <div
            class="d-flex justify-content-center align-items-center position-relative"
          >
            <Switch
              onColor="#212327"
              offColor="#DFE6EE"
              boxShadow="px 0px 0px 0px"
              activeBoxShadow="0px 0px 0px 0px"
              on:change={handleChange}
              checked={checkedValue}
            >
              <div
                class="d-flex h-100 align-items-center justify-content-center"
                slot="unCheckedIcon"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  ><path
                    fill="#ffad32"
                    d="M12 5q-.425 0-.712-.288Q11 4.425 11 4V2q0-.425.288-.713Q11.575 1 12 1t.713.287Q13 1.575 13 2v2q0 .425-.287.712Q12.425 5 12 5Zm4.95 2.05q-.275-.275-.275-.688 0-.412.275-.712l1.4-1.425q.3-.3.712-.3.413 0 .713.3.275.275.275.7 0 .425-.275.7L18.35 7.05q-.275.275-.7.275-.425 0-.7-.275ZM20 13q-.425 0-.712-.288Q19 12.425 19 12t.288-.713Q19.575 11 20 11h2q.425 0 .712.287.288.288.288.713t-.288.712Q22.425 13 22 13Zm-8 10q-.425 0-.712-.288Q11 22.425 11 22v-2q0-.425.288-.712Q11.575 19 12 19t.713.288Q13 19.575 13 20v2q0 .425-.287.712Q12.425 23 12 23ZM5.65 7.05l-1.425-1.4q-.3-.3-.3-.725t.3-.7q.275-.275.7-.275.425 0 .7.275L7.05 5.65q.275.275.275.7 0 .425-.275.7-.3.275-.7.275-.4 0-.7-.275Zm12.7 12.725-1.4-1.425q-.275-.3-.275-.712 0-.413.275-.688.275-.275.688-.275.412 0 .712.275l1.425 1.4q.3.275.287.7-.012.425-.287.725-.3.3-.725.3t-.7-.3ZM2 13q-.425 0-.712-.288Q1 12.425 1 12t.288-.713Q1.575 11 2 11h2q.425 0 .713.287Q5 11.575 5 12t-.287.712Q4.425 13 4 13Zm2.225 6.775q-.275-.275-.275-.7 0-.425.275-.7L5.65 16.95q.275-.275.688-.275.412 0 .712.275.3.3.3.713 0 .412-.3.712l-1.4 1.4q-.3.3-.725.3t-.7-.3ZM12 18q-2.5 0-4.25-1.75T6 12q0-2.5 1.75-4.25T12 6q2.5 0 4.25 1.75T18 12q0 2.5-1.75 4.25T12 18Zm0-2q1.65 0 2.825-1.175Q16 13.65 16 12q0-1.65-1.175-2.825Q13.65 8 12 8q-1.65 0-2.825 1.175Q8 10.35 8 12q0 1.65 1.175 2.825Q10.35 16 12 16Z"
                  /></svg
                >
              </div>
              <div
                class="d-flex h-100 align-items-center justify-content-center"
                slot="checkedIcon"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  ><path
                    d="M12 3h.393a7.5 7.5 0 0 0 7.92 12.446A9 9 0 1 1 12 2.992z"
                    fill="none"
                    stroke="#ffffff"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  /></svg
                >
              </div>
            </Switch>
          </div>
          <!-- <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon size-sm" />
          </button> -->
        </div>
        <div
          class="collapse navbar-collapse col-8 col-md-8"
          id="navbarNavAltMarkup"
        >
          <!-- <div class=" d-flex justify-content-center w-100">
            <div class="navbar-nav gap-4">
              <Link
                class={`nav-link ${$location.pathname === '/' ? 'active' : ''}`}
                to="/">Profile</Link
              >
              <Link
                class={`nav-link ${
                  $location.pathname === '/features' ? 'active' : ''
                }`}
                to="/features">Portfolio</Link
              >
              <Link
                class={`nav-link ${
                  $location.pathname === '/pricing' ? 'active' : ''
                }`}
                to="/pricing">Pricing</Link
              >
            </div>
          </div> -->
        </div>
        <div class="d-none d-md-flex align-items-center col-1 col-md-1">
          <Switch
            onColor="#212327"
            offColor="#DFE6EE"
            boxShadow="px 0px 0px 0px"
            activeBoxShadow="0px 0px 0px 0px"
            on:change={handleChange}
            checked={checkedValue}
          >
            <div
              class="d-flex h-100 align-items-center justify-content-center"
              slot="unCheckedIcon"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                ><path
                  fill="#ffad32"
                  d="M12 5q-.425 0-.712-.288Q11 4.425 11 4V2q0-.425.288-.713Q11.575 1 12 1t.713.287Q13 1.575 13 2v2q0 .425-.287.712Q12.425 5 12 5Zm4.95 2.05q-.275-.275-.275-.688 0-.412.275-.712l1.4-1.425q.3-.3.712-.3.413 0 .713.3.275.275.275.7 0 .425-.275.7L18.35 7.05q-.275.275-.7.275-.425 0-.7-.275ZM20 13q-.425 0-.712-.288Q19 12.425 19 12t.288-.713Q19.575 11 20 11h2q.425 0 .712.287.288.288.288.713t-.288.712Q22.425 13 22 13Zm-8 10q-.425 0-.712-.288Q11 22.425 11 22v-2q0-.425.288-.712Q11.575 19 12 19t.713.288Q13 19.575 13 20v2q0 .425-.287.712Q12.425 23 12 23ZM5.65 7.05l-1.425-1.4q-.3-.3-.3-.725t.3-.7q.275-.275.7-.275.425 0 .7.275L7.05 5.65q.275.275.275.7 0 .425-.275.7-.3.275-.7.275-.4 0-.7-.275Zm12.7 12.725-1.4-1.425q-.275-.3-.275-.712 0-.413.275-.688.275-.275.688-.275.412 0 .712.275l1.425 1.4q.3.275.287.7-.012.425-.287.725-.3.3-.725.3t-.7-.3ZM2 13q-.425 0-.712-.288Q1 12.425 1 12t.288-.713Q1.575 11 2 11h2q.425 0 .713.287Q5 11.575 5 12t-.287.712Q4.425 13 4 13Zm2.225 6.775q-.275-.275-.275-.7 0-.425.275-.7L5.65 16.95q.275-.275.688-.275.412 0 .712.275.3.3.3.713 0 .412-.3.712l-1.4 1.4q-.3.3-.725.3t-.7-.3ZM12 18q-2.5 0-4.25-1.75T6 12q0-2.5 1.75-4.25T12 6q2.5 0 4.25 1.75T18 12q0 2.5-1.75 4.25T12 18Zm0-2q1.65 0 2.825-1.175Q16 13.65 16 12q0-1.65-1.175-2.825Q13.65 8 12 8q-1.65 0-2.825 1.175Q8 10.35 8 12q0 1.65 1.175 2.825Q10.35 16 12 16Z"
                /></svg
              >
            </div>
            <div
              class="d-flex h-100 align-items-center justify-content-center"
              slot="checkedIcon"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                ><path
                  d="M12 3h.393a7.5 7.5 0 0 0 7.92 12.446A9 9 0 1 1 12 2.992z"
                  fill="none"
                  stroke="#ffffff"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                /></svg
              >
            </div>
          </Switch>
        </div>
      </div>
    </div>
  </nav>
</main>

<style>
  .box-wallet {
    display: flex;
  }
  .header {
    background-color: #f8f9fa;
    color: #212529;
  }
  :global(body.dark-mode) .header {
    background-color: #555555;
    color: #f8f9fa;
  }
  .wallet-img {
    height: 40px;
    width: 40px;
    border: 2px solid #000;
    padding: 4px;
    border-radius: 11px;
    position: absolute;
    left: -34px;
    background-color: #f8f9fa;
  }
  .wallet-text {
    /* background-color: darkgrey !important; */
  }
</style>
